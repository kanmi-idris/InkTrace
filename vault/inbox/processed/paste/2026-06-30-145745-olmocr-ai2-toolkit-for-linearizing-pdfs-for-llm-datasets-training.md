---
title: olmOCR — AI2 Toolkit for Linearizing PDFs for LLM Datasets/Training
kind: paste
captured_at: 2026-06-30 14:57
tags: [ocr, pdf, llm, dataset, vision-language-model, ai2, open-source]
source_url: https://github.com/allenai/olmocr
status: inbox
---

# olmOCR — AI2 Toolkit for Linearizing PDFs for LLM Datasets/Training

allenai/olmOCR — Toolkit by AI2 (Allen Institute for AI) for converting PDFs and image-based documents into clean, readable plain text for LLM datasets/training. 17.8k stars, 1.5k forks, 44 releases, 2,126 commits. Apache 2.0.

Stack: Python, based on a 7B parameter VLM (Qwen2.5-VL). Requires GPU (RTX 4090+, 12GB+ VRAM). <$200 per million pages.

Features:
- Convert PDF, PNG, JPEG documents into clean Markdown
- Supports equations, tables, handwriting, complex formatting
- Auto-removes headers/footers
- Natural reading order (multi-column, figures, insets)
- Benchmarked at 82.4 on olmOCR-Bench (7,000+ test cases across 1,400 docs)

Benchmark comparison (olmOCR-Bench overall scores):
  - Mistral OCR API: 72.0
  - Marker 1.10.1: 76.1
  - MinerU 2.5.4: 75.2
  - DeepSeek-OCR: 75.7
  - PaddleOCR-VL: 80.0
  - Infinity-Parser 7B: 82.5
  - Chandra OCR 0.1.0: 83.1
  - olmOCR v0.4.0: 82.4

Papers: v1 (arXiv 2502.18443), v2 (arXiv 2510.19817) — Unit Test Rewards for Document OCR with RL.

Install: pip install olmocr (lightweight remote) or pip install olmocr[gpu] (local GPU). Conda env recommended (Python 3.11).

Usage:
  olmocr ./localworkspace --markdown --pdfs *.pdf
  olmocr ./localworkspace --server http://remote-server:8000/v1 --model allenai/olmOCR-2-7B-1025-FP8 --markdown --pdfs *.pdf

External providers: Cirrascale ($0.07/$0.15 per M tokens), DeepInfra ($0.09/$0.19), Parasail ($0.10/$0.20).

Cluster support: S3-based work queue for multi-node, Beaker cluster execution, Docker images (~30GB with model).

Code includes: prompting strategy (buildsilver.py), filtering (filter.py), SFT finetuning (train.py), GRPO RL trainer (grpo_train.py), synthetic data generation (mine_html_templates.py), pipeline (pipeline.py), Dolma viewer (dolmaviewer.py).

v0.4.0 (Oct 2025): RL training with synthetic data, ~4 point boost. v0.3.0: auto-rotation, blank doc fixes. v0.2.1: FP8 default, 3 point boost.

Team: AllenNLP @ AI2 (non-profit).
