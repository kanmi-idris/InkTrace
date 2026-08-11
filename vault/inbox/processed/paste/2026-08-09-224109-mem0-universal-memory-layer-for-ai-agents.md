---
title: "Mem0: Universal Memory Layer for AI Agents"
kind: "paste"
captured_at: "2026-08-09 22:41"
tags: ["github", "mem0", "ai-agents", "memory", "long-term-memory", "rag", "python", "typescript"]
source_url: "https://github.com/mem0ai/mem0"
status: "inbox"
---

# Mem0: Universal Memory Layer for AI Agents

## Source overview
Mem0 is an open-source memory layer for AI assistants and agents. The repository describes it as a system for personalized interactions that retains user, session, and agent state.

The repository offers a Python and TypeScript SDK, a self-hosted server, a managed cloud platform, a CLI, agent skills, and integrations.

## New memory algorithm claims
The README presents an April 2026 algorithm update. Its managed-platform benchmark table reports:
- LoCoMo: 71.4 old versus 92.5 new, with 7.0K tokens and 0.88 seconds p50 latency.
- LongMemEval: 67.8 old versus 94.4 new, with 6.8K tokens and 1.09 seconds p50 latency.
- BEAM 1M: 64.1 with 6.7K tokens and 1.00 second p50 latency.
- BEAM 10M: 48.6 with 6.9K tokens and 1.05 seconds p50 latency.

The README says these benchmark results describe the managed platform, which includes proprietary optimizations. It says open-source users should expect directionally similar gains, not identical numbers.

The described algorithm changes include add-only extraction, agent-generated facts as first-class memories, entity linking, fused semantic and BM25 retrieval, and temporal reasoning.

## Core capabilities and use cases
- Multi-level memory for user, session, and agent state.
- SDKs and a managed service.
- AI assistants and personalized conversations.
- Customer-support history and ticket recall.
- Healthcare preference and history tracking.
- Adaptive productivity and gaming workflows.

## Installation options
- Python library: pip install mem0ai.
- Optional NLP support: pip install mem0ai[nlp] and a spaCy model.
- TypeScript package: npm install mem0ai.
- Self-hosted server through Docker Compose.
- Cloud platform through app.mem0.ai.
- CLI through @mem0/cli or mem0-cli.

## Agent and CLI documentation
The README documents an agent signup flow and commands for adding and searching memories. It also lists reference skills for the Mem0 SDK, CLI, and Vercel AI SDK, plus pipeline skills for integration, testing, and OSS-to-platform migration.

These are documented commands only. This capture did not execute them, create an account, mint an API key, install skills, or change any local configuration.

## Technical defaults
The README states that Mem0 requires an LLM and uses gpt-5-mini from OpenAI by default. It uses text-embedding-3-small from OpenAI by default for embeddings. It recommends Qwen 600M or a comparable embedding model for hybrid semantic, keyword, and entity retrieval.

## Self-hosted security note
Self-hosted authentication is enabled by default. The README documents ADMIN_API_KEY, admin registration, and AUTH_DISABLED=true for local development only.

## Integrations
The repository links examples for a ChatGPT memory experience, a browser extension, LangGraph support, and CrewAI. It also documents a citation paper and an Apache 2.0 license.
