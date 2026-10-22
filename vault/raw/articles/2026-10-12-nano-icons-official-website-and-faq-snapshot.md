# Nano Icons website capture

Captured: 2026-10-12
Source URL: https://nano-icons.swmansion.com/
Publisher: Software Mansion
Evidence inspected: homepage, Features, How it works, Performance, and FAQ sections. The performance section links to an official benchmark-method document, captured separately as `src-2026-10-12-017`.

## Product and installation claims

- The site presents Nano Icons as a React Native and Expo library that converts SVG files into typed, multicolor native icons rendered like text.
- The site shows `npm i react-native-nano-icons` as the install command. I did not install the package.
- It says icon fonts rebuild during development when SVGs change, without an app rebuild.
- It says custom SVGs can become iOS SF Symbols and Android VectorDrawables for native tab bars.
- It says icons align with text baselines and scale with user font size, and that file names create type-safe icon names.
- It describes static font bundling and dynamic font delivery for over-the-air updates, with a built-in integrity check for mismatched fonts and icon maps.

## Suitability and platform claims

- The FAQ recommends Nano Icons for simple design-system icons, not all SVG assets. It recommends `expo-image` for detailed vector art and `react-native-svg` when developers need path-level control or animation.
- It distinguishes Nano Icons from `react-native-vector-icons`: both use fonts, but Nano Icons generates fonts from custom SVGs, supports multicolor icons on Android, and types names from files.
- The FAQ lists iOS, Android, web, and tvOS on React Native's New Architecture. Expo and bare React Native are supported. Expo Go shows a text fallback; a development build uses native rendering.
- The site claims 2,191 Material Two-tone SVGs total 1 MB, while the generated font plus glyph map total 585 KB; it says Android compresses the font to 236 KB. This is a publisher claim and was not independently tested.

## Performance claim

- The site says it compared 1,000 multicolor icons in a ScrollView and measured the UI, JavaScript, and main-thread hang metrics.
- For the displayed UI-thread result, it claims Nano Icons is 5.9 times lower than `expo-image`.
- The site states the test used iPhone 15 Pro, iOS 18, a release build, New Architecture, React Native 0.84, 20 runs, and Xcode Instruments.
- See `src-2026-10-12-017` for the linked result table and setup. I did not reproduce the benchmark.

## Evidence limits

This capture records the publisher's public website and FAQ statements. I did not install the library, test features, inspect code, or reproduce performance and file-size claims.
