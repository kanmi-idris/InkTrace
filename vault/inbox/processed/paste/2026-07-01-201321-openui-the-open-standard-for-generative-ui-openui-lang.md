---
title: OpenUI — The Open Standard for Generative UI (OpenUI Lang)
kind: paste
captured_at: 2026-07-01 20:13
tags: [generative-ui, openui-lang, llm, react, streaming, framework, ai]
source_url: https://www.openui.com/docs/openui-lang
status: inbox
---

# OpenUI — The Open Standard for Generative UI (OpenUI Lang)

OpenUI — full-stack Generative UI framework by Thesys Dev. Open standard, MIT license, 7.5k stars on GitHub.

Core: OpenUI Lang — compact streaming-first language for LLMs to generate UI. Up to 67% more token-efficient than JSON (benchmarks across 7 UI scenarios: simple-table, chart-with-data, contact-form, dashboard, pricing-page, settings-panel, e-commerce-product).

Three problems OpenUI Lang solves:
1. Token efficiency — positional syntax vs JSON verbosity (294 tokens for contact-form vs 849 JSON). Measures with tiktoken (GPT-5 encoder).
2. Streaming-first — line-oriented (identifier = Expression), trivial to parse/render progressively. 4.9s vs 14.2s at 60 tok/s.
3. Robustness — validates output, drops invalid portions gracefully.

Architecture:
1. System prompt includes OpenUI Lang spec (generated from component library)
2. LLM generates OpenUI Lang (compact line-oriented syntax)
3. Streaming renderer (<Renderer />) parses each line as it arrives, maps to React components in real-time

Components library: charts, forms, tables, layouts — ready to use or extend with Zod-schemas.

Packages:
- @openuidev/lang-core — framework-agnostic parser/prompt/runtime
- @openuidev/react-lang — React rendering runtime
- @openuidev/react-headless — bring-your-own chat UI
- @openuidev/react-ui — prebuilt chat layouts + component libraries
- @openuidev/react-email — React Email component definitions
- @openuidev/vue-lang — Vue 3 bindings
- @openuidev/svelte-lang — Svelte 5 bindings
- @openuidev/browser-bundle — CDN/iframe/no-build embeds
- @openuidev/cli — project scaffolding & prompt generation

Quick start: npx @openuidev/cli@latest create --name genui-chat-app

Supported harnesses: pi Agent Harness, Vercel Eve.

Comparison table (OpenUI vs others):
- OpenUI: 1x tokens, 4.9s latency, streaming yes, components library+custom, multi-platform (web/mobile/email), built-in data fetching, chat UI included
- json-render (Vercel): 3x tokens, 14.2s latency
- A2UI (Google): 3x tokens, 14.2s latency
- CopilotKit OpenGenUI: 4x tokens, ~20s latency, partial streaming, no components, web only

Built-in data fetching with Queries & Mutations support.
Reactive state, incremental editing, built-in functions.
Agent skill available for Claude Code/Codex/Cursor/Copilot via npx skills add.
