---
title: LiteRT.js: Google's high-performance Web AI inference (announcement)
kind: paste
captured_at: 2026-07-18 05:36
tags: [web-ai, on-device, inference, google, litert, announcement]
source_url: https://developers.googleblog.com/litertjs-googles-high-performance-web-ai-inference/
status: inbox
---

# LiteRT.js: Google's high-performance Web AI inference (announcement)

Google AI Edge Blog — "LiteRT.js: Google's high-performance Web AI inference" (July 9, 2026)

LiteRT.js is a JavaScript binding of the LiteRT (TensorFlow Lite) runtime, bringing Google's on-device inference engine to the browser. It exposes the same optimized kernels used on Android/iOS/embedded, now compiled for the web.

Key points:
- Runs models in-browser using WebGPU (preferred) and WebNN backends for hardware acceleration.
- Delivers near-native inference performance for tasks like image classification, object detection, and natural-language processing, entirely client-side.
- Interoperates with MediaPipe Tasks, so existing MediaPipe pipelines can run through LiteRT.js.
- Core package: `@litertjs/core` (published on npm).
- Goal: make high-performance, privacy-preserving, server-free AI inference the default for web apps.

This is Google's answer to on-device web AI, positioning against other in-browser inference runtimes.
