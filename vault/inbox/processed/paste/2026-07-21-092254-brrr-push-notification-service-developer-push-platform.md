---
title: brrr Push Notification Service — Developer Push Platform
kind: paste
captured_at: 2026-07-21 09:22
tags: [notifications, push, webhook, devtools, ci-cd, automation]
source_url: 
status: inbox
---

# brrr Push Notification Service — Developer Push Platform

# brrr — Push Notification Service for Developers

**Website**: brrr.now
**Type**: API-based push notification platform
**Pricing**: (via app)

## Overview
brrr is a push notification service that sends notifications from any system that can make an HTTP request. Designed for CLI tools, CI/CD pipelines, automations, and integrations.

## Integrations (all HTTP-based)
- **Claude** — Send pushes via Claude Code hooks (brrr-cli or direct webhook)
- **Codex** — Send pushes with brrr-cli or built-in notify integration
- **Copilot** — Send pushes from Copilot CLI with repo-local hooks
- **cURL** — Single curl command from terminal
- **GitHub Actions** — Simple curl step in workflow runs
- **Home Assistant** — Via rest_command integration
- **JavaScript** — Standard fetch API
- **n8n** — HTTP Request node
- **Python** — urllib.request
- **Apple Shortcuts** — Get contents of URL action
- **Zapier** — Webhooks by Zapier POST action

## Features
- **Focus filters** — filter criteria so only matching notifications break through during Focus
- **Critical alerts** — enable critical alerts in the app with `critical` interruption level
- **Recent notifications** — configurable on-device retention of recent pushes
- **Webhook secret rotation** — shared + device-specific webhook secrets
- **Infrastructure** — CloudKit for delivery, privacy-focused design

## Docs
- Webhook format and payload fields
- Delivery behavior
- Test notification payload generator
- Privacy policy at brrr.now/privacy-policy
- How it works at brrr.now/how-it-works
