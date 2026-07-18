---
title: react-native-nitro-vision-kit: On-device background removal & classification (React Native Rewind)
kind: paste
captured_at: 2026-07-17 11:19
tags: [react-native, nitro-modules, computer-vision, on-device, apple-vision, ml-kit, background-removal]
source_url: https://x.com/ReactNativeRwd/status/2078052600180572176
status: inbox
---

# react-native-nitro-vision-kit: On-device background removal & classification (React Native Rewind)

React Native Rewind (@ReactNativeRwd) — X post, Jul 17 2026

"You are paying $0.03 per image to remove backgrounds. Your user's phone has a neural engine that does it for free. It has had one for years. You just couldn't access it from React Native."

react-native-nitro-vision-kit (by Sagar Khanal) runs background removal and image classification entirely on-device:
- Apple Vision on iOS, Google ML Kit on Android
- No server, no API key, no round-trip

What's inside:
- Background removal: lifts the primary subject with a soft alpha matte. One function call. Returns a native object with masked pixels still on the native side.
- Image classification: ranks what is in the frame with confidence scores. Pass a path, get labels back.
- Zero-copy pixels: masked output stays native until you need it. Grab an ArrayBuffer when you want the bytes, or hand it straight to react-native-nitro-image without a PNG encode/decode round-trip.
- Built with Nitro Modules: the segmentation result is a native HybridObject. No serialization. No bridge traffic. Pixels never leave native memory until you explicitly ask for them.

Why it matters: every "remove background" feature in a React Native app currently relies on a server call — latency, an API bill, and a privacy conversation about uploading user photos. The hardware already sits in the user's pocket; this library just exposes it.

Hashtags: #ReactNative #ComputerVision #NitroModules #MLKit #AppleVision #MobileDev #OpenSource #TypeScript #OnDevice #AI
