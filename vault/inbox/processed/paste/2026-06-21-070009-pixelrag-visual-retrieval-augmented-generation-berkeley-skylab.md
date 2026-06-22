---
title: PixelRAG Visual Retrieval-Augmented Generation (Berkeley SkyLab)
kind: paste
captured_at: 2026-06-21 07:00
tags: [rag, multimodal, vision, search, claude-code, berkeley, open-source]
source_url: 
status: inbox
---

# PixelRAG Visual Retrieval-Augmented Generation (Berkeley SkyLab)

# PixelRAG — Visual Retrieval-Augmented Generation

## Sources
- GitHub: https://github.com/StarTrail-org/PixelRAG
- X/Twitter: https://x.com/akshay_pachaar/status/2052743644411765230

## Overview
PixelRAG is a retrieval system that skips HTML parsing entirely. Instead of scraping a page into text and embedding chunks, it screenshots the page and retrieves the image. A vision-language model reads the answer straight off the pixels. Fully open-source under Apache-2.0.

## Key Details
- **Authors**: Yichuan Wang*, Zhifei Li*, Zirui Wang, Paul Teiletche, Lesheng Jin, Matei Zaharia†, Joseph E. Gonzalez†, Sewon Min† — Berkeley SkyLab, BAIR, Berkeley NLP
- **Stars**: 1.5k | **Forks**: 135
- **License**: Apache-2.0
- **Language**: Python (73.7%), Markdown, TypeScript, Shell
- **Live demo**: pixelrag.ai
- **Hosted API**: api.pixelrag.ai (pre-built index of 8.28M Wikipedia pages)

## Pipeline
1. **Render**: Renders each document (web, PDF, image) to image tiles via Playwright CDP (`pixelshot` command)
2. **Embed**: Embeds them with Qwen3-VL-Embedding (LoRA fine-tuned on screenshots)
3. **Index**: Builds a FAISS index
4. **Serve**: Search API (FastAPI, CPU or GPU)

## Why It Matters
- HTML-to-text parsing can drop 40%+ of a page
- Tables, charts, and layout get flattened or thrown out
- Swapping parsers alone can move accuracy ~10 points on same docs
- PixelRAG beats strongest text RAG baseline by 18.1% on text-only QA
- Visual structure that HTML parsing throws away stays intact

## Claude Code Plugin
Ships a "pixelbrowse" skill — gives Claude eyes:
- `claude -p "screenshot https://example.com and summarize"`
- No MCP server, no backend — just calls `pixelshot` on your machine
- Install: `pip install pixelrag` then `claude plugin marketplace add StarTrail-org/PixelRAG`

## Akshay's Tweet (May 8, 2026)
"Web scraping will never be the same. (100% open-source visual search at scale) PixelRAG is a retrieval system that skips HTML parsing completely... Instead of scraping a page into text and embedding chunks, it screenshots the page and retrieves the image. A vision-language model reads the answer straight off the pixels."

## Training
LoRA fine-tunes Qwen/Qwen3-VL-Embedding-2B for webpage retrieval. Trained adapters published at huggingface.co/Chrisyichuan/wiki-screenshot-embedding-lora. Full training set released for adapting other backbones.

## Tags
rag, multimodal, vision, search, claude-code, berkeley, open-source
