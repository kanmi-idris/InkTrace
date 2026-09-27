---
title: "Fishjam VoIP Docs and Example App: Independently Verified Setup, Call-State Model, and Push Payload Contract"
kind: "paste"
captured_at: "2026-09-17 04:49"
tags: ["fishjam", "react-native", "voip", "callkit", "telecom", "expo", "software-mansion", "push-notifications", "call-state", "documentation"]
source_url: "https://documentation.fishjam.io/docs/next/how-to/client/voip-calls"
status: "inbox"
---

# Fishjam VoIP Docs and Example App: Independently Verified Setup, Call-State Model, and Push Payload Contract

## Relation to existing source
The blog post describing Fishjam's VoIP calling feature was already captured as src-2026-08-27-001, which noted the official docs page and the example-app repository as 'referenced but not independently fetched' at that time. This record supplements that capture by directly fetching and verifying both, adding concrete technical detail the earlier blog-post-only capture did not have.

## Confirmed: platform transport mechanism
The official docs confirm the mechanism described in the blog post and the user's message: on iOS, a VoIP push over APNs wakes the app via PushKit and the SDK reports the call to CallKit; on Android, a high-priority FCM data message wakes the app and the SDK surfaces the call through Android's Telecom framework. The docs explicitly frame CallKit/Telecom/PushKit as the OS's own native VoIP frameworks, with the SDK driving them behind one JS API, and note that registering calls with the OS also gets 'remote surface control' for free (answering from a Bluetooth headset or Android Auto reaches the app as ordinary state changes).

## Call lifecycle, as documented
The docs describe a five-step call flow: (1) the developer's own backend sends the VoIP push; (2) the OS wakes the app (even if killed) and `callStatus` becomes `incoming`; (3) the user answers on the native system call screen and `callStatus` becomes `connecting`; (4) the app itself joins the Fishjam room and waits for the remote peer's media; (5) once media is live, the app calls `reportConnected()`, which confirms the connection to the OS, starts the call timer, and moves `callStatus` to `active`. The docs are explicit that step 5 has a deadline (`voip.fulfillAnswerCallTimeout`, 10 seconds by default): an answered call not reported connected within that window is ended by the OS, so the token-fetch-and-room-join work in between must be fast.

## Setup requirements confirmed
- Expo apps additionally need `@fishjam-cloud/ios-expo-voip` installed for iOS specifically, since it registers PushKit at launch; without it, VoIP pushes are never received at all.
- A dedicated `voip` configuration block in the Fishjam Expo config plugin (`android.enableVoIP`, `ios.enableVoIPBackgroundMode`, and the `voip` timeouts block) is documented as required together; setting the `voip` block without `@fishjam-cloud/ios-expo-voip` installed is documented to fail `expo prebuild` outright with an explicit error message.
- iOS requires the `aps-environment` push entitlement (`development` for dev builds, `production` for TestFlight/App Store) or no VoIP token is ever issued to the app.
- Android requires a `google-services.json` matching the app's package name exactly; the docs explicitly warn that `enableVoIP: true` without `googleServicesFile` set will make `expo prebuild` succeed while Firebase silently never gets wired up, so pushes never arrive, and calls this out as the first thing to check if Android calls don't ring.
- Android 13+ additionally requires a runtime `POST_NOTIFICATIONS` permission request, or the incoming-call notification cannot be posted at all.
- Confirmed: Android FCM slot-conflict handling. Since Android delivers every FCM message to one single messaging service, and the Fishjam SDK claims that slot, an app already using `expo-notifications` or `@react-native-firebase/messaging` for other pushes would otherwise stop receiving them. The docs confirm a `voipFallbackMessagingService` config option (accepting `expo-notifications`, `@react-native-firebase/messaging`, or a fully-qualified custom class name) that relays non-VoIP FCM messages back to the app's existing push library, matching the 'No FCM Slot Conflicts' claim in the user's message. A `voipMessagingService: false` escape hatch is also documented for apps that want to own message dispatch entirely themselves.

## API surface confirmed
`VoIPProvider` (mounted alongside `FishjamProvider`) tracks call state from native CallKit/Telecom events and exposes it via `useVoIP`, but the docs are explicit that it does not touch the connection itself: joining the room, minting peer tokens, and starting local media all remain the app's own responsibility. `useVoIP` exposes: `callStatus` (`available`/`incoming`/`connecting`/`active`), `currentCall`, the device's own push token (`voipToken`, APNs-derived on iOS or FCM-derived on Android) to send to the app's own backend, `startCall(to, roomName)` for outgoing calls, `reportConnected()`/`reportConnectFailed()`, `endCall(reason)` with six documented `CallEndedReason` values (`local`, `rejected`, `missed`, `remote`, `answeredElsewhere`, `failed`), `isOnHold`/`isMuted` flags that the app must itself apply to its own audio/video tracks (the SDK reports the flag but does not touch media), `setCallHeld()` for app-initiated hold, and `pendingCallIntent`/`clearCallIntent()` specifically for iOS Recents redial flows.

The incoming-call push payload contract is documented with five fields: `roomName` (required; Android silently drops a payload missing it, iOS still rings but then throws in JS), plus optional `displayName`, `handle` (used by iOS Recents for redial, so the docs recommend a stable user id rather than a display name), `isVideo`, and `avatarUrl` (rendered natively on Android; delivered to JS only on iOS, since CallKit cannot show caller images itself).

## Testing constraints confirmed
The docs explicitly state VoIP pushes never reach the iOS Simulator and Android requires Google Play services for FCM, so testing must happen on real devices. A documented test checklist covers: a killed-app cold-start ring, answering with the OS timer starting once media is live, a call ringing out to a `missed` end state, iOS Recents redial, and a cellular-call Hold & Accept interruption pausing and then resuming the app's own mic/camera.

## Example app, independently verified
The linked example-app README (fishjam-cloud/examples, mobile-react-native/voip-call) confirms a two-user calling demo: an Expo React Native client plus a small Deno-based push-and-signaling server. Running it requires the developer's own Apple and Firebase/Google Cloud credentials (an APNs VoIP certificate and/or an FCM service-account key) rather than shipping any shared demo credentials, plus a project-specific `google-services.json` for Android (gitignored, must be fetched manually and placed at the app root so `expo prebuild` copies it into place) and an `.env` file with the developer's own Fishjam app id, sandbox API URL, and the server's LAN-reachable address. The README repeats the same real-device-only testing constraint documented in the main guide.

## Evidence boundary
The official Fishjam VoIP calls documentation page and the linked example-app README were fetched and read directly for this capture, confirming and extending the claims already recorded from the original blog post (src-2026-08-27-001). No SDK was installed, no Expo config plugin was applied, no push credentials were generated, and no example app was run during this capture; the documented setup steps, timeouts, and payload contract are Fishjam's own published documentation, not independently tested against a real build in this pass.

## Sources
- https://documentation.fishjam.io/docs/next/how-to/client/voip-calls
- https://github.com/fishjam-cloud/examples/tree/main/mobile-react-native/voip-call
- Related: src-2026-08-27-001 (original blog-post-based capture)
