Source: https://x.com/0xCodez/status/2079165300625330317
Title: Graph Engineering with Claude: 14-Step Roadmap from 0 to Graph Architect (Full Course)
Author: Codez / Lev Deviatkin (@0xCodez)
Posted: 2026-07-20
Retrieved: 2026-07-22
Source ID: src-2026-07-22-013

---

## Stats
- 1.3M+ views
- 63K reposts
- 5.3K comments
- 1.9K bookmarks

## Summary

Transition from linear AI prompting to complex graph-based agent architectures using Claude Code's dynamic workflows. The core insight: 9/10 multi-step agents are needlessly sequential — half the steps never needed to wait. The solution is a graph: nodes (agents/jobs) connected by edges (data dependencies), enabling fan-out, routing, and self-healing.

## The 14 Steps

### PART 1: Foundations

**01 — Nodes are jobs. Edges are what flows.**
A node is a unit of work (one agent, one bounded job). An edge is a data dependency. Mistaking "and then" for an edge is the most common error — if no variable crosses, there is no edge, and the wait is wasted.

**02 — Your linear script is a degenerate graph.**
A single unbranching chain of A→B→C→D is technically a graph, but fragile and slow. The first skill is redrawing the chain: for each arrow, ask "does the next step read the last step's output?"

**03 — Schema-constrain every output.**
Every node must return validated structured data (JSON Schema). This makes outputs machine-trustworthy — the next node can depend on the shape, not parse free text. Use `schema:` in Claude Code's agent() calls.

**04 — Treat the edge as a data contract.**
An edge is not just "B comes after A" — it's a typed pipeline between two nodes. The contract specifies what shape of data crosses. With contracts, any node can be replaced or parallelized as long as the contract is met.

### PART 2: Scaling

**05 — Fan out at the source.**
Given N independent sources of work, spawn N agents in parallel instead of serial processing. Claude writes the orchestration JS, not another conversation — coordination costs zero model tokens.

**06 — Fan in at a barrier.**
Without a gather step, parallel work is wasted. Use a barrier node that collects all parallel results and feeds the next stage. The barrier is the decision point.

**07 — Route with code, not with prompts.**
Use a classifier node (returns {severity: "low"|"high"}) followed by an if/else in the orchestration code. The routing logic stays in code (cheap, deterministic) while the classification stays in the model (expensive, probabilistic).

**08 — Layer verification as a subgraph.**
Instead of asking one agent to both produce and verify, split: a producer node creates, a separate verifier node audits. The verifier can itself be a parallel fan-out across lenses (correctness, security, reproducibility).

**09 — Put a verifier on the edge.**
Every edge can carry a verification step. Before data passes to the next node, a verifier checks it. Failed data gets re-routed to a repair node or escalated.

**10 — Idempotent nodes.**
Design nodes so re-running them with the same input produces the same output. This enables retry-after-failure without side effects.

### PART 3: Production

**11 — Tie off with a convergence node.**
A convergence node at the end of each branch prevents partial-failure drift. Like a barrier but structural — it says "this path is done, here is the result."

**12 — Tier the models across nodes.**
Not every node needs the best model. Bounded/repetitive nodes (extract, classify) can use cheaper models. Judgment nodes (synthesize, adjudicate) get the frontier model.

**13 — Pipeline() over barrier() for independent items.**
Default to pipeline streaming unless a stage truly needs every prior result at once. Barrier latency is real, measurable, wasted time.

**14 — Let Claude draw the graph (self-routing / dynamic workflows).**
For unpredictable tasks, describe the objective and Claude writes the orchestration script itself. Dynamic workflows: Claude decomposes, fans out, spawns subagents, and synthesizes. Three entry points: say "workflow" in the prompt, run a saved one (/deep-research), or enable ultracode.

## Key Concepts

- Dynamic workflows: Claude writes plain JavaScript orchestration scripts and spawns coordinated subagent fleets
- Orchestration costs zero model tokens (it's code, not conversation)
- /deep-research is a real production graph: scope → parallel search → fetch → adversarial verify → synthesize
- The prompter-architect divide: "Prompter asks a question. Architect draws a graph."

## Related Works

- Previous viral article by Codez: "Loop engineering: the 14-step roadmap from prompter to loop designer" (1.7M views)
- Andrew Ng's 1-hour course on building agentic knowledge graphs from scratch
- /deep-research pattern: scope → parallel search → fetch → adversarial verify → synthesize
