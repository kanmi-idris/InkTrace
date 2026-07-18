---
title: expo-morphing-menu — Keyboard-Aware Composer + Picker Menu for Expo
kind: paste
captured_at: 2026-07-12 20:43
tags: [expo, react-native, ui-component, keyboard, composer, reanimated, gesture-handler, open-source, mit]
source_url: 
status: inbox
---

# expo-morphing-menu — Keyboard-Aware Composer + Picker Menu for Expo

## expo-morphing-menu

Source: https://github.com/rit3zh/expo-morphing-menu (58 ★, 5 forks, MIT)
Author: rit3zh

### What it is
A morphing, keyboard-aware composer + picker menu for React Native (Expo SDK 57, RN 0.86). The input bar morphs into a menu surface instead of a separate sheet sliding up.

### Features
- **Morphing presentation** — single spring machine drives width, height, corner radius, and position together; input bar grows into the menu surface
- **Keyboard-following** via react-native-keyboard-controller — reads live keyboard height, stays glued above it
- **Multi-panel navigation** — register Item rows (Camera, Photos, Files, Plugins…) + matching Content panels; open(id) morphs to that panel, back() returns to item list
- **Single-image morph** — shared-element morph from grid cell to attachment thumb via reportFrame / run
- **TypeScript-first**, fully typed

### Component Anatomy
```
<BottomInput>
  <BottomInput.Attachments />
  <BottomInput.Trigger />  ← e.g. + button
  <BottomInput.Items>
    <BottomInput.Item id="photos" label="Photos" icon={...} />
  </BottomInput.Items>
  <BottomInput.Content id="photos">{panel}</BottomInput.Content>
</BottomInput>
```

### Stack
Expo SDK 57, RN 0.86, Reanimated 4, Gesture Handler 2, Keyboard Controller, expo-symbols, expo-glass-effect, expo-image, Safe Area Context, Expo Router

### Related Sources
- src-2026-07-08-009 (rn-expo-emoji-picker — also uses chat composer pattern with picker replacing keyboard)
- src-2026-06-28-021 (Rare UI — animated React components)
