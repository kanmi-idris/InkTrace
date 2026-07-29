---
title: PrismML — Ultra-Dense On-Device LLMs (Bonsai 27B, 1-bit/Ternary)
kind: paste
captured_at: 2026-07-20 20:52
tags: [llm, on-device-ai, edge-ai, quantization, ternary, 1-bit, caltech, bonsai, efficiency]
source_url: 
status: inbox
---

# PrismML — Ultra-Dense On-Device LLMs (Bonsai 27B, 1-bit/Ternary)

PrismML (prismml.com) — "Concentrating intelligence". AI research company building ultra-dense (extreme low-bit) LLMs so large models can run on smartphones and reduce datacenter load. Utilizes breakthrough research at Caltech, prioritizing "intelligence per bit" (intelligence density) over sheer parameter count.

## Flagship: Bonsai 27B
- First 27B-class model capable of running on a phone.
- Available in 1-bit and Ternary variants.
- Brings multi-step reasoning, tool calling, agentic workflows, and multimodal understanding to local devices.
- Ternary Bonsai 27B = 5.9GB (optimized for laptops); 1-bit Bonsai 27B = 3.9GB (small enough to run on an iPhone).
- Efficiency claims: 14× less memory, 8× faster, 5× less energy.

## Bonsai model family (all on Hugging Face, 1-bit + Ternary variants)
- Bonsai 27B — huggingface.co/collections/prism-ml/bonsai-27b
- Bonsai 8B — Bonsai-8B-gguf / Ternary-Bonsai-8B-gguf
- Bonsai 4B — Bonsai-4B-gguf / Ternary-Bonsai-4B-gguf
- Bonsai 1.7B — Bonsai-1.7B-gguf / Ternary-Bonsai-1.7B-gguf
- Bonsai Image (4B) — bonsai-image-binary-4B-mlx-1bit / bonsai-image-ternary-4B-mlx-2bit

## Benchmarks (per whitepaper)
Whitepaper: github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf
Palette of metrics reported: Intelligence density (negative log of error rate divided by model size), model benchmark comparison (avg score across benchmarks), throughput (tokens/sec across hardware), energy consumption (mWh per token).
Comparison anchor: 16.0 GB for 16-bit standard vs 1-bit Bonsai 8B.

## Products & access
- Bonsai Studio — iOS app (apps.apple.com, id6767042620).
- WebGPU demo — huggingface.co/spaces/webml-community/bonsai-webgpu-kernels
- Docs — docs.prismml.com

## Backing / affiliations
Supported by (logos): Cerberus, Caltech, Google; plus Caltech research base. Prism ML, Inc. (© 2026). Hiring AI/ML engineers (large-scale systems, edge/consumer AI, kernel optimization, post-training platform, devrel).

Relevance: On-device / edge LLM efficiency via extreme low-bit (1-bit / ternary) quantization. Complements PowerInfer (src-2026-07-20-008/009), KTransformers (src-2026-07-18-007), colibri (src-2026-07-12-005), LiteRT.js (src-2026-07-18-008/009/010), and Inference AutoTune (src-2026-07-12-007) in the local/efficient-inference cluster.
