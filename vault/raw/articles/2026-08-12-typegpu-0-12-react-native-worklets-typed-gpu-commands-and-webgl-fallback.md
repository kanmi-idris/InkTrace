---
title: "TypeGPU 0.12: React Native Worklets, Typed GPU Commands, and WebGL Fallback"
kind: "paste"
captured_at: "2026-08-12 22:45"
tags: ["typegpu", "webgpu", "webgl", "react-native", "react-native-worklets", "gpu-programming", "typescript", "software-mansion", "shader-optimization"]
source_url: "https://docs.swmansion.com/TypeGPU/blog/typegpu-012/"
status: "inbox"
---

# TypeGPU 0.12: React Native Worklets, Typed GPU Commands, and WebGL Fallback

## Source overview
Software Mansion released TypeGPU 0.12. The release focuses on making TypeGPU useful across more runtimes and reducing the amount of TypeGPU that remains visible after an application ships.

The official release post reports React Native Worklets support, an experimental WebGL backend, lower-level GPU command recording, asynchronous pipeline initialization, shader-size improvements, and shader ergonomics updates.

## React Native Worklets
With react-native-worklets, @typegpu/react can run useFrame callbacks on the React Native UI thread. TypeGPU roots, buffers, textures, samplers, bind groups, layouts, and pipelines can transfer across JavaScript runtimes while preserving the underlying GPU object identity.

The release targets React Native applications that need per-frame work without waiting for unrelated React Native thread work.

## Experimental WebGL fallback
@typegpu/gl can generate GLSL and run a subset of TypeGPU's render API on WebGL 2. The documented fallback initializer is initWithGLFallback().

The backend is experimental. It does not support compute or the full TypeGPU API. The release includes non-trivial WebGL examples such as caustics and allows TypeGPU functions used through @typegpu/three to follow Three.js onto its WebGL backend.

## Typed GPU command recording
TypeGPU 0.12 adds typed command encoders and passes. Multiple pipelines can share one command buffer or render pass, allowing batched submissions and multiple pipelines in one pass.

The API supports pipeline-centric calls such as pipeline.with(pass).draw(), and familiar pass methods such as setPipeline(), setBindGroup(), and draw(). TypeGPU tracks shared state and applies it only when needed. The release also improves interoperation with raw WebGPU encoders.

## Pipeline initialization
Pipelines remain lazy by default. Applications can call initAsync() to initialize pipelines before the first frame using WebGPU asynchronous pipeline creation. initSync() is also available for eager synchronous initialization.

## Shader size and production builds
TypeGPU 0.12 adds experimental shader optimizations:
- Bundler metadata identifiers can be shortened with autoNamingEnabled: false and unstable_obfuscate: true.
- Runtime-generated shader comments and redundant whitespace can be removed with unstable_minify: true.
- These options can be enabled independently or together.
- The release recommends enabling them only for production builds because obfuscated errors are harder to debug.

The release also improves package builds and tree-shaking.

## TypeGPU React ecosystem
@typegpu/react integrates TypeGPU resources with React on web and React Native. Hooks include useRoot, useUniform, useBindGroup, useConfigureContext, useFrame, and useMirroredUniform. The package integrates root initialization with Suspense and supports GPU-resident values with imperative updates or React state mirroring.

## Pseudo-random numbers
@typegpu/noise now uses Xoroshiro64** as its default pseudo-random generator. It has a 64-bit state and works on the CPU and GPU. The package exports XOROSHIRO64STARSTAR, a new LCG32 implementation, and hashing and seed-scrambling utilities.

Applications that depend on the previous exact sequence need the migration-guide compatibility implementation.

## New examples and ecosystem projects
The release post lists new examples for trippy raymarching, OS Awards rendering, selfie segmentation, radiance cascades, radiance cascades with drawing, React components, and WebGL fallback.

It also highlights Bone Tide and Purrkour games built with TypeGPU 0.12, Shaders v3 using TypeGPU for a new rendering engine, and the @typegpu/radiance-cascades package for real-time 2D global illumination.

## Migration
The release removes deprecated APIs, including the old pipeline builder, texture layout descriptors, .value, and layout.bound. A migration guide covers the changes.

## User-provided release note
TypeGPU 0.12 is out!

This is a very big release – to catch up fully, make sure to check out this blog post: https://docs.swmansion.com/TypeGPU/blog/typegpu-012/ by @iwoplaza

TLDR:
- @typegpu/react automatically serializes most TypeGPU objects. This allows them to be used across React Native runtimes with react-native-worklets.
- Typed command encoders, passes, and render bundles support multiple pipelines in one pass, batched submissions, and interop with raw WebGPU encoders.
- @typegpu/noise has a faster, higher-quality default PRNG: xoroshiro64**.
- @typegpu/gl (alpha) lets the same use gpu code target WebGL2 and GLSL as a fallback when WebGPU is unavailable.
