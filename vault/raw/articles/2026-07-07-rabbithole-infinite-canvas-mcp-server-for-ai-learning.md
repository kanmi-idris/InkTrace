---
title: Rabbithole — Infinite Canvas MCP Server for AI Learning
kind: paste
captured_at: 2026-07-07 14:40
tags: [mcp, learning, canvas, ai, claude-code, open-source, mit]
source_url: https://rabbithole.ing/
status: inbox
---

# Rabbithole — Infinite Canvas MCP Server for AI Learning

Rabbithole (rabbithole.ing) — Infinite canvas for learning. MCP server that turns document exploration into an infinite branching tree of knowledge.

Made by shlokkhemani (github.com/shlokkhemani/rabbithole). MIT license, ~75 stars.

How it works:
- Open a document in the browser via MCP
- Select any text on the page, ask a question (or tap a lens: Explain, ELI5, Example, Go Deeper)
- The answer streams in as a new child document
- Recurse as deep as you like — each "hole" is saved and revisitable
- Everything runs locally: no account, no API keys, nothing leaves your machine

Setup:
- Requires Node 18+ and a browser
- MCP server runs via stdio: `npx -y github:shlokkhemani/rabbithole`
- Works with Claude Code, Codex, or any MCP client
- Local clone: `git clone https://github.com/shlokkhemani/rabbithole.git && cd rabbithole && npm install`
- Auto-saves as JSON under ~/.rabbithole/
- Config: RABBITHOLE_DIR, RABBITHOLE_NO_BROWSER env vars

Related but separate: isarabbithole.com — a different Rabbithole project (Rust/LLM on-the-fly website generator by ajbt200128)
