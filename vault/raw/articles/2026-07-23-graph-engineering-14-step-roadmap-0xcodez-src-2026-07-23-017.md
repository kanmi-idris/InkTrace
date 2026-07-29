---
source_id: src-2026-07-23-017
captured_at: 2026-07-23T07:05:00Z
url: "https://x.com/0xCodez/status/2079165300625330317"
status: complete
---

# The 14-Step Graph Engineering Roadmap: Turning Linear Agents into Coordinated Fleets

**Author:** @0xCodez
**Platform:** X (Twitter) — long-form article
**Date:** ~Jul 2026

## Core Thesis

Most multi-step agents are linear chains — one head, one context, one thing at a time. The 14-step roadmap turns that single-file line into a graph that fans out across a fleet, verifies its own findings, and converges on results a lone agent could never hold. Claude Code's Dynamic Workflows is the enabling tooling: Claude writes a plain JavaScript orchestration script and spawns a coordinated fleet of subagents, with coordination costing zero model tokens.

---

## The 14 Steps

### 01. Nodes are jobs. Edges are what flows.
A node = one agent, one bounded job, one input in, one output out. An edge = a real data dependency. The edge test: "Does the next step read the last step's output?" If not, there is no edge and the wait is wasted.

### 02. Your linear script is a degenerate graph
A chain is a graph where every node has exactly one edge in and one edge out — it's the worst possible graph. Redraw by cutting arrows that don't carry data, collapsing the chain into wider independent nodes feeding a single consolidation point.

### 03. Give every node a contract
Bounded input, bounded output, exactly one job. JSON schema on `agent()` calls forces validated structured output — validation at the tool-call layer, Claude retries on mismatch, and the next node consumes without guessing.

### 04. Treat the edge as a data contract
An edge is "A produces shape X, B consumes shape X." When you name edges by data, not order, you can instantly see whether an edge is real and swap nodes without breaking the graph. Edges in code (flatten, dedupe, filter) cost zero tokens — resist spawning agents for plumbing.

### 05. Fan out with parallel()
`parallel()` takes N independent thunks, spawns one subagent per thunk concurrently, returns array of results. Key: it's a barrier (waits for all), a thrown thunk resolves to null (doesn't sink batch), concurrency is capped around core count.

### 06. Fan in at a barrier
Use a barrier only when a stage genuinely needs every prior result together. Cross-source dedupe? Barrier. Just flattening a list? That's an edge — do it inline.

### 07. The diamond: split → work → merge
Fan-out → reduce (plain code) → synthesize (final agent). The canonical topology. Once you see the diamond, you stop asking "how do I do more steps" and ask "where's the split, where's the merge."

### 08. Route the edge at runtime with a conditional
Router node inspects a result, decides which downstream path fires. Control flow lives in code (if/switch) — deterministic, no emergent behavior. Claude's judgment at the node, script's reliability at the edge.

### 09. Put a verifier on the edge
A verifier tries to kill the finding before it passes downstream. Three patterns: adversarial verify (N independent skeptics refute, keep if majority survive), perspective-diverse verify (distinct lenses — correctness, security, repro), judge panel (N attempts, score with parallel judges, synthesize winner + graft runners-up).

### 10. Isolate nodes so one failure can't poison the graph
A failing thunk inside `parallel()` resolves to null — `.filter(Boolean)` is the containment. Design every fan-in to tolerate missing inputs. For write conflicts: git worktree isolation per agent.

### 11. Add a cycle — but make it converge
Loop-until-dry: keep spawning finders until K consecutive rounds surface nothing new. Critical detail: dedupe against everything SEEN, not just confirmed results — otherwise rejected findings reappear forever.

### 12. Tier the models across the nodes
Bounded/repetitive nodes → cheaper model. Judgment-heavy nodes → best model. `agent()` calls can override the session model per node.

### 13. Topology is your cost and latency
`parallel()` = barrier, waits for slowest node. `pipeline()` = streams each item through stages independently — fast items finish early. Default to pipeline. Barriers only when a stage truly needs every prior result at once.

### 14. Let Claude draw the graph — self-routing
Three ways: say "workflow" in prompt, run a saved workflow (`/deep-research`), or turn on ultracode. Orchestration scripts saved to `.claude/workflows/` are version-controlled and re-runnable by name.

## Example Workflows

- **Security sweep**: one subagent per route file → verifier pass → report
- **Cited research** (`/deep-research`): scope → parallel search → fetch → adversarial verify → synthesize
- **Module porting**: fan-out translation across files → test gate → loop failures
- **Diff review**: route on diff size (quick pass vs parallel audit with distinct lenses)
- **Ecosystem scan**: parallel sources → rank → digest, saved and re-run
- **Unknown-size discovery**: parallel finders → dedupe vs seen → verify → loop until 2 empty rounds

## Conclusion

"A prompter asks a question. An architect draws a graph." The linear agent was the first shape everyone reaches for — once you see nodes and edges, you stop asking the agent to do more and start asking the graph to do it wider.

## Notes

- Strong companion to src-2026-07-23-016 (@0xWast3 — same graph engineering thesis, different depth/angle). @0xCodez's version is more implementation-focused with concrete Claude Code patterns.
- Part of the graph engineering cluster: src-2026-07-23-001 (Perez conceptual), src-2026-07-23-003 (Machina course), src-2026-07-23-016 (@0xWast3 practical).
- Specific to Claude Code's Dynamic Workflows, but architectural patterns (diamond, verifier, loop-until-dry) generalize.
