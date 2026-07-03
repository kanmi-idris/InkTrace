---
title: Agent Reach — AI Agent Social Media Search Tool (14+ Platforms, 42.7k Stars)
kind: paste
captured_at: 2026-06-28 06:39
tags: [ai, agent, search, social-media, open-source, tools]
source_url: https://github.com/Panniantong/agent-reach
status: inbox
---

# Agent Reach — AI Agent Social Media Search Tool (14+ Platforms, 42.7k Stars)

Agent Reach by Panniantong — an AI agent tool that enables searching 14+ platforms for free, zero API keys. 42.7k stars.

Install: pip install agent-reach or pipx install from GitHub. Or paste to Claude Code/Cursor/Windsurf: "帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md"

Channels:
- Twitter/X (twitter-cli, cookie auth)
- Reddit (OpenCLI or rdt-cli, login required via browser cookie)
- YouTube subtitles + search (yt-dlp)
- GitHub repos, issues, PRs (gh CLI)
- B站/Bilibili content (bili-cli, no login)
- 小红书/Xiaohongshu (OpenCLI on desktop; xiaohongshu-mcp on server, QR code login)
- LinkedIn profiles + company pages (Jina Reader or linkedin-scraper-mcp)
- Semantic web search (Exa, free, no key)
- RSS feeds (feedparser)
- Any webpage (Jina Reader, free)
- 雪球/Xueqiu stock market (cookie auth)
- 小宇宙/Xiaoyuzhou podcast transcription (Groq Whisper, free API key)
- V2EX, Bilibili basic (zero-config)

Architecture: Agent Reach is a selector, installer, health checker and router — never a wrapper. Uses upstream tools directly (OpenCLI, twitter-cli, bili-cli, rdt-cli, yt-dlp, mcporter, gh CLI). Self-healing routing: if one backend dies, switches to next automatically.

Install directory rules: Config in ~/.agent-reach/, tools in ~/.agent-reach/tools/, temp in /tmp/ — never in agent workspace.

Cookie-based platforms use Cookie-Editor Chrome extension for export. Security tip: use dedicated/secondary accounts.

Key commands: agent-reach install, agent-reach doctor, agent-reach watch, agent-reach configure, agent-reach check-update.

Works in: Claude Code, Cursor, Windsurf, OpenClaw, Hermes Agent.
