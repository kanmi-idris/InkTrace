# expo-circular-reveal

Captured from user-supplied repository summary and README-style text on 2026-04-25.

Canonical URL provided with the capture:
https://github.com/JuanRdBO/expo-circular-reveal

---

expo-circular-reveal

Telegram-style circular reveal theme transitions for React Native. Built as an Expo Module with native iOS (Swift) and Android (Kotlin) implementations.

How it works
Captures a screenshot of the current screen
Overlays the screenshot on top of the app
Your code swaps the theme underneath
Animates a circular hole expanding from the tap point, revealing the new theme

Installation
npx expo install expo-circular-reveal
Then rebuild your dev client:

npx expo prebuild --clean
npx expo run:ios   # or run:android

Requires a dev client — will not work in Expo Go. This package includes native code (Swift + Kotlin) that must be compiled into your app binary.

Local Example App
This repo is a Bun workspace with the publishable package in packages/expo-circular-reveal and the Expo example app in example/.

bun install
bun ios       # runs the example app
# or bun android / bun start

Usage
import { triggerTransition } from 'expo-circular-reveal';
import { Pressable, Text } from 'react-native';

function ThemeToggle() {
  const handlePress = async (e) => {
    const { pageX, pageY } = e.nativeEvent;

    // 1. Capture screen + show overlay
    await triggerTransition(pageX, pageY, 800);

    // 2. Swap your theme here (the overlay hides the flash)
    // e.g. Appearance.setColorScheme('dark')
    // or your state management theme toggle

    // 3. The circular reveal animation runs automatically
  };

  return (
    <Pressable onPress={handlePress}>
      <Text>Toggle Theme</Text>
    </Pressable>
  );
}

API
triggerTransition(centerX, centerY, durationMs)

Parameter	Type	Description
centerX	number	X coordinate of the reveal origin (logical points)
centerY	number	Y coordinate of the reveal origin (logical points)
durationMs	number	Animation duration in milliseconds

Returns: Promise<string> — resolves with "ready" when the overlay is visible and it's safe to swap the theme.

Platform Details
iOS
Screen capture via UIGraphicsImageRenderer.drawHierarchy
Circular mask via CAShapeLayer with even-odd fill rule
CABasicAnimation for smooth path interpolation

Android
Screen capture via PixelCopy (Android 8.0+) with drawingCache fallback
Custom View with Canvas.clipPath using even-odd Path.FillType
ValueAnimator with DecelerateInterpolator

Requirements
Expo SDK 52+
iOS 15+
Android API 24+ (minSdk)
