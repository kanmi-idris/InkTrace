# react-native-nano-icons GitHub README snapshot

Captured: 2026-10-12
Repository: https://github.com/software-mansion-labs/react-native-nano-icons
Evidence inspected: current GitHub README article. This supplements the earlier capture `src-2026-04-15-001`, which used user-supplied repository text rather than a direct fetch.

## Current description and rendering model

- The README presents Nano Icons as a React Native and Expo library for rendering repeated small icons.
- It says SVG files are converted into optimized TrueType fonts and glyph maps at build time.
- It says native platforms render glyph stacks through text rendering, while web uses inline spans and Expo Go uses stacked Text elements.
- These are publisher descriptions. I did not inspect the implementation or test performance.

## Current platform support listed by the README

- React Native 0.81 or newer, New Architecture only.
- iOS 15.1 or newer.
- Android API 24 or newer.
- Web.
- Expo Go.
- tvOS 15.1 or newer.

The earlier April capture listed React Native 0.74 or newer and did not list tvOS. The README inspected on 2026-10-12 lists React Native 0.81 or newer and tvOS 15.1 or newer. Treat the April minimum as historical, not current.

## Current integration and added capabilities

- Expo development builds use a config plugin during prebuild. The README says that this generates the font and glyph map and links the font into native projects.
- Bare React Native, React Native Web, and Expo Go use a `.nanoicons.json` file and `npx react-native-nano-icons`.
- A Metro plugin can rebuild fonts during development. The README says it does not link fonts into release builds; it instructs users to regenerate fonts before release builds.
- Native tab-bar symbols can be generated for iOS symbol sets and Android VectorDrawables.
- Dynamic font linking is documented for OTA-update workflows. The README distinguishes static fonts bundled into the native app from dynamic fonts delivered at runtime.
- Font-integrity APIs report missing or mismatched fonts. The README says affected icons render blank until the required font is available.
- Multicolor icons are represented as layered glyphs. The README recommends visually checking icons.

## Performance claims and limitations

- The README describes a benchmark that measures average time to render 1,000 different multicolor icons in an iOS release-build ScrollView.
- A chart is embedded. Full methodology, device details, and reproduction steps are linked in `BENCHMARKS.md`; I did not inspect that file or independently reproduce the benchmark.
- The README lists unsupported SVG elements: `filter`, `mask`, `text`, `style`, `foreignObject`, `a`, and `switch`. Embedded raster images are also unsupported. Only top-level `.svg` files are read.

## License and evidence limits

- The README states that the library is MIT licensed.
- The README lists `npm install react-native-nano-icons` and other setup commands. I did not run any command, install the package, or audit the code.
- The performance and compatibility statements are repository claims, not independent test results.
