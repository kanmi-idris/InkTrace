Source: https://github.com/nexu-io/codex-slides
Title: Codex Slides — Open-Source AI Slide Studio Inside Codex
Author: nexu-io
License: MIT
Stars: 180
Retrieved: 2026-07-22
Source ID: src-2026-07-22-005

---

Codex Slides is an open-source AI slide studio built for Codex (OpenAI's coding agent). Turn a prompt, a repo, or files into a presentation deck without leaving the agent.

## Key Capabilities

- **10+ high-quality slides in ~4–5 minutes** — Fast mode renders every page in parallel
- **45 curated deck templates** across 15 professional categories (3 each)
- **73 community styles** across 12 groups (business/report, infographic, diagram, data/map, UI/dashboard, poster/ad, product, brand/identity, architecture/space, photo/cinematic, editorial, illustration)
- **24 guided scenarios** in 6 groups (create, transform sources, data/insights, research/decisions, optimize a deck, specialized outputs)
- **Production export** — PPTX and PDF with speaker notes preserved
- **Render quality**: 1K / 2K / 4K; **5 aspect ratios**: 16:9, 4:3, 1:1, 9:16, 3:4

## Architecture

- Browser-first, operates in Codex's in-app Browser
- Durable projects saved to disk (every checkpoint, conversation, rendered image persisted locally)
- Cross-surface sync — project state synchronized across tabs
- **Stack**: Next.js 14, TypeScript, pnpm workspace

## Workflow

1. **Start** — describe the deck at the Codex Slides home composer
2. **Clarify** — audience, page count, aspect ratio, language, resolution, visual intent
3. **Research** — optional multi-round web research, results in Design Files
4. **Outline** — editable, agent-navigable
5. **Style selection** — ranked community styles against topic + outline, one-click lock
6. **Render** — progressively or in parallel (Fast mode)
7. **Edit** — AI edits, mark annotations, add/duplicate/move/delete, transitions
8. **Present** — full-screen playback or Presenter Mode with synchronized audience window
9. **Export** — PDF and PPTX

## Transports

- **CLI**: `node skills/codex-slides/scripts/codex-slides.mjs capabilities`
- **MCP**: 38 typed tools for Codex, including durable run start/status/wait/cancel
- **Plugin**: Codex plugin marketplace install (nexu-io/codex-slides)
- **Skill**: portable `skills/codex-slides/` directory

## Features

- Gen-UI clarification questions
- Deep research with source-backed Markdown briefs
- Reusable project templates (save as visual-system snapshot)
- Design Files (inspect artifacts, uploads, edit text sources, reference with @, file download)
- Brand & Design System (identity, voice, palette, typography, imagery, effects, spacing, radii, brand assets)
- Automatic version history (every AI command and manual edit creates immutable checkpoint)
- Queued follow-ups (keep prompting during generation)
- Mark editing (draw arrows/shapes/labels/comments on slide, regenerate from annotations)
- Play mode + Presenter Mode with notes, navigation, timer
- English / Simplified Chinese / Japanese UI

## Requirements

- Codex with plugin support
- Node.js 20+
- ChatGPT account (codex login)
- Git

## Comparison

Positioned as open-source alternative to Gamma and Tome. Image-native: each slide is a full visual canvas (exported PPTX contains full-slide images, not editable PowerPoint shapes).
