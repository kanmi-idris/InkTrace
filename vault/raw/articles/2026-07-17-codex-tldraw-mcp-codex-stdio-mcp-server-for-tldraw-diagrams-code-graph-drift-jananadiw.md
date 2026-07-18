---
title: codex-tldraw-mcp — Codex stdio MCP server for tldraw diagrams + code-graph drift (jananadiw)
kind: paste
captured_at: 2026-07-17 13:04
tags: [mcp, codex, tldraw, architecture-diagrams, repo-visualization, dev-tools, code-graph-drift, stdio-mcp]
source_url: https://github.com/jananadiw/codex-tldraw-mcp
status: inbox
---

# codex-tldraw-mcp — Codex stdio MCP server for tldraw diagrams + code-graph drift (jananadiw)

# codex-tldraw-mcp (jananadiw)

A Codex (OpenAI) stdio MCP server that generates repo-local tldraw diagrams and checks trackable code graphs for drift. npm: `codex-tldraw-mcp` (v0.4.0, Jul 16 2026), GitHub: jananadiw/codex-tldraw-mcp. 5★, MIT. TypeScript 99.8%. Uses Bun. Topics: mcp, tldraw, codex, architecture-diagrams, repo-visualization, stdio-mcp, workflow-diagrams.

## What it does
- Generates a repo-local `.tldr` board (`<repo>/boards/main.tldr`) that stays with the project it explains.
- Infers a user-facing product workflow from package metadata + source text.
- Prompt-driven offline canvas API for drawing workflows, state machines, plans, architecture sketches (not tied to repo scanning).
- Trackable JS/TS module/import graph with drift detection.
- Red markers = stale nodes/edges, orange = changed modules, report of new elements.
- Steps/arrows laid out left-to-right; non-destructive: new diagrams appended to the right.
- MCP resources to list boards and read summaries.

## Tools
- `diagram_repo` — scan repo, append a product workflow diagram to `boards/<boardName>.tldr`.
- `draw_canvas` — append prompt-provided workflow / state machine / architecture sketch / plan. Does NOT scan source.
- `diagram_code_graph` — scan repo-local JS/TS modules, append trackable import graph.
- `compare_code_graph` — preview drift or mark changed/stale elements on an existing graph (preview default; `applyMarkers: true` to write).
- `list_boards` — list boards under `boards/`.
- `read_board_summary` — summarize diagrams + shape counts.

Each tool accepts optional `repoPath` (relative resolved from MCP server cwd). Board resources track the most recent `repoPath` used.

### Code graph drift comparison (4 states)
- `unchanged`: stored identity + fingerprint still match.
- `changed`: module exists but exports/local imports changed.
- `stale`: board element no longer in current graph → red dashed.
- `new`: current graph element absent from board (reported; v0.4.0 does not insert/rearrange).
Re-running restores original style when code matches. Comparison changes only MCP-generated graph styling/metadata; preserves positions, sizes, labels, manual shapes, other diagrams. Boards from older releases lack trackable metadata — must create a graph with `diagram_code_graph` first.
Scanner supports .js/.jsx/.mjs/.cjs/.ts/.tsx/.mts/.cts. Models module/import relationships (static + dynamic imports, re-exports, CommonJS require), NOT runtime call graphs. Reports unresolved relative imports; counts external imports without drawing them.

## Install / config (Codex)
```
codex mcp add codex-tldraw -- npx -y codex-tldraw-mcp
```
Manual:
```
[mcp_servers.codex-tldraw]
command = "npx"
args = ["-y", "codex-tldraw-mcp"]
```

## Security
Local filesystem tool: reads from `repoPath`, writes `.tldr` under `repoPath/boards`. Allowlist via `TLDRAW_MCP_ALLOWED_ROOTS` (path-delimited). `.tldr` shape metadata stores only repository-relative source paths (no absolute local paths).

## Why it exists (motivation / design note)
Snapshot-only — does not drive a live interactive canvas or collaboration. Writes `.tldr` files to disk via stdio MCP so a tldraw-compatible viewer opens them later. The official tldraw MCP App targets hosts that render an interactive canvas in chat (e.g. Cursor); in Codex Desktop, the live `exec` path timed out (every call >30s, even a read-only shape count). This is the Codex-first fallback: reliable stdio tool calls + on-disk snapshots, less interactive but works.

## Positioning
Fits the MCP / AI-dev-tools cluster in the vault: Legend Skills (src-2026-07-17-010), Schema Harness ARC-AGI-3 (src-2026-07-17-005/006), Composio MCP tooling. Relevant to InkTrace's own agent-harness work — a Codex-native way to visualize repo architecture and detect drift, conceptually adjacent to the codebase-design / decision-mapping skills. Note: targets Codex (OpenAI), not the Claude/opencode agents here; the pattern (stdio MCP → on-disk diagram snapshot) is the reusable insight.
