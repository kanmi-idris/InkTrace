---
title: Unlimited-OCR — Baidu Inc. (One-shot Long-horizon Document Parsing)
kind: paste
captured_at: 2026-06-23 10:15
tags: [ocr, document-parsing, baidu, deepseek-ocr, vision-language-model, pdf-ocr, one-shot-parsing]
source_url: 
status: inbox
---

# Unlimited-OCR — Baidu Inc. (One-shot Long-horizon Document Parsing)

# Unlimited-OCR — Baidu Inc.

## Source
https://github.com/baidu/Unlimited-OCR

## Overview
Baidu's one-shot long-horizon document parsing model (released June 22-23, 2026). 1.3k stars, 88 forks. Builds on DeepSeek-OCR and DeepSeek-OCR-2. Paper on arXiv: 2606.23050. Available on HuggingFace and ModelScope.

## Key Features
- **One-shot long-horizon parsing**: process entire documents in a single pass, not page-by-page
- **Two inference modes**: "gundam" (1024 base / 640 image, crop_mode=True) and "base" (1024 base / 1024 image, crop_mode=False)
- **Single image**: supports both gundam and base
- **Multi-page / PDF**: base mode only, converts PDF pages to images via PyMuPDF at configurable DPI
- **Max context length**: 32,768 tokens
- **SGLang support**: OpenAI-compatible API for streaming inference, custom logit processor for n-gram repetition avoidance
- **Batch inference**: infer.py for concurrent processing of image directories or PDFs

## Inference
- Transformers (HuggingFace) on NVIDIA GPUs
- SGLang server (OpenAI-compatible) with custom logit processor
- No-repeat n-gram size: 35, ngram window: 128 (gundam) / 1024 (base)

## Tech Stack
- Python 3.12, CUDA 12.9, PyTorch 2.10
- Transformers 4.57, SGLang
- PyMuPDF for PDF-to-image, custom logit processor for repetition control

## Tags
ocr, document-parsing, baidu, deepseek-ocr, vision-language-model, pdf-ocr, one-shot-parsing
