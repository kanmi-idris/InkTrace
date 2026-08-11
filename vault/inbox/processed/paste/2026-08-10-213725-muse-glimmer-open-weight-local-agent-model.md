---
title: "Muse Glimmer: Open-Weight Local Agent Model"
kind: "paste"
captured_at: "2026-08-10 21:37"
tags: ["meta", "muse-glimmer", "local-ai", "ai-agents", "open-weights", "model-quantization", "dflash", "apache-2"]
source_url: "https://go.meta.me/museglimmer"
status: "inbox"
---

# Muse Glimmer: Open-Weight Local Agent Model

## Source overview
Meta describes Muse Glimmer as an open-weight 30-billion-parameter model optimized for always-on local agent workflows. Meta released the model weights under the Apache 2.0 license.

The model is designed to run on consumer hardware such as a Mac or a PC with one performant consumer GPU. Meta positions it for local agents, function calling, local coding, and LLM-as-a-judge evaluation.

## Agent capabilities claimed by Meta
The technical post lists:
- End-to-end agentic task completion across DeepSearch QA, MCP-Atlas, tau-Bench, and SWE-Bench.
- Structured function calling across long workflows.
- Multi-step reasoning over extended horizons.
- Failure recovery after failed or unexpected tool results.
- Interleaved text and image input through a perception encoder.
- Compatibility with OpenClaw and other agent scaffolds.
- Controllable reasoning effort.
- Training data from more than 100 languages.

These are vendor-reported capabilities and benchmark claims.

## Training approach
Meta says Muse Glimmer uses:
- Pre-training through logit distillation from Muse Spark outputs.
- Mid-training with longer-context and more agent-heavy data, richer reasoning traces, and organic data.
- Post-training combining supervised fine-tuning, on-policy distillation, and reinforcement learning across general, reasoning, coding, and agentic domains.

Meta says the model was evaluated under its Advanced AI Scaling Framework and assessed for open-weight release.

## Local inference optimizations
- Quantization compresses the model to approximately 4-bit precision and under 20 GB.
- Meta says this leaves room for KV cache, the perception encoder, and a lightweight drafter in a 24 GB or 32 GB memory envelope.
- Meta reports minimal to no degradation on agentic tasks from this compression.
- A lightweight DFlash drafter proposes blocks of tokens. Muse Glimmer verifies them in parallel and corrects incorrect proposals through speculative decoding.
- Meta measured the quantized model with the DFlash drafter on MacBook M4 Max, M5 Max, and RTX 5090 hardware. The post states that the result supports fluid conversation and real-time agent interaction, but this capture does not record exact speed numbers.

## Availability and ecosystem
Meta links the Muse-Glimmer-30B weights on Hugging Face and developer documentation. It lists planned or available integrations with Ollama, LM Studio, Unsloth, llama.cpp, ExecuTorch, MLX, vLLM, SGLang, Together AI, Fireworks AI, and OpenRouter. It also mentions work with AMD, Arm, Dell, Intel, and NVIDIA.

## User-provided announcement
Introducing Muse Glimmer, an open-weight 30B-parameter model optimized for local, always-on agent workflows.

Muse Glimmer delivers strong performance on key agentic use cases and benchmarks compared with leading models in its size category, and is designed to run entirely on consumer hardware like a Mac or PCs with performant GPUs.

In keeping with our long tradition of sharing fundamental AI research, we’re releasing model weights under a permissive Apache 2.0 license.

🧵👇
11:13 AM · Aug 10, 2026
·
606.8K
 Views
Relevant
View quotes

AI at Meta

@AIatMeta
·
10h
For a local agent to be practical, generation latency must be low enough to maintain workflow continuity.

To run Muse Glimmer on consumer hardware without degrading quality, we used quantization to shrink the language model to under 20GB and a lightweight DFlash drafter model to accelerate token generation. As a result, Muse Glimmer is fast enough for fluid conversation and real-time agent interaction, all running entirely on your device.
AI at Meta

@AIatMeta
·
10h
Muse Glimmer can complete multi-step agentic tasks end-to-end from a single natural language prompt.

In this demo, it autonomously discovers a local Home Assistant instance via network tool calls, queries device APIs, writes a responsive HTML/CSS/JS dashboard from scratch, and deploys a local server for verification.
AI at Meta

@AIatMeta
·
10h
Download Muse Glimmer on Hugging Face: https://huggingface.co/meta-models
Read the technical blog: https://go.meta.me/museglimmer
Find resources: https://developer.meta.com/ai/models/muse-glimmer/
