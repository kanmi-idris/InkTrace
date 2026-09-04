---
title: "State of React Native Navigation: Cold Start, RAM, and FPS Across Four Navigation Libraries"
kind: "paste"
captured_at: "2026-09-04 03:21"
tags: ["react-native", "navigation", "react-navigation", "react-native-navigation", "expo-router", "performance", "benchmark", "hermes", "reanimated", "android", "andrei-calazans"]
source_url: "https://andrei-calazans.com/posts/2026-06-05-state-of-rn-navigation/"
status: "inbox"
---

# State of React Native Navigation: Cold Start, RAM, and FPS Across Four Navigation Libraries

## Source overview
This is the summary/overview post in a benchmark series by Andrei Calazans measuring the real-world startup and runtime cost of navigation libraries in React Native. The author built the same app four times, once per major navigation approach, with every screen and UI element shared from one common package so the navigation library was the only variable, then measured cold start, RAM, FPS, and JS-thread activity on Android. This new post is not previously captured in this vault, though a related earlier benchmark by the same author on React Native animation-library performance is already captured separately (src-2026-07-17-007).

## Methodology
Testing was Android-only, on the stated grounds that Android performance bottlenecks show up more often in production React Native apps and that Android profiling tooling (Perfetto Systrace plus the Hermes CPU sampler) gives more granular thread-level and source-mapped call-stack data than equivalent iOS tooling. The test configuration was Expo SDK 56, React Native 0.85, Hermes, New Architecture (bridgeless/Fabric) enabled, on a Samsung Galaxy A16 running Android 14, using release/profileable builds. Cold start was measured via the OS's own 'Displayed' metric; FPS, CPU, and RAM were measured with Flashlight driving Maestro-scripted navigation flows; detailed breakdowns came from Perfetto Systrace traces and source-mapped Hermes CPU profiles. All test apps, data, and tooling are published in the author's StateOfReactNativeNavigation GitHub repository.

The four libraries compared were react-native-navigation (a native-navigation library), React Navigation v7, an unspecified 'navigation router' library, and Expo Router.

## Headline numbers
Across the four libraries, cold start (median of 3 runs, via the OS Displayed metric) ranged from roughly 316ms (react-native-navigation, the fastest) through 358ms (React Navigation v7) and 398ms (the navigation router) up to roughly 917ms for Expo Router, the slowest by a wide margin (roughly 3x the fastest library). Average FPS was essentially identical across all four (all held approximately 59.8-59.9 FPS during the tested navigation flow, meaning FPS was not the differentiator). Average CPU usage during the flow ranged from about 31% (react-native-navigation) to about 38% (React Navigation v7). Peak RAM during the navigate flow ranged from about 195MB (react-native-navigation) up to about 308MB (Expo Router).

## Three findings the author highlights
1. Expo Router's roughly 3x larger cold start is not mainly attributable to Reanimated, even though its template bundles react-native-reanimated 4 and react-native-worklets while the other three test apps do not. A separate controlled experiment cited in the post found Reanimated alone added only about 62ms to cold start. The author attributes most of the gap instead to a roughly 2x larger JS bundle and to Expo Router's routing layer sitting on top of React Navigation, which together caused about 106 JS modules to be evaluated at boot versus 36 to 43 modules for the other three libraries.
2. Reanimated is described as the main driver of the RAM difference, not the cold-start difference: adding only Reanimated to the leanest test app (the react-native-navigation build) reproduced essentially all of Expo Router's RAM premium, an increase of about 125MB, attributed almost entirely to the additional anonymous heap used by the second Hermes JS runtime that Reanimated's Worklets library spins up. The post notes that Reanimated's newer 'bundle mode' feature is intended to address this RAM cost, but links to a related post and an open react-native-reanimated GitHub issue (#10437) describing bundle mode as instead regressing cold start, because it must parse the app's entire bundle.
3. react-native-navigation's cold-start advantage is attributed to its navigation being implemented in native code (Kotlin views for tabs and stack navigation on Android) rather than through a JavaScript-reconciled component tree: its JS bundle is reported to evaluate in about 55ms at startup, versus about 168ms for React Navigation, whose stack and tab navigators are real component trees reconciled through Fabric. The author notes this native-navigation approach is not without cost elsewhere: a separate post in the series is cited as showing react-native-navigation drops more frames than the JS-based alternatives specifically on heavier, content-rich screens.

## Companion posts in the same series
The overview post links out to three companion deep-dive posts by the same author: one examining exactly where JS-thread time goes at cold start for each library and detailing the Reanimated controlled experiment; one quantifying a fixed and marginal 'Expo tax' (the post's own figures cited: roughly 36ms cold start, roughly 13MB RAM, and roughly 16MB APK size as a fixed cost of adopting Expo, plus additional marginal cost per extra Expo module used); and one specifically measuring the cost of a single screen-to-screen navigation (press-to-paint timing) on both a trivial screen and a heavier, content-rich screen. Those companion posts were not independently fetched or verified in this capture; their contents are recorded here only as summarized by this overview post's own links and framing.

## Author-stated caveats
The author explicitly flags several limitations of the study: the react-native-navigation test app is a bare React Native app while the other three are Expo apps, so some of its performance lead may come from the absence of expo-modules-core rather than the navigation library choice alone (attributed to react-native-navigation owning the React host in a way that is incompatible with Expo's host factory); the results come from one device (a Samsung Galaxy A16) and one simple test UI, so a heavier real-world UI could change both the FPS and the relative navigation-cost picture; the underlying Hermes CPU sampling is described as coarse and cold-start numbers are medians of only 3 runs taken under constant profiling instrumentation, which the author states inflates absolute timing figures identically across all four apps rather than distorting the relative comparison; and Expo Router is explicitly acknowledged to provide meaningfully more built-in functionality for its cost (deep linking, lazy screen loading, file-based routing, and web support), so the reported numbers describe startup cost on a deliberately trivial app rather than a verdict on whether Expo Router's feature set is worth adopting for a real app.

## Evidence boundary
This capture is based on a direct read of the overview blog post. The three linked companion deep-dive posts, the linked react-native-reanimated GitHub issue #10437, and the StateOfReactNativeNavigation benchmark repository's actual source code were not independently fetched or verified in this pass; their content is recorded here only as characterized by this overview post. All numeric benchmark results are the author's own self-reported measurements, obtained under the specific device, OS, and framework-version configuration documented above, and have not been independently reproduced.

## Sources
- https://andrei-calazans.com/posts/2026-06-05-state-of-rn-navigation/
- https://andrei-calazans.com/posts/2026-06-06-react-native-navigation-cold-start/
- https://andrei-calazans.com/posts/2026-06-07-the-cost-of-expo/
- https://andrei-calazans.com/posts/2026-06-07-the-cost-of-navigating/
- https://github.com/AndreiCalazans/StateOfReactNativeNavigation
- https://github.com/software-mansion/react-native-reanimated/issues/10437
