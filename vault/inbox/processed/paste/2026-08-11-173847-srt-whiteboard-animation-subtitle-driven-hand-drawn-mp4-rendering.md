---
title: "SRT Whiteboard Animation: Subtitle-Driven Hand-Drawn MP4 Rendering"
kind: "paste"
captured_at: "2026-08-11 17:38"
tags: ["github", "python", "srt", "subtitles", "whiteboard-animation", "video-generation", "storyboarding", "mp4", "mit"]
source_url: "https://github.com/geeklee/srt-whiteboard-animation"
status: "inbox"
---

# SRT Whiteboard Animation: Subtitle-Driven Hand-Drawn MP4 Rendering

## Source overview
srt-whiteboard-animation is a Python workflow for converting SRT subtitles and scene images into whiteboard-style hand-drawn animation videos. It is intended for knowledge explainers, narrated stories, courses, and short-video scripts.

The project is MIT-licensed. This capture inspected the repository documentation only. It did not execute the environment setup or rendering scripts.

## Core workflow
The repository describes a subtitle-driven and confirmation-driven workflow:
1. Parse the SRT and propose scenes and illustration strategy.
2. Confirm the storyboard, then create consistent line art.
3. Confirm the line art, then create image annotations linked to subtitles.
4. Confirm annotations, then generate region and direction checks.
5. Adjust regions, narrative order, timing, and subtitle links in the browser preview.
6. Confirm final annotations, then render each scene to MP4.
7. Confirm scene videos, then merge multi-scene projects.

The recommended scene duration is 25–35 seconds. The workflow aims to keep one core idea per scene.

## Annotation model
Each scene uses annotation.json. The documented fields include:
- sceneId
- canvas width and height
- storyBasis
- sceneDurationMs
- elements

Each element can define an id, label, sequence, narrativeRole, subtitle association, type, region, reveal direction, start time, duration, mask padding, protected regions, and a hand path.

Elements should follow narrative order: scene setup, key people or objects, actions or changes, then reactions or results. Protected regions delay overlapping content so later elements do not appear early.

The preview uses rectangular region and hand-path proxies. The final renderer generates the actual flowing pen strokes.

## Rendering behavior
Each element appears according to its subtitle event. The renderer uses a continuous stroke process:
- ink draws the line art.
- color fills the element afterward.

The output is a whiteboard video with a warm beige paper background, dark gray sketch lines, and limited red, orange, or blue accents. The visual rules avoid scene text, labels, photographic styling, 3D effects, and complex textures.

The repository supports single-scene rendering and multi-scene merging. It documents ink-path options such as grid and skeleton, and color-fill options such as contour-wipe.

## Repository tools
- scripts/parse_srt.py: parses subtitles and proposes scene splits.
- scripts/render_annotation_preview.py: generates region-check images.
- scripts/render_stream_whiteboard.py: renders flowing-stroke MP4 output.
- scripts/merge_scenes.py: merges scene videos.
- scripts/prepare_env.py: prepares an isolated Python environment.
- assets/preview.html: local browser annotation editor.
- assets/drawing-hand.png: hand asset for the animation.

The documented project asset structure stores scene PNGs, annotation JSON files, whiteboard MP4s, and preview MP4s under assets/whiteboard/<project-name>/.

## Quality checks
The documentation recommends checking:
- The first frame is a clean warm beige background.
- Canvas dimensions match the source image.
- Regions use integer coordinates inside the canvas.
- Sequence and timing match subtitle narrative order.
- Unstarted regions and protected areas do not appear early.
- The hand stays near the active stroke.
- The final frame remains visible for at least 0.5 seconds.
- Multi-scene merge order matches the storyboard.

## User-provided summary
https://github.com/geeklee/srt-whiteboard-animation
Python Skill for Converting SRT Subtitles into Whiteboard Hand-Drawn Animation Videos

The subtitles drive elements to appear one by one in narrative order, with continuous stroke drawing followed by coloring, outputting MP4, eliminating the manual work of frame-by-frame whiteboard animation.
