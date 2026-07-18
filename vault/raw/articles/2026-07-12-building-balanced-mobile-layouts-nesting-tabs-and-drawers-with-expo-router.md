---
title: Building Balanced Mobile Layouts: Nesting Tabs and Drawers with Expo Router
kind: paste
captured_at: 2026-07-12 20:56
tags: [expo, expo-router, navigation, bottom-tabs, drawer, react-native, file-system-routing, theming]
source_url: 
status: inbox
---

# Building Balanced Mobile Layouts: Nesting Tabs and Drawers with Expo Router

## Nesting Tabs and Drawers with Expo Router

Source: https://expo.dev/blog/nesting-tabs-and-drawers-with-expo
Author: Maazscript (Maaz jr, @maazscript) — Guest Author on Expo blog

### What it covers
How to nest a drawer navigator wrapping bottom tabs using Expo Router's file-system routing. Avoids gesture conflicts and performance overhead.

### Architecture
```
app/
├── _layout.tsx            # Root: GestureHandler, SafeArea, ThemeProvider, splash
├── (drawer)/
│   ├── _layout.tsx        # Outer drawer (front overlay, 270px width, swipeEdgeWidth: 40)
│   ├── (tabs)/
│   │   ├── _layout.tsx    # Bottom tabs (4 tabs: Home, Explore, Notifications, Profile)
│   │   ├── index.tsx
│   │   ├── explore.tsx
│   │   ├── notifications.tsx
│   │   └── profile.tsx
│   └── settings.tsx       # Standalone drawer route (outside tabs)
```

### Key decisions
- **When to nest**: multi-tab workspace needing omnipresent utilities (org switching, support). Not for flat 3-5 screen apps.
- **drawerType: 'front'** — drawer overlays, doesn't push content
- **swipeEdgeWidth: 40** — avoids conflicts with horizontal carousels/swipe-to-delete
- **DrawerSceneWrapper** — wraps tab scenes for consistent transitions

### AnimatedTabIcon micro-interactions
- Scale spring on focus (1 → 1.15 → 1)
- Active dot fade + scale (Reanimated shared values, UI thread)
- Badge dot for notifications
- Ionicons with outline/filled variants

### Theme architecture
- Design tokens (palette constants → semantic theme types)
- Light + dark themes via ThemeProvider context
- Render blocking until theme is ready (eliminates flash of unstyled content)
- Synchronous token consumption across nav styles, components, layouts

### Related Source
- [[src-2026-07-12-008]] — Expo SDK 54 reference app expo_nativetab_liquidglass (the demo repo)
