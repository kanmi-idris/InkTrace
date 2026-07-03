---
title: TaxHacker — Self-Hosted AI Accounting App by vas3k
kind: paste
captured_at: 2026-06-30 14:53
tags: [accounting, self-hosted, ai, receipts, invoices, taxes, ocr, nextjs, prisma]
source_url: https://github.com/vas3k/TaxHacker
status: inbox
---

# TaxHacker — Self-Hosted AI Accounting App by vas3k

vas3k/TaxHacker — Self-hosted AI accounting app for freelancers, indie-hackers, and small businesses. 6.3k stars, 1k forks, 11 releases. MIT license.

Stack: Next.js 15+, Prisma, PostgreSQL 17+, Ghostscript + GraphicsMagick for PDFs.

Features:

1. AI receipt/invoice analysis — snap a photo or upload PDF, AI extracts dates, amounts, vendors, line items. Supports item splitting, auto-categorization. Choose your LLM: OpenAI, Google Gemini, Mistral, or local (Ollama, LM Studio, vLLM, LocalAI).

2. Multi-currency with auto-conversion — 170+ fiat currencies + 14 cryptocurrencies (BTC, ETH, LTC, DOT). Uses historical exchange rates from transaction date.

3. Local LLM support — compatible with any OpenAI-compatible endpoint. Must be good at OCR.

4. Customizable categories, projects, and fields — unlimited custom fields (like extra Excel columns), AI-powered extraction with custom prompts, full-text search, bulk operations.

5. Custom LLM prompts — edit system prompts, per-field prompts, per-project extraction rules.

6. Data filtering and export — filter by date, category, project, custom fields. Export to CSV with attached docs.

7. Self-hosted — Docker compose setup, PostgreSQL, full data ownership.

Deployment: docker compose up with ghcr.io/vas3k/taxhacker:latest image. Environment variables for UPLOAD_PATH, DATABASE_URL, PORT, BASE_URL, SELF_HOSTED_MODE, DISABLE_SIGNUP, BETTER_AUTH_SECRET.

Dev setup: npm install, configure .env, npx prisma generate && npx prisma migrate dev, npm run dev.

Notable: author is looking for work (Berlin/remote Germany, CV linked). Project in early development.
