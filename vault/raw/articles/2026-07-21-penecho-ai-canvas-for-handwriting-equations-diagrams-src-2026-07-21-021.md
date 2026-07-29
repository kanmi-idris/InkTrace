Source: https://github.com/penecho/penecho
Title: PenEcho — Think with AI beyond the chat box (shared canvas for handwriting, equations, diagrams)
Author: penecho (Moonshot AI / Kimi Open Source Friend)
Retrieved: 2026-07-21
Stars: 639 | Forks: 70 | License: AGPL-3.0

---

"Think with AI beyond the chat box." A shared canvas where handwriting, equations, diagrams, and spatial context become part of the conversation. Official Kimi Open Source Friend (backed by Moonshot AI).

## Key Features
- **Canvas**: 20,000x20,000 logical canvas with tile-based allocation (only 512x512 tiles with ink are allocated)
- **AI responses**: Get answers, hints, explanations, formulas, plots, and diagrams directly on the canvas
- **Interactive drafts**: Drag, resize, copy, accept/discard AI drafts before they become part of work
- **Freehand lasso**: Select confirmed ink to move, resize, recolor, delete, or send to Typeset
- **Animation scenes** (v0.6.0): Declarative Canvas2D animations up to 32 objects/32 motions, transparent overlay, no model-provided JS execution
- **4 visual modes**: Arcane, Sci-fi, Research, Studio
- **Snapshots**: Local browser persistence, export as cropped PNG
- **Stylus/mouse input** with pan/zoom

## Executors
- **Codex CLI**: `codex exec --json`, supports GPT-5.5+, recommended gpt-5.6-sol at xhigh
- **Claude CLI**: isolated `claude -p` turn with tools/agents/MCP disabled, supports Opus 4.8+
- **API mode**: OpenAI-compatible or Anthropic-compatible format. Kimi K3 recommended for demanding canvas work
- Effort levels: none, low, medium, high, xhigh/max

## Quick Start
```bash
npm install -g penecho
penecho configure
penecho
```
Config stored at `~/.penecho/config.env`. Listens on `0.0.0.0:3888` by default.

## Tech Details
- Node.js 18.17+, JavaScript/CSS/HTML
- Canvas renders via Canvas2D API
- Auto AI delay, per-request reasoning menu, token tracking (~1-8K output tokens per request)
- Safe deployment: CLI mode for local/LAN only; API mode supports remote behind HTTPS
- Request recording (enabled in Settings) saves per-request traces under `~/.penecho/logs/requests`
- npm `check` command runs full test suite before PRs

## v0.6.0 Highlights
- Controllable animated explanations (removable via Plugins menu)
- Touch/pen-friendly animation controls with one-second-hold activation
- Sharper text/LaTeX rendering, non-blocking npm update checks
