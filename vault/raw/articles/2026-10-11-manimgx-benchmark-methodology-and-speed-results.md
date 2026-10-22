---
title: ManimGX benchmark method and results
kind: article
captured_at: 2026-10-11 14:48
tags: [ManimGX, benchmark, ManimCE, rendering, performance, methodology]
source_url: https://github.com/academa-labs/manimgx/tree/main/benchmarks
status: raw
---

# ManimGX benchmark method and results

## Source scope
This is the project's benchmark README, linked from the ManimGX repository. It describes its own five-scene comparison. The project says the chart, results, and comparison images come from the benchmark folder. I did not run the benchmark or independently reproduce the numbers.

## Reported results
For five scenes totaling 36.2 seconds of 1080p60 video, the benchmark reports these total elapsed times from process launch to finished MP4:
- ManimGX: 3.078 seconds
- ManimGL: 35.284 seconds
- ManimCE: 278.826 seconds
- Blender Workbench: 57.611 seconds
- Blender EEVEE: 601.395 seconds

The project reports 90.6× versus ManimCE, 11.5× versus ManimGL, 18.7× versus Blender Workbench, and 195.4× versus Blender EEVEE. The benchmark compares each engine's own renderer and exporter. These results are specific to this scene suite and setup.

## Method and environment reported by the project
- Five scenes: a surface and orbiting camera, matrix-vector multiplication, twelve pendulums, planets and moons, and linked rings.
- Output: 1920×1080 at 60 fps, H.264 yuv420p in MP4. Each engine uses its own renderer and exporter.
- ManimGX, ManimGL, and ManimCE use x264 `ultrafast` at CRF 23. Blender uses its fastest `REALTIME` preset at CRF 23, which the project says corresponds to x264 `superfast`.
- Timed duration includes process startup, scene build, rendering, encoding, and MP4 completion. ManimGX's time also includes its storyboard and layout checks.
- ManimGX and ManimGL scene times are means of three runs. ManimCE and each Blender renderer use one run per scene. Runs were sequential. Operating-system and GPU-driver caches were not cleared between runs.
- The runner validates output video size, pixel format, frame rate, timestamps, length, and encoder settings. The project says the dataset contains 45 runs.
- The project reports measurement on 2026-10-07 using an Apple M4 Pro with 12 CPU cores and 24 GB memory, macOS 15.7.9, ManimGX 0.1.0, ManimGL 1.7.2, ManimCE 0.21.0, and Blender 5.2.2 LTS.

## Limits
The benchmark is made by the ManimGX project, not an independent lab. Run counts differ: ManimGX and ManimGL have three runs per scene, while ManimCE and Blender have one. Each engine uses its own implementation and rendering path. The reported ratio should not be treated as a universal speedup for every scene, computer, or production workload. I did not inspect or execute the raw benchmark results.
