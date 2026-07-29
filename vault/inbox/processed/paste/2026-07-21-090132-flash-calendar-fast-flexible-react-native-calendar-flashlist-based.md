---
title: Flash Calendar — Fast Flexible React Native Calendar (FlashList-based)
kind: paste
captured_at: 2026-07-21 09:01
tags: [react-native, calendar, date-picker, flash-list, expo, open-source, mit]
source_url: 
status: inbox
---

# Flash Calendar — Fast Flexible React Native Calendar (FlashList-based)

## Flash Calendar (React Native)

**Package**: `@marceloterreiro/flash-calendar` on npm
**GitHub**: github.com/MarceloPrado/flash-calendar (1.5k★, MIT, 122 commits)
**Author**: Marcelo Terreiro (@mprado, Staff Engineer @ Brex, São Paulo)
**Latest**: v2.0.0 (March 4, 2026)
**Monorepo**: Bun + Turbo, TypeScript (81.4%), MDX (16.3%)
**Bundle**: 18kB minified, 6kB gzipped — single 200-byte third-party dep
**Foundation**: Built on Shopify's FlashList

### Features
- iOS + Android, Expo-compatible (no native binary updates needed)
- Two components: `<Calendar />` (single month) and `<Calendar.List />` (infinite scroll list via FlashList)
- Date picker + date range picker (via `useDateRange` hook)
- Only affected dates re-render on interaction
- Localization built-in (`calendarFormatLocale`) + custom date formatting via `getCalendarDayFormat`/`getCalendarMonthFormat`/`getCalendarWeekDayFormat` (bring-your-own date library)
- Dark mode out of the box
- Bottom sheet compatible — pass `CalendarScrollComponent={BottomSheetFlashList}` or per-platform FlashList swap
- Customizable sizing: `calendarDayHeight`, `calendarMonthHeaderHeight`, `calendarRowHorizontalSpacing`, `calendarRowVerticalSpacing`, `calendarSpacing`
- Tiny footprint, zero unnecessary deps (author rewrote date-fns functions manually to achieve zero-dependency goal)

### Philosophy (per docs)
1. **Solve fewer needs better** — focused scope (infinite lists, date picker, date range picker; no agenda mode)
2. **Fast** — FlashList foundation + re-render isolation (only affected dates re-render)
3. **Tiny footprint** — won't substantially increase app bundle

### Related
- **Expo blog post** (expo.dev/blog/build-fast-flexible-calendars-in-react-native-with-flash-calendar, Jul 18 2024) — JS-rendered, full content not retrievable via webfetch. Announced Flash Calendar as the recommended RN calendar solution for Expo projects.
- Replaces/patch-improves upon `react-native-calendars` by Wix (author maintained a patch for that library for 3+ years before building his own)
