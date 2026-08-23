---
title: "Hunyuan3D 2.0: Open 3D Shape and Texture Generation"
kind: "paste"
captured_at: "2026-08-12 23:53"
tags: ["tencent", "hunyuan3d", "3d-generation", "image-to-3d", "text-to-3d", "mesh-generation", "texture-synthesis", "pbr", "open-source"]
source_url: "https://github.com/Tencent-Hunyuan/Hunyuan3D-2"
status: "inbox"
---

# Hunyuan3D 2.0: Open 3D Shape and Texture Generation

## Source overview
Tencent's Hunyuan3D 2.0 is an open 3D synthesis system for high-resolution textured 3D assets. The system separates generation into two foundation components:
- Hunyuan3D-DiT for shape or mesh generation.
- Hunyuan3D-Paint for texture synthesis.

The shape model uses a flow-based diffusion transformer and aims to align generated geometry with a condition image. The texture model generates texture maps for generated or hand-crafted meshes. Tencent also describes Hunyuan3D-Studio as a production platform for manipulating and animating meshes.

## Reported performance
Tencent reports that Hunyuan3D 2.0 outperforms the listed open- and closed-source baselines on its evaluation. The README table reports:
- CMMD: 3.193.
- FID_CLIP: 49.165.
- FID: 282.429.
- CLIP score: 0.809.

These are vendor-reported benchmark results. The inspected sources do not establish independent replication.

## Models and variants
The Hunyuan3D-2 repository lists these 2.0 components:
- Hunyuan3D-DiT-v2-0: 1.1B image-to-shape model.
- Hunyuan3D-Paint-v2-0: 1.3B texture-generation model.
- Hunyuan3D-Delight-v2-0: 1.3B image-delight model.
- Turbo and fast variants for shape generation.
- Hunyuan3D-2mini variants at 0.6B.
- Hunyuan3D-2mv multiview variants at 1.1B.

The repository news also lists later Hunyuan3D-2.1 and Hunyuan3D-2.5 releases. Therefore, this record describes the 2.0 release and not the newest Hunyuan3D version.

## Hardware and access
The GitHub README states an approximate 6GB VRAM requirement for shape generation and 16GB total for shape plus texture generation. The project supports macOS, Windows, and Linux according to the README.

Users can access the system through Python code, a Gradio app, an API server, a Blender addon, the official Hunyuan3D site, or community integrations such as ComfyUI wrappers.

## Python workflow
The documented API uses diffusers-like pipelines. Hunyuan3D-DiT can generate a mesh from an input image. Hunyuan3D-Paint can then texture the mesh using the mesh and source image. The output mesh can be saved as GLB, OBJ, or another supported format.

The repository also documents multiview image-to-3D generation and texture generation for hand-crafted meshes.

## Open-source plan and resources
The repository lists inference code, model checkpoints, technical reports, ComfyUI support, finetuning, and TensorRT work in its open-source plan. It links model checkpoints on Hugging Face and provides an official web application.

The repository acknowledges work from Trellis, DINOv2, Stable Diffusion, FLUX, diffusers, Hugging Face, CraftsMan3D, and Michelangelo.

## User-provided announcement
I am truly honored to announce that our 3D open source project has entered its 2.0 version, presenting revolutionary effects that rival those of commercial products.

Hugging Face model page: https://huggingface.co/tencent/Hunyuan3D-2
GitHub repository: https://github.com/Tencent/Hunyuan3D-2
