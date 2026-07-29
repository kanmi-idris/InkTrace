---
title: Passmark — AI browser regression testing for Playwright
kind: paste
captured_at: 2026-07-20 14:44
tags: [testing, qa, e2e, playwright, ai, regression, browser, automation]
source_url: https://github.com/bug0inc/passmark
status: inbox
---

# Passmark — AI browser regression testing for Playwright

# Passmark — open-source Playwright library for AI browser regression testing

Source: https://github.com/bug0inc/passmark (README)
Site: https://passmark.dev · npm: `passmark`
License: FSL-1.1-Apache-2.0 (Functional Source License 1.1, with Apache 2.0 future license)
Author: bug0inc (@bug0inc). Repo: 1.2k★, 183 forks, TypeScript 99.7%.

## What it is
Open-source Playwright library for AI regression testing. Uses AI models to execute natural-language browser steps via Playwright, with intelligent caching, auto-healing, and multi-model assertion verification. Tests stay stable without updating prompts/retraining models.

## Core API
- `runSteps({ page, userFlow, steps[], assertions[], test, expect })` — sequence of NL steps with caching + auto-heal.
- `runUserFlow({ page, userFlow, steps, effort })` — single AI agent call for exploratory testing. `effort: "low"` uses gemini-3-flash; `"high"` uses gemini-3.1-pro-preview.
- `assert({ page, assertion, expect })` — multi-model consensus (Claude + Gemini; arbiter on disagreement).

## Modes
- Default: ARIA accessibility snapshots.
- CUA mode (`mode: "cua"`): visual screenshot-driven via OpenAI computer-use agent (gpt-5.5 + built-in `computer` tool, locked/config-fixed). Requires `OPENAI_API_KEY` + direct OpenAI (no gateway). Redis caching skipped (coordinates not portable across viewports). Per-step overrides allow hybrid runs (snapshot steps + CUA steps in one call).

## Key features
- **Multi-model assertion engine**: Claude + Gemini consensus; configurable arbiter (default `consult-arbiter-on-disagreement`; alt `fail-on-disagreement` to surface flakiness).
- **Video assertions**: `video: true` records entire step run to `.webm`, uploads to Gemini Files API (only Gemini accepts video; needs `GOOGLE_GENERATIVE_AI_API_KEY` even via gateway). Good for ephemeral UI (toasts, snackbars).
- **Redis step caching**: cache-first execution keyed by `userFlow` + `step.description`; self-healing on failure; bypass via `bypassCache`. Only single-step AI actions cached (multi-step still explored).
- **AI gateway support**: Vercel AI Gateway, OpenRouter, Cloudflare AI Gateway, or direct provider SDKs. Cloudflare is a proxy (needs upstream keys too).
- **Dynamic placeholders**: `{{run.*}}`, `{{global.*}}`, `{{data.*}}`, `{{email.*}}`.
- **Email extraction**: pluggable provider (built-in `emailsink` for disposable emails).
- **AI data extraction** + **smart wait conditions** (AI-evaluated, exponential backoff — no rigid selectors).
- **Secure script runner**: AST-validated Playwright scripts with allowlisted API surface.
- **Telemetry**: optional Axiom + OpenTelemetry via env vars.

## Models (default slots, all configurable)
stepExecution: google/gemini-3-flash · userFlowLow: gemini-3-flash-preview · userFlowHigh: gemini-3.1-pro-preview · assertionPrimary: anthropic/claude-4.5-haiku · assertionSecondary: gemini-3-flash · assertionArbiter: gemini-3.1-pro-preview · utility: gemini-2.5-flash · cua: gpt-5.5.

## Relevance
AI-native E2E testing — complements our other testing/QA sources (Sniffler `src-2026-07-08-010`, Expo testing, agent-device bug evidence `src-2026-06-28-010/011`). Note FSL-1.1 license: source-available, not OSI open-source; becomes Apache-2.0 after a delay. Related to browser-automation theme from the HAR-to-client trick (`src-2026-07-20-014`).
