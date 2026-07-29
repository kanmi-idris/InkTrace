---
title: Akarso — social media management for AI agents (CLI + MCP + API)
kind: paste
captured_at: 2026-07-20 13:11
tags: [social-media, agents, mcp, cli, automation, publishing]
source_url: http://akarso.co/
status: inbox
---

# Akarso — social media management for AI agents (CLI + MCP + API)

Akarso — Social media management for AI agents (akarso.co)

A CLI + API + MCP service to publish, schedule, and manage content across **14 social platforms** from one interface. Built explicitly for AI agents and automation.

Platforms (14, OAuth-only, no passwords stored): X/Twitter, Instagram, LinkedIn, Facebook, TikTok, YouTube, Threads, Reddit, Pinterest, Bluesky, Mastodon, Discord, Slack, Google Business.

Three interfaces (share the same API key + connected accounts):
- **CLI**: `npm i -g akarso`, `akarso auth login` (Google OAuth, saves API key), `akarso accounts connect twitter`, `akarso posts create --text ... --platforms twitter,linkedin,bluesky --publish-now` (or `--scheduled-at 2h`).
- **MCP server**: `claude mcp add --transport http akarso https://akarso.co/mcp` → tools `create_post`, `upload_media`, `list_accounts`, `sync_comments`. Works with Claude Code, Cursor, Windsurf, any MCP client.
- **REST API**: `POST https://akarso.co/api/v1/post` with bearer key; full OpenAPI at `/api/v1/openapi.json`.

Agent skill: `npx skills add https://akarso.co` installs the Akarso skill (teaches login, publish/schedule, media upload, inbox management).

Use cases (pre-built skills/recipes for scheduled agents — Claude Code Routines, Codex Automations, Devin, GitHub Actions, Kimaki cron):
- Build in public (commits + CHANGELOG → platform-adapted posts)
- Blog/docs announcer (sitemap watcher)
- Changelog/releases (GitHub releases → per-platform announcement posts)
- Meme machine (trending topics → meme images)
- Content translator (localized cross-posts; video dubbing for YouTube/TikTok)
- Inbox concierge (triage comments + Google Business reviews, draft replies, escalate)

Concepts: **account** = a connected social login; **profile** = workspace holding a set of accounts/posts (one account per platform). Business plan: up to 20 profiles (agencies); Hobby: 2 profiles.

Pricing: 7-day free trial on every plan; cancel anytime (Stripe). Hobby (solo) vs Business (teams, roles, up to 20 profiles). CLI/MCP/REST, media uploads, inbox all included on both. Publishing requires a subscription.

Agent-readable: `/llms.txt`, `/llms-full.txt`, `/docs.zip`.

Relevant to vault: joins the "social media tooling for agents" cluster (cf. agent-reach src-2026-06-28-024, seesaw src-2026-07-17-014, mobbin/collectui design refs).
