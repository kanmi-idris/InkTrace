---
title: "Needle 2: 14MB Agentic LLM for Edge Devices"
kind: "paste"
captured_at: "2026-08-11 16:52"
tags: ["cactus-compute", "needle-2", "edge-ai", "on-device-ai", "agentic-llm", "tool-calling", "microcontrollers", "quantization", "simple-attention"]
source_url: "https://cactuscompute.com/needle"
status: "inbox"
---

# Needle 2: 14MB Agentic LLM for Edge Devices

## Source overview
Cactus Compute presents Needle 2 as an open 45-million-parameter model for tool calling, device use, and structured extraction. The complete model is shipped as a single 14MB binary and is designed to run a full session in 28MB of RAM.

The model is built on Cactus Compute's Simple Attention Network findings. It uses CQ2-bit compression through Cactus Quants and is shipped with its own inference engine. The page lists Apache 2.0 licensing, Hugging Face weights at https://huggingface.co/Cactus-Compute/needle-2, and the source repository at https://github.com/cactus-compute/needle.

## Target devices and use cases
Needle targets phones, wearables, smart homes, robots, automotive devices, Raspberry Pi boards, and newer microcontrollers. The page frames the target market as low-cost edge hardware without a GPU or NPU and with limited RAM.

The Playground examples cover wearables, robots, smart homes, phones, and automotive use. Cactus describes the model as suitable for private, offline, low-latency device control. The page names Pebble's Index 01 app as a production example for local spoken-action handling without network dependence.

## Reported size and speed
- 45M parameters.
- CQ2-bit compression.
- 14MB file size.
- 28MB peak or bounded session RAM.
- 500+ tokens/sec decode on Raspberry Pi 5.
- 800+ tokens/sec prefill on Raspberry Pi 5.
- 400–1,500 tokens/sec on VR devices such as Meta Quest 3S and Apple Vision Pro.
- 300–700 tokens/sec on sub-$200 phones such as Samsung A-Series devices.
- Runs on newer microcontrollers such as ESP32-S3.

These are vendor-reported measurements. The page does not provide a device-specific test protocol in this capture.

## Model formulation
Cactus frames device control as mapping a natural-language request to a typed function call. It states that the model uses a call envelope on every turn, with an empty call as the refusal path. A byte-level grammar compiled from declared schemas constrains output tokens.

Needle also carries a learned confidence score. Cactus describes a local-first edge-cloud pattern: act above a chosen confidence threshold, and re-ask or escalate below it.

The page says the model is trained with Cactus Quants from pretraining through post-training. It states that weights, activations, and KV cache are trained for the compressed deployment rather than quantized only after training.

## Architecture and engine
The Simple Attention Network description includes:
- Four residual streams.
- A fixed Walsh-Hadamard transform.
- Hashed n-gram tables used as gathered memory or engrams.
- Sinkhorn-normalized routing.
- Sandwich normalization and input-dependent gates.
- A byte-level grammar compiled from tool schemas.

The page describes a 27-layer, 512-wide network with a 256-token sliding attention window. System prompts and tool declarations are pinned as permanent sinks. The engine keeps 2-bit codes in vector registers, fuses expansion into integer dot products, and keeps activations, KV cache, and lane routing tables on an int8 arithmetic path. A universal dependency-free C++ binary probes the CPU and selects kernels for SDOT, NEON, AVX2, RISC-V vectors, WebAssembly SIMD, or scalar execution. The engine can compile single-threaded for bare metal and ship as a static library for Cortex-M4, M7, and M55.

## Compute and energy claims
Cactus reports these MFLOPs per token values:
- Needle 2: 70 MFLOPs with 45M total parameters and 35M matmul-active parameters.
- Same-shape dense-MLP transformer: 164 MFLOPs.
- Matched-parameter transformer: 87 MFLOPs.
- LFM2.5 230M: 460 MFLOPs.
- FunctionGemma 270M: 540 MFLOPs.
- Apple FM, approximately 3B: approximately 6,000 MFLOPs.

The page says Needle spends 7× to 85× fewer MFLOPs per token than the smallest performant LLMs in its comparisons. It attributes the reduction to gathered engram parameters, fixed transforms, compressed weights, bounded memory, and grammar-based vocabulary pruning. These are vendor-reported architecture and energy arguments.

## Evaluation
Cactus evaluates Needle 2 end-to-end through the shipped C++ engine with CQ2-bit weights, tool retrieval enabled, and the 256-token sliding KV window. Baselines use released checkpoints under vLLM at full context, and Apple FM runs on-device.

Reported strict exact-match accuracy:
- Mobile Actions, 961 rows: LFM2.5 69.1%, FunctionGemma 64.0%, Needle 2 63.7%, Apple FM 57.6%.
- DroidCall, 200 rows: FunctionGemma 17.5%, Needle 2 17.0%, LFM2.5 11.0%.
- Seal-Tools in-domain, 700 rows: Needle 2 32.6%, LFM2.5 26.9%, FunctionGemma 16.3%.
- Seal-Tools out-of-domain, 654 rows: Needle 2 28.7%, LFM2.5 17.0%, FunctionGemma 15.6%.
- BFCL v4 single-turn, 3,641 rows: Apple FM 61.7%, LFM2.5 60.8%, FunctionGemma 46.1%, Needle 2 42.6% overall; Needle 2 well-formed rate 93.4%.

Cactus explicitly notes two comparison asymmetries: Needle is trained specifically for device tool calling and structured extraction, while the baselines are general language models; Needle is evaluated at CQ2-bit while baselines remain at f16. Treat the tables as a vendor evaluation, not an independent benchmark audit.

## Training note and source discrepancy
The supplied user text says Needle 2 has 45M parameters trained from the ground up on 140B tool-call, device-use, and structured-generation tokens.

The inspected Cactus page instead says Needle 2 is pretrained on a proprietary 115B-token corpus and post-trained on 38B tokens with compact reasoning traces and dataset distribution design. It also compares this with LFM2.5-230M pretraining on 19T tokens. The two training descriptions are not identical, so the 140B claim remains user-provided and unverified by the linked page.

## User-provided announcement
We release Needle 2: A 14MB agentic LLM for phones, wearables, smart home, robots and microcontroller. The whole model is a single 14MB binary that runs a full session in 28MB of RAM. It is built on our Simple Attention Network findings, compressed to CQ2-bit with Cactus Quants, and baked into its own engine.

Needle 2 has 45m parameters trained from the ground up on 140B tool call, device use structured generation tokens. On mobile device use benchmarks, Needle 2 trades wins with frontier small LLMs like LFM2.5 230M, Apple FM Gemma-270m, at 5× to 70× smaller, and 2 bits against their f16.

Needle hits 500 tokens/sec decode speed on a Raspberry Pi 5, between 400–1,500 tokens/sec on VR devices like Meta Quest 3S and Apple Vision Pro, and ranges 300–700 on sub-$200 phones such as the Samsung A-Series. Needle also runs on newer microcontrollers like ESP32.

A conventional transformer of Needle's width and depth spends 164 MFLOPs per token, and even one squeezed down to Needle's parameter count spends 87, Needle spends 70. Even on a high-end phone, an always-on assistant lives inside a power budget; every MFLOP is milliwatt-hours, and Needle spends 7x to 85x fewer of them per token than the smallest performant LLMs.

Read more: https://cactuscompute.com/needle
