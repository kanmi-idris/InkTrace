---
title: Redraw 'liquid-metal' example — William Candillon's WebGPU 2D primitives library
kind: paste
captured_at: 2026-07-17 13:00
tags: [redraw, webgpu, react-native, shaders, liquid-metal, graphics, william-candillon, vector-feathering]
source_url: https://wcandillon.github.io/redraw/examples/example/liquid-metal
status: inbox
---

# Redraw 'liquid-metal' example — William Candillon's WebGPU 2D primitives library

# Redraw — "liquid-metal" example (William Candillon)

URL: https://wcandillon.github.io/redraw/examples/example/liquid-metal (page timed out on direct fetch; reconstructed from Redraw docs + wcandillon.dev).

**Redraw** is a new 2D primitive library by William Candillon (maintainer of React Native Skia and React Native WebGPU), built on top of WebGPU. Goal: a "new grade of 2D primitives" — variable stroke width, geometry-aware shading, and advanced vector feathering — running on both Web and Native. Currently a technical preview available to wcandillon.dev subscribers; API is unstable.

## Core capabilities (the primitives)
- **Variable Strokes** — stroke width and color are TypeScript functions compiled and executed on the GPU, receiving path geometry as input. Dynamic, geometry-aware strokes.
- **Color Along Path** — fills/strokes driven by TS functions on GPU; gradients that follow curvature, hue that tracks distance.
- **Vector Feathering** — soft, distance-based blur computed directly from vector geometry. No rasterization, no post-process pass; feathered layers composed in a single shader. (E.g. frosted glass: a feathered, tinted layer over a moving backdrop.)
- **Shape Operators** — compose geometries with unions, intersections, smooth blends; the whole operator tree rasterizes as a single shape, so translucent paints never double-blend and strokes follow the combined outline.

## "liquid-metal" example
The liquid-metal example is one of Redraw's interactive playground demos (alongside hello-world, variable strokes, color-along-path, vector feathering, frosted glass, shape operators). It shows a chromatic liquid-metal shader with flowing, reflective distortion rendered as a 2D primitive — the kind of geometry-aware, GPU-driven material that motivated the library (Candillon says these are capabilities he "kept missing in the Web's graphics APIs").

## React Native specifics (react-native-redraw)
- `react-native-redraw` mirrors the `react-redraw` API on top of `react-native-webgpu` (peer dep). Same `<RedrawCanvas>`, `<RedrawProvider>`, `useDevice()`.
- Every canvas/hook needs a `<RedrawProvider>` above it (or explicit `device` prop) else it throws. Wrap app once; single GPU device shared.
- Nesting providers is idempotent; `<LocalRedrawProvider>` always owns an isolated device.
- `RedrawCanvas` takes `library` (drawing vocabulary, read once on mount) and `render` (runs every frame with a fresh recorder).
- Loading/error states via `fallback` / `errorFallback`; device-loss auto-reinitializes.
- `useDevice()` hands the `GPUDevice` directly (suspends during init).
- Lifecycle callbacks: `onError`, `onReady`, `onStats` (CPU time + per-pass GPU times; needs `options={{ timestampQuery: true }}`).

## Positioning
- Complements our RN graphics/perf sources: React Native Skia / WebGPU ecosystem, Margelo profiling (src-2026-06-28-006), Calazans animation benchmark (src-2026-07-17-007), TypeGPU (src-2026-07-16-001), AVAL (src-2026-07-16-002).
- Related "liquid glass / liquid metal" shader work in vault context: @uginy/react-native-liquid-glass (AGSL+Metal, 60–120 FPS), @paper-design/shaders-react LiquidMetal (web), native-springs-shaders LiquidMetalOverlay (Metal/OpenGL, 98★), Dagmawi-Y/liquid-glass-skia (RN-Skia).
- Redraw is the WebGPU-native successor direction to Skia for 2D; Candillon co-created RN Skia with Christian Falch.
