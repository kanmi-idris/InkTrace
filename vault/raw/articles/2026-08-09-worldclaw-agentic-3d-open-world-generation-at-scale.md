---
title: "WorldClaw: Agentic 3D Open-World Generation at Scale"
kind: "paste"
captured_at: "2026-08-09 19:59"
tags: ["worldclaw", "tencent", "hunyuan3d", "generative-3d", "agents", "world-generation"]
source_url: "https://tencent-hunyuan.github.io/Hunyuan3D-WorldClaw/"
status: "inbox"
---

# WorldClaw: Agentic 3D Open-World Generation at Scale

## Overview
WorldClaw is a Tencent Hunyuan3D research system for agentic open-world 3D generation at scale. It turns one open-ended prompt into an explicit, explorable, and editable 3D world.

The system keeps global terrain coherent while selectively building rich local detail. It returns terrain and objects as separate, editable instances.

## Results
The project page presents eleven generated worlds, with isometric layouts, aerial orbit views, ground-level walks, and four render channels: RGB appearance, instance masks, surface normals, and depth.

## Abstract
WorldClaw uses a fully agentic, coarse-to-fine framework. Planning agents translate a text prompt into a structured specification of regions, terrain, assets, materials, and spatial relations. The system builds a globally coherent terrain foundation from semantic layouts, reusable assets, generative or procedural materials, and a region-aware height field.

For detail-demanding regions, it generates terrain-conditioned compositions, reconstructs editable textured meshes, and recovers their placement on the terrain. Render-based agents refine terrain, objects, appearance, and object-terrain contacts.

## Method
The pipeline has three stages:
1. Intent analysis and planning. Extract explicit constraints and create a structured scene specification containing regions, terrain constraints, and object constraints.
2. Global terrain generation. Create a semantic layout map, reusable asset prototypes, surface materials, and a region-aware height field. A render-inspect-edit loop refines transitions, materials, scattering, and lighting.
3. Regional object generation and placement. Select regions that support requested functions, create terrain-conditioned compositions, segment instances, reconstruct textured meshes, recover terrain-aligned transforms, and refine pose, scale, mesh quality, and object-terrain contact.

## Editability
Each selected region returns instance-level geometry, appearance attributes, and a terrain-aligned placement transform. The resulting world supports free-viewpoint exploration, object-level editing and reuse, and hand-off to rendering, animation, and game-engine workflows.

## Citation
The page lists the 2026 arXiv paper as arXiv:2608.05248, by Chunchao Guo, Jinpeng Li, Yang Li, and Zilong Huang. The cited title is WorldClaw: Agentic 3D Open-World Generation at Scale.
