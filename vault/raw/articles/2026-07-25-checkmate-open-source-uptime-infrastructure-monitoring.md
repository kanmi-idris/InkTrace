---
title: Checkmate - Open Source Uptime & Infrastructure Monitoring
kind: paste
captured_at: 2026-07-25 23:08
tags: []
source_url: 
status: inbox
---

# Checkmate - Open Source Uptime & Infrastructure Monitoring

https://github.com/bluewave-labs/Checkmate — Checkmate by bluewave-labs. AGPL-3.0. 10.4k stars, 1.1k forks, 9,639 commits. Self-hosted uptime and infrastructure monitoring tool.

Features: uptime monitoring, Docker, Ping, SSL, Port, Game server checks, page speed monitoring, infrastructure monitoring (CPU/RAM/disk/temp via Capture agent in Go), incidents, status pages (4 themes), scheduled maintenance, JSON query monitoring.

Notifications: Email, Webhooks, Discord, Slack, PagerDuty, Matrix, Microsoft Teams, Telegram, Pushover, Twilio (SMS).

Monitor lifecycle: check → store result → evaluate threshold → state change (initializing/up/down/breached) → incident create/resolve → notifications.

Tech stack: React + MUI (frontend), Node.js (backend), MongoDB, Recharts. Deployable via Docker Compose, Kubernetes/Helm, Coolify, Elestio, PikaPods. Capture agent companion repo for remote server metrics.

Performance: stress-tested 1000+ monitors. Small memory footprint (~73MB for 323 monitors/min). Multi-language: English, Arabic, Chinese, Czech, Finnish, French, German, Japanese, Russian, Spanish, Thai, Turkish, Ukrainian, Vietnamese.

Team: Alex (lead), Gorkem, Aryaman, Mert, Karen at Bluewave Labs. 90+ contributors.

Demo: https://demo.checkmate.so/
Docs: https://checkmate.so/docs

Topics: uptime, infrastructure-monitoring, server-monitoring, incident, statuspage, hacktoberfest.
