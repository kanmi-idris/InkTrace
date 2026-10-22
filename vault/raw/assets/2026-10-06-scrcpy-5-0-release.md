---
title: "scrcpy 5.0 release"
kind: "official-release"
author: "rom1v / Genymobile"
source_url: "https://github.com/Genymobile/scrcpy/releases/tag/v5.0"
origin_url: "https://t.co/8Pm0MJEDrc"
posted_at: "2026-10-05"
tags: ["scrcpy", "android", "official-release", "hardware-decoding", "video-buffering", "audio-capture", "windows-arm64"]
---

# scrcpy 5.0

## Release details
The supplied short link resolves to the official Genymobile/scrcpy GitHub release page for v5.0. GitHub marks it as the latest release. The page says it was released on 2026-10-05 by rom1v. The notes list changes since v4.1.

## Main changes
- Adds hardware video decoding. The release notes say it is enabled by default when possible and falls back to software decoding when needed. They list VideoToolbox for macOS, VA-API for Linux, and D3D11VA for Windows.
- Improves video buffering.
- Captures all audio usages in audio playback capture mode.
- Adds Windows ARM64 release builds.
- Fixes keyboard forwarding issues, a `--time-limit` data race, `--no-mipmaps`, and camera-capture warnings. It also generates mipmaps for all YV12 planes.
- Updates platform-tools (adb) to 37.0.1, FFmpeg to 9.0.2, SDL to 3.4.18, and dav1d to 1.5.4.

## Performance claim and limits
The release page says hardware decoding can make decoding faster, reduce CPU use by 10×, and lower power use. These are release-note claims. I did not test them or download the release assets.
