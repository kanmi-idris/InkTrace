---
title: Kotlin Multiplatform vs React Native (2026 Benchmark) by Software Mansion
kind: paste
captured_at: 2026-07-03 14:56
tags: [kotlin-multiplatform, react-native, benchmark, performance, swmansion, comparison]
source_url: https://swmansion.com/blog/we-built-the-same-app-in-kmp-and-react-native-here-s-what-we-found/
status: inbox
---

# We Built the Same App in KMP and React Native – Here's What We Found

Artur Gęsiarz, Karol Kąkol, Weronika Grzybowska — Jul 2, 2026 · 16 min read

## TL;DR

The debate between Kotlin Multiplatform (KMP) and React Native (RN) touches on many dimensions – developer experience, ecosystem maturity, team fit. We wanted to add measured performance data to that picture, so we built the same application twice to see how each stack impacts the final product.

Our findings show that there is no "perfect" framework; instead, each technology offers a different performance profile. React Native continues to be a powerhouse for iOS memory efficiency and fast iterations, while Kotlin Multiplatform shows remarkable lean-ness on Android across metrics such as app size, startup times, and RAM usage.

## The apps

In order to compare the two frameworks, we created a simple app that lists recent SpaceX launches. We prepared separate implementations: one built with Kotlin Multiplatform and Compose Multiplatform, the other with React Native and Expo.

Both apps fetch from the public SpaceX API and present a list-and-detail interface that exercises the runtime in the same way most production apps do: networked data, image loading, list virtualization, local persistence, navigation between tabs.

The app consists of three key components:

- **Launches**: a scrollable list of SpaceX launches with mission patches, dates, and rocket info.
- **Favourites**: a view displaying favourited launches, handled via local persistence.
- **Detail sheet**: a modal bottom sheet that opens from either tab to fetch and render launch images and extended details.

> An important caveat up front: both implementations are baseline – not fully tuned for production. We deliberately use what the framework gives us out of the box: no hand-tuned native escapes, no custom shadow nodes, no overrides of the default list virtualization, no aggressive image preloading. The intent is to measure the cost of the framework defaults — the starting point any team would have on day one – not the cost of optimization effort.

## Tech stack

### Kotlin Multiplatform
- Kotlin 2.3.0
- Compose Multiplatform 1.10.0
- Ktor 3.1.3 – networking
- Coil 3.1.0 – image loading
- Voyager 1.1.0-beta03 – navigation
- Room 2.8.4 – local persistence
- kotlinx-serialization 1.8.1 – JSON

### React Native
- React Native 0.81.5 on Expo 54.0.33
- Axios 1.13.6 – networking
- TanStack React Query 5.90.21 – data fetching and caching
- Zustand 5.0.12 – favourites state
- Expo Image 3.0.11 – image loading
- Expo Router 6.0.23 + React Navigation 7.1

## Test scenario

To measure the performance of each framework, we created a scenario which is aimed at key architectural components:

- Long list rendering
- Image cache management
- Database operations

### Step-by-step sequence:
1. **Initial interaction**: open the first list item, fully expand the bottom sheet, and save the object to the database (mark as favourite).
2. **Mid-list scroll & render**: rapidly scroll to the 25th item, interact with the UI, and toggle the favourite status.
3. **End-of-list stress test**: scroll to the very bottom of the list — forcing the framework to handle on-the-fly asset loading for the entire dataset — and favourite the final item.
4. **State & database management**: navigate to the "Favorites" tab and successively remove all saved items from the database.
5. **Reset**: navigate back to the primary list and return the scroll position to the top.

## Test devices

### Android
- Pixel 7 – 2022, Tensor G2, 8 GB RAM
- Motorola Edge 60 – 2025, MediaTek Dimensity 7300, 8 GB RAM
- Huawei P40 Lite – 2020, Kirin 810, 6 GB RAM

All Android builds: release configuration, R8 + ProGuard shrinking and obfuscation enabled, single ABI (arm64-v8a).

### iOS
- iPhone 13 mini – 2021, A15 Bionic, 4 GB RAM
- iPhone 16 – 2024, A18, 8 GB RAM
- iPhone 17 – 2025, A19, 8 GB RAM

All iOS builds: release configuration, Ad-Hoc distribution, Debug Executable disabled.

## The challenges of profiling

Precise performance benchmarking often requires repeated test cycles to ensure statistical consistency. Our first step was to automate this process using Maestro, aiming to capture profiler output across all devices without manual intervention.

However, once the results came in, RAM and CPU numbers were drifting in ways that didn't match what we saw running the app by hand. The issue turned out to be the overhead introduced by the automation itself. Adjusting the method used to access the application UI allowed us to reduce it, but the difference was still too large.

In light of this, we decided to perform the RAM and CPU scenario manually. The interaction with the device had to be done by hand, but the majority of the process stayed automated via CLI tools.

---

## Round 1 – App size

### How we measured
- **Android**: built a release APK and inspected it with Android Studio's APK Analyze (`./gradlew assembleRelease`)
- **iOS**: archived the app for Ad-Hoc distribution and analyzed the App Thinning Size Report generated by Xcode

### Numbers — Android
| Framework | Download size | Installed size |
|-----------|--------------|----------------|
| KMP       | 2.0 MB       | 3.9 MB         |
| RN        | 15.8 MB      | 33.8 MB        |

KMP is roughly **8x smaller** than React Native on Android. R8 operates directly on Kotlin bytecode and aggressively prunes unused Compose and library code. For React Native, R8 can only process the Java/Kotlin native layer — it has no access to the JavaScript bundle (a separate artifact compiled by Hermes). The heavy baseline of Hermes, JSI, and the JS bundle ships regardless of app complexity.

### Numbers — iOS
| Framework | Download size | Installed size |
|-----------|--------------|----------------|
| KMP       | 11.2 MB      | 32.1 MB        |
| RN        | 9.9 MB       | 29.7 MB        |

On iOS, the two runtimes converge. Download sizes are within ~1.3 MB of each other, with React Native slightly ahead. For Compose Multiplatform, iOS ships its own Skia-based renderer, Kotlin bindings to Skia, plus the Kotlin/Native runtime. For React Native, rendering is handled by native UIKit at no binary cost, but the framework compensates with Hermes, the JavaScript bundle, and the JSI bridge layer.

---

## Round 2 – Startup time

### What we measure
- **TTID** (Time to Initial Display) – from launch tap to the first rendered frame
- **TTFD** (Time to Full Display) – from launch tap to fully interactive with content loaded

### How we measured
- **Android**: `adb shell am start -S -W` drives each cold start; TTFD from `logcat` via `reportFullyDrawn()`
- **iOS**: `xctrace` with App Launch template and Points of Interest instrument; events emitted via `os_signpost`

### Numbers — Android (ms)
| Device           | KMP TTID | RN TTID | KMP TTFD | RN TTFD |
|------------------|---------|---------|---------|---------|
| Pixel 7          | 158     | 410     | 660     | 985     |
| Motorola Edge 60 | 245     | 527     | 617     | 993     |
| Huawei P40 Lite  | 221     | 838     | 750     | 1535    |

KMP reaches the first frame **2-4x faster** than React Native. For KMP, cold start is a straightforward process launch + UI init. For RN, the JavaScript engine, bridge, and bundle all have to load before the first frame — adding ~250-280ms on modern devices and over 600ms on the Huawei P40 Lite.

### Numbers — iOS (ms)
| Device          | KMP TTID | RN TTID | KMP TTFD | RN TTFD |
|-----------------|---------|---------|---------|---------|
| iPhone 13 mini  | 870     | 1041    | 1364    | 1555    |
| iPhone 16       | 822     | 850     | 1313    | 1220    |
| iPhone 17       | 802     | 822     | 1203    | 1209    |

On iOS, the two frameworks are much closer. KMP's graphics renderer takes ~800-870ms on every device. RN starts fast enough on modern Apple hardware that the Android gap disappears almost entirely. On iPhone 16/17 the TTID difference is just 20-28ms. RN is actually faster on TTFD — by 93ms on iPhone 16.

---

## Round 3 – RAM usage

### How we measured
- **Android**: sampled `dumpsys meminfo` once per second, parsed TOTAL PSS and RSS
- **iOS**: `xctrace` with Activity Monitor template attached to running process; third column of `sysmon-process` = Memory Footprint

### Numbers — Android (MB)
| Device           | KMP avg PSS | RN avg PSS | KMP avg RSS | RN avg RSS |
|------------------|-----------|-----------|-----------|-----------|
| Pixel 7          | 120.5     | 232.2     | 253.9     | 358.2     |
| Motorola Edge 60 | 121.0     | 219.2     | 255.5     | 361.6     |
| Huawei P40 Lite  | 59.7      | 175.6     | 204.9     | 329.1     |

KMP uses **roughly half the memory** of React Native on every tested Android device. PSS stays consistent at ~120 MB on new devices and drops to 59.7 MB on the Huawei P40 Lite. RN sits between 175-232 MB — the JavaScript engine and runtime stay loaded throughout the app's lifetime, creating a baseline KMP does not carry.

### Numbers — iOS (MB)
| Device          | KMP avg memory | RN avg memory |
|-----------------|---------------|--------------|
| iPhone 13 mini  | 157.0         | 44.7         |
| iPhone 16       | 230.2         | 56.4         |
| iPhone 17       | 251.4         | 131.4        |

On iOS, the results flip. RN uses **significantly less memory** (3-4x less) than KMP. RN delegates rendering to native UIKit, so the OS manages those resources directly. KMP keeps the Skia renderer and its graphics buffers allocated throughout the app's lifetime, growing on newer devices with higher resolution screens.

---

## Round 4 – CPU usage

CPU was the least stable parameter measured — sensitive to test execution details and automation overhead. The authors decided the most meaningful metric was **total CPU cycles** utilized by the process during the test scenario (not percentage).

### How we measured
- **Android**: `simpleperf stat` — reads hardware performance counters
- **iOS**: `xctrace` with CPU Profiler template

### Numbers (billions of cycles)
| Device (Android) | KMP | RN   |
|------------------|-----|------|
| Pixel 7          | 5.06 G | 8.36 G |
| Motorola Edge 60 | 10.96 G | 9.70 G |
| Huawei P40 Lite  | 7.57 G | 8.32 G |

| Device (iOS)     | KMP | RN   |
|------------------|-----|------|
| iPhone 13 mini   | 2.22 G | 2.39 G |
| iPhone 16        | 2.33 G | 2.04 G |
| iPhone 17        | 2.49 G | 2.25 G |

Neither framework is clearly faster on CPU. Results are heavily sensitive to scenario execution details — even scrolling speed could reverse which app came out ahead. **Inconclusive.**

---

## Round 5 — Flashlight (Android only)

Flashlight (by BAM) runs the same test scenario and measures FPS, CPU, and RAM, combining them into a single score.

### Numbers
| Device           | Metric  | KMP    | RN     |
|------------------|---------|--------|--------|
| Pixel 7          | Score   | 97     | 99     |
|                  | FPS     | 56.7   | 59     |
|                  | RAM     | 201.3 MB | 360.9 MB |
|                  | CPU     | 23.6%  | 39.3%  |
| Motorola Edge 60 | Score   | 99     | 99     |
|                  | FPS     | 58.7   | 59.3   |
|                  | RAM     | 223.9 MB | 343.7 MB |
|                  | CPU     | 24%    | 31.4%  |
| Huawei P40 Lite  | Score   | 98     | 98     |
|                  | FPS     | 58.7   | 59.3   |
|                  | RAM     | 216 MB | 348.8 MB |
|                  | CPU     | 21.8%  | 43.4%  |

Overall scores are nearly identical across devices. RAM figures align with Round 3. The CPU percentage difference is driven largely by RN's startup spike (red phase), not by the test scenario itself (green phase) — during steady-state, both track closely.

---

## The verdict

| Metric      | Android                       | iOS                            |
|-------------|-------------------------------|--------------------------------|
| App size    | **KMP.** 8x smaller. No JS bundle. | **Tie.** Negligible difference. |
| Startup     | **KMP.** 2-4x faster first frame. | **Tie.** Within noise on modern hardware. |
| RAM usage   | **KMP.** ~half the memory. No JS heap. | **RN.** 3-4x less. Native UIKit avoids Skia overhead. |
| CPU usage   | Inconclusive.                 | Inconclusive.                  |

On Android, KMP wins every round except CPU. The common thread: absence of a JavaScript runtime — no Hermes to boot, no bundle to load, no JS heap to keep in memory.

On iOS, the picture is more balanced. Startup is nearly identical. The standout is RAM: RN uses 3-4x less memory because it delegates rendering to native UIKit, while KMP keeps the Skia renderer and its graphics buffers in memory.

Neither framework is universally faster or lighter — they make different trade-offs that land differently per platform.

## Open-source repos
- LaunchPerf KMP: https://github.com/software-mansion-labs/launchperf-kmp
- LaunchPerf RN: https://github.com/software-mansion-labs/launchperf-rn
