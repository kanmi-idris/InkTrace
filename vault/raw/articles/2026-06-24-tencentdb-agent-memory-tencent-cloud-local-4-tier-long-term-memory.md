---
title: TencentDB Agent Memory — Tencent Cloud (Local 4-Tier Long-Term Memory)
kind: paste
captured_at: 2026-06-24 09:41
tags: [agent-memory, long-term-memory, tencent, openclaw, hermes, symbolic-memory, vector-search, local-first]
source_url: 
status: inbox
---

# TencentDB Agent Memory — Tencent Cloud (Local 4-Tier Long-Term Memory)

# TencentDB Agent Memory — Tencent Cloud

## Source
https://github.com/TencentCloud/TencentDB-Agent-Memory

## Overview
Fully local long-term memory for AI agents via a 4-tier progressive pipeline. Zero external API dependencies. 6.1k stars, 529 forks. Available as OpenClaw plugin & Hermes Gateway adapter.

## Core Architecture

### Memory Layering (4-tier semantic pyramid)
- **L0 Conversation**: raw dialogue
- **L1 Atom**: atomic facts from conversations
- **L2 Scenario**: scene blocks (solution patterns derived from execution traces)
- **L3 Persona**: user profile (day-to-day preferences, voice, long-term goals)

### Two Pillars
1. **Memory Layering** — progressive disclosure with heterogeneous storage
   - Bottom layer (facts, logs, traces): persisted in databases (SQLite + sqlite-vec)
   - Top layer (personas, scenes, canvases): human-readable Markdown files
   - Full traceability: deterministic path from abstraction → evidence

2. **Symbolic Memory** — maximum semantics in minimum symbols
   - Mermaid symbol graph for task state transitions
   - History offloading: full tool logs to external files (`refs/*.md`), lightweight Mermaid canvas in context
   - `node_id` tracing: agent reasons over symbol graph, retrieves raw text by node_id

### Short-term Compression
- Context offloading with Mermaid canvas
- Raw tool outputs (`refs/*.md`) → step-level summaries (`jsonl`) → Mermaid canvas
- Agent only attends to top-layer structure, drills down via `node_id` on error

## Performance Benchmarks
| Task | Without Plugin | With Plugin | Improvement |
|------|---------------|-------------|-------------|
| WideSearch (pass rate) | 33% | 50% | +51.52% |
| WideSearch (tokens) | 221.31M | 85.64M | −61.38% |
| SWE-bench (pass rate) | 58.4% | 64.2% | +9.93% |
| SWE-bench (tokens) | 3474.1M | 2375.4M | −33.09% |
| PersonaMem (accuracy) | 48% | 76% | +59% |

## Integrations
- **OpenClaw**: plugin-based, zero-config to enable
- **Hermes Gateway**: Docker image or attach to existing install
- **Storage**: local SQLite + sqlite-vec (default), TCVDB (optional)
- **Retrieval**: hybrid (BM25 + vector + RRF)

## Features
- White-box debuggability: all memory artifacts are readable files under `~/.openclaw/memory-tdai/`
- Production-ready: 96 commits, 8 releases (v0.3.6 latest)
- TypeScript (83.9%), Python (7.6%), Shell (7.1%)
- MIT license

## Tags
agent-memory, long-term-memory, tencent, openclaw, hermes, symbolic-memory, vector-search, local-first
