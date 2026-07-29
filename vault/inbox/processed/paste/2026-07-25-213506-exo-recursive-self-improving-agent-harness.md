---
title: Exo - Recursive Self-Improving Agent Harness
kind: paste
captured_at: 2026-07-25 21:35
tags: []
source_url: 
status: inbox
---

# Exo - Recursive Self-Improving Agent Harness

https://github.com/exoharness/exo — Exo: an agent + harness architecture that is fully recursive, able to safely edit all aspects of itself at runtime. Rust + TypeScript (pnpm monorepo). MIT. 236 stars, 20 forks, 82 commits. By exoharness team. Website: https://exoharness.ai

Core philosophy: fully recursive self-improvement. Has full visibility into its own code and runtime logs. Can incrementally improve prompts, memory, tooling, harness policy. Cannot modify event log (prevents recursive loops). Goal: minimal framework for maximally Bitter Lesson-aligned agents.

Architecture:
- Host-side loop (outside sandbox): receives messages + adapter events, builds model context, exposes tools, executes calls, records results
- Sandbox: vanilla Ubuntu Docker container for code execution, snapshottable/rewindable
- Tools + Adapters: tools are model-callable functions (shell etc), adapters are long-running host processes for external channels
- Canonical State: durable history outside sandbox (survives sandbox rewinds)
- Source Code: mounted in sandbox at /workspace/exo, agent can modify + rebuild + restart itself
- REPL + ExoChat: CLI chat + web-based chat at exoharness.ai

Setup: curl one-liner (setup.sh). Requires git + Docker + OpenAI/OpenRouter API key.
CLI: ./exo.sh (start), list, stop-all, fresh, setup-profile

Templates: canonical (Docker + ExoChat), dev (IRC + Discord), minimal (bare REPL)

Active work areas: autonomous self-maintenance, recoverable/portable execution, multi-agent cloning/lineage/policies

Prompts: examples/exo/prompts/me.md (core identity), .exo/exo-profile.md (local profile), examples/exo/harness.ts (full prompt assembly)

Shortcomings: no generalized computer use of windowed system yet.
