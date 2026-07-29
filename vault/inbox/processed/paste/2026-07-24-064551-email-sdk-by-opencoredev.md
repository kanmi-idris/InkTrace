---
title: Email SDK by opencoredev
kind: paste
captured_at: 2026-07-24 06:45
tags: []
source_url: 
status: inbox
---

# Email SDK by opencoredev

GitHub - opencoredev/email-sdk: One TypeScript SDK for transactional email across 23 adapters. Pick providers, add retries and fallback routes, catch unsupported fields before silent drops, keep every send observable.

Features:
- 22 provider API adapters + SMTP = 23 total (Resend, Postmark, SendGrid, AWS SES, Mailgun, Brevo, MailerSend, SparkPost, Mailchimp, Iterable, Loops, Plunk, Mailtrap, Cloudflare, Unosend, Scaleway, ZeptoMail, MailPace, Sequenzy, JetEmail, Lettermint, Primitive, SMTP) plus test adapters
- Typed adapter names with imports from subpaths (@opencoredev/email-sdk/resend etc.)
- Retries within adapter + fallback routes across adapters
- Fail-fast field-support checks before provider drops data
- Batch personalization with per-recipient variables + provider-side scheduled sends
- Observability hooks for logs, metrics, traces
- CLI: npx email-sdk doctor --adapter resend (discover, validate, dry-run)
- AGPL-3.0, 408 stars, built by @leodev

Install: npm install @opencoredev/email-sdk (ESM-only, Node 20+ or Bun 1.1+, server-side only)

Quickstart: import { createEmailClient } from "@opencoredev/email-sdk"; import { resend } from "@opencoredev/email-sdk/resend"; createEmailClient with adapter, call email.send({ from, to, subject, html })

v0 to v1 migration guide:
- Rename providers -> adapters, defaultProvider -> defaultAdapter, fallback -> fallback { adapters: [] }
- SendOptions -> EmailSendOptions, sendBatch -> sendMany (sequential, ordered, settled)
- recipientVariables -> sendPersonalized with recipients array
- retry: { retries: 2 } v0 -> retry: { maxAttempts: 3 } v1 (total attempts)
- v1 advances fallback on delivery: "not_sent", stops on delivery: "unknown" unless opt-in
- Idempotency moved from message field to send option
- Headers from object to [{ name, value }] array
- Errors: closed error-code union (validation_error, adapter_not_found, adapter_error, route_error, etc.)
- Compat subpath (@opencoredev/email-sdk/compat) for incremental migration
- Telemetry by default (opt out: EMAIL_SDK_TELEMETRY=0, DO_NOT_TRACK=1, telemetry: false)

Docs: https://email-sdk.dev/docs
