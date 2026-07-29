# SOTA Search Over Academic Publications — Exa Blog

**URL:** https://exa.ai/blog/publications-search
**Author:** The Exa Team
**Published:** Jul 23, 2026

## Launch

Exa launched state-of-the-art search over research papers: dedicated index of ~350M publications, ~30M authors added to their people index. Exa can now search scientific literature using natural language — vague, highly specific, or imperfect-memory queries.

## Two New Benchmarks

1. **Known-item retrieval** — searcher provides precise factual clues, system must identify the paper
2. **Tip-of-the-tongue retrieval** — searcher describes a paper using vague, incomplete, or slightly incorrect details (closer to how people recall work months/years later)

## Benchmark Results

| Searcher | Recall | MRR | Mean Latency |
|---|---|---|---|
| **Exa** | **86.4%** | **0.726** | **0.578s** |
| Perplexity | 66.8% | 0.568 | 1.277s |
| Parallel Advanced | 50.0% | 0.312 | 3.118s |
| Parallel Turbo | 39.2% | 0.278 | 0.403s |
| Google Scholar | 28.0% | 0.179 | 1.098s |

Exa retrieved correct paper for 82.8% of queries across the full benchmark.

## How It Works

- **Ingestion pipeline**: OCR + document-parsing models to turn research PDFs into searchable text
- **Combined signals**: text + authors, institutions, publication histories, citations, collaborators
- **Query time**: searches both web index and dedicated publication index, then combines and reranks
- **API**: available via Exa Search API with `category="publication"` parameter

## Tags

academic-search, exa, publications, semantic-search, research-tools
