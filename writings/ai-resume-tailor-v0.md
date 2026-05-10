# Building AI Resume Tailor — v0 build notes

*A short build log on shipping the first AI feature for my portfolio: paste a resume + a job description, get back tailored bullet rewrites, ATS keyword gaps, and likely interview questions. End-to-end on free tools.*

---

## What it is

[AI Resume Tailor](https://github.com/rekha0suthar/ai-resume-tailor) (live link coming once Vercel deploy lands).

Two textareas. One button. Behind the button: a Vercel serverless function that calls Groq's Llama 3.3 70B in JSON mode and returns three things — a list of tailored bullet rewrites, a missing-keyword gap analysis, and 5 predicted interview questions with prep tips. Plus a 0–100 match score.

It's the same prompt-engineering, structured-output, "talk to an LLM and render the response cleanly" pattern that AI app companies are hiring for every day. So I built one.

## Stack — and why each piece

I picked everything by one rule: **it must be free, no credit card, with enough quota to actually use the app.**

- **Vite + React 18 + Tailwind CSS** for the frontend. Vite over CRA because it's faster, and CRA is unmaintained. Tailwind because shipping a tiny single-page app shouldn't need 600 lines of CSS.
- **Vercel Hobby tier** for hosting. The killer feature for this project: serverless functions live in the same repo as the frontend. Drop a file in `/api/tailor.js` and it becomes a routable endpoint. No second hosting account, no CORS dance.
- **Groq Cloud** for inference. Free API key, no credit card, very fast inference (Llama 3.3 70B at ~300 tokens/sec). Their JSON mode forces the model to return parseable JSON, which removes a whole category of "the model added markdown around its answer" bugs.

The single most important architecture decision: **the API key never leaves the server.** Browsers can read every script you ship, so an API call that includes the Groq key client-side is a key any visitor can extract. The serverless function is the firewall — the browser POSTs `/api/tailor`, the function reads the key from `process.env.GROQ_API_KEY`, talks to Groq, and pipes back only the result.

## The prompt that does the work

Most of the value is in the system prompt. Three rules I leaned on:

**1. Force structured output.** The system prompt declares the exact JSON shape and Groq's `response_format: { type: 'json_object' }` is the enforcer. Without that, Llama would occasionally wrap the answer in markdown — `"Here's your tailored resume: { … }"` — and `JSON.parse` would explode.

**2. Be honest, don't invent.** A career coach who fabricates skills is worse than no coach. The system prompt explicitly says: *"Be honest. If the resume is weak for the role, say so via the score and the missing-keywords section — do NOT invent skills the candidate doesn't have."* Without that line, the model is too eager to please and quietly upgrades "I built a CRUD app" to "Led architecture for distributed systems."

**3. Ground every output in something concrete.** Each tailored bullet ships with both the original line and the rewrite, so the user can see the diff. Each missing keyword ships with an actionable suggestion ("Add a 1-line bullet about your school project on X" instead of "Learn TypeScript"). Each interview question ships with what-they-want and a prep-tip. Specificity beats vagueness, every time.

## Cost at this scale

Free, currently. Groq's Llama 3.3 70B free tier gives you ~14,400 requests/day with a per-minute rate limit. Each tailor request uses ~5,000 tokens in + ~1,500 out, well under any single limit. Vercel Hobby gives 100k function invocations and 100 GB-hours of compute per month. For a portfolio piece that maybe handles 50 requests/day from recruiters poking at it, both tiers are wildly oversized.

## What's still v0

- **No streaming yet.** The user clicks Tailor, sees a spinner for ~5 seconds, then the full result lands. v1 should stream — partial output as it generates, even if just the bullets section first. SSE on the function side, `ReadableStream` reader on the client. That's the next iteration.
- **No PDF upload.** Right now it's paste-only. Most people have their resume as a PDF, not as plain text. Adding `pdfjs-dist` to extract text client-side is maybe an hour's work.
- **No history.** Run it twice on different JDs and the previous result is gone. `localStorage` is enough for a v1 — no backend needed. Shareable result links would require an actual database; not worth it yet.
- **No streaming of the *thinking*.** Llama doesn't expose chain-of-thought, so we don't get to show "thinking..." with intermediate steps. A streaming UI does the same job perceptually, which is why v1 is streaming-first.

## The trickiest bug so far

Llama 3.3, even in JSON mode, occasionally returns valid JSON with the *wrong shape* — say, `tailored_bullets` as a string of bullets joined with newlines instead of an array of objects. JSON mode protects you from "is this parseable JSON" but not "is this the JSON I asked for."

Two defenses, in order of cost:

1. **Be explicit in the system prompt.** I literally pasted the JSON skeleton with empty strings inside (`{ "tailored_bullets": [{"original": "", "rewrite": "", "why": ""}], … }`) and told the model "return ONLY valid JSON matching this exact shape." That alone fixed ~95% of drift.
2. **Validate on the client.** The React app accesses `result?.tailored_bullets` with optional chaining and `[]` fallback for every list. If the model returns junk, the UI just shows fewer panels — no white-screen crash. Cheap, correct, ships.

A future v2 would replace the prompt-engineering defence with a Zod schema or a JSON Schema constrained-decoding layer. For v0, prompt + optional chaining is enough.

## Repo

[github.com/rekha0suthar/ai-resume-tailor](https://github.com/rekha0suthar/ai-resume-tailor) · MIT licensed. Fork it, deploy your own. The whole thing is ~600 lines including the README.

---

*Next up: streaming the response (v1) and PDF upload (v2). I'll post the streaming UX write-up after v1 ships — designing "AI is thinking" loading states is its own discipline.*
