---
source_id: src-2026-07-23-016
captured_at: 2026-07-23T07:00:00Z
url: "https://x.com/0xWast3/status/2079899723947712845"
status: complete
---

# Graph Engineering: How to Run 1,000 AI Agents in Parallel From One Prompt

**Author:** @0xWast3
**Platform:** X (Twitter) — long-form article
**Date:** ~Jul 2026

## Core Thesis

The bottleneck in multi-agent systems is not the model — it's the execution topology. Most multi-step agents are written as linear chains (step 1 → step 2 → step 3), forcing sequential execution even when steps have no data dependencies. Graph engineering replaces chains with directed acyclic graphs (DAGs) where independent nodes run in parallel and only real dependencies wait.

## Key Concepts

### Loops vs Graphs
- **Loop**: one agent, one metric, cycling until convergence. Failure mode: Goodhart's Law — optimizes what you measure, ignores everything else.
- **Graph**: network of loops that watch and correct each other. No single metric drives the system — the structure does.

### The Edge Test
The defining question for any "and then" in a workflow: **Does the next step actually read the previous step's output?**
- Yes → real edge (keep sequential)
- No → no edge (run in parallel)

### Fan-Out / Fan-In Pattern
1. Orchestrator decomposes task into independent nodes
2. All independent nodes run concurrently via `asyncio.gather`
3. Layered fan-in (batches of 20-50) consolidates results
4. Final synthesis step — the one true edge

## Practical Architecture

```
                    Orchestrator
                         |
        +--------+-------+-------+--------+
        v        v       v       v        v
     Node 1   Node 2  Node 3  ...      Node N
   (parallel, no edges between any of them)
        |        |       |               |
        +--------+-------+-------+-------+
                         v
                 Batch Summary  <- layered fan-in (groups of 30)
                         v
                 Final Report   <- the one true edge
```

## Scaling Results

- **Linear chain (40 steps):** ~5 minutes (40 sequential API calls × ~8s each)
- **Graph (40 parallel nodes + 1 consolidation):** ~15 seconds (bounded by slowest single file)
- Same underlying work, different topology: ~20x speedup

## Three Failure Modes

1. **Context collapse**: feeding 1,000 raw outputs into one consolidation step blows context windows. Fix: layered fan-in (summarize batches, then consolidate summaries).

2. **False independence**: nodes that don't share data but share resources (same file, same rate-limited API). Fix: audit shared resources, not just shared data.

3. **Silent node failure**: one failed node among 200 vanishes into a complete-looking report. Fix: fan-in checks expected node count against actual before synthesizing.

## Tools Mentioned

- Claude Code with Dynamic Workflows support
- Anthropic API (`claude-sonnet-5`, `claude-opus-4-8`)
- Python `asyncio` for concurrency

## Notes

- The orchestrator's only job is to decompose the task into nodes, identify real edges, and dispatch — it does no work itself.
- The author argues the real shift is: "You stop being the person who writes every step, and become the person who designs the dependency structure."
- Cross-references: src-2026-07-23-001 (Carlos E. Perez — From Loop Engineering to Graph Engineering) for the conceptual framing, and src-2026-07-23-003 (Machina's graph engineering course) for educational context.
- Code examples are illustrative pseudocode — not production-ready without error handling, rate limiting, and retry logic.
