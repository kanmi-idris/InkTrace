---
title: "Leviathan: a Rust indexer for agent search over large datasets"
kind: "article (X/Twitter)"
author: "Joshua Gunn (@joshuagunnn)"
source_url: "https://x.com/joshuagunnn/status/2107108554192941493"
related_urls:
  - "https://github.com/elstongun/leviathan"
  - "https://github.com/elstongun/leviathan/blob/main/docs/BENCHMARKS.md"
  - "https://x.com/joshuagunnn/status/2107522156162936936"
posted_at: "2026-10-05T14:00:02Z"
tags: ["ai-agents", "retrieval", "search", "rust", "sqlite", "benchmark", "context-efficiency", "apache-2-0"]
---

# Leviathan

## Post and thread claims
Joshua Gunn introduces Leviathan as an open-source indexer for agent search over large datasets. The thread says agents otherwise grep, page through APIs, or place too much history in context. It says Leviathan returns short, cited result cards and supports JSONL, CSV, SQLite, and database CLI output. It describes a single Rust binary, a full-text index, and optional MCP tools. The duplicate Joshua link in the supplied message is captured once.

The post claims that at one million records Leviathan uses a median of 436 tokens instead of 107,000 and finds a relevant record 99% of the time. The repository explains the benchmark scope below.

## Repository details
The README describes a static binary that indexes JSONL, JSON, CSV/TSV, SQLite, or database CLI output into one SQLite file with FTS5. It supports CLI search and an optional MCP server with four read-only tools. The repository lists Apache-2.0 licensing. It also describes a CLI-plus-skill setup that costs no tokens until called.

## Benchmark evidence and limits
The repository's benchmark document reports 436 median tokens, 98.5% hit@1, 99.0% hit@5, and 33 ms median latency at one million records. It compares this with 107,122 median tokens for a grep strategy. The largest Leviathan answer was 602 tokens.

The benchmark uses a synthetic maintenance log for an invented facility. It tests 1,200 questions across six dataset sizes. The grep baselines receive the exact entity key, which makes them optimistic. The benchmark measures retrieval, not an LLM's final answer. The repository says accuracy figures are an upper bound and token figures are representative. This does not establish performance on the user's data.

A later follow-up asks whether users would pay $10 per month for a hosted version that indexes data. It is a question, not a launch announcement.

## Evidence limits
I inspected the README and benchmark document. I did not install or run Leviathan. The X post's attached image and related media are not inspected. Treat benchmark values as results from the repository's stated synthetic setup.
