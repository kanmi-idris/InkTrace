---
title: LoginWithChatGPT SDK — OAuth Device Login for ChatGPT Accounts
kind: paste
captured_at: 2026-07-08 20:28
tags: [oauth, openai, chatgpt, device-code-flow, authentication, vercel, sdk, login-with-chatgpt]
source_url: 
status: inbox
---

# LoginWithChatGPT SDK — OAuth Device Login for ChatGPT Accounts

## LoginWithChatGPT SDK — OAuth Device Login for ChatGPT Accounts

Source: https://log-in-chatgpt.vercel.app/ (product page by @opencoredev)

### What it is
SDK that lets users bring their own ChatGPT subscription to third-party apps. Uses OAuth 2.0 Device Authorization flow. No API key needed from the developer — users authenticate with their own ChatGPT account.

### Packages
- `@opencoredev/loginwithchatgpt-server` — backend handler
- `@opencoredev/loginwithchatgpt-react` — React UI components
- `@opencoredev/loginwithchatgpt-ai` — Vercel AI SDK integration

### How It Works (4-step flow)
1. **Browser starts login** — widget shows consent step, then requests device code (POST /api/chatgpt/login)
2. **User authorizes on OpenAI** — enters short code on auth.openai.com/codex/device (no redirect URL, no localhost listener)
3. **Server stores tokens** — polling advances one step per request; tokens are encrypted into session store (GET /api/chatgpt/status)
4. **AI SDK streams through proxy** — streamText() hits proxy which injects credentials and streams back (POST /api/chatgpt/responses)

### Server-side example (Bun)
```ts
const auth = createChatGPTHandler({
  secret: process.env.LWC_SECRET,
});
Bun.serve({
  routes: {
    "/api/chatgpt/*": (req) => auth.handler(req),
  },
});
```

### Security Model
- Browser never holds a token — only sees HttpOnly session cookie + opaque signed ID
- User code shown once during device authorization
- Public profile: email, name, plan from id token
- Streamed text relayed by proxy route
- Server keeps access & refresh tokens, AES-GCM encrypted in session store
- Token refresh: automatic, deduplicated, 60s early margin
- Rate limits: 30 req/min per session by default
- Origin checks: cross-site requests can't ride the cookie
- Consent is mandatory, guardrails on by default

### Key Lines
- "Let users bring their own ChatGPT to your app."
- "Server-owned login, encrypted sessions, and Vercel AI SDK streaming on the user's plan — no API key from you, no tokens in the browser."
- "The device-code flow needs no redirect URL, so it works the same in serverless, containers, and local dev."
- "Signed-in apps can spend the user's plan, so consent is mandatory and guardrails are on by default."

### Docs sections
- Getting Started: Introduction, Quickstart, For AI agents
- Concepts: How it works, Sessions & tokens, Response proxy, Security model
- Guides: Build a chat page, Custom sign-in UI, Cross-origin setup, Production checklist
- Reference: Server handler, HTTP routes, AI SDK providers, Error codes

### Related Source
- src-2026-07-08-003 (LoginWithChatGPT demo app at login-with-chatgpt-demo.vercel.app)
- SDK uses @vercel/oidc v3.2.0 for OpenID Connect / device authorization
