---
title: Printing Press — agent-native CLIs from a single prompt
kind: paste
captured_at: 2026-07-20 14:35
tags: [cli, agents, mcp, go, sqlite, automation, tooling, web]
source_url: https://printingpress.dev/
status: inbox
---

# Printing Press — agent-native CLIs from a single prompt

# Printing Press — agent-native CLIs from a single prompt

Source: https://printingpress.dev/
Repos: https://github.com/mvanhorn/cli-printing-press (★4.2k) ; https://github.com/mvanhorn/printing-press-library (★1.8k)
Built by Matt Van Horn (@mvanhorn) & Trevin Chow (@trevin)

## What it is
A tool that prints an agent-native CLI for any API, app, or site from a single prompt. Also emits a Claude Code skill, an OpenClaw skill, and an MCP server. Inspired by Peter Steinberger's discrawl and gogcli: a local SQLite mirror beats a remote API call, compound commands beat ten round trips, an agent-native CLI beats raw HTTP.

Philosophy: "Every API has a secret identity." Discord = searchable knowledge base; Linear = team behavior observatory. The press finds that secret and builds the CLI around it.

## How to use
- Discover/install from catalog: `npx -y @mvanhorn/printing-press-library search travel` ; `install flight-goat booking-com`
- Let agent pick: `clawhub install printing-press-library` (OpenClaw) or `hermes skills install mvanhorn/printing-press-library/skills/printing-press-library` (Hermes)
- Build your own: `go install github.com/mvanhorn/cli-printing-press/v4/cmd/cli-printing-press@latest` (needs Go 1.26.3+, Claude Code, Node); then in Claude Code run `/printing-press <app or website>` — no spec needed, can point at a website.

## CLI examples (magic moments)
- flight-goat: nonstop 8h+ SEA round-trips Dec 24 2026–Jan 1 2027, 4 pax, cheapest first. Stitches Kayak nonstop search + sniffed Google Flights.
- espn x flight-goat: live ESPN context picks date, FlightGoat books route — two CLIs, one conversation.
- movie-goat: Kelly Van Horn filmography sorted by Rotten Tomatoes (TMDb + OMDb joined locally).
- recipe-goat: best chocolate cake; recipe-shaped output triggers Claude's cooking widget (scalable servings, in-step ingredient links, timers).
- linear: `sql 'blocked issues whose blocker hasn't moved in 7 days'` — compound query the Linear API can't answer, 50ms against local SQLite mirror.
- contact-goat: LinkedIn lookup + Happenstance warm-graph cross-check + pay Deepline for verified email.

## Library scale
20 categories, ~250+ CLIs (Accounting, AI 11, Auth 2, Cloud 11, Commerce 32, Developer Tools 35, Devices 12, Education 2, Food 13, Health 5, Marketing 31, Media 41, Monitoring 2, Other 32, Payments 14, Productivity 39, Project Mgmt 4, Sales/CRM 17, Social 9, Travel 24).

## Relevance
Directly implements the HAR-to-client trick (@thdxr / @jlongster, src-2026-07-20-013): point the press at a website with no public API, it derives a token-efficient Go CLI + skill + MCP server. Token-efficient Go CLIs, local SQLite mirrors, compound commands.
