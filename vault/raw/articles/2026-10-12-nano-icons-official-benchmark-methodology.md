# Nano Icons benchmark methodology capture

Captured: 2026-10-12
Source URL: https://github.com/software-mansion-labs/react-native-nano-icons/blob/main/packages/react-native-nano-icons/docs/BENCHMARKS.md
Publisher: Software Mansion
Evidence inspected: official `BENCHMARKS.md` page linked by the product website.

## Setup described by the repository

- Device and software: iPhone 15 Pro, iOS 18, Release build, New Architecture (Fabric), React Native 0.84.0.
- Workload: 1,000 icons rendered in a ScrollView.
- Each library was tested in isolation, with only one screen registered at a time. Each screen pre-created the icon array at module scope.
- Measurement used Xcode Instruments. Navigation from the HomeScreen to the icon screen triggered the profiled render.
- The README states results are averages of 20 runs per library.
- The repository says absolute times include React Native screen-navigation overhead shared by all libraries.

## Results stated in the document

| Library | JS thread (ms) | Main thread (ms) | Hang (ms) |
|---|---:|---:|---:|
| `react-native-svg` | 192.03 | 292.15 | — |
| `expo-image` | 78.07 | 922.03 | 415.32 |
| `@expo/vector-icons` (IcoMoon) | 119.51 | 370.41 | 277.58 |
| `react-native-nano-icons` | 74.97 | 155.04 | — |

The document defines JS thread as JavaScript execution and component mounting, main thread as native UI rendering, and hang as a main-thread stall during initial load. A dash means no hang was recorded.

## Evidence limits

These are publisher-reported measurements. I did not reproduce the benchmark, inspect its app code, or verify the device and build configuration. The results apply to the stated workload and setup; they are not a general performance guarantee.
