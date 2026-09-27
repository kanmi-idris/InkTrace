---
title: "avdslim: Android Emulator RAM and CPU Optimizer for AVD Development"
kind: "paste"
captured_at: "2026-09-24 13:06"
tags: ["android", "avd", "android-emulator", "qemu", "developer-tools", "performance", "memory-optimization", "ci", "go", "react-native", "flutter", "mit"]
source_url: "https://github.com/kdbhalala/avdslim"
status: "inbox"
---

# avdslim: Android Emulator RAM and CPU Optimizer for AVD Development

## What it is
avdslim is a Go CLI that reduces host resource use for Android Virtual Devices. It is inspired by the iOS simulator tool simslim. The project targets Apple Silicon and Linux in its headline claim, while the README also documents Windows GPU and emulator support with some workflow limits. GitHub API metadata checked at capture time reports 198 stars, 8 forks, MIT licensing, Go as the primary language, repository creation on 2026-09-16, and an update on 2026-09-24. The inspected entrypoint reports version 1.0.15.

The README claims that a Pixel 10 Pro emulator can move from about 8.5 GB of Activity Monitor footprint to about 2.5 GB, with about 1.5 GB of that being dirty resident memory. It also reports around 71 percent host-footprint reduction. These figures are project-authored examples, not independently reproduced in this capture.

## How it reduces resource use
avdslim combines host-side emulator flags, AVD configuration, Android guest settings, background-service suppression, and snapshot management:

- It launches QEMU with the low-RAM flag and can set AVD RAM to 1024 MB or 1536 MB.
- It sets host GPU rendering instead of allowing a software rasterizer fallback. The README maps this to Metal on macOS, DRI/OpenGL/Vulkan paths on Linux desktop, SwiftShader for headless Linux, and Direct3D 11 through ANGLE or desktop OpenGL/Vulkan on Windows.
- It disables more than 45 non-essential Android background services through adb package controls.
- It limits cached and background processes, disables auto-sync by default, and can disable animations.
- It purges stale emulator snapshots and can compact memory or flush caches where the platform and image permit it.

The README identifies software rendering through Mesa lavapipe, 16 KB page-size system images, background Google services, and stale snapshots as major sources of emulator memory overhead. These causal explanations and quantities remain documentation claims until independently tested.

## Safety and development fidelity
The project describes a conservative default profile that keeps Firebase Cloud Messaging, Firebase Auth and Google Sign-In, Android System WebView, Metro and adb reverse networking, JNI/NDK runtimes, and React Native or Flutter development workflows active. It also records previous settings and disabled packages so avdslim off, restore, or reset can re-enable services and restore changed settings. A backup is kept for AVD config edits.

The README claims that the reverse path can restore each setting to its previous value and identifies packages that may need repair after older versions disabled a boot-critical Bluetooth package on Android 16+. These restore and repair paths were not tested here. Developers should review the selected bloat profile before using it with authentication, maps, Bluetooth, location, background jobs, or device-specific test cases.

## System image recommendation
The project strongly recommends standard 4 KB Google APIs images for its low-memory workflow. It advises against Google Play images because of Play Store updater and Play Protect activity, and against 16 KB page-size images when low RAM is the goal because the README says those images impose a 4096 MB QEMU minimum. It says Google APIs images preserve Firebase Auth, FCM, Maps, and adb root access, but these compatibility claims were not independently tested.

## Main commands and workflows
- doctor performs a read-only audit of the Android SDK, AVDs, snapshots, memory settings, and possible software GPU fallback.
- tune-avd edits an AVD config.ini, sets RAM and host GPU mode, disables optional camera/audio emulator threads, and purges stale snapshot files.
- start, run, or launch starts an AVD with low-memory flags and can automatically slim it after boot.
- on or slim applies the guest bloat profile to a running emulator.
- off, restore, or reset reverses the guest changes.
- watch monitors Android Studio or VS Code launches and applies slimming after an emulator boots.
- bake creates a clean optimized snapshot, while snapshot preserves the current configured emulator state and unbake removes the generated snapshot.
- install-shim wraps the Android Studio emulator binary so the Play button launches through avdslim. uninstall-shim restores the original binary. This is unsupported on Windows.
- enable and disable selectively change feature groups or packages such as Bluetooth, animations, sync, location, Maps, Chrome, audio, cameras, D-pad, and boot animation.
- measure reports host and guest memory information.
- bench prints a live before-and-after comparison.
- create makes an AVD from an installed Google APIs 4 KB image without downloading images or accepting licenses.
- repair re-enables boot-critical packages on a running emulator when supported by adb root.

The CLI also supports headless launches, custom RAM, cold boots, no-lowram mode for multi-window testing, skip groups, keep-package rules, and default flags in a user configuration file.

## Snapshot and CI features
avdslim can create a clean golden snapshot that the README claims restores in under two seconds, with a separate live snapshot mode for preserving test apps, local databases, and test accounts. It also provides an official GitHub Marketplace Action that installs avdslim for lower-memory emulator CI and parallel emulator shards. These boot-time and CI benefits were not reproduced here.

## Installation and trust boundary
The project offers Homebrew, Go install, pre-built releases, a shell installer, and source builds using the Go standard library. I did not run the curl installer, install a binary, accept Android SDK licenses, modify an AVD, or run any repository code. Release verification instructions use checksums and GitHub artifact attestations. The repository states that the avdslim and AVD-SLIM names are trademarked separately from the MIT code.

## Evidence boundary
The official GitHub README, raw Go module file, and main CLI entrypoint were inspected. The repository metadata was checked through the GitHub API. The memory reductions, boot times, service-compatibility guarantees, GPU behavior, and restore correctness remain project-authored claims in this record. No emulator was started and no host or guest configuration was changed.

## Sources
- https://github.com/kdbhalala/avdslim
- https://raw.githubusercontent.com/kdbhalala/avdslim/main/cmd/avdslim/main.go
- https://raw.githubusercontent.com/kdbhalala/avdslim/main/go.mod
- Related inspiration named by the repository: https://github.com/MobAI-App/simslim
