---
title: wigolo - Local-First Web Intelligence for AI Agents
kind: paste
captured_at: 2026-07-25 21:17
tags: []
source_url: 
status: inbox
---

# wigolo - Local-First Web Intelligence for AI Agents

https://x.com/FareaNFts/status/2079833940513505445 — Farea (@FareaNFts) announcing wigolo: local-first web layer for agents. $0/query, no API keys. Public beta, climbing fast on GitHub.

https://github.com/KnockOutEZ/wigolo — The go-to web for your AI coding agent. Local-first search, fetch, crawl, extract, cache, research over MCP. By Towhid Khan (@KnockOutEZ / @yourtowhid). AGPL-3.0. 3.6k stars, 239 forks, 1,902 commits. npm: wigolo.

10 tools: search (18 engine adapters + ML rerank + explainable evidence score), fetch (tiered router: HTTP → headless browser on challenges/SPA), crawl (BFS/DFS/sitemap, robots.txt), extract (tables, JSON-LD, schemas), cache (keyword + hybrid semantic), find_similar (3-way fusion), research (decompose → fan-out → synthesize), agent (autonomous gather loop), diff (change detection), watch (re-check + webhook).

Architecture: single Node process, MCP stdio + REST + SDKs (TypeScript, Python). On-device ML (embeddings + reranker), local browser engine pool. Cache under ~/.wigolo/. ~1.5GB disk required. Works with Claude Code, Cursor, Codex, Gemini CLI, VS Code, Windsurf, Zed, Antigravity, plus LangChain/CrewAI/LlamaIndex/Vercel AI SDK integrations. Docker available.

Key differentiators vs Firecrawl/Exa/Tavily: multi-engine search fusion, verbatim byte-pinned excerpts, explainable per-result score decomposition, persistent local cache (re-query free, offline), zero API keys for core tools, $0/query.

Setup: npx wigolo init --agents=claude-code,cursor, npx wigolo doctor. Optional: WIGOLO_LLM_PROVIDER=gemini/ollama for synthesis. Benchmark: parity with Exa/Tavily/Firecrawl on common queries, unique evidence-scoring output.

Optional LLM key for research/agent synthesis only (Gemini free tier or Ollama keyless). All core tools work fully offline/keyless.
