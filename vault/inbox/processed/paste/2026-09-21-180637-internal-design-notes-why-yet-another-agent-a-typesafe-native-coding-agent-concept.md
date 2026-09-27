---
title: "Internal Design Notes: 'Why Yet Another Agent' — A TypeSafe-Native Coding Agent Concept"
kind: "paste"
captured_at: "2026-09-21 18:06"
tags: ["typesafe-ai", "coding-agents", "context-management", "kv-cache", "subagents", "compaction", "tool-calling", "design-doc", "internal-notes"]
source_url: "https://docs.google.com/document/d/1G61uUB0FifUnmmrPzFQojZ3KpczYKmXGpgEXDJ2l_Zg/edit"
status: "inbox"
---

# Internal Design Notes: 'Why Yet Another Agent' — A TypeSafe-Native Coding Agent Concept

## Nature of this source
This is a private/internal Google Doc of design notes (not a published article) shared directly by the user, titled 'Why yet another agent.' It reads as a brainstorm/strategy document exploring whether and how TypeSafe AI (previously captured in this vault: src-2026-09-17-001, src-2026-09-18-001) could build a coding agent that is TypeSafe-native rather than a plugin bolted onto existing agents like Claude Code or Codex. This capture paraphrases the document's arguments rather than reproducing its text verbatim.

## Core motivating claims
The author's starting assumptions: coding agents are architecturally simple (largely a while-loop with a small tool set, with little genuine innovation outside the agent loop itself), so a new entrant could reuse the strongest existing components (frontier models via API, and possibly open-source UX/UI patterns) while focusing differentiation on things that can only be done by owning the whole stack rather than sitting as a plugin on top of someone else's agent. The document frames its central design constraint as a thought experiment: how would a coding agent be designed if LLMs had no KV cache at all — a way of exposing which common agent design choices are really artifacts of caching economics rather than principled choices.

## Named problems with current agent architectures
The doc walks through several claimed inefficiencies in the way today's coding agents work:

1. **Model routing to save cost doesn't necessarily save cost.** The author works through a rough cost model comparing pure-large-model usage against a hand-off pattern (route to a cheaper model, then escalate back to the expensive model), using illustrative Opus/Sonnet-style per-token cost ratios. Their arithmetic conclusion, under their own assumed proportions of context/output/intermediate tokens, is that switching to a cheaper model mid-session and later reloading a bigger model to finish can end up costing roughly 1.5x more than just staying on the expensive model throughout, because the larger model has to re-process (not reuse) the accumulated context when it's reloaded. This is presented as the author's own back-of-envelope estimate, not a benchmarked result.
2. **Tool-calling has an up-front cost that scales awkwardly.** Because tool schemas must be declared in the system message regardless of whether they end up used, and models are (in the author's view) not reliably good at high-cardinality or off-policy tool selection, more available tools can mean more consumed context without a matching gain in decision quality. The doc floats that this may be part of why 'skills' (dynamically loaded, rather than always-declared) have an advantage over always-present tool/MCP schemas, while noting skills and tools are still functionally different mechanisms.
3. **Compaction is framed as solving the wrong problem.** The doc argues that summarization-based context compaction assumes every future turn needs one shared, generic compressed state, when a compression tailored to what the *next* query actually needs (query-aware compression) should in principle be both easier and better than generic summarization.
4. **Subagents are described as underused.** The author is 'surprised' current agents don't parallelize more automatically, and guesses the blocking difficulty is state management — deciding what context to hand a subagent and how to merge its results back into the parent's state.
5. **Session restarts are framed as a workaround for state corruption** that could instead be handled by selectively reloading only the still-relevant old state rather than starting over.
6. **'Batteries included' is framed as a real design tradeoff**, contrasting an all-in-one, easy-to-use extreme (the doc cites an X/Twitter reference to 'openclaw' as an example of that extreme) against power-user tools like Claude Code or Codex that assume more configuration by the user.

## Proposed TypeSafe-specific features
The doc splits proposed features into three tiers:

**Basic / portable to any agent:** a permissions layer for approving commands (compared to Claude's auto-mode, but with the idea of programmable rules for what is/isn't allowed, potentially including inspecting a script's contents before executing it) and acting as a routing layer for MCP/tool calls — accepting a high-level description of an intended action and using TypeSafe's own models to pick the best matching tool (or a shortlist) rather than exposing every tool schema up front.

**Advanced / TypeSafe-native:** a 'meta-attention' concept where context itself becomes dynamic rather than a static accumulating log — recalculating, per user query, whether the existing KV cache is still worth reusing versus rebuilding fresh, and separately scoring each individual chunk of context (a tool call, a tool output, a piece of internal reasoning) on a spectrum from 'don't show' through 'show a short summary' to 'show it in full,' rather than compacting everything uniformly. A related idea extends this into cost/intelligence-aware subagent routing, where the difficulty of finding relevant context (rather than just the difficulty of the underlying coding task) becomes a first-class factor in deciding which model handles a subtask.

The doc also proposes a hybrid tool/skill discovery model: keep only lightweight descriptions of available actions loaded 'directionally' (so a model can even know an action might exist) without loading their full schemas, then load the complete schema for a given action only on demand — similar in spirit to a 'tool search tool.' The author's claim is that if this can be done without polluting the context, it would let the agent ship with a very large number of built-in tools and documentation sources at close to zero ongoing context cost.

## Additional speculative ideas ('weirder stuff')
- Adopting existing third-party context-compression tools (the doc names github.com/rtk-ai/rtk as an example) as first-party, properly-prompted integrations rather than leaving models to use them ad hoc, on the theory that LLMs don't natively know how to drive unfamiliar tools well.
- Conditionally loading only relevant sections of an AGENTS.md-style instructions file based on task context (e.g. only loading a frontend style guide for frontend work), contrasted with the doc's characterization of 'skills' as more oriented toward 'do this now' instructions than durable background knowledge, and noting that loaded skills are themselves vulnerable to being summarized away during compaction.
- A reference to Anthropic's Claude Code skill-hooks documentation as a model for more programmable, persistent skill-triggered behavior.
- A reference to an external blog post on 'recursive language models' (a linked personal blog by Alex Zhang) as an example of treating agent state as explicit variables rather than an implicit growing transcript.
- A speculative idea of heatmap-style relevance scoring applied to tool output (e.g. grep results) to filter it down dynamically rather than showing it in full or not at all.
- Security-aware model routing: since some inexpensive models (the doc names DeepSeek V4 as an example of an unusually cheap Chinese-origin model) may pose data-handling risk, the doc floats routing files/tasks to different model providers based on file sensitivity classification, and more generally routing by policy reasons beyond pure cost/difficulty (e.g. avoiding a given vendor's models for research on that vendor, or avoiding certain vendors entirely for safety-sensitive work).

## Appendix: named tools and references cited in the doc
The document's appendix lists several external tools as examples of the 'battteries' pattern, each with the author's own added notes (not independently verified in this capture):
- github.com/chopratejas/headroom — described as a context compressor; author suggests it would benefit from a classifier judging whether a compression preserved the necessary information.
- github.com/rtk-ai/rtk — described as a tool-output compressor (also referenced earlier in the doc).
- github.com/ast-grep/ast-grep — described as an alternative structural code search tool; author speculates about loading its manual for one-off queries and using a model to filter generated queries for relevance.
- ast-outline.github.io — described as another structural search tool; author speculates about using it for hierarchical function-call navigation (using a model to pick which subtree of a codebase to investigate).
- github.com/microsoft/fastcontext — described as a subagent for repo exploration; the doc cites (as the tool author's own claim, not independently verified here) that in an analysis of GPT-5.4 agent trajectories, reading and searching accounted for 56.2% of all tool-use turns and 46.5% of the main agent's total tokens.
- github.com/dmtrKovalenko/fff — described as a typo-resistant path/content search tool with frequency-ranked file access, a background watcher, and an in-memory content index, claimed by the doc's author to be faster than ripgrep/fzf in long-running processes that search repeatedly.

A second appendix on 'background processing' observes that several recent agent-workflow patterns the author has noticed on social media (cited via several X/Twitter post links, not independently verified in this capture) share a common shape: they run as read-only, background extensions to normal coding work (e.g. parallel HTML-page generation, background eval creation, cross-model review such as having one model review another's output). The doc argues that a TypeSafe-native agent's assumed explicitness about state (treating context as tracked variables rather than an implicit accumulating log) would pair well with this background-processing pattern, since work spent finding relevant context could in principle be shared across multiple background tasks rather than redone by each one — making it cheaper to run many more background tasks than would otherwise be economical.

## Evidence boundary
This document is the user's own (or their team's) internal design notes, read directly via Google Docs. It is a brainstorm/opinion document, not a verified technical specification or an announced product — none of the proposed TypeSafe agent features described here (permission layers, meta-attention context scoring, hybrid tool discovery, security-aware routing) are confirmed to be built, shipped, or officially announced by TypeSafe AI as of this capture. The cost-modeling arguments (e.g. the Opus/Sonnet routing cost comparison) are the document author's own illustrative arithmetic with self-chosen assumed proportions, not independently benchmarked figures. The various linked external tools, blog posts, and social-media posts cited in the doc's appendix were not independently fetched or verified in this capture; their descriptions here reflect the document author's own characterization of them.

## Related records in this vault
- src-2026-09-17-001 — TypeSafe AI's RLCD pitch (calibrated decision models, Jev, Diogo Almeida)
- src-2026-09-18-001 — fast-jev-compaction, a third-party plugin using TypeSafe's Jev model for Claude Code context pruning, directly relevant to this doc's 'compaction solves the wrong problem' argument

## Sources
- https://docs.google.com/document/d/1G61uUB0FifUnmmrPzFQojZ3KpczYKmXGpgEXDJ2l_Zg/edit (private/internal Google Doc, shared directly by the user)
