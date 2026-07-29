---
title: Canvas UI Website
kind: paste
captured_at: 2026-07-24 08:37
tags: []
source_url: 
status: inbox
---

# Canvas UI Website

Canvas UI product website (canvasui.dev) — open source library of creative html-in-canvas & WebGL components. Framework agnostic (React, Vue, Svelte, vanilla), shadcn-compatible registry.

Key pages: /docs, /components, /playground

24 components and counting. Install via: npx shadcn@latest add @canvas-ui/<component>-<framework>

How it works: pick a component → run one command → full source lands in your repo. No package to install, no version to pin. Code is yours to edit from day one.

Featured components: Blaze, Liquid, Glass, Shatter, Particle Reveal, VHS — effects render on GPU via WebGL, animate outside React's render cycle, pause when off-screen, respect reduced-motion.

MCP-ready: agents with shadcn MCP server can browse, read docs, and install components.

Browser support: html-in-canvas (Chrome behind flag) degrades gracefully to WebGL overlays on unsupported browsers. WebGL components work in all modern browsers.

License: MIT + Commons Clause (free for personal/commercial use, restricts reselling the library itself).

No slowdown claim: GPU-rendered, off-screen pausing, full cleanup on unmount.
