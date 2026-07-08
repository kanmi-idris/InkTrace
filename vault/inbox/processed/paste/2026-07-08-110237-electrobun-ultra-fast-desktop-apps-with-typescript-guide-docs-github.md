---
title: Electrobun — Ultra-Fast Desktop Apps with TypeScript (Guide, Docs, GitHub)
kind: paste
captured_at: 2026-07-08 11:02
tags: [desktop, electron-alternative, bun, typescript, cross-platform, frameworks, webview, bsdiff]
source_url: 
status: inbox
---

# Electrobun — Ultra-Fast Desktop Apps with TypeScript (Guide, Docs, GitHub)

## Electrobun — Desktop App Framework (Bun + System WebView + TypeScript)

Source: Better Stack guide + framework.blackboard.sh docs + blackboardsh/electrobun GitHub (12.5k stars, MIT)

### What is Electrobun?
Desktop app framework by Blackboard (YoavCodes/@BlackboardTech) that uses:
- **Bun** as the main process runtime (not Node.js)
- **System native WebView** as the renderer (WebKit on macOS, Edge WebView2 on Windows, WebKitGTK on Linux)
- **Native bindings** in C++, ObjC++, and Zig for OS integration
- Everything written in TypeScript — no Rust required

### Performance (vs Electron, Tauri)
| Metric | Electron | Tauri | Electrobun |
|--------|----------|-------|------------|
| Bundle size | ~150 MB | ~25 MB | ~14 MB |
| Update size | ~100 MB | ~10 MB | ~14 KB (bsdiff) |
| Startup time | 2–5 sec | ~500 ms | <50 ms |
| Memory usage | 100–200 MB | 30–50 MB | 15–30 MB |

### Quick Start
```sh
bunx electrobun init   # interactive scaffolding (svelte, vue, react-tailwind-vite, etc.)
```

### Architecture
- **Main process**: TypeScript run by Bun in a separate OS thread
- **Webview renderer**: system native WebView per platform
- **RPC**: typed, fast communication between main and webview processes
- **Views**: served via `views://` protocol, each view is a self-contained HTML/TS bundle
- **Config**: `electrobun.config.ts` at project root

### Key Features
- **Self-extracting bundles** with ZSTD compression, as small as 16MB
- **BSDIFF updates** — zig-optimized, tiny patches (4KB–14KB)
- **CEF optional** — `bundleCEF` flag for pinning Chromium when cross-platform consistency is needed
- **WebGPU** — `bundleWGPU` enables Bun TypeScript → WGPU to control native GPU surfaces without a webview
- **Three.js & Babylon.js adapters** that work directly in Bun
- **`<electrobun-webview>` & `<electrobun-wgpu>`** HTML elements for compositing OOPIFs and native GPU surfaces into UIs
- **Differential auto-update** — bsdiff patches, runtime polling, rollback on failed launch

### Bun APIs
- BrowserWindow — native window management, multi-window, lifecycle
- BrowserView — webview window management
- WebGPU — native GPU windows
- ApplicationMenu — native menu bars
- ContextMenu — native context menus
- Tray — system tray icons
- Updater — built-in auto-update with bsdiff
- Paths — global paths for resources/views
- Events — event system
- BuildConfig — build configuration

### Browser APIs
- Electroview class — initialize Electrobun APIs in the browser
- Webview Tag — custom `electrobun-webview` HTML element
- WGPU Tag — `electrobun-wgpu` element for embedding GPU surfaces in webviews
- Draggable Regions — make HTML elements draggable
- Global Properties — browser context globals

### CLI
```sh
electrobun build          # production build
electrobun dev            # dev with hot reload
electrobun build --env=stable  # release build with signing
```
Output goes to `artifacts/` directory (.app, .dmg on macOS).

### Templates (via `bunx electrobun init`)
Frontend frameworks: svelte, vue, react-tailwind-vite, angular, solid
App patterns: tray-app, multi-window, notes-app, photo-booth
Baselines: hello-world, tailwind-vanilla

### Notable Apps Built with Electrobun
Co(lab) — hybrid web browser + code editor for deep work
Deskdown — turn any URL into a desktop app in <20s
DOOM — implemented via bun→C→WGPU and full TS→WGPU
Audio TTS — text-to-speech with Qwen3-TTS
Invoke — macOS UI automation & shortcut platform
PLEXI — multi-dimensional terminal multiplexer
VibesOS — GUI for Claude Code
PiBun — desktop GUI for Pi coding agent
MarkBun — Typora-like markdown editor
md-browse — markdown-first browser
Guerilla Glass — creator studio for record→edit→deliver
Electrobun PDF — local-first PDF/DOCX editor
Quiver — GitHub PR reviews with AI commit messages
and ~50 more

### Platform Support
- macOS 14+: Official
- Windows 11+: Official
- Ubuntu 22.04+: Official
- Other Linux: Community
- Raspberry Pi: Unofficial fork

### Project Status
- v1.18.x — active development
- 12.5k GitHub stars, 347 forks, 2,068 commits
- MIT license
- CLAUDE.md included in repo (agent-friendly)
- Discord community

Sources:
- https://betterstack.com/community/guides/scaling-nodejs/electrobun-desktop-apps-typescript/
- https://framework.blackboard.sh/electrobun/
- https://github.com/blackboardsh/electrobun
