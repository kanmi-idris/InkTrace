---
title: Paseo - Multi-Agent Orchestrator for Desktop & Mobile
kind: paste
captured_at: 2026-07-25 21:19
tags: []
source_url: 
status: inbox
---

# Paseo - Multi-Agent Orchestrator for Desktop & Mobile

https://github.com/getpaseo/paseo — One interface for Claude Code, Codex, Copilot, OpenCode, and Pi agents. Self-hosted daemon + iOS/Android/Desktop/Web/CLI clients. By Mouad (@moboudra). AGPL-3.0. 11.4k stars, 1.1k forks, 4,562 commits.

Features: Self-hosted (agents run on your machine with full dev environment), multi-provider (Claude Code, Codex, Copilot, OpenCode, Pi), voice control, cross-device (iOS, Android, desktop, web, CLI), privacy-first (no telemetry/tracking/forced logins).

Architecture: local daemon manages agent processes, WebSocket API, MCP server. Clients connect to daemon. Expo app for mobile, Electron desktop app.

CLI: paseo run --provider claude/opus-4.6, paseo ls, paseo attach, paseo send. Connect to remote daemon via paseo --host.

Skills pack: npx skills add getpaseo/paseo — /paseo-handoff (hand off between agents), /paseo-loop (Ralph loop against acceptance criteria), /paseo-advisor (second opinion without delegating), /paseo-committee (two agents root cause analysis).

Docker: ghcr.io/getpaseo/paseo with PASEO_PASSWORD auth, workspace mount.

Community: paseo-relay (self-hosted Go relay), paseo-vscode extension.

Website: https://paseo.sh
Discord: https://discord.gg/jz8T2uahpH
