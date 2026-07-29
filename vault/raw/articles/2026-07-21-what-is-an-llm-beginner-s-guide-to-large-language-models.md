---
title: What Is An LLM? — Beginner's Guide to Large Language Models
kind: paste
captured_at: 2026-07-21 09:25
tags: [llm, beginner, inference, tokenization, sampling, parameters, pre-training, interpretability]
source_url: 
status: inbox
---

# What Is An LLM? — Beginner's Guide to Large Language Models

# What Is An LLM? — aihero.dev Beginner Guide

**Author**: aihero.dev
**URL**: aihero.dev/what-is-an-llm
**Updated**: Mar 17 2025

Beginner-friendly introduction to Large Language Models.

## Key concepts
- **Parameters**: Model's "brain" — numbers from pre-training. More params = better but slower (70B vs 7B ≈ 10x speed diff)
- **Inference**: Sending text to model and getting response. Runs on laptop (unlike pre-training)
- **Sampling strategies**: greedy (always most likely), top-K (from top K), top-P (from P% probability mass), temperature (randomness)
- **Tokenization**: Text → tokens via model-specific tokenizer (tiktokenizer.vercel.app for exploration)
- **Training phases**: Pre-training (compress internet data → parameters, ~$2M for 6000 GPUs × 12 days) → Post-training (shapes personality/behavior)
- **Interpretability**: Anthropic research — concepts shared across languages, planning ahead, multi-pathway reasoning

**Relevance**: Accessible foundational primer on LLMs. Pairs with Karpathy's "Intro to Large Language Models" video and the bbycroft visualization.
