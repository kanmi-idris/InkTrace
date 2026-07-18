---
title: Codex-Orchestration — Multi-Model Workflow Plugin for Codex
kind: paste
captured_at: 2026-07-12 20:44
tags: [codex, orchestration, multi-model, ai-agents, workflow, plugin, open-source, mit, python]
source_url: 
status: inbox
---

# Codex-Orchestration — Multi-Model Workflow Plugin for Codex

## Codex-Orchestration

Source: https://github.com/Cjbuilds/Codex-Orchestration (19 ★, MIT)
Author: Cjbuilds

### What it is
A Codex plugin that brings multiple models like Claude Fable 5 into Codex, assigns them roles (advisor, executor, researcher, writer, designer, reviewer), and orchestrates multi-model workflows — all within a single Codex task.

### How it works
- Root orchestrator (Codex's selected model) creates the plan
- Fable 5 reviews as plan advisor, finds gaps/risks
- Root improves plan, decides what feedback to use
- Luna executors build independent parts in parallel
- Root integrates, tests, and verifies final result

### Typical workflow
```
Your task → Root orchestrator → Fable 5 review → Root improves → Luna executors (parallel) → Root tests & delivers
```

### Why use it
- Better plans: Fable 5 challenges the root model before implementation
- More perspectives: different models for planning, research, design, writing, review, execution
- Faster implementation: parallel executors up to 2x faster on suitable tasks
- Less limit pressure: move repeated work away from the root model (~40% less premium-model limit usage)

### Commands
- `/codex-orchestration setup executor: GPT-5.6 Luna Extra High, advisor: Claude Fable 5 High`
- `/codex-orchestration create these project roles: ...` (define custom roles with model, provider, effort, job)
- `/codex-orchestration status` / `/codex-orchestration disable`

### Installation
```
codex plugin marketplace add Cjbuilds/Codex-Orchestration
codex plugin add codex-orchestration@codex-orchestration
```

### Key limits
- Codex remains the root orchestrator (Fable 5 is an advisor, not second orchestrator)
- Other providers must be pre-configured and authenticated
- Plugin never creates credentials or bypasses permissions
- Respects "no subagents" instruction

### Related Sources
- src-2026-06-22-002 (Agent Harnesses — standardized agent context format)
- src-2026-06-22-004 (LangChain — Anatomy of an Agent Harness)
- src-2026-06-24-002 (Eyad Khrais — AI Harness Engineering 101)
