---
title: "LiteReality-Agent Project Site"
kind: "paste"
captured_at: "2026-08-09 08:06"
tags: ["3d-reconstruction", "web-design", "agents", "roomplan", "blender", "interactive"]
source_url: "https://litereality.github.io/Litereality-agent-site/"
status: "inbox"
---

# LiteReality-Agent Project Site

## Source overview
The project site presents LiteReality as an iOS LiDAR room scanner and LiteReality-Agent as the reconstruction pipeline.

## Design and workflow
- Scan with posed RGB and LiDAR data.
- Initialize walls, openings, and cameras into a blank room.
- Let the agent author the room by editing Room.py.
- Run automatic quality control before producing the scene.
- Export a realistic, interactive, articulated scene.

## Interaction model
The site presents the authoring loop as edit, render, compare, and critique. It highlights text-based retexturing, furniture rearrangement, decoration, and pixel-exact intrinsics.
