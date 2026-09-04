---
title: "On-Device 3D Scanner: 8 Photos to a Gaussian-Splat Point Cloud, Fully On-Device in React Native"
kind: "paste"
captured_at: "2026-09-03 16:01"
tags: ["react-native", "executorch", "typegpu", "on-device-ai", "3d-scanning", "gaussian-splatting", "depth-estimation", "coreml", "xnnpack", "expo", "mit", "apache-2"]
source_url: "https://github.com/NorbertKlockiewicz/on-device-3d-scanner"
status: "inbox"
---

# On-Device 3D Scanner: 8 Photos to a Gaussian-Splat Point Cloud, Fully On-Device in React Native

## Source overview
On-device 3D scanner is a React Native/Expo app by Norbert Klockiewicz that turns 8 photos of an object or scene into a spinnable 3D point-cloud scan, running entirely on-device with no cloud call, no LiDAR, and no ARKit session (the README notes it works in airplane mode). On an iPhone 16 Pro, a full scan is reported to take about 3 seconds using the default model. The project's own repository description credits the stack as Depth Anything 3, react-native-executorch, and TypeGPU. TypeGPU (a typed WebGPU abstraction library) is already documented separately in this vault (e.g. src-2026-04-25-005 and later TypeGPU records); this record focuses on the new scanning pipeline and its use of react-native-executorch, which was not previously captured as its own source.

GitHub metadata observed on the repository page at time of capture: 11 stars, 0 forks, 1 branch, MIT license for the app code (the model weights carry a separate Apache 2.0 license, described below).

## The model: Depth Anything 3
The app runs Depth Anything 3 (credited to Haotong Lin, Sili Chen, Jun Hao Liew, Donny Y. Chen, Zhenyu Li, Guang Shi, Jiashi Feng, and Bingyi Kang at ByteDance Seed, described as an ICLR 2026 paper), specifically its BASE 'any-view' variant (0.12 billion parameters). In one forward pass, the model takes N photos and outputs, per view: a depth map, a confidence map, and a camera pose (so the app does not need a separate structure-from-motion or feature-matching step, nor per-scene optimization — the README states the transformer performs all of that work directly). A smaller SMALL variant (0.08 billion parameters) is also bundled and can be selected via a one-line config change for a faster (~2 second) but lower-quality scan.

## Pipeline (as documented)
1. A guided in-app camera flow collects 8 photos of the subject (or the user can pick 8 existing photos from their library).
2. Each photo is rasterized to 420x560 pixels using Skia and normalized with ImageNet statistics.
3. A single ExecuTorch graph (delegated to CoreML on iOS and XNNPACK on Android) processes the stacked 8-image batch and outputs, per view: a depth map, a confidence map, and a 9-number camera pose encoding (translation, quaternion rotation, and vertical/horizontal field of view). The first view in the batch is treated as the reference coordinate frame.
4. TypeScript pipeline code decodes the poses into camera parameters and unprojects every pixel from every view into one shared 3D world space, applying three cleanup filters: a confidence-percentile cutoff to drop low-confidence points (useful for distant or reflective surfaces such as a glossy screen or a far wall), a depth-edge test that removes 'flying pixel' streaks that otherwise appear across occlusion boundaries when a pixel's depth differs sharply from its neighbor, and a voxel-grid deduplication step that keeps one point per grid cell so that the 8 overlapping photo views do not each contribute a separate coincident layer of points on the same physical surface.
5. The surviving point cloud is rendered as gaussian splats at interactive frame rates using a TypeGPU-based rendering pipeline (paired with react-native-wgpu for the underlying WebGPU bridge), with no native rendering code required in the app itself.

## Running it
Documented setup is `npm install` followed by `npx expo run:ios`. The app requires an Expo development build using the New Architecture, since react-native-executorch is stated not to work inside Expo Go. On first run, the model weights are downloaded once from Hugging Face and cached locally; the README states this is roughly 480MB for the default BASE model on iOS. A `.env.example` file documents pointing the app at a self-hosted model export instead of the default Hugging Face host, via an `EXPO_PUBLIC_MODEL_BASE` environment variable.

## Exporting the model (technical detail from the README)
A separate export script (`export/export_da3.py`) is provided for users who want to re-export the model themselves, requiring a pinned version of the executorch package, a local clone of the official Depth Anything 3 repository, and the DA3-SMALL safetensors weights. The README documents several specific adaptations made to get the original research model to export as a static ExecuTorch graph, including: pinning the reference-view selection strategy to a fixed 'first' choice so the exported graph has no data-dependent branching on which view is used as reference; precomputing rotary position-embedding tables ahead of time for a fixed view count and resolution, because the original model computes a data-dependent position table size at runtime in a way that `torch.export` rejects; moving the conversion from the model's raw pose encoding to full camera extrinsics/intrinsics outside the exported graph and reimplementing that small amount of logic separately; and working around a documented gap in the publicly released checkpoint, which is missing some convolution weights for an auxiliary ray-prediction branch that the export does not use.

## Measured performance (as reported in the README)
For a full 8-view scan at 420x560 resolution on a warmed-up iPhone 16 Pro: the default BASE model via CoreML (fp16, running on CPU+GPU) is reported at roughly 3.1 seconds inference with a 480MB one-time download; the SMALL model via CoreML (fp32) is reported at roughly 2.0 seconds with a 382MB download. The README notes the very first inference after installing the app is substantially slower because CoreML compiles and caches the model once on first use, that the iOS Simulator falls back to CPU-only execution (reported around 9.5 seconds for the SMALL model there), and that a smaller 448x336 SMALL export can run in roughly 0.9 seconds on-device if speed is prioritized over point-cloud detail. Android support (XNNPACK code paths) is present in the codebase and auto-selected by the app, but the author states it had not yet been benchmarked on a physical Android device at time of writing, with fp32 CPU inference expected to be slower than the reported iOS numbers.

## Documented build issues and design notes
Several specific engineering notes are called out in the README:
- The BASE model silently crashes when CoreML's default compute-unit setting routes the graph to the Apple Neural Engine (ANE): the process is described as terminating mid-inference with no crash report or memory-kill record. The author found that explicitly exporting with a CPU+GPU compute-unit setting (avoiding the ANE entirely) resolves this and lets the same graph run successfully on the GPU at the reported ~3.1 second speed; the smaller SMALL model is stated to compile and run fine on the ANE, so the issue is attributed to something specific to the larger model's scale rather than the ANE generally.
- Because the pipeline reconstructs the entire frame of every input photo rather than isolating a subject, the scan includes whatever was actually visible in the photos (background, surrounding room, etc.), not just the intended object; the README frames this as a usage note rather than a bug.
- The confidence-percentile filter is described as a meaningful quality control users can tune: raising the confidence threshold produces a cleaner scan of a single object at the cost of dropping more background, and lowering it keeps more background at the cost of more noise from low-confidence regions.

## Licensing
App code in the repository is MIT licensed. The Depth Anything 3 model code and the DA3-SMALL weights are stated to be Apache 2.0 licensed by their original authors, and the exported weights hosted on Hugging Face for this project are stated to inherit that Apache 2.0 license.

## Context from the accompanying post
The author states this project was prompted by seeing World Labs (credited as @theworldlabs) release their Atlas world model two days prior, and frames this project as an exploration of how much of that class of 'spatial intelligence' capability already runs locally on a phone rather than requiring cloud-scale infrastructure. This framing/motivation is the author's own stated account and was not independently verified against a separate World Labs Atlas announcement in this capture.

## Evidence boundary
The GitHub repository's README, file listing, and sidebar metadata (stars, license, topics) were directly inspected via the accessibility tree. No package was installed, no Expo development build was created, no model export was run, and no on-device scan was performed during this capture. Performance figures, the ANE crash behavior, and the model-export adaptations are the repository author's own reported findings and have not been independently reproduced.

## Sources
- https://github.com/NorbertKlockiewicz/on-device-3d-scanner
- https://github.com/software-mansion/react-native-executorch (react-native-executorch, by Software Mansion)
- Depth Anything 3 paper and code (linked from the repository README)
- TypeGPU: already documented separately in this vault (src-2026-04-25-005 and subsequent TypeGPU records)
