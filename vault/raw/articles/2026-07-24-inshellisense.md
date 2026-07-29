---
title: Inshellisense
kind: paste
captured_at: 2026-07-24 08:36
tags: []
source_url: 
status: inbox
---

# Inshellisense

GitHub - microsoft/inshellisense: IDE style command line auto complete. Terminal native runtime for withfig/autocomplete with 600+ command line tool support. Cross-platform (Windows, Linux, macOS).

Install: npm install -g @microsoft/inshellisense && is init
Also via Homebrew.

Shell integration auto-starts inshellisense when shell opens:
- bash, zsh, fish, pwsh, powershell, cmd (experimental), xonsh, nushell

Usage: Run `is` to start autocomplete session, `exit` to stop.
Keybindings: tab (accept), up/down (navigate), esc (dismiss) — configurable via TOML config (~/.inshellisenserc).

Features:
- Configurable keybindings, alias expansion (bash/zsh), NerdFont support, max suggestions
- Built on Node.js readline keypress events
- Unsupported: az, gcloud, aws specs (too large)
- Stars: 10.4k
- License: MIT
- 305 commits, 238 forks
