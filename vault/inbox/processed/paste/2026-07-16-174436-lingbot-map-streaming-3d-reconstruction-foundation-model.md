---
title: LingBot-Map — Streaming 3D Reconstruction Foundation Model
kind: paste
captured_at: 2026-07-16 17:44
tags: [3d-reconstruction, foundation-model, streaming, computer-vision, transformer]
source_url: https://github.com/Robbyant/lingbot-map
status: inbox
---

# LingBot-Map — Streaming 3D Reconstruction Foundation Model

# LingBot-Map — Streaming 3D Reconstruction Foundation Model

**URL:** https://github.com/Robbyant/lingbot-map
**Stars:** 10.7k
**Forks:** 1.2k
**License:** Apache 2.0
**Author:** Robbyant Team
**Paper:** arXiv:2604.14141

A feed-forward 3D foundation model for reconstructing scenes from streaming data. Builds upon VGGT, DINOv2, and FlashInfer.

## Key Features

- **Geometric Context Transformer**: Unifies coordinate grounding, dense geometric cues, and long-range drift correction within a single streaming framework via anchor context, pose-reference window, and trajectory memory.
- **High-Efficiency Streaming Inference**: Feed-forward architecture with paged KV cache attention, enabling ~20 FPS on 518×378 resolution over 10,000+ frames.
- **State-of-the-Art Reconstruction**: Superior on diverse benchmarks vs both streaming and iterative optimization-based approaches.

## Architecture

- PyTorch 2.8 + CUDA 12.8
- FlashInfer for paged KV cache attention (SDPA fallback available)
- ViSer interactive viewer
- Offline batch rendering pipeline with Kaolin + Open3D

## Models

- **lingbot-map-long** — better for long sequences and large-scale scenes
- **lingbot-map** — balanced checkpoint (used in paper)
- **lingbot-map-stage1** — Stage-1 training checkpoint

## Benchmarks

KITTI, Oxford Spires, VBR, Droid-W, TUM-D, 7-scenes, ETH3D, Tanks and Temples, NRGBD.

## Demo

Interactive 3D viser viewer at localhost:8080. Supports sky masking via ONNX, sliding-window inference for 10,000+ frame sequences, keyframe interval caching.
