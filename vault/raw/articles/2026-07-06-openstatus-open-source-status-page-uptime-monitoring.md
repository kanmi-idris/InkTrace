---
title: OpenStatus — Open Source Status Page & Uptime Monitoring
kind: paste
captured_at: 2026-07-06 21:53
tags: [status-page, uptime-monitoring, open-source, soc2, devops, mcp]
source_url: https://www.openstatus.dev/
status: inbox
---

# OpenStatus — Open Source Status Page & Uptime Monitoring

OpenStatus (openstatus.dev) — Open source status page + uptime monitoring platform. Bootstrapped 2-person team (Thibault Leouay & Max Kaske). Profitable and self-funded.

Key features:
- Branded status pages with custom domains, themes from Theme Store, password protection
- Uptime monitoring from 28 global regions across 3 cloud providers
- Monitors HTTP endpoints (REST, GraphQL), YAML-based monitor config with CI/CD
- Monitor behind firewalls via single Docker container
- Alerts: Slack, Discord, PagerDuty, email, webhooks
- Status reports, maintenance windows, subscriber notifications
- Subscription channels: email, RSS/Atom, SSH

SOC 2 compliance:
- SOC 2 CC2.3 criteria (incident communication with external parties)
- Timestamped status reports create audit-ready trail
- Maintenance windows, subscriber notifications, password protection

Tooling (one API key, four interfaces):
- CLI — manage from terminal
- API — typed HTTP endpoints with OpenAPI spec (ConnectRPC)
- MCP server — Claude Desktop, ChatGPT, Cursor integration (remote MCP at api.openstatus.dev/mcp)
- Terraform provider — version monitors as HCL

Self-hosting:
- Fully open source on GitHub (github.com/openstatushq/openstatus)
- 8.5MB Docker image
- Private monitoring locations behind firewall

Pricing: Free (1 monitor, 1 status page, 10m interval). Starter ~$30/mo, Pro ~$83/mo annual.
Used by: Cal.com, Documenso, WhiteBIT, Traefik, OpenPanel, Probo, Hanko, Superwall, StreamElements, Smplrspace, Passbolt, TwentyCRM.
