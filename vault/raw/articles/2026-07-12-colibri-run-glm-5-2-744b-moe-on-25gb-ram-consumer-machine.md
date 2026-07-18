---
title: colibri — Run GLM-5.2 (744B MoE) on 25GB-RAM Consumer Machine
kind: paste
captured_at: 2026-07-12 20:45
tags: [llm-inference, glm-5.2, moe, streaming, edge-ai, c, open-source, apache-2.0, quantization]
source_url: 
status: inbox
---

# colibri — Run GLM-5.2 (744B MoE) on 25GB-RAM Consumer Machine

## colibri (colibrì)

Source: https://github.com/JustVugg/colibri (6k ★, 517 forks, Apache 2.0)
Author: JustVugg (one-person project)

### What it is
Tiny pure-C inference engine that runs GLM-5.2 (744B-parameter MoE) on a consumer machine with ~25 GB RAM — no GPU needed, zero dependencies, experts streamed from disk on demand.

### How it works
- GLM-5.2 activates only ~40B params per token (MoE)
- Dense part (17B params at int4) stays resident: ~9.9 GB RAM
- 21,504 routed experts (~19 MB each at int4, 370 GB total) live on disk, streamed per-token
- Per-layer LRU cache + optional pinned hot-store + OS page cache as free L2
- Single C file (c/glm.c, ~2,400 lines) + small headers

### Implemented Features
- Faithful GLM-5.2 forward — validated token-exact against transformers oracle
- MLA attention with compressed KV-cache: 576 floats/token instead of 32,768 (57× smaller)
- DeepSeek-V3-style sigmoid router, shared expert, first-3-dense layers
- Native MTP speculative decoding: 2.2–2.8 tok/forward (int8 head)
- Grammar-forced speculative drafts (GBNF subset) for JSON/structured output
- True sampling (temp + nucleus, 0.7/0.90 default tuned for int4)
- Integer-dot kernels (Q8_0-style int8 activations, AVX2 maddubs)
- DSA sparse attention (GLM-5.2's lightning indexer)
- KV-cache persistence — conversations reopen warm across restarts
- Router-lookahead prefetch (PILOT=1, experimental)
- Batch-union MoE during prefill and MTP verification
- Byte-level BPE tokenizer in C
- Auto-sized expert cache from MemAvailable
- Learning cache: records routing patterns, pins hottest experts in spare RAM

### Performance (community benchmarks)
| Machine | Speed | Notes |
|---------|-------|-------|
| Dev box (WSL2, ~1 GB/s disk, 25 GB RAM) | 0.05–0.1 tok/s | Cold baseline |
| Apple M5 Max (128 GB, macOS) | 1.06–1.83 tok/s | Metal backend, 66% expert hit |
| Ryzen AI Max+ 395 (128 GB, Optane) | 0.40 tok/s | 71% expert hit |
| Ryzen 9950X + Samsung 9100 Pro PCIe 5.0 | 0.28 tok/s | 57% matmul-bound |
| 128-256 GB RAM, 12 cores | 2–4 tok/s | Matmul-bound |

### Build & Run
- `c/setup.sh` — build + self-test
- `./coli chat` — interactive chat
- `./coli serve` — OpenAI-compatible HTTP API
- `./coli bench` — quality benchmarks (MMLU, HellaSwag, ARC)
- `./coli convert --model /path` — FP8→int4 converter
- `./coli doctor` — readiness check
- `./coli plan` — storage/RAM/VRAM plan

### Platforms
- Linux, macOS (M-series Metal backend), Windows 11 native (MinGW-w64)
- Optional CUDA backend for resident tensors

### Related Sources
- src-2026-06-18-011 (Concurrent Gemma — running multiple local models)
- src-2026-06-23-007/008 (Unlimited-OCR — edge AI / quantization)

### License
Apache 2.0. GLM-5.2 weights by Z.ai under MIT.
