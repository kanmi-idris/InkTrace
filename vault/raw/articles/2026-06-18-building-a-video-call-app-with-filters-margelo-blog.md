---
title: Building a Video Call App with Filters - Margelo Blog
kind: paste
captured_at: 2026-06-18 19:29
tags: [react-native, visioncamera, webrtc, livekit, filters, videocall, margelo]
source_url: 
status: inbox
---

# Building a Video Call App with Filters - Margelo Blog

Building a Video Call App with Filters — Margelo Blog

## Overview
Real-time camera filters for React Native video calls (background blur, virtual backgrounds, Center Stage, and live drawing), built by driving the camera with VisionCamera and injecting custom frames straight into WebRTC. Written by Ritesh Shukla, Software Engineer @ Margelo (June 18, 2026).

## Architecture
VisionCamera takes over the camera → vc-engine (native effects) → LiveKit VideoSource → WebRTC encoder → peers

Key insight: Swap LiveKit's camera for VisionCamera. VisionCamera owns the camera, effects are composited onto every frame, and processed frames are injected into LiveKit's video source.

## The Core Trick
LiveKit's WebRTC video source doesn't care who feeds it frames. The camera capturer is just the default producer. By referencing the source's CapturerObserver (Android) / delegate (iOS), custom frames can be pushed directly into LiveKit's encoder pipeline.

On Android: videoSource.getCapturerObserver().onFrameCaptured(frame)
On iOS: videoSource.capturer(capturer, didCapture: frame)

## Taking Over the Camera
- Disable LiveKit's camera with video={false}
- Mount a VisionCamera frame output with pixelFormat: 'yuv'
- Forward frames through Engine.forwardFrame(frame) worklet
- Engine converts format and calls push() into LiveKit's video source

## Creating the Video Source
RtcBridge.createTrack(width, height, fps) borrows WebRTC's own PeerConnectionFactory (via reflection on Android, KVC on iOS) to create a source-backed track, registered both with LiveKit (publishable) and the engine's registry (frames find the source).

## Format Conversion
- Android: YUV_420_888 → I420 (3 planes) → VideoFrame(JavaI420Buffer)
- iOS: NV12 → CVPixelBuffer → RTCVideoFrame(RTCCVPixelBuffer)
- iOS copies for filter compositing (zero-copy not possible since filters modify frames)

## Filters

### Background Blur (3 steps)
1. Mask: MediaPipe selfie ImageSegmenter (Android) / VNGeneratePersonSegmentationRequest (iOS)
   - Runs off-thread, ~20-30ms inference, latest frame wins (mask stale by 1-2 frames is invisible)
2. Blur: shrink frame, blur tiny copy, stretch back (upscale interpolation does most smoothing)
   - Android: CPU average-down + bilinear-upsample
   - iOS: MPSImageBilinearScale + MPSImageGaussianBlur (Metal)
3. Composite: mask picks per-pixel (person from sharp, background from blurred)

### Color & Photo Backgrounds
Swap blur background for solid color or decoded image. Mask + composite stay identical.

### Center Stage
Face detection (ML Kit Android / Vision iOS) → crop sized around face → smoothed over time (glides) → zoom follows face area, capped at 2.2x

### Air Draw
Finger scribbles rendered with Skia, composited ON TOP of the frame before pushing. Everyone on the call sees it (baked into published track, not a local overlay).

## Performance
- Rule: never make the camera wait. forwardFrame is synchronous (minimum work), expensive work runs off-thread, latest-frame-wins
- dropFramesWhileBusy: true on frame output sheds frames under load
- iOS: GPU (Metal), NV12 end-to-end (no RGB round-trip), zero-copy into encoder
- Android: CPU (Kotlin), ARGB for composite, ready for NEON SIMD / Vulkan / GL compute

Benchmarks (real cross-planet call, LiveKit server in US, clients in Asia):
- iPhone 13 (GPU/Metal): 30 fps (all effects)
- Samsung Galaxy F14 (CPU/Kotlin): ~30 fps (forwarding/light), ~25 fps (Center Stage), ~15-20 fps (heaviest path)

## Open Source
Full example coming soon (promised in post).

## About Margelo
Margelo helps teams ship world-class React Native apps. Blog post by Ritesh Shukla.
