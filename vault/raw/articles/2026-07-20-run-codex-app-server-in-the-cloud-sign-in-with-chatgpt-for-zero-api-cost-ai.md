---
title: Run Codex app-server in the cloud + 'Sign in with ChatGPT' for zero API-cost AI
kind: paste
captured_at: 2026-07-20 13:03
tags: [openai, codex, chatgpt, oauth, architecture, zero-cost-ai]
source_url: https://x.com/BenjaminBadejo/status/2079026062391189666?s=20
status: inbox
---

# Run Codex app-server in the cloud + 'Sign in with ChatGPT' for zero API-cost AI

X post — Ben Badejo (@BenjaminBadejo), Jul 20 2026, 50.9K views

"FYI: you can run Codex app-server in the cloud, for example with Render, and then slap a Sign in with ChatGPT button into your product. Boom, done, AI injected throughout your product, and users pay for it with their existing ChatGPT/Codex flat-rate monthly subscription. No API costs for you. No API costs for them. No credential management for you besides their standard login to your platform. Clean and easy. You're welcome."

Key idea: An architecture pattern for shipping AI features without an API bill.
- Host the **Codex app-server** in the cloud (example host: Render).
- Add a **"Sign in with ChatGPT"** button to your product (OAuth-style login).
- Users authenticate with their existing ChatGPT/Codex flat-rate subscription.
- Your product proxies AI through that authenticated session — no per-token API cost to you or the user, no API-key/credential management beyond standard login.

Closely related to the LoginWithChatGPT sources already in the vault:
- src-2026-07-08-003 — demo app (device code playground)
- src-2026-07-08-004 — SDK product page
- src-2026-07-08-005 — GitHub monorepo (4 packages + agent skill)

This post describes the same OAuth-device-code / "login with ChatGPT" mechanism applied specifically to the Codex app-server, positioning it as a zero-API-cost way to embed AI.

Caveat (not stated in the post): depends on OpenAI's terms of service permitting proxying Codex through a third-party product; worth verifying before production use.
