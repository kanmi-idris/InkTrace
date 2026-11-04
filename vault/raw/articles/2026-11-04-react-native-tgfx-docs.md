# react-native-tgfx official documentation snapshot

Captured: 2026-11-04
Publisher: Margelo / react-native-tgfx project
Sources:
- https://tgfx.margelo.com/
- https://tgfx.margelo.com/docs
- https://tgfx.margelo.com/docs/installation

## Product

The site describes react-native-tgfx as a declarative GPU 2D canvas for React Native, backed by Tencent's tgfx. The repository says it is built with Nitro Modules. The overview lists shapes, paths, text, images, atlases, meshes, gradients, noise, color matrices, blurs, shadows, masks, runtime shaders, camera frames, snapshots, PDF/SVG export, and headless scenes. The site says Android uses Vulkan and iOS uses Metal.

The overview says animated values update on the UI thread without JavaScript work per frame. This is a project claim. The performance page describes the tested comparisons separately.

## Status and install

The overview labels this an alpha release. The installation page currently instructs:

`npm install react-native-tgfx@alpha react-native-nitro-modules`

It says camera and video also need `react-native-reanimated` and `react-native-worklets`. Android builds default to Vulkan; the page documents `TgfxVulkan=OFF` for OpenGL ES. It recommends optional prewarming for the first canvas mount.

## Compatibility stated in the repository

The GitHub README states React Native 0.78+ with the New Architecture, iOS Xcode 16.4+, Android NDK 27+, and compileSdk 34+. The package declares a peer dependency on `react-native-nitro-modules >=0.36.5`. Verify requirements and backend behavior against the specific release before adoption; this project is changing quickly.
