---
title: LoginWithChatGPT — OAuth 2.0 Device Code Flow for OpenAI (Vercel Demo)
kind: paste
captured_at: 2026-07-08 20:28
tags: [oauth, openai, chatgpt, device-code-flow, authentication, vercel, react, sdk]
source_url: 
status: inbox
---

# LoginWithChatGPT — OAuth 2.0 Device Code Flow for OpenAI (Vercel Demo)

## LoginWithChatGPT — OAuth 2.0 Device Authorization for OpenAI/ChatGPT

Source: https://login-with-chatgpt-demo.vercel.app/ (React SPA, ~2.3MB bundle)

### What it is
A React + Vercel AI SDK demo by Vercel that implements **OAuth 2.0 Device Authorization (Device Code Flow)** for OpenAI/ChatGPT. It allows users to send AI prompts through their own ChatGPT subscription via a backend proxy, without needing a developer API key.

The auth SDK uses `@vercel/oidc` (v3.2.0) for OpenID Connect / device authorization.

### Authentication Flow
1. **Session check** — GET /api/chatgpt/session on page load
2. **Consent** — Popup explaining what the app does with the ChatGPT account
3. **Login** — POST /api/chatgpt/login
4. **Device code returned** — receives userCode + verificationUrl
5. **Auto-copy code** to clipboard
6. **Popup opens** — window.open(verificationUrl, "login-with-chatgpt") pointing to OpenAI auth page
7. **Polling** — GET /api/chatgpt/status every 2500ms
8. **Authenticated** — popup closes, chat playground appears

### Auth States (from useLoginWithChatGPT hook)
- loading — initial session check
- unauthenticated — no active session
- connecting — login request sent, no response yet
- pending — waiting for user to enter code on OpenAI site (polling)
- authenticated — logged in
- expired — authorization code expired
- error — login failed

### Consent Dialog Copy
1. "This app can send AI requests on your own ChatGPT plan until you disconnect. Heavy or runaway use can exhaust your plan's usage limits."
2. "Your prompts and files pass through this app's server before reaching OpenAI. Only continue if you trust its developer."
3. "This app never sees your ChatGPT password. This SDK uses the session for model listing and AI requests."
4. "Disconnect anytime with the sign-out button in this app; that deletes its stored session."

### API Proxy Endpoints (all via /api/chatgpt/)
- GET /session — check current session
- POST /login — initiate device-code login
- POST /logout — end session
- GET /status — poll auth completion
- GET /models — list available models
- POST /responses — send chat requests (OpenAI-compatible API via proxy)

Custom HTTP headers: x-login-with-chatgpt-service-tier (auto|fast), x-login-with-chatgpt-reasoning-effort (low|medium|high)

### Playground (post-login)
- Model selector: GPT-5.5 (default), GPT-5.4, GPT-5.4 mini, GPT-5.3 Codex Spark
- Service tier: Auto / Fast toggle
- Thinking level: Low / Med / High toggle
- File attachments: up to 6 files, max 4MB each (images with preview)
- Streaming responses via Vercel AI SDK streamText()
- Transport: /api/chatgpt/responses (OpenAI-compatible responses API)

### SDK Dependencies
- @vercel/oidc v3.2.0 — OpenID Connect / device authorization
- ai (Vercel AI SDK) — streaming chat, tool calls, structured output
- openai — OpenAI-compatible API client (proxy target)
- react 19.2.7 — UI framework
- @phosphor-icons/react 2.1.10 — icons

### Key Lines
- "Demo only. Bad production pattern; use the SDK with your own safeguards."
- "Run prompts on your own ChatGPT plan. No developer API key."
- Package source: packages/react/dist/LoginWithChatGPT.js + useLoginWithChatGPT.js
- Docs: same URL + /docs/concepts/security
