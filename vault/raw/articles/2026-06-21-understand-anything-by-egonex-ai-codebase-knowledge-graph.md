---
title: Understand Anything by Egonex AI — Codebase Knowledge Graph
kind: paste
captured_at: 2026-06-21 07:07
tags: [knowledge-graph, codebase-analysis, developer-tools, claude-code, opencode, ai-agent]
source_url: 
status: inbox
---

# Understand Anything by Egonex AI — Codebase Knowledge Graph

# Understand Anything — Egonex AI

## Source
https://github.com/Egonex-AI/Understand-Anything

## Overview
Turn any codebase, knowledge base, or docs into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, OpenCode, and more.

**Stars**: 64.8k | **Forks**: 5.4k | **License**: MIT
**Language**: TypeScript (71.2%), JavaScript, Python, Astro

## Key Features
- **Structural Graph**: Interactive knowledge graph of every file, function, class, and dependency
- **Business Domain View**: Switch to horizontal graph showing domains, flows, and steps
- **Knowledge Base Analysis**: Parse Karpathy-pattern LLM wikis into force-directed graphs with community clustering
- **Guided Tours**: Auto-generated walkthroughs ordered by dependency
- **Fuzzy & Semantic Search**: Find anything by name or meaning
- **Diff Impact Analysis**: See ripple effects of changes before committing
- **Persona-Adaptive UI**: Detail level adjusts based on role (junior dev, PM, power user)
- **Layer Visualization**: Color-coded by architectural layer (API, Service, Data, UI, Utility)
- **Language Concepts**: 12 programming patterns explained in context

## Architecture
### Tree-sitter + LLM Hybrid
- **Tree-sitter (deterministic)**: Parses source into concrete syntax tree, extracts structural facts (imports, exports, function/class definitions, call sites, inheritance). Same input → same output. Powers fingerprint-based change detection for incremental updates.
- **LLM (semantic)**: Produces plain-English summaries, tags, architectural layer assignments, business-domain mapping, guided tours.

### Multi-Agent Pipeline (7 agents)
1. `project-scanner` — Discover files, detect languages and frameworks
2. `file-analyzer` — Extract functions, classes, imports; produce graph nodes and edges (parallel, up to 5 concurrent)
3. `architecture-analyzer` — Identify architectural layers
4. `tour-builder` — Generate guided learning tours
5. `graph-reviewer` — Validate graph completeness
6. `domain-analyzer` — Extract business domains, flows, process steps
7. `article-analyzer` — Extract entities, claims from wiki articles

## Multi-Platform Support
Native plugin for Claude Code, auto-discovery for Cursor and VS Code Copilot. One-line install for Codex, OpenCode, Gemini CLI, Copilot CLI, Pi Agent, Vibe CLI, Cline, KIMI CLI, Trae, Nanobot, Kiro, and more.

## Commands
- `/understand` — Analyze codebase and build knowledge graph
- `/understand-dashboard` — Open interactive web dashboard
- `/understand-chat` — Ask anything about the codebase
- `/understand-diff` — Analyze impact of current changes
- `/understand-explain` — Deep-dive into specific file/function
- `/understand-onboard` — Generate onboarding guide
- `/understand-domain` — Extract business domain knowledge
- `/understand-knowledge` — Analyze Karpathy-pattern wiki
- `--language` flag for localized output (en, zh, zh-TW, ja, ko, ru)
- `--auto-update` for incremental updates on commit

## Details
- Created originally by Lum1104
- Part of Egonex AI ecosystem (egonex.ai)
- Live demo: understand-anything.com/demo
- Graph is just JSON — commit it once, teammates skip pipeline
- Supports git-lfs for large graphs (10 MB+)
- Uses pnpm workspace, vitest for testing
- Install: `curl -fsSL https://raw.githubusercontent.com/Egonex-AI/Understand-Anything/main/install.sh | bash`

## Tags
knowledge-graph, codebase-analysis, developer-tools, claude-code, opencode, ai-agent
