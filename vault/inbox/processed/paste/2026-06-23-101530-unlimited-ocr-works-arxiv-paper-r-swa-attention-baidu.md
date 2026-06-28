---
title: Unlimited OCR Works — arXiv Paper (R-SWA Attention, Baidu)
kind: paste
captured_at: 2026-06-23 10:15
tags: [ocr, attention-mechanism, kv-cache, sliding-window-attention, baidu, deepseek-ocr, document-parsing]
source_url: 
status: inbox
---

# Unlimited OCR Works — arXiv Paper (R-SWA Attention, Baidu)

# Unlimited OCR Works — arXiv Paper

## Source
https://arxiv.org/abs/2606.23050

## Overview
Technical report by Baidu Inc. (Youyang Yin et al., 17 authors) submitted June 22, 2026. Introduces Unlimited-OCR, a one-shot long-horizon document parsing model addressing the KV cache memory growth problem in end-to-end OCR with LLM decoders.

## Core Problem
End-to-end OCR models using LLM decoders suffer from accumulated KV cache as output sequences lengthen → memory grows, generation slows. This contrasts with humans who show no efficiency decline during long copying tasks.

## Key Technical Contribution: Reference Sliding Window Attention (R-SWA)
- Replaces all attention layers in the decoder with R-SWA
- Reduces attention computation costs while maintaining constant KV cache throughout decoding
- Emulates human parsing working memory
- General-purpose parsing attention mechanism: applicable to ASR, translation, etc. (not just OCR)

## Architecture
- Baseline: DeepSeek OCR
- Encoder: DeepSeek OCR's high-compression rate encoder
- Decoder: LLM decoder with all attention layers replaced by R-SWA
- Constant KV cache design enables transcribing dozens of pages in a single forward pass
- Standard max length: 32K tokens

## Availability
- Code and model weights: https://github.com/baidu/Unlimited-OCR
- HuggingFace: baidu/Unlimited-OCR
- ModelScope: PaddlePaddle/Unlimited-OCR
- License: CC BY 4.0

## Subjects
cs.CV (Computer Vision and Pattern Recognition), cs.CL (Computation and Language)

## Tags
ocr, attention-mechanism, kv-cache, sliding-window-attention, baidu, deepseek-ocr, document-parsing
