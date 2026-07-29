---
title: OpenShip — self-hosted deployment platform with built-in CI/CD
kind: paste
captured_at: 2026-07-20 14:37
tags: [devops, deployment, self-hosted, ci-cd, infrastructure, cli, mcp, mail-server, platform]
source_url: https://github.com/oblien/openship
status: inbox
---

# OpenShip — self-hosted deployment platform with built-in CI/CD

# OpenShip — open-source, self-hostable deployment platform

Source: https://github.com/oblien/openship (README) + launch post https://x.com/openshipio/status/2078143909125923137
Site: https://openship.io
npm: `npm i -g openship` (or `curl -fsSL https://get.openship.io | sh`)
License: Apache-2.0
Repo: 4.2k★, 288 forks, TypeScript 88%. Latest release v0.1.11 (Jul 18, 2026). Topics: ai, deployments, self-hosted, agents.

## What it is
Self-hosted deployment platform with built-in CI/CD. Push code, ship containers, manage infrastructure — from a desktop app, web dashboard, or CLI. "Zero config files, zero pipelines, zero YAML": point at a repo, it detects the stack, builds, configures, ships. Databases, domains, SSL, CDN, mail, backups all managed in one place. Works with Openship Cloud (managed) or any Linux server you own.

## Quick start
- `openship up` — installs as a background service (starts on boot, auto-restarts). `openship open` opens dashboard; `openship stop` stops.
- `openship up --foreground` for one-off attached run.
- Per project: `cd your-project && openship init && openship deploy`.
- Docker: clone repo, `cp .env.example .env`, `docker compose up -d`.
- Desktop app: `openship install` or download from openship.io.

## Features
- Built-in CI/CD: push-to-deploy, preview environments, staging/prod flows, one-click rollbacks.
- Any stack: Node, Python, Go, Rust, PHP, Ruby, Java, .NET, Docker, monorepos.
- Full backend: Postgres, MySQL, MongoDB, Redis, workers, WebSockets, storage.
- Domains & SSL: auto Let's Encrypt, wildcards, unlimited domains, auto-renewal.
- CDN: edge caching, HTTP/3, Brotli, instant purge.
- Mail server: built-in SMTP with DKIM/SPF/DMARC — no Mailgun/SES needed. Unlimited domains, unlimited mailboxes, modern webmail, connect with Gmail/Outlook/Apple Mail/Thunderbird or any IMAP/SMTP client, send from apps via SMTP, high deliverability. No mailbox subscriptions or API fees.
- Backups: scheduled, DBs + volumes, one-click restore.
- Real-time monitoring: live build logs, container metrics, resource usage.
- Scaling: auto-scaling on cloud, multi-node ready on self-hosted.
- Portability: standard Docker containers.
- One-click services (run on your own infra): Supabase, PostgreSQL, MySQL, MariaDB, MongoDB, Redis, MinIO, Meilisearch, Qdrant, RabbitMQ, Kafka, ClickHouse, Elasticsearch, and any other.
- Operate: live deploy/request logs, traffic analytics, secrets mgmt, env vars, scheduled jobs, health checks, automatic SSL.
- Multi-environments: isolated dev/staging/prod, multi-branch isolated deploys.
- Security & teams: team mgmt, RBAC, IP allow/block, rate limiting, security rules.
- Developer experience: web dashboard, native desktop app, CLI, REST API, **MCP support for AI agents** (agent can manage infra without SSH).

## Status / roadmap
Production-ready core, actively developed. Coming: multi-server clustering, one-click load balancing, horizontal scaling, built-in HA/failover, private networking, visual CI/CD pipelines, advanced monitoring.

## Relevance
Sits alongside our other self-hosted / infra / agent-tooling sources (Sevalla src-2026-07-06-003, agent harnesses, Printing Press src-2026-07-20-015). Notably: built-in mail server (replaces Mailgun/SES) and first-class MCP for AI agents managing infrastructure. Apache-2.0 permits commercial/closed-source use.
