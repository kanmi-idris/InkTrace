---
title: DevSpace - Codex-Style Coding Workflow for ChatGPT via MCP
kind: paste
captured_at: 2026-06-18 10:56
tags: [mcp, chatgpt, coding, ai, devtools, code-editing, local-development]
source_url: 
status: inbox
---

# DevSpace - Codex-Style Coding Workflow for ChatGPT via MCP

DevSpace - Bring a Codex-style coding workflow to ChatGPT

## Overview
DevSpace is a self-hosted MCP server that lets ChatGPT read, edit, search, and run code in your real local projects — your files, your tools, your terminal — without uploading anything to a third party. You run it on your machine, expose it through a tunnel you control, and approve the connection with a password only you have.

## Repository
- GitHub: https://github.com/Waishnav/devspace
- npm: @waishnav/devspace
- License: not specified in README
- Author: Waishnav (creator of GitCMS)

## Requirements
- Node >=20.12 <27 (Node 22 LTS recommended)
- npm, Git, Bash-compatible shell
- Platforms: Linux, macOS, Windows (Git Bash, WSL, MSYS2, Cygwin). PowerShell/cmd.exe not supported yet.

## Install
npm install -g @waishnav/devspace

Then:
devspace init
devspace serve

Or without global install:
npx @waishnav/devspace init
npx @waishnav/devspace serve

## Setup
During init, DevSpace asks for:
- Local project folders ChatGPT is allowed to open
- Local port (default 7676)
- Public HTTPS base URL (Cloudflare Tunnel, ngrok, Pinggy, Tailscale Funnel, etc.)

Use public origin without /mcp during setup. Configure MCP client with /mcp URL after.

## Connection
- Local: http://127.0.0.1:7676/mcp
- Public (tunnel): https://your-tunnel-host.example.com/mcp

Owner password approval required (stored in ~/.devspace/auth.json).

## What ChatGPT Can Do
- Read, write, and edit files inside opened workspace
- Search code and inspect directories
- Run shell commands (tests, builds, git, package scripts)
- Use isolated Git worktrees for parallel coding sessions
- Follow project instructions from AGENTS.md and CLAUDE.md
- Discover local agent skills from skill folders
- Show tool cards and optional change summaries in ChatGPT Apps-compatible hosts

## Workflow
1. Start your tunnel
2. Run devspace serve
3. Connect MCP client to public /mcp URL
4. Approve connection with Owner password
5. Ask ChatGPT to open a project inside allowed roots

## Mental Model
DevSpace is remote access to selected local folders. Treat a connected client like a trusted coding partner with access to your machine.

## Debugging
devspace doctor — inspect local setup

## Philosophy
Every piece of software is becoming conversational. DevSpace is one attempt to fast-forward that future: a way for MCP-capable hosts like ChatGPT and Claude to work directly with local project files through explicit, inspectable tools.
