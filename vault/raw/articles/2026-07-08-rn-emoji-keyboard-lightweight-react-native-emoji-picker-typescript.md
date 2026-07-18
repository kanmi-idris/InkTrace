---
title: rn-emoji-keyboard — Lightweight React Native Emoji Picker (TypeScript)
kind: paste
captured_at: 2026-07-08 20:29
tags: [react-native, emoji-picker, typescript, ui-component, open-source, mit, theming]
source_url: 
status: inbox
---

# rn-emoji-keyboard — Lightweight React Native Emoji Picker (TypeScript)

## rn-emoji-keyboard

Source: https://github.com/TheWidlarzGroup/rn-emoji-keyboard (401 stars, MIT)
Author: TheWidlarzGroup (hello@thewidlarzgroup.com)

### What it is
Super performant, lightweight, fully customizable emoji keyboard for React Native. Written entirely in TypeScript — no native modules, 96.7% TypeScript.

### Installation
```sh
yarn add rn-emoji-keyboard
```

### Usage
```tsx
import EmojiPicker from 'rn-emoji-keyboard'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return <EmojiPicker onEmojiSelected={handlePick} open={isOpen} onClose={() => setIsOpen(false)} />
}
```

### Features
- Pure TypeScript (96.7%), no native dependencies
- 401 stars, 79 forks, 188 commits
- 23 releases, latest v1.7.0 (May 2024)
- Fully customizable theming
- Internationalization support
- Modal-based picker UI
- Hacktoberfest participant (2021, 2022)

### Docs
https://thewidlarzgroup.github.io/rn-emoji-keyboard/
- Getting Started, Internationalization, Basic Usage, API Reference

### Comparison
- src-2026-07-08-006 (react-native-emoji-popup) — wraps native pickers (MCEmojiPicker iOS + Emoji2 Android), <EmojiPopup> wrapper component, 187 stars
- rn-emoji-keyboard — pure TS, modal-based, more stars (401), more mature (23 releases), no native dependencies
