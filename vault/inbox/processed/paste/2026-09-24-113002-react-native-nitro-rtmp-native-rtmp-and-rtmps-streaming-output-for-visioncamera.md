---
title: "react-native-nitro-rtmp: Native RTMP and RTMPS Streaming Output for VisionCamera"
kind: "paste"
captured_at: "2026-09-24 11:30"
tags: ["react-native", "nitro-modules", "rtmp", "rtmps", "vision-camera", "live-streaming", "h264", "aac", "cpp", "android", "ios", "expo", "mit"]
source_url: "https://github.com/bhyoo99/react-native-nitro-rtmp"
status: "inbox"
---

# react-native-nitro-rtmp: Native RTMP and RTMPS Streaming Output for VisionCamera

## What it is
react-native-nitro-rtmp is an early-release React Native library for live video streaming over RTMP and RTMPS. It is built on Nitro Modules and integrates as a CameraOutput for VisionCamera 5. VisionCamera continues to own the device, camera format, frame rate, zoom, focus, permissions, and session lifecycle. This library adds microphone capture, GPU composition, hardware H.264 and AAC encoding, and RTMP publishing.

GitHub API metadata checked at capture time reports 11 stars, 0 forks, MIT licensing, C++ as the primary repository language, repository creation on 2026-09-19, and an update on 2026-09-24. The README explicitly labels the API as early release and subject to change before version 1.0.

## Native pipeline
The camera output goes from VisionCamera's native session directly into the library's mixer. The mixer combines the camera with image layers, then sends frames to platform hardware encoders. H.264 video is emitted as Annex-B access units and AAC audio as ADTS frames. A portable C++ sans-IO RTMP core consumes and produces protocol bytes, while iOS and Android own the socket and transport session. JavaScript configures the scene and publishing session, but camera frames never cross into JavaScript.

The documented platform stack is AVFoundation, Metal, VideoToolbox, and AudioToolbox on iOS, and CameraX, OpenGL ES 2.0, MediaCodec, and AudioRecord on Android. The library uses a GPU compositor and one drop policy: capture callbacks are not blocked, and the newest camera frame replaces a waiting frame when the compositor or encoder is busy. Dropped frames are counted.

## Main React Native API
useRtmpStream owns the camera output, microphone, mixer, and publisher. The returned cameraOutput is passed into a VisionCamera Camera component's outputs array. Calling start with an RTMP or RTMPS URL begins publishing when the session is ready. stop ends publishing while keeping the camera output and preview alive. Setting active to false releases the output, mixer, and microphone.

RtmpPreview displays the composed output that is actually sent, including overlays. The ordinary VisionCamera preview displays the raw camera instead. This distinction matters when a watermark or image layer is part of the published scene.

The hook exposes reactive readiness, state, busy, error, muted, cameraOutput, mixer, and optional statistics. It supports microphone mute by sending silence instead of removing audio from the timeline. Only one hook should own the microphone at a time.

## Encoding and transport
The documented defaults are 720 by 1280 video, 30 frames per second, 2500 kbps video, two-second keyframes, 48 kHz mono AAC, and 128 kbps audio. H.264 uses the Main profile without B-frames. The publisher supports rtmp:// and rtmps:// URLs. RTMPS uses TLS through the system trust store with SNI and host-name verification.

The publisher exposes typed states including idle, connecting, connected, publishing, stopped, and failed. It reports counters such as bytes sent, queued bytes, video and audio tags, rejected frames, dropped frames before a keyframe, invalid frames, timestamp clamps, and the latest audio and video timestamps. Errors are divided between capture errors and publisher errors, with codes for permission denial, unavailable cameras, encoder failures, invalid URLs, handshake failure, connection rejection, TLS failure, timeout, and server closure.

## Composition
The mixer currently supports camera and PNG or JPEG image layers. Layers use normalized output coordinates from 0 to 1 and render in insertion order. Image layers load local file URIs. The same mixer can feed the publisher and one or more previews. Custom encoded input is also supported through pushVideo and pushAudio, which accept H.264 Annex-B and ADTS AAC frames with timestamps.

The camera and microphone can be controlled independently from the transport. VisionCamera controls switching cameras, focus, zoom, torch, format, and camera-side constraints. The library controls encoder settings. Changing video or audio configuration recreates the capture session and stops a current broadcast, so the application must call start again.

## Requirements and setup
The package targets React Native's New Architecture, was developed against React Native 0.86, and requires react-native-nitro-modules version 0.37 or newer, react-native-vision-camera 5.2 or newer, and react-native-nitro-image. Android requires API 24 or newer. The example app is Expo-based but needs a development client; Expo Go cannot load the native modules. iOS uses the minimum deployment version of the chosen React Native release.

Camera permission comes from VisionCamera. Microphone permission uses the normal iOS usage description and Android RECORD_AUDIO permission. The README says the hook requests microphone permission when activated with audio enabled.

## Verification and tests
The repository includes a shell script that starts ffmpeg in listening mode, waits for one publish, and checks codecs, dimensions, frame rate, keyframe interval, timestamp monotonicity, audio-video alignment, and clean decoding. The portable C++ RTMP core has host tests, a loopback test against a real RTMP server, and golden FLV fixtures. I did not run these tests or inspect their raw output.

## Current limitations
The README lists no rotation during publishing, adaptive bitrate, automatic reconnect, or background mode. Only H.264 and AAC are supported. There is no local recording. The stream is never mirrored; only the preview mirrors a front camera. The iOS simulator has no camera, so the fixture example uses pre-encoded video and audio through pushVideo and pushAudio for simulator and regression testing.

The project recently changed its camera model: version 0.3 captured the camera itself, while the current design plugs into VisionCamera instead. Existing users must move camera selection and camera permissions back to VisionCamera and pass cameraOutput through the Camera outputs prop.

## License and evidence boundary
The official GitHub README and repository metadata were inspected. I did not install the package, build native targets, connect to an RTMP server, run the ffmpeg verification script, or measure encoding latency. The no-JavaScript-frame-copy architecture, hardware encoder behavior, and protocol test coverage are documented project claims in this capture.

## Sources
- https://github.com/bhyoo99/react-native-nitro-rtmp
- https://nitro.margelo.com/
- https://github.com/mrousavy/react-native-vision-camera
