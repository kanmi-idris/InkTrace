---
title: check-if-email-exists — Email Verification Tool in Rust (8.9k Stars)
kind: paste
captured_at: 2026-06-28 06:24
tags: [rust, email, verification, open-source, validation]
source_url: https://github.com/reacherhq/check-if-email-exists
status: inbox
---

# check-if-email-exists — Email Verification Tool in Rust (8.9k Stars)

check-if-email-exists by Reacher HQ (Amaury) — check if an email address exists without sending any email. Written in Rust. 8.9k stars, 640 forks, 74 releases.

Live demo: https://reacher.email

3 ways to use:
1. HTTP backend via Docker: docker run -p 8080:8080 reacherhq/backend:latest → POST /v0/check_email with JSON body { to_email, proxy? }
2. CLI: download binary from releases page
3. Rust library: add check-if-email-exists = "0.9" to Cargo.toml

What it checks (JSON output):
- Email reachability (is_reachable: safe/risky/invalid/unknown)
- Syntax validation
- DNS/MX records validation
- Disposable email detection (DEA)
- SMTP server connectivity
- Email deliverability
- Mailbox disabled status
- Full inbox detection
- Catch-all address detection
- Role account validation
- Gravatar URL
- Have I Been Pwned breach check

Example POST: { "to_email": "someone@gmail.com" }
Example output shows Gmail disabled: is_reachable: "invalid", is_disabled: true

Dual license: AGPL-3.0 (open source) or commercial license at https://reacher.email/pricing.
Also offers SaaS at https://no2bounce.com/
Written in Rust (90.2%), with PostgreSQL (PL/pgSQL 5%), Shell, Dockerfile.
