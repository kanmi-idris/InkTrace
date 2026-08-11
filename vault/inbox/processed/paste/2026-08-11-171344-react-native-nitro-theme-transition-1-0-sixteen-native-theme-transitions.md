---
title: "react-native-nitro-theme-transition 1.0: Sixteen Native Theme Transitions"
kind: "paste"
captured_at: "2026-08-11 17:13"
tags: ["react-native", "nitro-modules", "theme-transition", "ios", "android", "native-animation", "gpu", "open-source"]
source_url: "https://saleh2001k.github.io/react-native-nitro-theme-transition/"
status: "inbox"
---

# react-native-nitro-theme-transition 1.0: Sixteen Native Theme Transitions

## Source overview
react-native-nitro-theme-transition is a React Native package for native, GPU-driven theme-change transitions. Version 1.0.0 is published on npm. The package uses the MIT license.

The package does not use Skia, Reanimated, or a JavaScript animation library. On iOS it uses Core Animation. On Android it uses platform animators. The site says the animation runs on the operating-system render thread, so JavaScript thread load should not drop transition frames.

## Sixteen effects
The package documents these sixteen transition kinds:
- fade
- circularReveal
- circularRevealInverse
- iris
- slide
- split
- barnDoor
- blinds
- blur
- liquidGlass
- zoom
- pixlated
- dissolve
- stripes
- ripple
- shatter

The effects fall into four families:
- Shape masks: circularReveal, circularRevealInverse, iris.
- Straight boundaries: slide, split, barnDoor, blinds.
- Mask ladders: dissolve, stripes, ripple, shatter.
- Whole-layer effects: fade, zoom, blur, liquidGlass, pixlated.

The liquidGlass effect requires iOS 26 or later and falls back to blur elsewhere.

## API and usage
Install the package with react-native-nitro-theme-transition and react-native-nitro-modules. Rebuild the native application after installation.

The API is withThemeTransition(callback, options). The callback must be synchronous. The callback can change a theme, locale or RTL setting, font size, or density. The package snapshots the current screen, runs the callback underneath the snapshot, and animates the snapshot away.

The origin option accepts the touch event pageX and pageY. Native code translates coordinates for modals and form sheets. The package handles changes between sheet detents without JavaScript coordinate correction.

Options include kind, durationMs, origin, direction, angleDeg, shape, blurStyle, bands, and settleFrames. The package exports THEME_TRANSITION_KINDS, THEME_TRANSITION_DIRECTIONS, and isThemeTransitionAvailable().

If the native module is missing, capture fails, or the platform is web, the callback still runs. The theme change becomes instant instead of failing. The default settleFrames value is 2. React-driven theme changes may need a larger value.

## Native implementation
The site describes these implementations:
- iOS fade uses UIViewPropertyAnimator. Reveals use CAShapeLayer masks and CABasicAnimation. Blur uses UIVisualEffectView. LiquidGlass uses UIGlassEffect.
- Android fade uses ViewPropertyAnimator. Circular reveals use ViewAnimationUtils. Other masks use Canvas clipping. Blur uses RenderEffect on API 31 or later.
- The package uses GPU-side screen copies. It does not read pixels back to the CPU, encode them, or decode them.
- Android capture rasterizes a RenderNode through HardwareRenderer. Below API 29 it falls back to a software Canvas.
- Concurrent transitions can run together. The implementation allows up to six full-screen snapshots at once and drops the oldest after the limit.

## Modal and form-sheet support
The documentation states that iOS captures the scene windows, including React Native modals, router modals, form sheets, and alerts with dimming. Android Modal support is described as best-effort and should be confirmed for the application's React Native version. System windows such as keyboards, share sheets, autofill, and alerts are not included.

## Related local evidence
InkTrace already contains src-2026-04-25-004 about an Expo circular-reveal transition. This source records the later package release with sixteen effects and native Nitro Module implementation.

## User-provided release note
react-native-nitro-theme-transition is at 1.0.

Thanks for the 100+ stars. A lot of these effects exist because someone asked for them.

5 effects became 16. Transitions inside modals and form sheets work properly now.

#ReactNative #NitroModules
https://t.co/Y1OsEU0mYg

## Source links
- Release site: https://saleh2001k.github.io/react-native-nitro-theme-transition/
- GitHub: https://github.com/saleh2001k/react-native-nitro-theme-transition
- npm package: https://www.npmjs.com/package/react-native-nitro-theme-transition
- npm registry metadata verified version 1.0.0 and MIT license: https://registry.npmjs.org/react-native-nitro-theme-transition/latest
