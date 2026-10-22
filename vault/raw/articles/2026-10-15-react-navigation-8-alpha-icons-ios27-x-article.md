# React Navigation 8 alpha: icon and iOS 27 updates

Captured: 2026-10-15
Source URL: https://x.com/reactnavigation/status/2110358651449868302
Author: React Navigation (@reactnavigation)
Published: 2026-10-14, 2:14 PM (X page timestamp)

## Article text

### Icons and iOS 27 updates in React Navigation 8!

A new version of React Navigation 8 alpha is here. We have a lot of updates for icons, as well as fixes and improvements for iOS 27.

### Support for custom SF Symbols

You can now use custom SF Symbols from app's asset catalog with `type: 'sfSymbol'` in bottom tab navigator, or with the `SFSymbol` component. This works with TypeScript too.

```typescript
declare module '@react-navigation/native' {
  interface SFSymbolNames {
    'my.custom.symbol': true;
  }
}
```

The new `renderingMode` property lets you customize whether to use monochrome or multicolor icons, and native tab bar icons now support disabling tint on Android. Check out our [icon docs](https://reactnavigation.org/docs/8.x/icons/) for more details. This also lets you use SVGs in the native tab bar using [React Native Nano Icons](https://github.com/software-mansion-labs/react-native-nano-icons).

The article embeds an October 12 post by Stanisław Białecki (@stachbial):

> 2/3 🧭 Native tab bars can't render a React component like `<Icon>`. Nano Icons 1.0 forges native tab bar icons from the same SVGs: SF Symbol `.symbolsets` in the iOS asset catalog and VectorDrawables on Android. Liquid Glass and Material tabs from one SVG folder. Available with [Show more].

All credits to @stachbial for the work.

### Filled Material Symbols and RTL support

Material Symbols now support the filled icons and are automatically mirrored in RTL layouts.

The article says the fonts were optimized. Its table reports:

| Variant | Before | Before, compressed | After | After, compressed |
| --- | ---: | ---: | ---: | ---: |
| Outlined | 962 KB | 428 KB | 764 KB | 347 KB |
| Rounded | 1206 KB | 503 KB | 1006 KB | 422 KB |
| Sharp | 862 KB | 406 KB | 664 KB | 324 KB |

### Support for prominent tab on iOS 27

The native Bottom Tab Navigator now supports `tabBarRole`. Set it to `prominent` for prominent styling, or use `search` with `tabBarSearchAutoFocus` to show a separate search tab on iOS 26 and above. The article credits the React Native Screens team.

### Other options

The article lists these new Bottom Tabs options:

- `tabBarLabelPositionAdjustment`
- `tabBarIconSize`
- `tabBarActiveIndicatorWidth`
- `tabBarActiveIndicatorHeight`
- `tabBarSidebarPreferredPlacement`
- `tabBarVisibilityAnimationEnabled`

It lists these Native Stack options:

- `visibilityPriority` for header items
- `description` for submenu items in headers

The article also embeds a React Native Screens post about release 4.30.0. It says Stack v4 supports iOS 27 and iPhone Duo, opaque headers work on iOS 26+, and tabs gain `prominentScreenKey`.

## Evidence notes

The article contains video embeds. I recorded the article text and table. I did not download or inspect the video files. The related official documentation and changelog snapshots are [src-2026-10-15-013], [src-2026-10-15-014], [src-2026-10-15-015], and [src-2026-10-15-016].
