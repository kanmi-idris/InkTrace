---
title: Profiling Skia + Reanimated on Low-End Android — Margelo Blog
kind: paste
captured_at: 2026-06-28 03:43
tags: [react-native, skia, reanimated, performance, android, android-performance, margelo, hermes]
source_url: 
status: inbox
---

# Profiling Skia + Reanimated on Low-End Android — Margelo Blog

Chasing a Phantom Jump: How We Made Pingo's Animations Smooth on Low-End Android — Margelo Blog
By Vishesh Raheja, June 24, 2026. 16 min read.

Problem: A card morph transition on a sub-$100 120Hz Android phone visibly jumped mid-animation, even though the spring position curve was perfectly monotonic by every objective measurement. Frame-by-frame analysis showed the position was correct — the issue was frame cadence, not position.

Key insight: "Smooth" is a property of frame cadence, not of the position curve. On 120Hz display, 8.3ms per frame. If frames overshoot that budget, display holds previous frame. Human motion perception is more sensitive to timing irregularity than position error.

Tooling notes: adb screenrecord caps ~45fps and is not vsync-aligned — on 120Hz hardware it aliases real jank into looking smooth. On high-refresh devices, the eye is ground truth.

Three costs identified (in order of impact):

1. DOMINANT: How Skia composites on Android (TextureView vs SurfaceView)
   - Default react-native-skia Canvas backs with SkiaTextureView
   - TextureView path: GPU touches pixels 2-3x per frame (Skia renders → HWUI binds/samples into window buffer → SurfaceFlinger composites)
   - SurfaceView path: canvas gets its own SurfaceFlinger layer, Hardware Composer scans directly as overlay — no per-frame upload, no GPU compositing
   - Evidence: dumpsys gfxinfo showed 85% janky frames at 120Hz, 79% attributed to "slow bitmap uploads"
   - Diagnostic: forcing 60Hz dropped jank to 15% — proved cost was fixed per-frame GPU cost, not animation complexity
   - Fix: <Canvas opaque={Platform.OS === "android"}> — flips SkiaTextureView to SkiaSurfaceView
   - RenderThread CPU fell 50-65%, slow bitmap uploads near zero
   - iOS unaffected (uses CAMetalLayer, no per-frame texture copy)

2. Self-dirtying redraw loop in react-native-skia
   - usePathValue/usePathInterpolation hooks build a useDerivedValue whose worklet reads its own output path AND calls notifyChange — re-dirtying the mapper that produced it
   - Any global withRepeat(-1) keeps that loop pumped and revives self-loops across the app, including offscreen canvases
   - Fix: replace with buffer mutation useDerivedValue<SkPath> returning stable reference
   - Impact: idle canvases from 17-32ms down to ~9ms frame time (2.9x improvement)

3. React churn (app-specific)
   - Zustand store minting fresh objects on every poll → useEffect loop → React.memo fail → full Container.redraw()
   - Fix: use content-based keys instead of object identity; drive animation gates imperatively from worklets instead of through React state

LLM-driven bisection approach:
   - Each candidate got module scope flag (if (PERF_DISABLE_X) return null)
   - Claude Code + Argent MCP tooling ran loop unattended: build release variant → replay morph → capture gfxinfo → record
   - Several agents ran candidates in parallel, returned ranked table
   - Lesson: agent is excellent at the loop (building, navigating, measuring), useless at judgment — keep hypotheses and verdicts human
   - Used react-native-release-profiler by Margelo

Additional fixes:
   - Per-frame allocations: many useDerivedValues returning fresh transform arrays allocate thousands of objects per spring → Hermes GC pauses visible during settle. Fix: stable buffer mutation, same reference.
   - Quantize per-frame shadow/blur alpha to small step count (Skia's blur mask cache keyed on blurRadius+color, unique float per frame misses cache every time)

Real-world results on sub-$100 120Hz phone: 85% janky frames → comfortable within budget.
