---
title: Bento - office suite that fits in a file
kind: paste
captured_at: 2026-07-24 06:46
tags: []
source_url: 
status: inbox
---

# Bento - office suite that fits in a file

GitHub - nyblnet/bento: Bento — the office suite that fits in a file. A PowerPoint alternative that is a single HTML file. A Bento deck carries its own viewer, presenter, and editor inside the document.

Why: Office documents used to be things you had. Now they're things you rent. Bento takes the other path.

Key features:
- One file, forever: deck, fonts, images, charts, animations, and full editor travel together. A copy from 2026 opens in 2036.
- View-source honest: data sits in plain readable JSON block at top of file. No binary formats.
- Self-saving: file rewrites own data block on save (File System Access API + download fallback).
- Local-first: flip on Offline mode, nothing leaves your machine.

Features:
- Morph presenting: elements sharing an id animate between slides (position, size, color, gradients)
- Live collaboration: E2EE (AES-GCM) with keys in your file, never on server. CRDT with character-level text merging.
- Blind relay: optional sync relay stores ciphertext only
- Built-in charts: bar/line/pie/scatter with dependency-free engine, live tooltips, zoom, morphing
- Designed for AI: plain JSON in file, agents edit .bento.html in place, chatbots round-trip via window.bento.loadDoc
- Signed self-updates: ECDSA-signed releases, old file stays as rollback
- Speaker view, comments, layouts, hidden states, hover reveals, motion paths, PDF export, page sizes, 8 UI languages
- ~560 KB shell

Use with AI: agents edit #bento-doc JSON in place (Claude Code, Cursor, Aider). Or copy doc JSON out, let assistant rewrite, paste back. Works fully offline with local open-weight models (Ollama, llama.cpp, LM Studio).

Build: cd slides, npm install, npm run dev / npm run build:single
Architecture: slides/src/model.ts (doc model), render.ts (renderer), anim.ts (animation engine), charts.ts, sync/crdt.ts (collaboration CRDT)

Security: collab keys client-side minted at doc creation, live only in file. Relay sees ciphertext + timing + room key hash only. Update checks fetch static manifest, send nothing about you.

Bento/Slides first app of Bento/Suite. Docs and Sheets follow.
MIT License. 1.2k stars. Website: https://bento.page
