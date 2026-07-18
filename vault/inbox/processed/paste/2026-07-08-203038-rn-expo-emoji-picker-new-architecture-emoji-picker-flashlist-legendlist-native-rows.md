---
title: rn-expo-emoji-picker — New Architecture Emoji Picker (FlashList/LegendList, Native Rows)
kind: paste
captured_at: 2026-07-08 20:30
tags: [react-native, expo, emoji-picker, new-architecture, flashlist, legendlist, expo-modules, mit, typescript]
source_url: 
status: inbox
---

# rn-expo-emoji-picker — New Architecture Emoji Picker (FlashList/LegendList, Native Rows)

## rn-expo-emoji-picker

Source: https://github.com/JassiSingh08/rn-expo-emoji-picker (3 stars, v0.1.0, MIT)
Author: JassiSingh08 (Scanner Techs) — also created react-native-call-audio (src-2026-06-18-001) and react-native-collapsible-tab (src-2026-06-18-008)

### What it is
Buttery-smooth emoji picker for React Native New Architecture (Expo SDK 53/54, RN >=0.79). Swappable list engine, optional native row renderer via Expo Modules. 100% JavaScript core with optional native acceleration.

### Installation
```sh
npm install rn-expo-emoji-picker @shopify/flash-list
```

### Entry Points (swappable engine)
| Import | Engine | Notes |
|--------|--------|-------|
| rn-expo-emoji-picker | FlashList v2 | Default, recommended |
| rn-expo-emoji-picker/legend | LegendList v3 | recycleItems enabled |
| rn-expo-emoji-picker/flatlist | FlatList | Fallback, legacy arch |
| rn-expo-emoji-picker/native | FlashList v2 + native rows | Expo Modules, auto JS fallback |
| rn-expo-emoji-picker/legend-native | LegendList + native rows | Same native row renderer |

### Features
- Row-based grid (one component per row, React.memo, stateless)
- Skin tones: global selector + per-emoji long-press variant popover (WhatsApp/Gboard style)
- Recently/frequently used, persisted via injectable storage adapter (AsyncStorage, MMKV)
- EmojiReactionBar — WhatsApp-style quick reaction pill
- Debounced keyword search over build-time precomputed index
- Category tab bar with sticky headers + scroll-position highlighting
- Full theming (light/dark/auto + theme object), i18n-ready strings
- maxEmojiVersion: 'auto' detects device support from OS version (Emoji 17.0 dataset)
- Plays nicely inside @gorhom/bottom-sheet via injectable ScrollComponent
- Chat composer pattern: picker replaces keyboard, input bar stays above

### Native Row Performance (release build, 2021 Android)
| Metric | JS rows | Native rows |
|--------|---------|-------------|
| Scroll JS FPS (avg/min) | 11.9 / 10.7 | 58.4 / 58.2 (~5x faster) |
| Full-list jump paint | 349/382ms | 312/332ms (~10% faster) |

Each row drawn as ONE native view (UIKit iOS, canvas text Android) instead of one Text per emoji — drops ~180 views to ~20.

### Props
onEmojiSelected (required), numColumns (8), categories, maxEmojiVersion ('auto'), colorScheme ('auto'), theme, strings, enableSearch, searchDebounceMs (250), enableRecentlyUsed, recentlyUsedLimit (16), storage (in-memory default), enableSkinToneSelector, skinTone, ScrollComponent, categoryBarPosition ('top'|'bottom'|'hidden'), excludeEmojis, style, contentContainerStyle

### EmojiSelection payload
{ emoji, unicode, name, category, skinTone, baseEmoji }

### Related Sources
- src-2026-06-18-001 (react-native-call-audio by same author)
- src-2026-06-18-008 (react-native-collapsible-tab by same author)
- src-2026-07-08-006 (react-native-emoji-popup — native wrappers)
- src-2026-07-08-007 (rn-emoji-keyboard — pure TS, modal-based)
