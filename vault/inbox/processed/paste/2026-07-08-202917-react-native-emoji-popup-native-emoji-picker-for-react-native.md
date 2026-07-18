---
title: react-native-emoji-popup — Native Emoji Picker for React Native
kind: paste
captured_at: 2026-07-08 20:29
tags: [react-native, emoji-picker, native-module, ui-component, open-source, mit]
source_url: 
status: inbox
---

# react-native-emoji-popup — Native Emoji Picker for React Native

## react-native-emoji-popup

Source: https://github.com/okwasniewski/react-native-emoji-popup (187 stars, MIT)
Author: Oskar Kwaśniewski (@okwasniewski)

### What it is
Native Emoji Picker for React Native using platform-native primitives:
- iOS: MCEmojiPicker (Swift)
- Android: Emoji2 (Jetpack, Kotlin)

### Installation
```sh
npm i react-native-emoji-popup
```

### Usage
```tsx
import { EmojiPopup } from 'react-native-emoji-popup';

function App() {
  const [emoji, setEmoji] = useState('🫡');
  return (
    <EmojiPopup onEmojiSelected={setEmoji}>
      <Text>Open Emoji Picker</Text>
    </EmojiPopup>
  );
}
```

### Props
| Prop | Type | Platform | Description |
|------|------|----------|-------------|
| children | React.ReactNode | iOS, Android | Trigger component |
| onEmojiSelected | (emoji: string) => void | iOS, Android | Callback with selected emoji |
| closeButton | ({ close }) => ReactNode | Android | Custom close button |
| contentContainerStyle | StyleProp<ViewStyle> | Android | Picker container style |
| style | StyleProp<ViewStyle> | iOS, Android | Trigger container style |

### Features
- Dark mode support (auto-adapts to device color scheme on both platforms)
- Android: customizable color scheme via contentContainerStyle (backgroundColor)

### Build
- Created with create-react-native-library (Callstack's React Native Builder Bob)
- Languages: Kotlin 35%, TypeScript 22%, Swift 13.5%, ObjC++ 10.6%
- 7 releases, latest v0.3.3 (Aug 2025)
