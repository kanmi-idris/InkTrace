---
title: react-native-call-audio - In-Call Audio Routing for React Native
kind: paste
captured_at: 2026-06-18 05:54
tags: [react-native, expo, audio, voip, calls, webrtc, mobile, native-module]
source_url: 
status: inbox
---

# react-native-call-audio - In-Call Audio Routing for React Native

react-native-call-audio - In-Call Audio Session & Output Routing for React Native

## Overview
In-call audio session ownership and output routing (earpiece / speaker / bluetooth / wired) plus proximity-to-screen-off, for React Native. Uses Expo Modules API, New Architecture. SDK-agnostic - works with LiveKit, react-native-webrtc, Twilio, Agora, Daily, SIP, or no WebRTC at all.

## Repository
- GitHub: https://github.com/JassiSingh08/react-native-call-audio
- License: MIT
- Stars: 11, Forks: 0
- Languages: Kotlin (33.9%), JavaScript (33.8%), Swift (17.1%), TypeScript (12.7%), Ruby (2.5%)

## Platform Support
- Android 12+ (API 31+): modern setCommunicationDevice + AudioDeviceCallback
- Android 5-11 (API 21-30): legacy setSpeakerphoneOn + Bluetooth SCO, BroadcastReceiver for device-change events. Floor is API 21.
- iOS 15.1+ (APIs go back further; floor matches typical apps)

## Native Implementations
- Android: AudioManager.setCommunicationDevice (API 31+), AudioDeviceCallback for real device-change events, PROXIMITY_SCREEN_OFF_WAKE_LOCK
- iOS: AVAudioSession routing + speaker override, routeChangeNotification, isProximityMonitoringEnabled

## Install
npm install react-native-call-audio
npx expo prebuild

Peer deps: expo, react, react-native. No LiveKit / WebRTC dependency.

## API
- startCallAudio() - owns the session, starts on earpiece
- stopCallAudio() - releases session
- setRoute(route) - switch output (earpiece/speaker/bluetooth/wired)
- getDevices() - list available devices
- setProximityEnabled(bool) - ear-to-phone blanks screen
- addDevicesChangedListener(callback) - listen for device changes

## Usage Example
// On call connect:
startCallAudio();              // owns the session, starts on earpiece
setProximityEnabled(true);     // ear-to-phone blanks the screen

const sub = addDevicesChangedListener(({ available, selected }) => {
  // available: ("earpiece" | "speaker" | "bluetooth" | "wired")[]
  // selected:  the current output
});

setRoute("speaker");           // returns the route applied

// On call end:
sub.remove();
setProximityEnabled(false);
stopCallAudio();

## WebRTC Integration Warning
This module OWNS the call audio session. If your WebRTC SDK also manages the audio session, they will fight. You MUST tell the WebRTC SDK to NOT manage audio.

LiveKit example:
import { registerGlobals } from "@livekit/react-native";
registerGlobals({ autoConfigureAudioSession: false });

Do NOT call setupIOSAudioManagement or AudioSession.startAudioSession() / configureAudio().

## Platform Notes
- iOS: BT/wired auto-route when connected; setRoute("bluetooth"/"wired") clears speaker override
- Android Bluetooth: declares BLUETOOTH_CONNECT (API 31+) and BLUETOOTH (<=30) via manifest merge, no host-app setup needed
