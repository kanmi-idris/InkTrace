---
title: react-native-collapsible-tab - Collapsible Header Tab View
kind: paste
captured_at: 2026-06-18 19:07
tags: [react-native, reanimated, gesture-handler, tabs, collapsible-header, flashlist, legendlist, expo]
source_url: 
status: inbox
---

# react-native-collapsible-tab - Collapsible Header Tab View

react-native-collapsible-tab - Collapsible Header Tab View for React Native

## Overview
Collapsible header tab view with per-tab scroll memory, jump-free header, and adapters for FlatList, ScrollView, SectionList, FlashList v2, and LegendList. Built on react-native-reanimated, react-native-gesture-handler, and react-native-pager-view. All animation runs on UI thread. Supports Reanimated 3 and 4, old and New Architecture, Expo (including Expo Go).

## Repository
- npm: react-native-collapsible-tab (v0.1.0)
- Author: JassiSingh08 (same author as react-native-call-audio)
- GitHub: https://github.com/JassiSingh08/react-native-collapsible-tab
- License: MIT
- Weekly Downloads: 139
- Published: 2 days ago (as of June 2026)

## Key Architectural Innovation
Decouples header position from tab scroll offsets (unlike react-native-collapsible-tab-view):
- Header position is its own animated value driven only by scroll deltas of active tab
- Tab switches never move the header — no flicker, jump, or ghost blank space
- Each tab keeps its own scroll offset keyed by tab name
- Header pan gesture activates after 10px vertical movement so taps pass through to buttons

## Installation
npm install react-native-collapsible-tab
npx expo install react-native-reanimated react-native-gesture-handler react-native-pager-view

Optional: npx expo install @shopify/flash-list, npm install @legendapp/list
Requirements: reanimated >=3.6, gesture-handler >=2, pager-view >=6
iOS & Android only (no web support)

## API

### Tabs.Container
Props: renderHeader, renderTabBar (default: DefaultTabBar), minHeaderHeight, headerBackgroundColor, headerContainerStyle, containerStyle, initialTabName, lazy, renderLazyPlaceholder, revealHeaderOnScroll, snapThreshold, onIndexChange, onTabChange, pagerProps
Ref: jumpToTab, setIndex, getFocusedTab, getCurrentIndex, scrollToTop, scrollAllToTop

### Tabs.Tab
Props: name (stable identity), label (display text), lazy (per-tab), swipeEnabled
Can wrap Tabs.Tab in own component (detected by name prop)

### Scrollable Components
- Tabs.ScrollView
- Tabs.FlatList
- Tabs.SectionList
- TabFlashList (from react-native-collapsible-tab/flash-list) — FlashList v2, New Architecture only
- TabLegendList (from react-native-collapsible-tab/legend-list)

### Hooks
- useHeaderScrollY() — SharedValue px collapsed
- useCollapseProgress() — SharedValue 0..1 normalized
- useHeaderMeasurements() — { top: SharedValue, height: number }
- useCurrentTabScrollY() — raw offset of current tab
- useActiveTabScrollY() — raw offset of focused tab
- useFocusedTab() — SharedValue<string> focused tab name
- useAnimatedTabIndex() — fractional pager position
- useIsTabFocused(name) / useTabIndex() — JS-state focus

### DefaultTabBar
Accessible (tablist/tab roles), stylable: scrollable, backgroundColor, activeColor, inactiveColor, indicatorColor, style, tabStyle, labelStyle, indicatorStyle, renderLabel

## Pain Points Fixed from react-native-collapsible-tab-view
- Buttons in header blocking scrolling (fixed via pan gesture + tap pass-through)
- Blank space / ghost header on tab switch (structurally impossible)
- Non-ASCII tab names breaking sync (name is pure identity, label is display)
- Breaks on Reanimated/Expo bumps (public APIs only, v3/v4 compatible)
- lazy=false ignored (honest default)
- Jumping to far tab mounting intermediates (only destination mounts)
- onTabChange for intermediates (fires once for settled destination)
- snapThreshold freezing on New Arch (plain shared-value animation)
- FlashList header collapse issues (dedicated v2 adapter)
- Dynamic tabs resetting scroll (offsets keyed by name survive add/remove)
- Reading shared values during render (never done)

## Design Notes
- Scrolling down collapses header; scrolling up keeps collapsed until content top reaches it
- revealHeaderOnScroll: any upward delta expands immediately
- Header needs solid headerBackgroundColor for per-tab scroll memory
- Sticky section headers stick to real viewport top
- Pinned content belongs in tab bar, not header
- iOS offsets go negative on overscroll — clamp both ends
- Pull-to-refresh: Android use native RefreshControl with progressViewOffset; iOS use custom spinner driven by scrollY
