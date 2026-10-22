---
title: "Train your own Decision Model with Unsloth"
kind: "article capture"
author: "Unsloth"
source_url: "https://unsloth.ai/docs/basics/train-your-own-decision-model-with-unsloth"
tags: ["Unsloth", "decision-model", "Qwen3.5", "fine-tuning", "calibration", "inference"]
---

# Train your own Decision Model with Unsloth

## Core behavior
Unsloth defines a decision model as an LLM that scores options and returns a choice with probabilities instead of writing a response. The guide says the model reads an input and all decision questions in one pass, using a small decision head.

The guide uses `state`, `questions`, and `gold` fields in its dataset format. Its examples include choice, yes/no, and score decisions. The guide says the model can be fine-tuned with 4-bit LoRA, calibrated on held-out data, and served through the Unsloth Decision API.

## Hardware and accuracy claims
The guide's hardware table reports Qwen3.5-0.8B at 4 GB VRAM and Qwen3.5-2B at 8 GB VRAM. It does not report an 8 GB result for Qwen3.5-4B. It separately says a Qwen3.5-4B quick run reached 76% in 10 minutes on an L4 GPU.

The table reports 81% test accuracy for Qwen3.5-2B at 8 GB VRAM and 40 minutes, and 78% for Qwen3.5-0.8B at 4 GB and 42 minutes. These are vendor-reported results. The guide describes a 3,000-row test set with typed-decisions, BANKING77, and CLINC150 data, and says the sets were decontaminated against training data.

The guide describes Unsloth's free Colab and Kaggle notebooks. The linked Qwen3.5-4B notebook itself instructs users to use a free Colab Tesla T4. Neither source inspected verifies the post's 4B-on-8-GB-local claim.

## Serving notes
The guide says trained models can be used through the Decision API or Unsloth Studio. It says serving needs a GPU, the first request can take several minutes, and the API waits while the same GPU is being used for training.

## Evidence limits
The reported accuracy, VRAM, and training-time results come from Unsloth. I did not reproduce them, test calibration, or run the Decision API. The guide's opening sentence says “Qwen3.8” while its later examples and tables use “Qwen3.5”; I preserve this as a page inconsistency, not a correction.
