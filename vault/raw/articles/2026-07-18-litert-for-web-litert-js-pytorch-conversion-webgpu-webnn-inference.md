---
title: LiteRT for Web (LiteRT.js) — PyTorch conversion & WebGPU/WebNN inference
kind: paste
captured_at: 2026-07-18 05:36
tags: [web-ai, on-device, inference, google, litert]
source_url: https://developers.google.com/edge/litert/web#convert-pytorch
status: inbox
---

# LiteRT for Web (LiteRT.js) — PyTorch conversion & WebGPU/WebNN inference

LiteRT for Web — LiteRT.js (Google AI Edge developers docs)

LiteRT (formerly TensorFlow Lite) is Google's high-performance on-device inference runtime. LiteRT for Web (LiteRT.js) lets web apps run ML models directly in the browser using WebGPU and WebNN backends.

Converting PyTorch models:
- PyTorch models are exported to ONNX, then converted to the .tflite / LiteRT format via the litert-converter toolchain.
- The docs describe `convert-pytorch` workflow: `torch.onnx.export(...)` → `litert.convert(...)` to produce a Web-deployable model.
- Models run via the LiteRT.js core API (`@litertjs/core`) with a chosen backend (WebGPU preferred, WebNN fallback).

Use cases: in-browser AI inference (image classification, object detection, NLP) without server round-trips. Interoperates with MediaPipe Tasks for higher-level pipelines.
