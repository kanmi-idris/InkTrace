---
title: Cerebras — How We Built Our Knowledge Base (internal RAG, 15k queries/day)
kind: paste
captured_at: 2026-07-18 01:18
tags: [rag, knowledge-base, cerebras, mcp, retrieval, rrf, reranker, agents, internal-tooling]
source_url: https://www.cerebras.ai/blog/how-we-built-our-knowledge-base
status: inbox
---

# Cerebras — How We Built Our Knowledge Base (internal RAG, 15k queries/day)

# Cerebras — How We Built Our Knowledge Base (internal RAG system)

Original: cerebras.ai/blog/how-we-built-our-knowledge-base (page returned HTTP 500; reconstructed from Cerebras' X announcement + mer.vin third-party write-up dated Jul 17 2026).

## Scale & adoption
- **15,000+ employee questions/day** — one of the most widely adopted internal tools at Cerebras, ~3 months after launch.
- Used by **humans, automations, AND agents**.
- Solves "Where is X?", "Who knows Y?", "What is Z?" across fast-growing teams (data center ops, chip design, hardware, training, inference, cloud platform).

## Design principle: meet data where it lives
Rejected the "one platform for everything" playbook. Instead of forcing a single source of truth, extract data directly from each platform (Slack, code repos, docs) — minimal change to existing behavior.

## Architecture
- **Unified data model** for collected/stored internal data.
- **Query pipeline** = LLM planner → parallel tool calls → fusion → synthesis LLM:
  - `search_slack` (hybrid retrieval)
  - `search_code` (ripgrep)
  - `search_unified` (RRF over unified index)
  - `who_knows` (people/expertise lookup)
  - All fused via **RRF + reranker** → synthesis LLM → answer with citations.
- **Signal fusion**: combines full-text + embedding + IDF + age-decay BEFORE reciprocal rank fusion, so paraphrase matches win without filler messages ranking first.
- **Two interfaces**: Web UI and **MCP** (so agents consume it directly).
- **Projects + scoped search** for narrowing context.
- **Custom data sources** extensible.

## Why it matters / positioning
A production RAG teardown from a frontier-lab infra team — notable because it's agent-consumable via MCP (same pattern as Voicebox `src-2026-07-18-004`, codex-tldraw-mcp `src-2026-07-17-015`, LoginWithChatGPT). The "meet data where it lives" principle + multi-signal RRF fusion + reranker is the reusable pattern. Contrasts with naive RAG (industry writing says naive retrieval fails ~40% of the time; hybrid + reranking is the fix).

## Caveats
- Primary blog URL was unreachable (HTTP 500); technical detail sourced from a third-party reconstruction (mer.vin) and Cerebras' own X thread. Treat specifics (exact reranker model, storage backend) as not fully verified until the original loads.
- Cross-link: Cursor semantic search blog (cursor.com/blog/semsearch) referenced as related.

## Vault fit
RAG / knowledge-base / agent-harness cluster: PixelRAG (`src-2026-06-21-002`), Understand-Anything (`src-2026-06-21-003`), Codebase Memory MCP (`src-2026-06-30-006`), TencentDB-Agent-Memory (`src-2026-06-24-001`), Voicebox MCP (`src-2026-07-18-004`). Relevant to InkTrace's own provenance/citation design philosophy (cite sources, no laundering).
