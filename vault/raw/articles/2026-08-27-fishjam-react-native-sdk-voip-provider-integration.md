---
title: "Fishjam React Native SDK VoIP Provider Integration"
kind: "paste"
captured_at: "2026-08-27 00:17"
tags: ["fishjam", "react-native", "voip", "callkit", "telecom", "expo", "bare-react-native", "call-provider", "native-calling"]
source_url: "https://fishjam.swmansion.com/blog/modern-alternative-to-react-native-callkeep-in-2026"
status: "inbox"
---

# Fishjam React Native SDK VoIP Provider Integration

## Relation to existing source

The earlier record src-2026-06-18-001 covers a general Fishjam call-audio routing article. This supplemental source records the more recent Fishjam blog post about modern VoIP provider integration, with native OS call UI, full platform parity, and a complete integration example.

## Core integration model

Fishjam extends the React Native SDK with native incoming-call handling that surfaces on the OS-level call screen (CallKit on iOS, Telecom on Android). The setup is provider-driven: a `VoIPProvider` component owns the call lifecycle (`incoming`, `connecting`, `active`, `hold`, `mute`, ring and answer timeouts). Calls are reported through a `useVoIP` hook that joins the Fishjam room once media is live.

The article compares three approaches:
- `react-native-callkeep`: JavaScript binding to CallKit/telecom; Android backend on legacy `android.telecom.ConnectionService`; not actively maintained.
- `expo-callkit-telecom`: newer Expo module on Jetpack Core Telecom; assumes `expo-notifications` for other pushes.
- **Fishjam SDK**: native call on both transports, native push parsing on both; works with any media stack; configures from an Expo plugin or manual bare-React-Native setup.

## Native platform specifics

### iOS
- VoIP pushes over APNs + PushKit wake the app.
- CallKit renders the system call UI (banner over home screen, lock screen, hold).
- Background mode and permissions are configured via the plugin or Info.plist.
- The SDK reports `enableVoIP` and `enableVoIPBackgroundMode`.
- Optional timeouts: incoming (20s), outgoing (20s), fulfill answer (5s).
- VoIP push fallback: name your existing push library in `voipFallbackMessagingService` to avoid FCM slot collisions.

### Android
- High-priority FCM wake-up; Telecom registers the call.
- CallStyle banner/lock-screen and ongoing notification.
- Same SDK config plugin (`android.enableVoIP`, `android.voipFallbackMessagingService`).
- Permissions and AndroidManifest components declared in the guide.
- Timeouts mirror iOS values.

### Bare React Native
- No Expo plugin auto-magic; native setup declared in the guide: AndroidManifest.xml permissions, Info.plist keys, and timeout manifest metadata.
- Same provider+hook model; no plugin config needed.

## API surface
- `VoIPProvider` component: owns `incoming`, `connecting`, `active` status; `hold`, `mute`; ring and answer timeouts.
- `useVoIP` hook: `callStatus`, `currentCall`, `startCall`, `reportConnected`, `reportConnectFailed`, `endCall`.
- `isVideo` flag on `VoIPProvider` marks outgoing calls as video calls; incoming calls take that flag from the push payload. It defaults to `false`, and your room type should match it.
- Room join: `joinRoom(currentCall.roomName)` after the connecting event.
- Outgoing calls: `startCall(handle, roomName)` triggers the native UI and joins the room.

## Features beyond the call screen
- **Call waiting and hold:** hold event + `isOnHold` flag; pause mic/camera and restore.
- **Redial from Recents:** calls land in iOS Phone app Recents; tapping or Siri redials.
- **Car, watch, and headset:** Android Auto, CarPlay, a watch, a Bluetooth answer button.
- **Audio output switching:** Earpiece, speaker, Bluetooth, USB, CarPlay and AirPlay; route-change event.
- **Branded Android notifications:** caller's photo from push payload.
- **Configurable timeouts:** 45s missed, 60s outgoing, 10s stalled media.

## Example app
The SDK ships with a complete VoIP example: login, user directory, in-call and outgoing screens, Deno server for user registration and push relay, WebSocket signaling. Both sides of the feature are in one repo: `mobile-react-native/voip-call`.

## Integration boundary
The blog article was inspected for its integration model, native API descriptions, Expo/bare RN differences, and feature list. No package was installed and no native build or runtime was executed during this capture.

## Verification notes
The article was cross-checked against the earlier `src-2026-06-18-001` Fishjam record for differences in scope and coverage. The new post adds native call-screen parity, Expo plugin configuration, hold/redial/bluetooth/branding features, and a full example app. Those extensions are documented; the earlier record's scope is preserved and not replaced.

The blog's claims about platform-specific behavior (CallKit/Telecom backend differences, FCM slot collision resolution via `voipFallbackMessagingService`, Android Auto/CarPlay support, etc.) are reported as article content and have not been independently verified in this capture.

## Sources
- https://fishjam.swmansion.com/blog/modern-alternative-to-react-native-callkeep-in-2026
- https://github.com/fishjam-cloud/examples/tree/main/mobile-react-native/voip-call
- https://github.com/fishjam-cloud/react-native-client
