---
title: SendLib Website - Transactional Email API via Gmail OAuth
kind: paste
captured_at: 2026-07-25 19:57
tags: []
source_url: 
status: inbox
---

# SendLib Website - Transactional Email API via Gmail OAuth

https://sendlib.samueltuoyo.com/ — SendLib website. Transactional email API for developers. Send emails via connected Google account (OAuth 2.0) instead of SMTP. Bypasses port 25/465/587 blocks on cloud hosts (Railway, Render, etc.).

How it works: uses gmail.send OAuth scope. No password storage, AES-256 encrypted tokens, revocable. Emails sent through Google's infrastructure → inbox delivery.

Pricing:
- Free: up to 10 Gmail accounts, 500 emails/day per account (2,000/day for Google Workspace), 15 API keys, 60 req/min, 2MB HTML body, 10 attachments/25MB total, 50 recipients per field, 7-day analytics
- Pro: coming soon, pay-as-you-go credits

Features: zero DNS setup (no SPF/DKIM/MX), simple POST API, OAuth2 secured, custom domain via Google Workspace. Supports CC/BCC/attachments/Reply-To.

API: POST https://sendlib.samueltuoyo.com/api/send with Bearer token + JSON body (from, to, subject, html)

Compared to: Resend/Mailgun/SendGrid free tiers — higher daily limits, no domain verification needed.

Previous source: src-2026-07-24-... (GitHub repo opencoredev/sendlib). This is the production service.
