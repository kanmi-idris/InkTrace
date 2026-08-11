---
title: "LiteReality/LiteReality-Agent"
kind: "paste"
captured_at: "2026-08-09 08:06"
tags: ["github", "3d-reconstruction", "computer-vision", "blender", "agents", "roomplan"]
source_url: "https://github.com/LiteReality/LiteReality-Agent"
status: "inbox"
---

# LiteReality/LiteReality-Agent

## Source overview
LiteReality-Agent is an open-source end-to-end toolkit for reconstructing interactable indoor 3D scenes from RGB-D room scans.

## Workflow
1. Scan a room with the LiteReality iOS scanner.
2. Upload the RGB frames, depth data, camera data, point cloud, and RoomPlan USDZ layout.
3. Run deterministic scene initialization.
4. Run agentic authoring that edits and refines a Room.py scene.
5. Run quality checks before export.

## Requirements
The repository targets macOS Apple Silicon and Linux with a GPU of at least 24 GB. It uses uv, Blender 5.x, an OpenAI API key, a logged-in agent CLI, and either Modal or a local GPU for TRELLIS and GroundingDINO.

## Outputs
The pipeline produces a GLB, a Blender scene, and a programmable room directory. The repository states that current scenes are interactive but not yet fully simulation-ready.
