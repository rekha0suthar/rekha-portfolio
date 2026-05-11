# Building AI Resume Tailor — v0 build notes

*A short build log on shipping the first AI feature for my portfolio. End-to-end on free tools. Why this stack, what I'd discuss in an interview, and what's coming next.*

🔗 **Live**: [ai-resume-tailor-ruby.vercel.app](https://ai-resume-tailor-ruby.vercel.app/) · **Repo**: [github.com/rekha0suthar/ai-resume-tailor](https://github.com/rekha0suthar/ai-resume-tailor)

---

## What it is

Two textareas. One button. Behind the button: a Vercel serverless function that calls Groq's Llama 3.3 70B in JSON mode and returns four things — tailored bullet rewrites, ATS keyword-gap analysis, 5 predicted interview questions with prep tips, and an honest 0–100 match score.

It's the same prompt-engineering, structured-output, *talk-to-an-LLM-and-render-the-response-cleanly* pattern that AI app companies hire for every day. So I built one.

## Before I wrote a line of code

Almost every junior project failure I've seen starts the same way: someone sees a cool API, opens an editor, and starts typing. Three days later they have a half-built thing they can't ship. I tried to do the opposite.

**The 30-minute scoping pass:**

- **What's the smallest version that's actually useful?** Two inputs, one output. Match score, tailored bullets, keyword gaps, interview questions — that's it. No PDF upload, no streaming, no auth, no DB. Anything else is v1+.
- **Who's it for?** Recruiters who land on my portfolio in 30 seconds. They need to play with a working AI demo, not configure an account.
- **Where can it fail?** API key leaks, model returning garbage, free-tier rate limits, the user pasting nothing. Each one needed an answer before code.
- **What's the smallest deployment surface?** One repo, one host, one env var. Vercel covered all three.

The biggest decision: **start with "paste plain text" not "upload PDF"**. PDF extraction is a 2-hour rabbit hole of its own (text positioning, multi-column, scanned vs digital). Skipping it meant I shipped v0 in an afternoon. PDF support comes in v2 with a clean dedicated codepath.

## Why this stack — explicit rationale

I picked everything by one rule: **must be free, no credit card, with enough quota to actually use the app.**

**Vite + React 18** instead of Create React App. CRA is unmaintained; Vite's HMR is instant; bundle ships ~30% smaller. For a new app in 2026 there's no defensible reason to choose CRA.

**Tailwind CSS** for styling. Zero-runtime — Tailwind only ships the utilities I actually used. A single-page app shouldn't carry 600 lines of hand-written CSS or a UI library I'll fight when the design changes.

**Vercel** for hosting + serverless. The killer feature: drop a file in `/api/tailor.js` and it becomes a routable serverless endpoint *in the same repo* as the frontend. No second hosting account. No CORS dance.

**Groq over Anthropic or OpenAI** for inference. Three reasons:

1. **Free API key, no credit card.** Both Anthropic and OpenAI require a paid account before letting you call the API with anything but tiny trial credits. That's a hard blocker for a recruiter-facing demo I want to keep alive long-term.
2. **Speed.** Groq's LPU hardware runs Llama 3 at ~300 tokens/sec. Even without explicit streaming in v0, responses land in ~1.5 seconds.
3. **JSON mode.** Groq supports OpenAI's `response_format: { type: 'json_object' }` — it forces the model to return parseable JSON, killing a whole category of "model added markdown around its answer" bugs.

**Llama 3.3 70B specifically.** The smaller 8B models cost less but drift more on JSON structure; the 70B nails the schema almost every time. Quality > a few extra ms.

The single most important architecture decision: **the API key never leaves the server.** Browsers can read every script you ship, so an API call that includes the Groq key client-side is a key any visitor can extract and run up your free quota with. The serverless function is the firewall.

## System design at a glance

```
Browser              Vercel Edge                 Groq Cloud
-------              -----------                 ----------
React UI ─ POST /api/tailor ─▶  api/tailor.js  ──▶  Llama 3.3 70B
                                                    (JSON response)
      ◀──────── tailored JSON ────────────────────────┘
```

Design properties worth calling out:

- **Stateless.** No database, no session, no PII storage. Resume and JD never leave the request lifecycle. Privacy + scalability for free.
- **Bounded input.** Resume capped at 8,000 chars, JD at 6,000 — protects model context, keeps cost predictable. Beyond the cap, input is truncated with a `[truncated]` marker.
- **Single trust boundary.** One place handles the API key (the serverless function). The browser is treated as fully untrusted.
- **Graceful failure.** Empty body, HTML response, non-JSON, network error — each surfaces a distinct, actionable error message. The first version threw the famous `Unexpected end of JSON input` and I spent an hour debugging it before realising the dev server was the problem.

## The prompt that does the work

Most of the value lives in the system prompt. Three rules I leaned on:

**1. Force structured output.** The system prompt declares the exact JSON shape (with empty-string placeholders for clarity) and Groq's `response_format` enforces it.

**2. Be honest, don't invent.** A career coach who fabricates skills is worse than no coach. The system prompt explicitly says: *"Be honest. Do NOT invent skills the candidate doesn't have."* Without that line, the model is too eager to please and quietly upgrades "I built a CRUD app" to "Led architecture for distributed systems."

**3. Ground every output in something concrete.** Each tailored bullet ships with the original line + rewrite + why. Each missing keyword ships with an actionable suggestion. Each interview question ships with what-they-want and a prep-tip. Specificity beats vagueness, every time.

## The trickiest bug — JSON-shape drift

Llama 3.3, even in JSON mode, occasionally returns valid JSON with the *wrong shape* — say, `tailored_bullets` as a string of bullets joined with newlines instead of an array of objects. JSON mode protects against "is this parseable" but not "is this the shape I asked for."

Two defenses, in order of cost:

1. **Explicit JSON skeleton in the prompt.** I pasted the empty shape and told the model "return ONLY valid JSON matching this exact shape." Fixed ~95% of drift on its own.
2. **Optional chaining on the client.** The React app accesses `result?.tailored_bullets` with `[]` fallback for every list. If the model returns junk, the UI shows fewer panels — no white-screen crash.

A future v2 will replace prompt-engineering defence with a Zod schema. For v0, prompt + optional chaining is enough.

## Roadmap — from dev tool to real-world product

v0 works but it's a developer's tool: paste text, get text. The plan:

| Version | What ships | Why it matters |
|---|---|---|
| **v1** | **Streaming UI (SSE)** — output appears live as Llama generates | Perceived 10× speed bump; teaches streaming UX, the hardest part of AI app frontend |
| **v2** | **PDF upload + extraction** (`pdfjs-dist`, client-side) | Removes copy-paste friction. Most users have a PDF, not plain text. |
| **v3** | **Template-based resume generation + one-click PDF download** | The big one. Pick a template, the app builds a fully-formatted resume from your content + the AI suggestions, you download as PDF. v3 is where this stops being a dev tool and becomes a real product. |

Each ship comes with its own build note here. The point isn't shipping v3 fast — it's shipping each version visibly, with a write-up that shows the thinking.

## What I'd discuss in an interview

Talking points this project unlocks, mapped to questions LLM-app interviewers actually ask:

- *"How do you keep an API key safe in a web app?"* → server-side env var, no key in client bundle, serverless function as the trust boundary.
- *"How do you get reliable JSON out of an LLM?"* → JSON mode + explicit schema in the prompt + optional chaining on the client. Defence in depth.
- *"How do you handle a hostile or malformed model response?"* → response read as text first, three branches (empty, HTML, non-JSON) surface distinct errors. No silent failures.
- *"How do you scope an AI feature?"* → start with the smallest version that's actually useful. Resist scope creep. Roadmap the rest.
- *"What's your stance on hallucination in production?"* → bound the model with honesty constraints in the system prompt + structured output + ground every claim in input. If you give the model room to invent, it will.
- *"Why Groq over Claude or GPT?"* → free tier with real quota, fast inference (LPU vs GPU), JSON mode, no card required. Decisions like this one matter when shipping a side project that needs to stay live.

The point of building this isn't just shipping the app — it's living through every one of these decisions, so the answers in an interview are first-hand, not from a blog post.

## Cost at this scale

$0/month, currently. Groq's free tier gives ~14,400 requests/day. Each tailor request uses ~5,000 tokens in + ~1,500 out — well under any limit. Vercel Hobby's 100k function invocations and 100 GB-hours/month is more than enough.

## Repo

[github.com/rekha0suthar/ai-resume-tailor](https://github.com/rekha0suthar/ai-resume-tailor) · MIT licensed. Fork it, deploy your own.

---

*Next up: the v1 streaming build note ("Designing streaming UX in React (and when not to stream)"). After that, v2's PDF extraction lessons.*
