---
title: Hindsight - Agent Memory That Learns
kind: paste
captured_at: 2026-07-25 21:58
tags: []
source_url: 
status: inbox
---

# Hindsight - Agent Memory That Learns

https://github.com/vectorize-io/hindsight — Hindsight by Vectorize.io: Agent memory system that makes agents learn over time (not just recall conversation history). MIT license. 18.8k stars, 1.2k forks, 2,228 commits.

State-of-the-art on LongMemEval benchmark. Independently reproduced by Virginia Tech Sanghani Center and The Washington Post. Used in production at Fortune 500 enterprises.

Three core operations:
- Retain: store information (extracts facts, entities, relationships, temporal data via LLM)
- Recall: retrieve memories (4 parallel strategies: semantic/vector, keyword/BM25, graph/entity-temporal-causal, temporal filtering; merged via reciprocal rank fusion + cross-encoder reranking)
- Reflect: analyze memories to form new observations and insights

Memory architecture uses biomimetic data structures with three memory types:
- World: facts about the world ("The stove gets hot")
- Experiences: agent's own experiences ("I touched the stove and it really hurt")
- Mental Models: learned understanding formed by reflecting on raw memories

Memories stored in banks with entities, relationships, and time series + sparse/dense vector representations.

Deployment: Docker (recommended) or pip/npm. Supports OpenAI, Anthropic, Gemini, Groq, Ollama, LM Studio, MiniMax, Atlas Cloud. Python embedded mode (no server) available. Supports Linux, macOS (Apple Silicon + Intel), Windows.

SDKs: Python (hindsight-client), Node.js/TypeScript (@vectorize-io/hindsight-client), REST API, CLI. Also has LLM Wrapper (2 lines of code to add memory to any agent).

Paper: https://arxiv.org/abs/2512.12818
Docs: https://hindsight.vectorize.io
Topics: agentic-ai, agents, ai-memory, memory.
