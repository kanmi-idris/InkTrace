---
title: "PageIndex: Vectorless reasoning-based RAG"
kind: "paste"
captured_at: "2026-09-29 14:13"
tags: ["rag", "retrieval", "pageindex", "vectorless", "tree-index", "llm", "document-ai", "financebench", "agentic-ai", "context-engineering", "embeddings", "open-source", "python", "github", "site-reported", "benchmark"]
source_url: "https://github.com/VectifyAI/PageIndex"
status: "inbox"
---

# PageIndex: Vectorless reasoning-based RAG

Source checked: 2026-09-29.

## Submission context
- The supplied note uses an emphatic claim that the RAG industry is about to be disrupted. That framing is opinion, not independently established evidence.
- The supplied repository is https://github.com/VectifyAI/PageIndex.
- Related official sources are https://pageindex.ai/developer, https://github.com/VectifyAI/PageIndex-OSS-Benchmark, and https://github.com/VectifyAI/Mafin2.5-FinanceBench.

## Core approach
- PageIndex presents itself as a vectorless, reasoning-based RAG engine for long and complex documents.
- Instead of storing document chunks in a vector index, it builds a hierarchical tree index from document structure and lets an LLM search that tree through multi-step reasoning.
- The documented retrieval flow has two stages: build a tree index, then let an agent reason over the tree to select relevant sections.
- The repository and developer site describe retrieval as traceable and context-aware, with explicit page or section references rather than opaque similarity matches.
- The official developer page describes the system as using no vector database, embeddings, or chunking. Local mode stores the index on the user's machine and is intended for text-based PDFs without OCR.
- PageIndex Cloud adds managed parsing, OCR, image understanding, storage, and block-level citations. Local and Cloud are separate deployment modes.

## Models and cost model
- The local SDK uses the user's model key and can select separate models for tree indexing and question answering.
- The repository says a basic model can build or refine the tree, while the chat model determines reasoning quality and query cost.
- Local mode is open source, but it still uses the user's model provider and therefore can incur model costs.
- Cloud mode requires a PageIndex API key and has managed storage and indexing billing after its free allowance. The claim that PageIndex is entirely free is therefore too broad.
- The repository advertises an SDK, an MCP integration path, a JavaScript SDK in the organization, and a cloud API.

## FinanceBench claim
- The PageIndex README and official Mafin2.5-FinanceBench repository report 98.7% accuracy on the public FinanceBench evaluation for Mafin2.5, a system built on PageIndex.
- This is a vendor-reported result for Mafin2.5, not a standalone proof that every PageIndex configuration reaches 98.7%.
- The published Mafin2.5 evaluation repository states that its setup uses the full public FinanceBench set and publishes evaluation code. It also lists benchmark limitations, including ambiguities in ground-truth answers and limited multi-document reasoning.
- The 98.7% comparison should not be described as an unconditional result against every vector RAG system. The comparison table contains different systems with different coverage and public-evidence conditions.

## Open-source benchmark scope
- PageIndex-OSS-Benchmark evaluates local PageIndex with flash indexing, no API key, and no OCR.
- Its dataset contains 62 questions over 34 PDFs and 1,945 pages from MMLongBench-Doc-V2.
- The benchmark restricts questions to facts stated in running text. It excludes charts, tables, figures, counting, and arithmetic built on retrieved content.
- It excludes documents that the local flash path cannot index, so it measures performance within the supported local ingestion scope rather than universal document coverage.
- The published results vary by chat model and reasoning effort, ranging from 85.5% for one configuration to 100.0% for stronger configurations in the shown table. The tree index model is held constant across those comparisons.
- These benchmark conditions are narrower than a general claim that PageIndex outperforms every vector RAG system on every workload.

## Evidence limits and relevance
- The tree-index design, local/cloud split, and published benchmarks are official project claims and benchmark records. No independent reproduction was run for this capture.
- PageIndex is relevant to long-document retrieval, finance and regulatory research, traceable citations, agentic retrieval, context engineering, and alternatives to embedding-first RAG.
- The important design trade-off is shifted rather than removed: embedding and similarity-search infrastructure is replaced by document parsing, tree construction, LLM reasoning, model cost, and document-scope limits.
