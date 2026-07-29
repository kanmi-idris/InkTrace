---
title: Cloudflare Nimbus - Docs for Humans and Agents
kind: paste
captured_at: 2026-07-25 19:50
tags: []
source_url: 
status: inbox
---

# Cloudflare Nimbus - Docs for Humans and Agents

GitHub - cloudflare/nimbus: Docs sites you own, built on Astro. Humans and agents are both first-class. Scaffolds a complete Astro documentation site into your repo as real editable files.

Quickstart: npx @cloudflare/create-nimbus-docs@latest my-docs

Features:
- Owned source: layouts, components, content collections, styles, theme tokens — all editable files in your repo
- Agent surface: .md/.mdx twins for every page, /llms.txt + /llms-full.txt, JSON-LD, sitemap, robots.txt, per-page OG images
- Reader experience: full-text search, light/dark theming, accessible nav, breadcrumbs, pagination, mobile sidebar
- Authoring guardrails: prose/structure linting, MDX component validator, config validation with human-readable errors
- Versioned docs: parallel versions with alternates, canonical links, automatic redirects

Registry add-ons: pnpm dlx @cloudflare/nimbus-docs add <component> (dialog, 404-page, etc.)
Deploy: static build to dist/, first-class Cloudflare target (wrangler.jsonc shipped by default)

Stack: Astro 7, Sätteri (Rust-based markdown), Tailwind v4, optional React 19. Pre-1.0 (0.x).

License: MIT. Stars: 431, forks: 14, 115 commits.
Website: nimbus-docs.com
