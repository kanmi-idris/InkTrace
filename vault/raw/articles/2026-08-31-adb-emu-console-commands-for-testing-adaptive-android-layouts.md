---
title: "adb emu Console Commands for Testing Adaptive Android Layouts"
kind: "paste"
captured_at: "2026-08-31 22:26"
tags: ["android", "adb", "emulator", "adaptive-apps", "foldables", "resizable-emulator", "android-studio", "testing", "cli"]
source_url: "https://android-developers.googleblog.com/2026/08/emulator-adaptive.html"
status: "inbox"
---

# adb emu Console Commands for Testing Adaptive Android Layouts

## Source overview
This captures an official Android Developers Blog post published 2026-08-31 by Rob Orgiu (Developer Relations Engineer, Adaptive Apps, Android), summarized in my own words rather than reproduced verbatim, covering `adb emu` terminal shortcuts for scripting emulator form-factor changes during adaptive-layout testing, as an alternative to manually driving the Resizable Emulator's UI controls in Android Studio.

## Core mechanism
`adb emu <command> <parameter>` is described as a fire-and-forget shortcut: it issues an emulator console command and returns control to the calling shell immediately, rather than requiring an interactive telnet-style console session. When multiple emulators are running simultaneously, a specific instance can be targeted by serial: `adb -s <serial> emu <command> <parameter>`.

## Documented commands
- **Fold/unfold**: `adb emu fold` collapses a foldable emulator to its smaller/external-display configuration; `adb emu unfold` expands it back to the internal display. Framed as a way to verify state preservation and layout correctness across a foldable app's screen-size transitions.
- **Rotate**: `adb emu rotate` rotates the virtual device 90 degrees clockwise, for testing orientation-change handling and configuration-change state restoration.
- **Posture**: `adb emu posture` (no argument) lists available posture IDs and their labels for the current virtual device, e.g. `1: closed`, `2: half-opened`, `3: opened`, plus additional IDs beyond that. `adb emu posture <id>` sets a specific posture; the half-opened ID (2) simulates tabletop mode. Standard AVD templates such as the Pixel Fold and the Resizable AVD are documented as supporting only posture IDs 1 through 3; attempting an unsupported ID (such as 4 or 5) on those templates returns a `KO: Failed to set posture` error.
- **Resize (Resizable Emulator only)**: `adb emu resize-display` (no argument) lists the available size presets by index, e.g. `0: phone`, `1: unfolded`, `2: tablet`. `adb emu resize-display <index>` resizes the emulator window to the chosen preset.

## Positioning relative to existing tooling
The post frames these commands as a faster, scriptable complement to the Resizable Emulator's built-in Display Mode dropdown in Android Studio (which lets a developer manually toggle between common device form factors in the emulator toolbar), not a replacement for it. The stated benefit is avoiding the overhead of running multiple separate emulator instances to cover different form factors, by instead scripting one emulator through several form-factor states from the terminal.

## Related official documentation
The post links to the general emulator console-command reference at developer.android.com/studio/run/emulator-console, and is adjacent to (but distinct from) the dedicated Resizable Emulator documentation at developer.android.com/studio/run/resizable-emulator, which documents the manual, UI-driven Display Mode workflow these commands are scripting an alternative to.

## Verification note
The user-provided content in this conversation turn matched the official Android Developers Blog post text closely; this record summarizes the technical facts (command syntax, arguments, supported posture IDs, resize presets, error behavior) rather than reproducing the article's prose, consistent with this vault's practice of paraphrasing rather than storing long verbatim excerpts of third-party published articles.

## Execution boundary
The official blog post was fetched and read to confirm the commands and their documented behavior. No emulator was launched, and no `adb emu` command was executed, during this capture.

## Sources
- https://android-developers.googleblog.com/2026/08/emulator-adaptive.html
- https://developer.android.com/studio/run/emulator-console
- https://developer.android.com/studio/run/resizable-emulator
