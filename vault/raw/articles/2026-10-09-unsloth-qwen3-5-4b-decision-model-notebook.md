---
title: "Unsloth Qwen3.5-4B Decision-model notebook"
kind: "notebook capture"
author: "Unsloth"
source_url: "https://github.com/unslothai/notebooks/blob/main/nb/Qwen3_5_(4B)-Decision.ipynb"
origin_url: "https://colab.research.google.com/github/unslothai/notebooks/blob/main/nb/Qwen3_5_(4B)-Decision.ipynb"
related_urls: ["https://unsloth.ai/docs/basics/train-your-own-decision-model-with-unsloth", "https://huggingface.co/datasets/LocalLLaMA/typed-decisions"]
tags: ["Unsloth", "Qwen3.5", "decision-model", "fine-tuning", "LoRA", "Colab", "VRAM"]
---

# Unsloth Qwen3.5-4B Decision-model notebook

## Notebook workflow
The notebook trains `unsloth/Qwen3.5-4B` as a decision model. It loads the base model in 4-bit mode, uses LoRA adapters with rank 16, and adds a decision head. The model answers structured questions with choices or scores and returns probabilities instead of generating prose.

The sample dataset is `LocalLLaMA/typed-decisions`. Each row has `state`, `questions`, and `gold` fields. Question types include `choice`, `noul` (yes/no), and `score`. The notebook holds out 80 rows, reported as 400 decisions, for evaluation and calibration. It saves the LoRA adapters, decision head, and calibration data.

## Hardware and result claims
The notebook instructs users to run on a free Tesla T4 Google Colab instance. It does not report an 8 GB VRAM measurement for Qwen3.5-4B.

The notebook says its 60-step run (about 1.7 epochs) reached 75–78% test accuracy and took about 2 hours on a free T4, or 12 minutes on an RTX PRO 6000. It says a 70-step full run reached 78% in 25 minutes on an A100. These are Unsloth-reported runs, not independently reproduced results.

The linked guide's hardware table lists 8 GB VRAM for Qwen3.5-2B, not Qwen3.5-4B. It separately reports a 10-minute, 76% quick run for Qwen3.5-4B on an L4. The post's “4B on 8 GB VRAM locally” statement is not established by the notebook or guide inspected. The notebook points to a Colab T4 runtime, not a demonstrated local 8 GB setup. See `src-2026-10-08-007`.

## Serving and licensing
The notebook demonstrates inference, calibration, saving adapters, and optional merging to 16-bit weights. It does not execute a deployment. The guide describes serving through Unsloth's Decision API; the source says a GPU is required and the first request can take several minutes.

The notebook says it is licensed under LGPL-3.0.

## Evidence limits
I read the notebook source from GitHub without opening or running the Colab runtime. I did not sign in to Google, install packages, train a model, access a GPU, or upload a model. Accuracy, time, and memory figures remain Unsloth's reported results.

## Related InkTrace records
- Unsloth Decision-model guide: `src-2026-10-08-007`.
- TypeSafe AI's separate RLCD pitch: `src-2026-09-17-001`.
