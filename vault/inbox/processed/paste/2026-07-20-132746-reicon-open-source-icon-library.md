---
title: Reicon — Open-Source Icon Library
kind: paste
captured_at: 2026-07-20 13:27
tags: [react, icons, ui, svg, library, web, mcp, open-source]
source_url: https://reicon.dev/
status: inbox
---

# Reicon — Open-Source Icon Library

# Reicon — Open-Source Icon Library for Designers & Developers

Source: https://reicon.dev/ (repo: https://github.com/dqev/reicon)

Reicon is an open-source SVG icon library with 2,700+ icons, designed on a strict 24×24 pixel grid. Built for high-performance web apps: tree-shakeable, zero external dependencies, optimized wrappers for multiple frameworks.

Two weights:
- Outline: 1.5px stroke-width with consistent corner radii.
- Filled: solid path structures for active/highlighted UI states.

## Packages & ecosystem
- `reicon` — core vanilla JS / web component (CDN: https://unpkg.com/reicon/cdn/reicon.js)
- `reicon-react` — React (import { Heart } from 'reicon-react'; <Heart size={24} weight="Outline" color="#000000" />)
- `reicon-react-native` — React Native
- `reicon-vue` — Vue 3
- `reicon-svelte` — Svelte
- `reicon-figma` — Figma design workspace
- `reicon-vscode` — VS Code extension (DevChauhan.reicon)
- `reicon_flutter` — Flutter (pub.dev/packages/reicon_flutter)
- `reicon-mcp` — MCP Server for AI agents (npx reicon-mcp). Agents can search icons, preview SVG markup, generate framework-specific code with zero network calls.
- `reicon-svg` — raw SVG download (public/reicon-icons.zip)

## Agent usage (LLM-friendly reference files)
- https://reicon.dev/llms.txt — quick reference (install, usage, props for all 6 frameworks + CDN + MCP)
- https://reicon.dev/llms-full.txt — deep reference (versions, full docs, TS types, data architecture, FAQ)
- https://reicon.dev/llms-icons.txt — icon directory: all 2,700+ icons by category, kebab-case → PascalCase mapping

## Quick start examples
React: import { Heart } from 'reicon-react'; <Heart size={24} weight="Outline" color="#000000" />
Vue 3: import { Heart } from 'reicon-vue'; <Heart :size="24" weight="Filled" color="#000000" />
Svelte: import { Heart } from 'reicon-svelte'; <Heart size={24} weight="Outline" color="#000000" />
Flutter: SvgPicture.string(reiconSvg(Reicon.outline.heart, size: 24))
HTML/CDN: <script src="https://unpkg.com/reicon/cdn/reicon.js"></script> then <re-icon icon="heart" weight="outline" size="24"></re-icon>
MCP: { "mcpServers": { "reicon": { "command": "npx", "args": ["reicon-mcp"] } } }

## Architecture
Monorepo. Core dataset is `data/icon-data.json` — single source of truth. Compiler scripts regenerate all framework packages + CDN runtimes (npm run build:packages). Docs site is React/Vite.

## Lineage / credits
Base icons built from:
- Solar Icons (480 Design, CC BY 4.0; MIT wrapper by saoudi-h)
- Zappicon (Zappicon License)
License: MIT — Copyright (c) 2026 Dev Chauhan.

## Repo stats (Jul 2026)
999 stars, 54 forks. Latest release v1.1.1 (Jul 16, 2026) "Cleaned icon database".
Topics: react, svg, open-source, design, ui, icons, svg-icons, animated, designer.
