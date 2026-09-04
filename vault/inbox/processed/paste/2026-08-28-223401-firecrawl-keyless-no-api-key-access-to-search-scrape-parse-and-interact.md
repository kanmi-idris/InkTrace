---
title: "Firecrawl Keyless: No-API-Key Access to Search, Scrape, Parse, and Interact"
kind: "paste"
captured_at: "2026-08-28 22:34"
tags: ["firecrawl", "web-scraping", "web-search", "ai-agents", "keyless", "mcp", "cli", "simpleqa", "rate-limits"]
source_url: "https://www.firecrawl.dev/blog/firecrawl-keyless-launch"
status: "inbox"
---

# Firecrawl Keyless: No-API-Key Access to Search, Scrape, Parse, and Interact

## Relation to existing sources
Firecrawl is already extensively captured in this vault. src-2026-07-23-007 documents the core Firecrawl API, SDKs, self-hosting, and repository stats. src-2026-07-22-007 documents the /search relevance-model upgrade and its 94.7% SimpleQA claim in detail, including evaluation methodology. This record captures a distinct, later announcement: Firecrawl Keyless, the no-API-key access tier, and cross-checks the user's specific 'free keyless' post against the official launch blog post and current rate-limit documentation.

## Official launch (2026-06-16, Eric Ciarla)
Firecrawl Keyless lets developers search, scrape, and interact with the web without an API key. Every developer automatically gets 1,000 free credits a month; signup is only needed beyond that. The launch blog frames this as removing setup friction, particularly for AI coding agents connecting over MCP (Claude Code, Cursor, OpenClaw, Hermes Agent, OpenCode, and other MCP-compatible hosts), since an agent can start scraping and searching without a human generating and pasting an API key.

At launch, Keyless was live across MCP (https://mcp.firecrawl.dev/v2/mcp), the CLI (npx firecrawl-cli@latest), and the REST API (no Authorization header required).

## What keyless access actually covers (per current docs)
The current Firecrawl rate-limits documentation narrows the keyless surface compared to the launch post's broad framing:
- The hosted MCP keyless endpoint exposes exactly Search, Scrape, and Parse without an API key. Other hosted MCP tools require an account connection or an API key.
- For the official CLI, SDKs, and REST API, keyless access also includes Interact.
- No other endpoints (crawl, extract, map, batch scrape, etc.) are available without a key.
- Keyless usage is rate-limited per IP address per day by two independent caps: a maximum number of requests per day, and a maximum number of credits per day (heavier operations like Interact or JSON extraction cost more credits, so they exhaust the daily cap faster). Exceeding either cap returns a 429 response.
- Signing up for a free API key raises limits to 1,000 credits and higher rate limits; official clients automatically switch to using the key once configured.

This means keyless access is a rate-limited free tier scoped to specific endpoints, not unrestricted access to the full Firecrawl product surface (crawl, map, batch scrape, and the agent/extract endpoints still require a key).

## The user's specific claims, checked
The user's post advertises 'firecrawl free keyless' with three claims:
1. State-of-the-art search accuracy, 94.7% on SimpleQA — this is a genuine Firecrawl claim, but it comes from a separate July 2026 announcement about a custom relevance model for /search (already fully documented in src-2026-07-22-007), not from the June 2026 Keyless launch itself. The two announcements are related (both concern /search) but are distinct product changes; this post conflates them into one pitch.
2. Sub-3s scrapes, any page into clean markdown — the general Firecrawl repo record (src-2026-07-23-007) documents a P95 latency claim of 3.4s across millions of pages from the main product marketing, not a keyless-specific benchmark. A 'sub-3s' figure was not independently located in either the Keyless launch post or current rate-limit docs during this capture, so it is recorded as an unverified performance claim from the user's post.
3. No API key, no signup — this matches the documented keyless behavior for Search, Scrape, Parse, and Interact specifically, but does not extend to crawl, map, batch scrape, or the agent/extract endpoints, which still require an account and API key per current documentation.

'100% free' should be read as 'free within the daily per-IP request and credit caps for the keyless-eligible endpoints,' not as unlimited or unmetered access.

## CLI install command
The user's command:
npx -y firecrawl-cli@latest init --all --browser

This matches the documented Firecrawl CLI setup command in the official docs (docs.firecrawl.dev/sdks/cli) and the GitHub CLI README (github.com/firecrawl/cli). Per the docs:
- --all installs every Firecrawl skill segment (CLI, build, workflows) to every detected AI coding agent.
- --browser opens the browser for Firecrawl authentication automatically.
- After installing skills, the coding agent must be restarted to discover them.
- Some CLI commands work without logging in; with no API key configured, supported commands fall back to the same keyless free tier described above (free but rate-limited per IP).
- The GitHub README's own installation section instead shows init -y --browser (using -y for non-interactive rather than --all), and notes that skills install globally to every detected AI coding agent by default, with -y running setup non-interactively. Both -y and --all appear across Firecrawl's own documentation and GitHub README for closely related but not identical purposes, and this difference is recorded rather than resolved.

## Sources
- https://www.firecrawl.dev/blog/firecrawl-keyless-launch
- https://docs.firecrawl.dev/sdks/cli
- https://docs.firecrawl.dev/rate-limits
- https://github.com/firecrawl/cli
- Related: src-2026-07-23-007 (Firecrawl repository/API), src-2026-07-22-007 (Firecrawl /search relevance model, 94.7% SimpleQA)
