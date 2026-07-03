---
title: Codebase Memory MCP — Graph-based Codebase Indexing for Coding Agents
kind: paste
captured_at: 2026-06-30 14:55
tags: [mcp, codebase-indexing, graph, tree-sitter, claude-code, codex, agent-tooling]
source_url: https://github.com/DeusData/codebase-memory-mcp
status: inbox
---

# Codebase Memory MCP — Graph-based Codebase Indexing for Coding Agents

Codebase Memory MCP — graph-based codebase indexing MCP tool for coding agents (Claude Code, Codex). Indexes codebases using pure C + tree-sitter (no LLM in the loop). Indexes Linux kernel (28M lines) in ~3 min, normal repos in seconds.

Key insight: grep + read pattern breaks at scale (wall of matches, wasted context tokens, can't connect across 3-4 repos). Embeddings-based semantic retrieval also unreliable (misses actual chunks, can't follow function calls across files).

Instead: codebase IS already a graph (imports = deps, function calls = edges, routes = handlers). Tree-sitter extracts this structure.

Tools provided:
- get_architecture — one-call overview of codebase structure
- search_graph — locate exact node for function/class/route by name or meaning
- trace_path — map call chain: who calls this, what it touches
- query_graph — Cypher queries against graph (e.g. "functions that call handleOrder without test coverage")
- get_code_snippet — pull exact source for a symbol
- detect_changes — map diff to architecture during PR review

Smart hook: installs pre-tool-use hook on grep. When agent greps a function, grep runs normally AND the hook looks up the query in the graph, folding structural answer into the result. Agent never needs a special tool — it greps, graph rides along.

Token savings: ~50% token reduction because agent gets proper map instead of grepping blindly.

Install (with UI):
  curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash -s -- --ui
Then tell agent: "Help me use Codebase Memory MCP"

Index stays in sync with code (no LLM regeneration cost, no drift).

Mentioned in context of AI Builder Club's setup-codebase-harness skill (src-2026-06-30-005).
