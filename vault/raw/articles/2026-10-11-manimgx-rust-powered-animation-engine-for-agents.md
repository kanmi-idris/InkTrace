---
title: ManimGX: animation engine for agents
kind: article
captured_at: 2026-10-11 14:48
tags: [ManimGX, animation, Manim, Rust, wgpu, coding-agents]
source_url: https://github.com/academa-labs/manimgx
status: raw
---

# ManimGX: animation engine for agents

## Source scope
The user supplied an announcement with links to the ManimGX repository and docs. This capture records the repository README. It separates the announcement's wording from facts checked on the project page. Product features, compatibility, safety, and performance remain project claims unless independently verified.

## User-provided announcement
The message describes ManimGX as a 3D animation engine for agents, with a Rust and wgpu core, Manim Python API compatibility, one pip install, and no system dependencies. It claims “90× faster than ManimCE.” It includes a prompt asking a coding agent to follow `https://manimgx.academa.ai/llms.txt`, install ManimGX, create a solar-system animation, and open it. I did not run that prompt.

## Repository README claims
- The README describes ManimGX as a math and 3D video engine that uses a Python API based on Manim Community Edition and renders with Rust and wgpu.
- It lists 2D and 3D scenes, text, equations, plots, surfaces, meshes, camera motion, sound, synchronized speech, browser rendering through Pyodide and WebGPU, and an `inspect` command that creates storyboards and checks 2D layout.
- The README's performance claim is 36.2 seconds of video rendered in 3.08 seconds across five scenes at 1080p60 on an Apple M4 Pro. It reports 90.6× versus ManimCE. The benchmark method and limits are in `src-2026-10-11-002`.
- The README says `pip install manimgx` works on macOS, Linux, and Windows with Python 3.13 or newer. It says fonts, typesetting, and video encoding are included. The agent guide narrows supported Python versions to 3.13 and 3.14; see `src-2026-10-11-003`.
- The README says the project's own code is MIT-licensed, but native wheels that include x264 are GPL-3.0-or-later as a whole. Bundled components have their own notices. Review all applicable licenses before redistribution.

## Limits
The README's claims are authored by the project. The benchmark is separate and project-run. Manim CE compatibility has documented behavior differences in `src-2026-10-11-004`. I did not install the package, run an example, or create a video.
