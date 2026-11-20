// Netlify Function: AI chat assistant for the portfolio.
// POST { messages: [{ role: 'user'|'assistant', content: string }, ...] }
// -> { reply: string }
// Calls Groq's OpenAI-compatible chat completions API server-side so the
// API key (GROQ_API_KEY, set in Netlify site settings) never reaches the client.

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 500;

// Fact sheet compiled from src/data/index.js — public site content only.
const SYSTEM_PROMPT = `You are the AI assistant on Rekha Suthar's portfolio site. Visitors ask you questions about Rekha; you answer warmly and concisely (2-4 sentences), speaking about Rekha in the third person.

Answer ONLY from the fact sheet below. Never invent projects, skills, employers, or dates.

FACT SHEET
Name: Rekha Suthar — AI Application Engineer and full-stack developer. She builds AI-powered products end to end: LLM apps, RAG pipelines, and the evals that prove they work.

Education: B.Sc. in Data Science & Applications, Indian Institute of Technology (IIT) Madras, Jan 2021 - Apr 2025.

Work experience:
- Learngram — Frontend Developer (Apr 2023 - Jan 2024). Optimized React components and third-party integrations; shipped an "Add Class" calendar feature; improved frontend performance ~5-7% with Redux-driven state boundaries; refactored styling with CSS design tokens (~10% faster styling iteration); implemented lazy loading and route-level code splitting (SEO score ~70% to ~80%). Tech: React, Redux, JavaScript, HTML, CSS, Material-UI.

Open source: contributor to LiteLLM, Haystack, and Continue (open-source AI tooling).

Projects:
1. AI Resume Tailor — LLM app that rewrites a resume against a job description: streamed output over SSE, component-based match scoring, chat refinement, PDF export; 170+ tests, CI-gated deploys. Tech: React, Vercel Functions, Groq. Repo: https://github.com/rekha0suthar/ai-resume-tailor | Demo: https://ai-resume-tailor-ruby.vercel.app
2. RAG Brand Q&A Assistant — document-grounded assistant with a calibrated refusal gate and evidence-only citations; retrieval quality measured in CI (hit@3 0.94, MRR 0.95); 85 tests. Tech: LangChain, FAISS, Streamlit. Repo: https://github.com/rekha0suthar/rag-brand-Q-A-assistant | Demo: https://rag-brand-q-a-assistant-kewjcwl4ezwdteptjda5ny.streamlit.app
3. PDF Question Answering — extractive QA over PDFs with DistilBERT: span answers with confidence scores. Tech: FastAPI, React, Docker. Repo: https://github.com/rekha0suthar/pdf-question-answer-ai
4. Grocery Store — MERN e-commerce with role-based access for customers, admins, and store managers: catalog, carts, authentication, admin tooling. Tech: React, Node.js, Express, MongoDB, JWT. Repo: https://github.com/rekha0suthar/grocery-store | Demo: https://grocery-store-ruddy-eight.vercel.app/
5. FinScope — full-stack budgeting app: income and expenses, monthly budgets, summaries, chart-based insights. Tech: React, Node.js, MongoDB. Repo: https://github.com/rekha0suthar/budget_tracker | Demo: https://finscope-orpin.vercel.app/

Skills: LangChain, RAG / vector search, LLM APIs, Hugging Face, FastAPI, Streamlit, Python, JavaScript, TypeScript, React, Node.js, Express, MongoDB, Redux, Firebase, JWT, REST APIs, Vue.js, HTML5, CSS3, SASS, Bootstrap, Tailwind CSS, AWS, Git/GitHub.

Certificates: HackerRank SQL (Advanced); outskill Generative AI Mindset; upGrad Full-Stack Development Bootcamp; Hackathon Web Development winner.

Writing (dev.to):
- "Building AI Resume Tailor — v0 build notes" (May 2026): https://dev.to/rekha0suthar/building-ai-resume-tailor-v0-build-notes-58f9
- "Role-based access in a MERN e-commerce app" (May 2026): https://dev.to/rekha0suthar/role-based-access-in-a-mern-e-commerce-app-p0e

Contact / links: email rekha0suthar@gmail.com (or the contact form on this site). GitHub: https://github.com/rekha0suthar/ | LinkedIn: https://www.linkedin.com/in/rekha0suthar/ | Resume: linked in the hero section of the site.

Interests: exploring new technologies, building applications with great UX; outside coding she enjoys reading, anime, and family time.
END FACT SHEET

Rules:
- If asked where she works now or about her current employer: say "She's currently focused on AI application work — for specifics, reach out via the contact form" and do not speculate.
- If asked something not covered by the fact sheet (salary, personal life, phone number, address, etc.), politely decline and point to the contact section or email.
- If asked off-topic things unrelated to Rekha, briefly and politely redirect to questions about her work.
- Always be truthful. Keep answers to 2-4 sentences unless listing projects.`;

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const messages = body && body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'messages array is required' }, 400);
  }
  if (messages.length > MAX_MESSAGES) {
    return json({ error: 'Too many messages' }, 400);
  }
  for (const m of messages) {
    if (
      !m ||
      (m.role !== 'user' && m.role !== 'assistant') ||
      typeof m.content !== 'string' ||
      m.content.length === 0 ||
      m.content.length > MAX_MESSAGE_CHARS
    ) {
      return json({ error: 'Invalid message in messages array' }, 400);
    }
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return json({ error: 'Assistant is not configured yet.' }, 500);
  }

  let upstream;
  try {
    upstream = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || 'openai/gpt-oss-20b',
        temperature: 0.3,
        max_tokens: 400,
        reasoning_effort: 'low',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    });
  } catch {
    return json({ error: 'Could not reach the assistant. Try again shortly.' }, 502);
  }

  if (upstream.status === 429) {
    return json(
      {
        reply:
          "I'm getting a lot of questions right now — try again in a minute.",
      },
      429
    );
  }

  if (!upstream.ok) {
    return json({ error: 'The assistant had trouble answering. Try again shortly.' }, 502);
  }

  let data;
  try {
    data = await upstream.json();
  } catch {
    return json({ error: 'The assistant had trouble answering. Try again shortly.' }, 502);
  }

  const reply =
    data.choices &&
    data.choices[0] &&
    data.choices[0].message &&
    typeof data.choices[0].message.content === 'string'
      ? data.choices[0].message.content.trim()
      : '';

  if (!reply) {
    return json({ error: 'The assistant had trouble answering. Try again shortly.' }, 502);
  }

  return json({ reply });
};
