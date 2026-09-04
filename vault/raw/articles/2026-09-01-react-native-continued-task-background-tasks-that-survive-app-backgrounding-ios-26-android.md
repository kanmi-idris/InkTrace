---
title: "react-native-continued-task: Background Tasks That Survive App Backgrounding (iOS 26 + Android)"
kind: "paste"
captured_at: "2026-09-01 20:33"
tags: ["react-native", "expo", "nitro-modules", "ios26", "bgcontinuedprocessingtask", "android", "workmanager", "background-tasks", "live-activity", "foreground-service", "mit"]
source_url: "https://github.com/mahdidavoodi7/react-native-continued-task"
status: "inbox"
---

# react-native-continued-task: Background Tasks That Survive App Backgrounding (iOS 26 + Android)

## Source overview
react-native-continued-task is a React Native and Expo library, released 2026-09-01 by Mehdi (mahdidavoodi7, creator of Motionary), that gives one typed API for long-running, user-initiated background work (a large export, upload, or batch encode) that keeps running after the user backgrounds or switches away from the app. It wraps iOS 26's BGContinuedProcessingTask (which draws a Live Activity on the Lock Screen) on iOS and Android's WorkManager foreground services (which draw an ongoing notification) behind one API, built with Nitro Modules (Swift on iOS, Kotlin on Android), and ships an Expo config plugin. License is MIT.

GitHub API metadata checked on 2026-09-01 (the day of creation) reports 91 stars, 2 forks, 0 open issues, TypeScript as the primary repo language.

## What it explicitly is not
The README is explicit that this is not a general 'run arbitrary code in the background' library. Both platforms only grant this execution mode to work the user just requested, both surface system-drawn UI the user can cancel from, and both platforms kill work that looks stalled. The API is shaped to reflect those constraints rather than abstract them away.

## Core usage model
A task is submitted with a submit() call from the foreground, in direct response to a user action (both platforms document or effectively require this; submitting from a timer, push handler, or background context gets the task cancelled). The submit call requires an identifier prefix, a title/subtitle shown in the platform's progress UI, and a totalUnitCount, because progress reporting is described as load-bearing rather than cosmetic: Apple's own documentation states tasks that report no progress get expired, so setProgress() calls are what keep an iOS task alive, not just a UI nicety.

The returned task object exposes updateTitle(), setProgress(), complete(success), cancel(), and onStart/onStop listeners. Calling complete() is described as mandatory (not calling it is characterized in the docs as a bug).

## Stop reasons and cancellation ambiguity
When a task stops without an explicit complete() call, an onStop listener fires with a normalized reason plus the raw native platform error domain/code/name. Documented reasons include user-cancelled, app-cancelled, expired, fgs-timeout (Android 15+, six-hour dataSync budget exhausted), quota (Android 16+, JobScheduler quota), app-terminated, and unknown.

A specific documented platform limitation: iOS's BGContinuedProcessingTask delivers both user-initiated cancellation (tapping cancel on the Live Activity) and system-driven expiration through the same zero-argument expirationHandler callback, so the SDK gives no way to distinguish them. The library therefore reports both as expired on iOS rather than guessing at user-cancelled; this behavior is stated to be confirmed by manual device testing (13 of 13 checks passing on a physical device running iOS 26.6.1, per a linked device-QA run log), not just inferred from documentation. Android, in contrast, can distinguish user cancellation from other stop causes and reports user-cancelled accordingly.

## Reconciling silently killed tasks
When a user force-quits the app (swipes it out of the app switcher), iOS cancels any continued processing tasks and, per Apple's own documentation quoted in the README, gives the app no indication of the cancellation at all when this happens (no stop listener fires, no expiration handler runs). To handle this, the library persists a native record of each submitted task and exposes getKnownTasks() to read that record back on the next app launch, so an app can detect orphaned/interrupted tasks (marked with an app-terminated stop reason) and decide how to reconcile partial work, then explicitly call forgetTasks() once reconciliation is done. On Android, because a WorkManager worker can outlive the app process, a known task may still genuinely be running; the library exposes supportsReattach and attachToTask() to reconnect to a live Android task instead of treating it as orphaned.

## Platform-specific operational constraints documented in the README
- Android 13+ (API 33) requires a runtime-granted POST_NOTIFICATIONS permission for the foreground-service notification to actually display; without it, the underlying service and work still run, but the notification is silently suppressed, which the README flags as a likely source of confusion ('the task looks like it did nothing'). The library cannot request this permission itself because a permission prompt requires an Activity, so the app must request it before the first task submission.
- On Android targeting API 35+, all of an app's dataSync-type foreground services share a combined six-hour budget per rolling 24-hour period; hitting that limit triggers a system timeout that the library surfaces as the fgs-timeout stop reason. On Android 16+, a separate JobScheduler quota can also apply, surfaced as quota.
- Apple does not publish a maximum duration or a concurrent-task limit for BGContinuedProcessingTask, so the README explicitly declines to quote unpublished numbers, and notes that an unrelated documented '1 refresh + 10 processing tasks' limit for a different BGTaskScheduler task type does not apply here.
- BGTaskScheduler.submit(_:) is noted as reported-deprecated in iOS 27 in favor of a newer submission API; the README says the library is structured around what the currently shipping SDK actually exposes.
- requiresGPU support on iOS needs a specific background-GPU entitlement that the README notes is only available to paid Apple Developer Program accounts, not free personal-team accounts.

## Testing approach
The project describes a layered test strategy: Jest for the JS-level error-code mapping, unsupported-platform behavior, and Expo config-plugin manifest edits; Kotlin JUnit for the WorkManager stop-reason mapping; Android instrumented tests on an emulator for the reconciliation store and foreground-service notification; native Swift/Kotlin compile checks in CI; and a manual iOS device-QA checklist (13 checks) run on a physical iPhone on iOS 26.6.1, since BGContinuedProcessingTask is documented as untestable in the iOS Simulator (BGTaskScheduler reports .unavailable there) and Apple's debug trigger SPI for this API is device-only and, per the README, would be grounds for App Store rejection if shipped in a production build. A separate end-to-end 'Harness' test suite for React Native is described as written and wired into CI infrastructure but not yet passing, due to a documented conflict between the test harness's expected Expo entry-point manifest and the example app's actual Metro virtual-entry configuration; the README describes this as an open, unresolved gap rather than a completed feature.

## Requirements
Per the README: React Native 0.75+ (0.85 to 0.87 called out as best-tested), iOS 15+ to build (continued-task functionality itself requires iOS 26+, reporting isSupported: false below that), Xcode 16.4+ (26.x needed to build against the iOS 26 SDK), Android minSdk 24 with compileSdk 34+ and NDK 27+, and react-native-nitro-modules 0.37.1. It explicitly does not work in Expo Go (Nitro modules require native code) and does not work in the iOS Simulator; verification requires a physical iOS 26+ device and a development build.

## Attribution and related work
The library credits Nitro Modules (Margelo/mrousavy) as its native-module framework foundation, consistent with the user-provided post's acknowledgment. The author states this library grew out of separate work on Motionary, a paid React Native animation/interaction component library, framed around the idea that a well-animated progress screen is still a broken feature if the underlying task dies whenever the user switches apps.

## Execution boundary
The GitHub README and repository API metadata were inspected for this capture. No package was installed, no development build was created, and no background task was submitted on either platform during this capture.

## Sources
- https://github.com/mahdidavoodi7/react-native-continued-task
- https://github.com/mahdidavoodi7/react-native-continued-task/blob/main/docs/device-qa-runs/2026-09-01-ios-26.6.1.md
- https://nitro.margelo.com/
- https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtask
