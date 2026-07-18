---
title: KTransformers — CPU-GPU heterogeneous LLM inference & MoE fine-tune (kvcache-ai / Tsinghua)
kind: paste
captured_at: 2026-07-18 01:29
tags: [llm-inference, moE, quantization, cpu-gpu, heterogeneous, kvcache-ai, tsinghua, local-llm, fine-tuning]
source_url: https://github.com/kvcache-ai/ktransformers
status: inbox
---

# KTransformers — CPU-GPU heterogeneous LLM inference & MoE fine-tune (kvcache-ai / Tsinghua)

# KTransformers (kvcache-ai/ktransformers)

A flexible framework for experiencing cutting-edge LLM inference / fine-tune optimizations via **CPU-GPU heterogeneous computing**. By kvcache-ai (MADSys Lab @ Tsinghua University, Approaching.AI, 9#AISoft). 17.7k★, 1.4k forks, 1,300 commits, Apache-2.0. Latest v0.6.3 (Jun 21 2026). Python 57% / C++ 34% / CUDA 5%. Sibling context to colibri (`src-2026-07-12-005`, GLM-5.2 on consumer RAM) and the local-LLM cluster.

## Two user-facing capabilities (from kt-kernel source tree)
1. **Inference** — high-performance kt-kernel serving (CPU-optimized kernel ops for heterogeneous LLM inference).
2. **SFT** — fine-tuning with LLaMA-Factory (ultra-large MoE fine-tuning).

## Inference key features
- **AMX/AVX acceleration**: Intel AMX + AVX512/AVX2 optimized kernels for INT4/INT8 quantized inference.
- **MoE optimization**: efficient Mixture-of-Experts inference with NUMA-aware memory management.
- **Quantization**: CPU-side INT4/INT8 weights, GPU-side GPTQ.
- **Easy integration**: clean Python API for SGLang and other frameworks.
- **Heterogeneous expert placement**: hot experts on GPU, cold experts on CPU; CPU-GPU expert scheduling; native BF16/FP8 per-channel precision.
- Multi-concurrency, 3-layer (GPU-CPU-Disk) prefix cache reuse, Ascend NPU / ROCm / Intel Arc / Windows native support.

### Performance examples
- DeepSeek-R1-0528 (FP8): 8×L20 GPU + Xeon Gold 6454S → 227.85 tok/s total, 87.58 tok/s output (8-way concurrency).
- Day0 support for frontier models: MiniMax-M3, GLM-5.2, DeepSeek-V4-Flash, Kimi-K2.5, Qwen3-Next, LLaMA 4, etc. (long update log).

## SFT key features
- Multi-backend CPU/GPU hybrid fine-tuning with INT8/INT4 quantization.
- Ultra-large MoE support: fine-tune DeepSeek-V3/R1 on limited GPU memory.
- **6–12× training speedup** vs ZeRO-Offload in benchmarked MoE SFT; ~half the CPU memory.
- LLaMA-Factory integration.
- Examples: DeepSeek-V3 ~80GB total / 3.7 it/s on 4×RTX 4090; Qwen3-30B-A3B ~24GB / 8+ it/s on 1×RTX 4090.
- RL-DPO fine-tuning with LLaMA-Factory.

## Research
Paper: "KTransformers: Unleashing the Full Potential of CPU/GPU Hybrid Inference for MoE Models" — Chen et al., ACM SIGOPS SOSP 2025.
Docs: kvcache-ai.github.io/ktransformers. Roadmap 2026Q2 in issue #1921.

## Positioning in vault
Local / on-device LLM inference cluster:
- colibri (`src-2026-07-12-005`) — 744B GLM-5.2 MoE on 25GB consumer RAM (pure C)
- Voicebox (`src-2026-07-18-004`) — local TTS/STT/LLM via MLX/PyTorch
- LoginWithChatGPT, codex-tldraw-mcp, Cerebras KB (MCP) — local agent tooling
KTransformers is the "run big MoE models on modest hardware via CPU offload + quantization" toolkit — directly relevant to running frontier models locally (the same theme as colibri). Different approach: Python/C++ with AMX/AVX CPU kernels + GPU hybrid, vs colibri's pure-C engine.
