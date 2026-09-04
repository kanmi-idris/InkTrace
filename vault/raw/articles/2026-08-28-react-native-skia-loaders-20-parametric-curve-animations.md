---
title: "React Native Skia Loaders: 20 Parametric Curve Animations"
kind: "paste"
captured_at: "2026-08-28 08:56"
tags: ["react-native", "skia", "reanimated", "animation", "loader", "spinner", "curve", "particles", "typescript", "mit", "expo"]
source_url: "https://github.com/animate-react-native/skia-loaders"
status: "inbox"
---

# React Native Skia Loaders: 20 Parametric Curve Animations

## Source overview
React Native Skia Loaders (npm package @animatereactnative/skia-loaders) is a port of the math-curve-loaders web project to React Native using Skia. It provides 20 mathematical curve loading animations (roses, spirographs, lemniscates, butterflies, hearts) rendered as a particle trail tracing a parametric curve, with a fading comet tail and a slow breathing pulse.

GitHub API metadata checked on 2026-08-28 reports 6 stars, 0 forks, 0 open issues, TypeScript as the primary language, and MIT license. The repository was created 2026-08-27, one day before this capture, making it a very new project. npm registry metadata confirms version 0.1.0, published by Catalin Miron (Animate React Native), also MIT licensed.

## Core capabilities
- Powered by Skia (via @shopify/react-native-skia, using the Atlas API for sprite batching) and Reanimated 4.
- Works with Expo, including Expo Go, since both peer dependencies ship with Expo Go.
- Cross-platform: iOS, Android, and Web.
- Animates entirely on the UI thread at a claimed 60 to 120 fps.
- 20 built-in curves, with support for fully custom curve definitions.
- Any color and size; composable into an existing Skia canvas.
- Written in TypeScript.

The 60 to 120 fps and UI-thread claims are documented library behavior, not independently benchmarked in this capture.

## Installation and peer dependencies
Installation requires the package itself plus two peer dependencies that must be installed and configured separately:

npm install @animatereactnative/skia-loaders
npx expo install @shopify/react-native-skia react-native-reanimated

The npm registry lists explicit peer dependency version floors: react-native-reanimated >=4.0.0 and @shopify/react-native-skia >=2.0.0. Both peer libraries ship with Expo Go according to the README, so no extra native configuration is described for Expo Go usage. Bare React Native projects would still need to follow each peer library's own native installation steps.

## Components and props
Two components are exported:
- CurveLoader: mounts its own Skia Canvas. Suitable for a single standalone loader.
- CurveLoaderContents: does not mount a canvas; meant to be composed inside an existing Canvas and positioned with a Group. The README recommends this for grids of many loaders, since one shared canvas is cheaper than many separate canvases.

Both components share this prop surface:
- curve (required): a built-in curve name or a custom CurveConfig object.
- size (required): the side length in pixels of the square area the loader draws into.
- color (optional, default #ffffff): particle and outline color, any Skia-parseable color string.
- particleScale (optional, default 1): multiplies particle radius, useful for larger sizes.
- phaseOffset (optional, default 0): shifts a loader along its own timeline (0 to 1) so multiple loaders do not animate in sync.
- paused (optional, default false): freezes the animation; a paused loader schedules no frames at all.
- style (CurveLoader only): style applied to the underlying Skia Canvas.

## Built-in curves
The 20 documented built-in curve names are: originalThinking, thinkingFive, thinkingNine, roseOrbit, roseCurve, roseTwo, roseThree, lissajousDrift, lemniscateBloom, hypotrochoidLoop, threePetalSpiral, fourPetalSpiral, fivePetalSpiral, sixPetalSpiral, butterflyPhase, cardioidGlow, cardioidHeart, heartWave, spiralSearch, and fourierFlow.

Each entry in the exported curves object carries a name and tag for labelling, plus timing and particle-count configuration. Prose descriptions of each curve (in English and Chinese, based on the documented example) are available from a separate entry point, @animatereactnative/skia-loaders/descriptions, kept out of the main bundle by default.

## Custom curves
A curve definition is a CurveConfig object combining metadata (name, tag), timing and particle parameters (particleCount, trailSpan, durationMs, rotationDurationMs, pulseDurationMs, strokeWidth, rotate), a params object for curve-specific parameters, and a point function.

The point function maps a progress value from 0 to 1, plus a detailScale breathing factor (roughly 0.52 to 1) and the curve's params, onto an (x, y) coordinate inside a 100x100 box. This function must carry the 'worklet' directive because it runs on the UI thread via Reanimated. The library also exports its own built-in point functions (rosePoint, spiroPoint, lissajousPoint, and others) for reuse with custom parameters.

The README notes that curve config objects should be defined at module scope, since creating a new object identity on every render forces geometry to rebuild.

## Performance design
The README documents several specific performance techniques:
- The faint outline path is baked once per quantized breathing step at mount time rather than being rebuilt every frame.
- Per-particle size, opacity, and trail position are precomputed into typed arrays, so per-frame work per particle is limited to one curve evaluation and one transform write.
- Particles are drawn through a single Skia Atlas against a sprite sheet cached per color, avoiding per-frame allocations for color or blending.
- Rotation only adds cost for curves that are configured to rotate.
- Setting paused fully detaches the frame callback, so an off-screen or inactive loader consumes no per-frame work.

These are documented implementation choices, not independently profiled results from this capture.

## License and provenance
The project is MIT licensed, per both the GitHub repository and the npm package metadata. It is explicitly described as a port of an existing web-based project, math-curve-loaders (github.com/Paidax01/math-curve-loaders), adapted to React Native's Skia and Reanimated stack.

## Execution boundary
The GitHub README, npm registry metadata, and GitHub API repository metadata were inspected. No package was installed, no Expo project was created, and no animation was run during this capture.

## Sources
- https://github.com/animate-react-native/skia-loaders
- https://npmjs.com/package/@animatereactnative/skia-loaders
- https://github.com/Paidax01/math-curve-loaders
