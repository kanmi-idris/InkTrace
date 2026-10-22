# React Navigation 8.x icon documentation snapshot

Captured: 2026-10-15
Source URL: https://reactnavigation.org/docs/8.x/icons/

## SF Symbols

The docs say icon objects can use `type: 'sfSymbol'` with a symbol `name`. React Navigation also exports an `SFSymbol` component.

The docs say custom SF Symbols stored in an app's asset catalog work in `SFSymbol` and icon objects. TypeScript users can extend the `SFSymbolNames` interface through module augmentation.

The documented `renderingMode` values are `monochrome`, `hierarchical`, `palette`, and `multicolor`. The docs describe `monochrome` as the default single tint and `multicolor` as the symbol's built-in multicolor scheme.

## Material Symbols

The docs say Material Symbols are not included with Android. React Navigation includes copies of the Material Symbols fonts. The app can choose variants, weights, and fills through its `package.json` configuration. The documented variants include outlined, rounded, and sharp. The docs say the `MaterialSymbol` component supports a `fill` prop.

## React Native Nano Icons

The docs describe using Nano Icons to generate native tab-bar icons from SVG files. `nativeNanoSymbol('newspaper')` returns an SF Symbol name on iOS and an image resource on Android. The docs say Android resolves the resource to a native vector drawable. The utility supports monochrome and multicolor output.

The docs say generated Nano symbol names use a prefix and are added to `SFSymbolNames` automatically.

## Evidence notes

This is a snapshot of React Navigation's public 8.x documentation. It describes publisher-supported behavior. I did not install or test React Navigation or Nano Icons.
