---
title: text-to-cad (CAD Skills) — agent skills for CAD, robotics & hardware design
kind: paste
captured_at: 2026-07-20 14:41
tags: [cad, robotics, hardware, agents, skills, build123d, opencascade, step, urdf, fabrication]
source_url: https://github.com/earthtojake/text-to-cad
status: inbox
---

# text-to-cad (CAD Skills) — agent skills for CAD, robotics & hardware design

# text-to-cad (CAD Skills) — agent skills for CAD, robotics & hardware design

Source: https://github.com/earthtojake/text-to-cad (README)
Docs: https://www.cadskills.xyz · Demo: https://demo.cadskills.xyz
License: MIT
Author: earthtojake (@earthtojake). Repo: 8.5k★, 979 forks. Latest release 0.3.9 (Jul 10, 2026). Topics: cad, robotics, stl, step, urdf, sdf, dxf, srdf, build123d, opencascade, agents, ai-agents.

## What it is
A skills library for CAD, robotics, and hardware-design agents. Lets agents generate, inspect, source, slice, and hand off CAD / robot-description artifacts from local project files. Built on build123d / OpenCASCADE (OpenCascade) under the hood for STEP/STL/3MF/GLB output.

## Skills (installable individually)
- **CAD** — create/edit CAD models from plain-language or image requests; STEP is main output, also STL/3MF/GLB exports.
- **CAD Viewer** — local browser previews for CAD, G-code, and robot files.
- **step.parts** — find off-the-shelf STEP parts (screws, bearings, motors, connectors).
- **DXF** — 2D DXF drawings (profiles, templates, gaskets, cut layouts) from Python or CAD geometry.
- **URDF** — robot structure files: links, joints, limits, inertials, meshes.
- **SRDF** — MoveIt planning groups, end effectors, poses, collision rules on a URDF.
- **SDF** — simulator models/worlds: frames, physics, sensors, lights.
- **SendCutSend** — pre-upload checks for DXF/STEP files.
- **G-code** — slice mesh files into validated, printer-profiled FDM `.gcode` via real slicer CLIs.
- **Bambu Labs** — dry-run, upload, cautiously start local Bambu Lab print jobs from validated `.gcode`.
- **Implicit CAD** (experimental) — browser-native implicit CAD via GLSL signed-distance fields + raymarch rendering in CAD Viewer.

## Installation
- Skills (preferred): `npx skills install earthtojake/text-to-cad`
- Codex plugin: `codex plugin marketplace add earthtojake/text-to-cad` then `codex plugin add cad@text-to-cad`
- Claude Code plugin: `claude plugin marketplace add earthtojake/text-to-cad` then `claude plugin install cad@text-to-cad`
- Also ships `.claude-plugin` and `.codex-plugin` directories.

## Benchmarks
Repo includes 10 benchmark prompts (Git LFS for GIFs) from simple (rectangular calibration block, circular flange) to advanced (centrifugal impeller, spiral staircase, planetary gear stage). Used to validate model output quality.

## Relevance
Part of the broader "agent skills for physical/hardware domains" trend alongside our design-engineering skill collections (Taste Skill, Emil Kowalski, Jakub Krehel, Legend Skills, Printing Press). Distinct in targeting manufacturing/fabrication/robotics rather than UI.
