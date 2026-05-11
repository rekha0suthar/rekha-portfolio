# Building AI Resume Tailor — v0 build notes

Two textareas. One button. That's the whole product surface.

Behind the button is a Vercel serverless function that calls Groq's Llama 3.3 70B. The model sends back four things: tailored rewrites of bullets from the resume, ATS keyword gaps from the job description, five interview questions a hiring manager might actually ask, and an honest 0–100 match score.

It's the same pattern most AI app companies hire for these days. Prompt design, structured output, render the response cleanly. So I built one.

Live: [ai-resume-tailor-ruby.vercel.app](https://ai-resume-tailor-ruby.vercel.app/). Repo: [github.com/rekha0suthar/ai-resume-tailor](https://github.com/rekha0suthar/ai-resume-tailor).

## Before I wrote a line of code

I keep seeing a failure pattern in junior projects. Someone sees a cool API, opens an editor, starts typing, and three days later they have a half-built thing they can't ship. I tried to avoid that this time.

So I spent the first thirty minutes scoping, not coding.

What's the smallest version that's actually useful? Two inputs, four outputs. No PDF upload, no streaming, no auth, no database. Anything more is v1+.

Who is it for? Recruiters who land on my portfolio for thirty seconds. They need a working AI demo to play with, not an account to create.

Where can it fail? API key leaks. Model returns garbage. Free tier rate-limits me. User pastes nothing. Each one needed an answer before I touched code.

What's the smallest deployment surface? One repo, one host, one environment variable. Vercel covered all three.

The biggest call was starting with "paste plain text" and not "upload PDF." PDF extraction is its own two-hour rabbit hole (text positioning, multi-column, scanned vs digital). Skipping it meant I shipped v0 in an afternoon. PDF support comes back in v2 with a clean dedicated codepath.

## Why this stack

I picked everything by one rule: free, no credit card, with real quota.

For the frontend I went with Vite plus React 18 instead of Create React App. CRA is unmaintained. Vite's HMR is instant and the bundle ships smaller. There's no defensible reason to pick CRA for a new project in 2026.

Tailwind for styling. It only ships the utilities I actually used. A single-page app shouldn't carry six hundred lines of hand-written CSS or a UI library I'll end up fighting when the design shifts.

Vercel for hosting. The killer feature for this project: drop a file in `/api/tailor.js` and it becomes a routable serverless endpoint in the same repo as the frontend. No second hosting account, no CORS dance, one deploy pipeline.

For the LLM I picked Groq over Anthropic and OpenAI. Three reasons.

The first is the free API key. No credit card needed. Both Anthropic and OpenAI require a paid account before they'll let you call the API for anything past trial credits. That's a hard blocker for a recruiter-facing demo I want to keep alive long-term without paying out of pocket.

The second is speed. Groq's hardware runs Llama 3 at around 300 tokens per second. Even without explicit streaming in v0, responses come back in roughly 1.5 seconds.

The third is JSON mode. Groq supports OpenAI's `response_format: { type: 'json_object' }` parameter, which forces the model to return parseable JSON. That alone removes a whole category of "model added markdown around its answer" bugs.

Llama 3.3 70B specifically, not the smaller 8B. The 8B costs less but drifts more on JSON structure. The 70B nails the schema almost every time. Quality wins.

The single most important architecture decision was making sure the API key never leaves the server. Browsers can read every script you ship, so an API call that includes the Groq key client-side is a key any visitor can extract and run up your free quota with. The serverless function is the firewall.

## What the architecture looks like

```
Browser              Vercel Edge                 Groq Cloud
-------              -----------                 ----------
React UI ─ POST /api/tailor ─▶  api/tailor.js  ──▶  Llama 3.3 70B
                                                    (JSON response)
      ◀──────── tailored JSON ────────────────────────┘
```

A few properties worth pointing out.

It's stateless. No database, no session, no PII. The resume and JD never leave the request lifecycle. Privacy and scalability for free.

Input is bounded. Resume capped at 8,000 characters, JD at 6,000. Protects the model context and keeps cost predictable. Beyond the cap, input gets truncated with a `[truncated]` marker.

There's a single trust boundary. One place handles the API key. The browser is treated as fully untrusted.

Failure is loud. Empty body, HTML response, non-JSON content, network error — each one surfaces its own actionable error message. The very first version of the app threw "Unexpected end of JSON input" and I spent an hour debugging before I realized the dev server wasn't even routing `/api/*`. Lesson there: error messages worth writing usually save more time than they cost to write.

## The prompt that does the work

Most of the value lives in the system prompt. Three rules I leaned on.

Force structured output. The system prompt declares the exact JSON shape with empty-string placeholders for clarity, and Groq's `response_format` enforces it.

Don't let the model invent. A career coach who fabricates skills is worse than no coach. So the prompt explicitly says: "Be honest. Do NOT invent skills the candidate doesn't have." Without that line, the model is too eager to please and quietly upgrades "I built a CRUD app" to "Led architecture for distributed systems."

Ground every output. Each tailored bullet ships with the original line and a short reason. Each missing keyword comes with an actionable suggestion (like "Add a 1-line bullet about your school project on X") instead of a vague one ("Learn TypeScript"). Each interview question comes with what the interviewer is probing for, plus a prep tip. Specificity beats vagueness, every time.

## The bug that surprised me

Llama 3.3, even in JSON mode, occasionally returns valid JSON with the wrong shape. Once I saw `tailored_bullets` come back as a single string of newline-joined bullets instead of an array of objects. JSON mode protects against "is this parseable" but not "is this the shape I asked for."

The fix turned out to be layered.

The big one was pasting the JSON skeleton into the prompt. I literally wrote out the empty shape inside the system prompt and said "return ONLY valid JSON matching this exact shape." That handled roughly 95% of the drift on its own.

The safety net is optional chaining on the client. The React side accesses `result?.tailored_bullets` with a `[]` fallback for every list. If the model returns junk, the UI shows fewer panels instead of crashing.

A future v2 will replace the prompt-side defence with a Zod schema and proper validation. For v0, this is enough.

## What's coming next

v0 works but it's a developer's tool. Paste text, get text. The plan is to evolve it into something an actual job seeker would use end to end.

v1 adds streaming. Output appears live as Llama generates it. That gives a perceived speed bump and teaches streaming UX, which is honestly the hardest part of AI app frontend.

v2 brings PDF upload with client-side extraction via pdfjs-dist. Most people have a PDF resume, not plain text. Removing the copy-paste step is a huge friction drop.

v3 is the big one. Template-based resume generation with one-click PDF download. You pick a template, the app builds a fully formatted resume from your content plus the AI's suggestions, you download it. v3 is where this stops being a dev tool and becomes a real product.

Each ship gets its own write-up. The point isn't shipping v3 fast. It's shipping each version visibly, with the thinking behind it on record.

## What I'd talk about in an interview

Some questions LLM-app interviewers actually ask, mapped to what this project let me live through.

"How do you keep an API key safe in a web app?" Server-side env var, no key in the client bundle, serverless function as the trust boundary.

"How do you get reliable JSON out of an LLM?" JSON mode, plus an explicit schema in the prompt, plus optional chaining on the client. Defence in depth.

"How do you handle a malformed model response?" Read the response as text first. Branch on shape: empty body, HTML body, parseable JSON. Each branch surfaces a different, actionable error. No silent failures.

"How do you scope an AI feature?" Start with the smallest version that's actually useful, ship that, then roadmap the rest. Resist scope creep.

"What's your stance on hallucination in production?" Bound the model with honesty constraints in the system prompt, force structured output, ground every claim in the input. If you give the model room to invent, it will.

"Why Groq?" Free tier with real quota, fast inference (LPU instead of GPU), JSON mode, no card required. The decision matters more than it sounds when you're shipping a side project that needs to stay live.

The point of building this isn't just shipping the app. It's that I've now lived through every one of these decisions, so the answers in an interview come from actual experience and not from a blog post I read.

## Cost

Zero per month, right now. Groq's free tier gives around 14,400 requests per day. Each tailor request uses roughly 5,000 input tokens plus 1,500 output, well under any single limit. Vercel Hobby's 100k function invocations and 100 GB-hours per month is more than enough.

## Repo

[github.com/rekha0suthar/ai-resume-tailor](https://github.com/rekha0suthar/ai-resume-tailor). MIT licensed. Fork it, deploy your own.

Next up: the v1 streaming build note. After that, v2's PDF extraction lessons.
