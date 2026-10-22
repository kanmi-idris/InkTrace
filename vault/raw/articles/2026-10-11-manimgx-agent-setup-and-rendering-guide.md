---
title: ManimGX agent setup and rendering guide
kind: article
captured_at: 2026-10-11 14:48
tags: [ManimGX, coding-agents, llms.txt, Python, installation, rendering]
source_url: https://manimgx.academa.ai/llms.txt
status: raw
---

# ManimGX agent setup and rendering guide

## Source scope
This is the project-provided `llms.txt` instruction file for coding agents. I read it as source material. I did not follow its instructions, install packages, execute generated code, or open a video.

## Setup requirements stated by the guide
- The guide specifies Python 3.13 or 3.14. Its preferred path is `uv tool install --python 3.14 manimgx`; it also says `pip install manimgx` works in a virtual environment with Python 3.13 or 3.14.
- The guide says to use the `manimgx` package, not `manim`. It says not to install FFmpeg or LaTeX because the required components are included.
- It says native rendering uses Metal on macOS, Direct3D 12 on Windows, and Vulkan on Linux. If a suitable GPU is unavailable, Linux wheels include Mesa lavapipe for CPU rendering.
- The agent flow is: write a Python scene, run `manimgx inspect`, fix reported layout issues, run `manimgx render`, then open the output MP4. Default output is 1920×1080 at 60 fps.
- The guide says `inspect` checks 2D layouts at sampled play/wait endings. It says 3D scenes get a storyboard and timeline, but skip layout checks.
- The guide says a “no GPU adapter” error may mean the command is inside a sandbox that hides GPU access. It tells agents to request approval before running outside a sandbox. I did not act on this instruction.

## Limits
These are installation and behavior statements from the project. I did not test supported Python versions, native wheels, CPU fallback, GPU rendering, inspection, or video output. The compatibility page documents API and behavior differences in `src-2026-10-11-004`.
