---
title: "FFrames Studio: Rust and SVG GPU video rendering"
kind: "paste"
captured_at: "2026-09-29 14:13"
tags: ["video", "motion-graphics", "rust", "svg", "gpu", "skia", "ffmpeg", "agentic-ai", "coding-agents", "wasm", "audio", "rendering", "design-tools", "mit", "github", "site-reported"]
source_url: "https://fframes.studio/"
status: "inbox"
---

# FFrames Studio: Rust and SVG GPU video rendering

Source checked: 2026-09-29.

## Site and repository identity
- The supplied site is https://fframes.studio/.
- The site links to the official repository https://github.com/dmtrKovalenko/fframes.
- fframes is an MIT-licensed Rust framework for programmatic video rendering. Its stated workflow writes video scenes in Rust and SVG, renders them on the GPU, and encodes output with ffmpeg.
- The GitHub API snapshot reports Rust as the primary language, 800 stars, 16 forks, and main as the default branch. These metrics are volatile.

## Rendering model
- A video is represented by Rust code that returns an SVG tree for each frame.
- Scenes, timelines, easing, springs, audio tracks, and shader layers are composed in code.
- The Skia backend renders through Metal on macOS or Vulkan on Linux and Windows. A CPU backend is available as a slower fallback.
- fframes links ffmpeg's libav libraries rather than starting a separate ffmpeg process for encoding.
- SkSL and Shadertoy GLSL shaders can be used as frame layers when SVG is not enough.
- Static SVG markup can be cached between frames, while expressions are evaluated for animation.

## Agent workflow
- The repository ships a coding-agent skill that can create a project, design motion, place sound, render a video, and review the result.
- The framework is designed for an agent that cannot watch a video or hear audio directly. Its command line can produce timelines, contact sheets, full-size frames, onion-skin motion views, SVG text, and loudness reports.
- The documented review loop checks scene timing, missing media, text bounds, SVG problems, motion paths, frame snapshots, and audio levels before final rendering.
- A browser editor compiles the video to WebAssembly and provides a timeline for interactive human editing.
- The project can also be used without an agent through a Rust project generator and Cargo commands.

## Speed claims
- The fframes.studio landing page states that a video was built by Codex in 36 minutes and rendered in 24 seconds.
- The repository README describes a 128-second launch video that was created in 48 minutes and rendered in 36 seconds.
- These claims differ. They may refer to different runs or revisions, but the sources do not reconcile them.
- The speed claims are author-reported. They were not independently benchmarked here and depend on video length, resolution, scene complexity, hardware, codecs, and whether the first native build is included.
- The README says the first Skia and ffmpeg build can take a long time, while later builds are much faster.

## Requirements and platform notes
- Rust is required. The editor also requires Node.js.
- macOS and Linux builds compile or link system multimedia and graphics dependencies. Windows uses a prebuilt FFmpeg shared build and LLVM for bindings.
- GPU backends require the matching platform support. The CPU backend avoids the Skia build but has no preview window and renders more slowly.
- The repository includes examples for launch videos, UI motion, technical explainers, shaders, audio visualizations, podcasts, vertical video, and batch conference splash screens.

## Evidence limits and relevance
- Site and repository performance, workflow, and compatibility claims are author-reported. No dependency installation, project generation, build, render, or output review was performed for this capture.
- fframes is relevant to programmatic motion design, agent-assisted video production, Rust media tooling, SVG animation, GPU rendering, deterministic frame review, and automated audiovisual QA.
- Its strongest practical distinction is the review surface for coding agents: it converts visual and audio checks into inspectable files and measurements rather than relying only on a human preview.
