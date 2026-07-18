---
title: Schema Harness: ~99% on ARC-AGI-3 Public via physicist-style world modeling
kind: paste
captured_at: 2026-07-17 11:28
tags: [schema-harness, arc-agi-3, agent-harness, world-model, rhae, benchmark, claude, codex]
source_url: https://schema-harness.github.io/
status: inbox
---

# Schema Harness: ~99% on ARC-AGI-3 Public via physicist-style world modeling

Schema Harness — https://schema-harness.github.io/ (GitHub Pages, repo: github.com/schema-harness/schema-harness.github.io)

Core claim (announced ~Jul 16–17 2026): Schema is a harness that enables frontier LLMs to achieve ~99% on the ARC-AGI-3 public benchmark.

Method — models act like physicists:
1. Write each game's mechanics as an executable program (a "schema" of the world).
2. Verify the program against recorded history (state grounding + mechanism discovery).
3. Plan inside the learned program using search.

This matches the ARC-AGI-3 design: agents get a 64×64 grid plus legal actions, no rules, stated goal, or reward — they must discover both what the world is and how it works (Haven Feng's framing).

Benchmark context (ARC-AGI-3):
- Interactive Reasoning Benchmark measuring an AI agent's ability to generalize in novel, unseen environments.
- Measures: Exploration, Percept→Plan→Action, Memory, Goal Acquisition, Alignment.
- RHAE = Relative Human Action Efficiency — the scoring metric (the `rhae` column in the schema-traces dataset).

Companion artifacts:
- HF dataset schema-harness/arc-agi-3-schema-traces: 50 rows, cross-model comparison of Claude (claude-opus-4-8, claude-fable-5) and Codex CLI (gpt-5.6-sol) across effort levels max/xhigh on the same ARC-AGI-3 task IDs (ar25, bp35, cd82, ...), recording per-level clears, status (win/stopped), and final rhae score.

Media coverage (Jul 16–17 2026): daily.dev, Nahornyi AI Lab, whatifmonsters, hb.int2inf — all report the ~99% ARC-AGI-3 Public result and analyze its implications for agent architecture and AI automation.
