---
title: CodexMax Pricing — Codex-only Plans (Plus, Max 5x, Max 20x)
kind: paste
captured_at: 2026-06-28 04:36
tags: [pricing, codex, ai-coding]
source_url: https://www.codexmaximum.com/pricing
status: inbox
---

# CodexMax Pricing — Codex-only Plans (Plus, Max 5x, Max 20x)

CodexMax Pricing page: Codex-only plans for individual developers. Independent service (not affiliated with/endorsed by/sponsored by OpenAI).

Plans:
- Plus: $10/month (standard Plus $20/mo — half price). Codex-only. 5-hour + weekly usage display. For developers who want more Codex capacity without the full assistant bundle.
- Max 5x: $50/month (standard Max 5x $100/mo — half price). For heavier Codex users who run more coding sessions throughout the week.
- Max 20x: $100/month (standard Max 20x $200/mo — half price). For developers who want the largest individual Codex-only allocation.

Included in all plans: Codex-only plan access, 5-hour + weekly usage display, billing/account pages, security basics.
Not included: General ChatGPT assistant bundle, voice mode, team workspace tools, enterprise admin controls.

How it works: Choose a plan → checkout (pay now or activate later) → dashboard unlocks customer key → paste key into Codex config.toml provider block.

Setup config:
model = "gpt-5.1"
[model_providers.codexmaximum]
name = "CodexMax"
base_url = "https://api.codexmaxxing.baby/v1"
wire_api = "responses"
env_key = "CODEXMAX_API_KEY"
[profiles.codexmaximum]
model_provider = "codexmaximum"
model = "gpt-5.1"

Usage via: codex --profile codexmaximum

Sign-in: email-based one-time code (no password).

Pricing is final — no VAT/sales tax added at checkout.

FAQ:
- Teams: Phase 1 is individual only. Team plans later.
- Why Codex-only: built for developers who mainly want coding capacity and account controls.
- Plan limits follow fulfilled upstream plan.

Cancellation: request via support. Stops future billing after confirmation. No auto-refund for current period.
Refunds: final once checkout completed and capacity reserved. Exceptions only for duplicate payments, failed fulfillment, billing errors, or non-working customer keys. Request within 7 days via support.
No refunds for: unused time/quota, delayed activation, customer setup mistakes, change of mind, upstream outages, model changes, rate limits.

Account suspension for abuse, fraud, illegal activity, resale abuse, or policy violations. Chargebacks may result in suspension.

Contact: support@codexmaxxing.baby | Discord: https://discord.gg/m9PUfn6m
Terms: https://www.codexmaximum.com/terms
Privacy: https://www.codexmaximum.com/privacy
Refund/cancel: https://www.codexmaximum.com/refund-cancel

Legal: independent service, not affiliated with/endorsed by/sponsored by OpenAI.
