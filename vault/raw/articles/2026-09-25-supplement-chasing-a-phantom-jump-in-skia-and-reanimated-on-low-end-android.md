---
title: "Supplement: Chasing a Phantom Jump in Skia and Reanimated on Low-End Android"
kind: "paste"
captured_at: "2026-09-25 15:26"
tags: ["react-native", "skia", "reanimated", "performance", "android", "android-performance", "margelo", "hermes", "texture-view", "surface-view", "perfetto", "gfxinfo", "fabric", "supplemental-capture"]
source_url: "https://margelo.com/blog/profiling-skia-reanimated-low-end-android"
status: "inbox"
---

# Supplement: Chasing a Phantom Jump in Skia and Reanimated on Low-End Android

## Relation to existing coverage
InkTrace already contains raw notes and a placeholder source record for this article: src-2026-06-28-006. This supplemental record preserves that raw evidence and adds a structured summary. The source is Margelo's June 24, 2026 article by Vishesh Raheja, Chasing a Phantom Jump: How We Made Pingo's Animations Smooth on Low-End Android.

The article investigates a card-to-fullscreen morph in Pingo that looked as if it jumped on a sub-$100 Android phone with a 120 Hz display. Frame-by-frame position analysis showed a monotonic spring with no position reversal. The investigation therefore changed the measurement target from position correctness to frame cadence. At 120 Hz, each frame has about 8.3 ms. A mostly regular sequence with occasional 17 to 32 ms frames can look like a jump even when the position curve remains correct.

## The main diagnosis: Skia compositing path
The article identifies the Android canvas compositing path as the largest cost. A default react-native-skia Canvas uses a TextureView-backed path. Skia draws into a SurfaceTexture, Android UI rendering samples that texture into the app window, and SurfaceFlinger later composites the window. This causes the canvas pixels to receive multiple GPU touches and introduces a producer-to-compositor handoff.

An opaque Canvas can select a SurfaceView-backed path on Android. The canvas then has its own SurfaceFlinger layer, which can be scanned out through a Hardware Composer overlay instead of being sampled into the app window on every frame. This is a structural rendering change, not an animation-tuning change. It is appropriate only when the canvas can be opaque and its z-order, background, blending, and sibling views satisfy SurfaceView constraints.

The article reports 85 percent janky frames at 120 Hz, with 79 percent attributed by dumpsys gfxinfo to slow bitmap uploads. Reducing the same device to 60 Hz reduced jank to 15 percent without code changes. The author interprets this as a mostly fixed per-frame GPU cost that fits within a 16.6 ms 60 Hz budget but exceeds an 8.3 ms 120 Hz budget.

The article reports that the SurfaceView change reduced RenderThread CPU usage by about 50 to 65 percent and brought slow bitmap uploads close to zero. The article does not provide a symmetric post-fix jank percentage because gfxinfo no longer attributes the separate SurfaceView canvas in the same way. These figures are author-reported and were not independently reproduced.

A related react-native-skia issue independently documents a TextureView case where Skia presents at full rate while TextureView updates at roughly half rate, and where changing to SurfaceView fixes the reproduction. The issue also documents the important SurfaceView trade-off: it behaves as a separate hole or layer and cannot provide ordinary transparency in the same way as a regular view.

## Refresh-rate experiment
The refresh-rate test is the article's simplest causal check. If the problem were mainly spring complexity, halving the refresh rate would not be expected to remove most of the problem. Instead, the large reduction at 60 Hz supports a fixed work-per-frame explanation. The test does not by itself prove that every device has the same bottleneck, so it should be treated as a diagnostic experiment rather than a universal benchmark.

The article also warns that adb screenrecord is not a reliable high-refresh measurement tool. Its capture rate and lack of display-vsync alignment can hide 120 Hz jank. Direct observation on the physical panel and synchronized tracing are stronger evidence for this class of issue.

## Profiling workflow
The author uses several tools because each exposes a different layer of the problem:

- dumpsys gfxinfo provides janky-frame counts, percentiles, and coarse frame-cost buckets.
- Perfetto with graphics tracing shows RenderThread activity, frame timing, and TextureView frame-available events. FrameTimeline helps attribute missed deadlines, but the article notes that it does not support SurfaceViews in the same way.
- A Hermes sampling profile exposes JavaScript work that may not appear as useful atrace slices.
- Render counters and a temporary React.memo comparator identify prop identity churn that causes unnecessary subtree commits.
- react-native-release-profiler provides production or release-build Hermes sampling profiles. Its README confirms that debug profiling can produce misleading results and that traces can be opened in SpeedScope, Perfetto, or Chrome tracing tools.

The article recommends release builds for this investigation. It also describes an automated bisection loop in which module-level disable flags remove candidate components, a release build is produced, the same morph is replayed, gfxinfo is collected, and the result is placed into a ranked table. The author credits an LLM agent with reducing the manual repetition, but keeps hypothesis selection and final interpretation as human work.

## Second cost: self-triggered Skia redraws
After the compositing fix, the article found a separate redraw problem in react-native-skia. It attributes the issue to usePathValue and usePathInterpolation creating derived values that read their own output path and notify a change, which can re-dirty the mapper that produced the value. A continuously running animation elsewhere in the app can keep the frame loop active and make these redraws persist, including for canvases that are not currently visible.

The proposed mitigation is to mutate a stable SkPath buffer inside a derived value and return the same object reference, rather than allocating and notifying a new path on every evaluation. The trade-off is that consumers must observe another changing shared value when the stable path reference itself does not notify.

The article reports that the affected idle canvases moved from roughly 17 to 32 ms per frame to about 9 ms per frame after this change. This is an author measurement for the investigated app, not an independently verified general benchmark.

## Third cost: application-specific React churn
A separate issue came from a Zustand polling action that created a new plan object even when its contents had not changed. A dependent effect re-ran, a derived completed-chapters array received a new identity, React.memo failed, and the Skia subtree was re-committed. This caused another full canvas recording even though the visual content was unchanged.

The article's remedies are to avoid routing per-frame gates through React state, update imperative refs from a worklet when appropriate, and memoize from stable content keys rather than object identity. It presents this as an application bug, not a react-native-skia defect.

## Additional cleanup
The investigation also identifies per-frame allocation and cache issues:

- Derived values that return new transform arrays on every spring frame can create Hermes garbage-collection pauses during the settle phase. Stable mutable buffers reduce this allocation pressure.
- Shadow or blur alpha values that change by a unique floating-point value each frame can miss Skia's blur-mask cache. Quantizing the value to a small set of steps can improve cache reuse.
- Reanimated-to-React state bridges can create Fabric commits during an animation. Keeping animation gates on the UI thread or using imperative updates avoids commits that do not represent visual changes.

These changes are secondary to the SurfaceView swap for the article's full-screen canvas scenario.

## Evidence boundaries
The following are direct claims from the Margelo article or its linked project material: the 85 percent versus 15 percent jank comparison, the 79 percent slow-bitmap-upload bucket, the 50 to 65 percent RenderThread reduction, the 17 to 32 ms to approximately 9 ms redraw result, and the described Skia and React causes. They remain author-reported.

The linked react-native-skia issue supports the narrower claim that a TextureView reproduction can update at half rate while a SurfaceView switch fixes that reproduction. It does not validate every Pingo measurement. The react-native-release-profiler README supports the release-build profiling workflow and trace-export tooling.

I did not install react-native-skia, build Pingo, run adb, capture a Perfetto trace, reproduce the device measurements, or test the opaque Canvas behavior on hardware.

## Sources
- https://margelo.com/blog/profiling-skia-reanimated-low-end-android
- https://github.com/Shopify/react-native-skia/issues/1960
- https://github.com/margelo/react-native-release-profiler
- https://reactnative.dev/docs/0.74/profile-hermes
- Existing raw capture: raw/articles/2026-06-28-profiling-skia-reanimated-on-low-end-android-margelo-blog.md
- Existing placeholder: src-2026-06-28-006
