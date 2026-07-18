---
title: Taste Skill — Anti-Slop Frontend Framework for AI Agents (v2)
kind: paste
captured_at: 2026-07-13 08:53
tags: [taste-skill, ai-agents, frontend, design-system, coding-agents, open-source, anti-slop, design-taste]
source_url: 
status: inbox
---

# Taste Skill — Anti-Slop Frontend Framework for AI Agents (v2)

## Taste Skill

Source: https://www.tasteskill.dev/ (official site)
Author: Leon Lin (@lexnlin) and blueemi (@blueemi99)
Sponsors: Vercel OSS Program, animations.dev

### What it is
The official website for Taste Skill — open-source skill files that stop AI coding agents (Cursor, Claude Code, Codex, Gemini CLI, v0, Lovable, OpenCode) from generating generic frontends. "Less slop, designs pop."

### v2 (experimental) new features
- **§0 Brief inference** — agent reads the room before generating (industry, audience, mood, motion depth, layout family)
- **§2 Brief-to-design-system map** — when to reach for Material, Fluent, Carbon, Polaris, Atlassian, Primer, GOV.UK, USWDS, Bootstrap, Radix, shadcn, Tailwind official vs native CSS
- **§8 Dark mode protocol** — dual-mode by default, contrast and hierarchy parity across themes
- **§11 Redesign protocol** — audit-first on existing projects
- **§12 Block library schema** — contract for iterative block additions
- **§14 Hard pre-flight check** — every checkbox must pass before shipping

### Available skills (13 total)
- **taste-skill** (v2 default) — design-taste-frontend
- **taste-skill-v1** — legacy
- **gpt-tasteskill** — stricter for GPT/Codex models
- **image-to-code-skill** — image-first: generates references, analyzes, implements
- **redesign-skill** — audit + redesign for existing projects
- **soft-skill** — calm, expensive-looking interfaces
- **output-skill** — prevents placeholders and half-finished work
- **minimalist-skill** — cleaner editorial UI
- **brutalist-skill** — Swiss typography, raw structure
- **stitch-skill** — Google Stitch-compatible export
- **imagegen-frontend-web/mobile** — premium reference images
- **brandkit** — brand overview images

### Install
```sh
npx skills add Leonxlnx/taste-skill
```

### Related Source
- [[src-2026-06-21-008]] — GitHub repo taste-skill (initial capture)
