# react-native-nano-icons

Source ID: src-2026-04-15-001
Canonical URL: https://github.com/software-mansion-labs/react-native-nano-icons
Resource Type: repository
Host: github.com
Mention Count: 1
Original URLs: https://github.com/software-mansion-labs/react-native-nano-icons

## Page Description
High-performance icon rendering for React Native and Expo. The library converts folders of SVGs into optimized icon fonts at build time and renders icons as native glyph stacks with typed icon names.

## Captured Text Excerpt
`react-native-nano-icons` is positioned as a high-performance icon-rendering library for React Native and Expo, especially for screens that render many copies of the same small symbols such as list rows, tab bars, inline badges, and buttons.

The supplied project description contrasts it with other common approaches:
- `react-native-svg` is described as flexible but relatively expensive for icons because each SVG mounts a fuller React subtree.
- `expo-image` and similar image components are described as better suited to richer graphics than repeated tiny symbols.
- `react-native-vector-icons` is described as fast for bundled icon packs, but less convenient when teams want custom SVG-based icon sets.

The stated implementation model is:
- At build time, SVG files are converted into an optimized icon font plus a glyph map.
- At runtime, each icon renders as a native text glyph stack instead of a React-managed SVG subtree.
- Multicolor icons are supported by splitting distinct fill colors into separate glyph layers and stacking them at render time.

The supplied setup notes describe two integration paths:
- Expo development builds can use an Expo config plugin in `app.json` to generate fonts and glyph maps during prebuild.
- Bare React Native, React Native Web, and Expo Go can use a `.nanoicons.json` config plus a CLI command to run the same generation pipeline.

The supplied platform notes list support for React Native 0.74 or newer on the New Architecture, iOS 15.1 or newer, Android API 24 or newer, web, and Expo Go, with Expo Go using a regular `Text` fallback and development builds switching to the native implementation.
