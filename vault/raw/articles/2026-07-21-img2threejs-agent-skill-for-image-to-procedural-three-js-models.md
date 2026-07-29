---
title: img2threejs — Agent Skill for Image-to-Procedural Three.js Models
kind: paste
captured_at: 2026-07-21 16:18
tags: [threejs, image-to-3d, procedural-generation, ai-agents, agent-skill, webgl, computer-graphics]
source_url: 
status: inbox
---

# img2threejs — Agent Skill for Image-to-Procedural Three.js Models

# img2threejs — Agent Skill for Image-to-Procedural Three.js Models

**Repo**: github.com/hoainho/img2threejs
**Author**: hoainho
**Stars**: 1.3k★ | **Forks**: 111 | **License**: MIT
**Version**: v1.0 (Jul 21, 2026)
**Language**: Python 100%
**Topics**: webgl, threejs, typescript, procedural-generation, computer-graphics, generative, 3d, ai-agents, image-to-3d, claude-code

**Live Gallery**: hoainho.github.io/img2threejs-showcase/

## Overview
Agent skill that rebuilds an object from a single reference image as a code-only, procedural, quality-gated, animation-ready Three.js model. No mesh files, no photogrammetry, no downloaded art packs. Output is diffable TypeScript + JSON spec.

## Pipeline (staged sculpting with quality gates)
1. **Probe & suitability gate** — is the image a viable 3D target
2. **Pre-Spec Assessment** — classify object, score complexity, emit quality contract
3. **Author ObjectSculptSpec** — component tree, materials, sockets, detail inventory
4. **Strict-quality validation** — blocks shallow specs before any codegen
5. **Locked build passes** (fixed order, each unlocks after review):
   `blockout → structural-pass → form-refinement → material-pass → surface-pass → lighting-pass → interaction-pass → optimization-pass`
6. **Render + comparison sheet** — side-by-side reference vs render
7. **Agent vision review** — score pass/fail; refine-spec or refine-code if below threshold
8. **Action-ready output** — `root.userData.sculptRuntime` with pivots, sockets, colliders, destruction groups

## Token Efficiency
- Python scripts (stdlib only, zero deps) handle validation, gating, spec authoring, PBR extraction, comparison-sheet packaging
- Model tokens reserved for one thing: visual judgment on a single side-by-side sheet
- Pass-gated generation — each iteration emits only the current unlocked pass
- Text output (TypeScript + JSON), not binary mesh files

## Scripts (15+ pure Python 3.10+)
- `probe_image.py`, `extract_pbr_evidence.py`, `build_detail_inventory.py`, `extract_landmarks.py`, `solve_camera_pose.py`, `delight_albedo.py`
- `new_pre_spec_assessment.py`, `new_sculpt_spec.py`, `validate_sculpt_spec.py`
- `orchestrate_passes.py`, `generate_threejs_factory.py`
- `make_comparison_sheet.py`, `append_review.py`, `bake_projected_texture.py`
- `_shared/feature_acceptance_policy.py`

## Detail-First Analysis
- `detailInventory` enumerated before any codegen — gloss, bevel/rounding, screws/rivets, engraved linework, contours, stains/wear
- Every detail maps to a real component or material; strict-quality gate blocks until complete
- Opt-in character path: anatomy track, proportion-lock, feature-placement, likeness maximization (projection-first)

## Demos
Sony WF-1000XM3 earbuds, ISSACA shotgun, Gerber knife, Doraemon House isometric diorama, War-Hauler "SECTOR 07", Crowned Loot Chest

## Install
```
git clone https://github.com/hoainho/img2threejs.git ~/.claude/skills/img2threejs
```
Then in Claude Code: `/img2threejs Rebuild this object as a Three.js model`

## Agent-Agnostic
Works with Claude Code, Codex, or OpenCode. Uses whatever the host provides (native image reading, browser MCP, project preview, user screenshot).

## Cross-reference
Complements our Three.js and procedural 3D resources. Related to Redraw (`src-2026-07-17-011`) and other 3D/WebGPU sources.
