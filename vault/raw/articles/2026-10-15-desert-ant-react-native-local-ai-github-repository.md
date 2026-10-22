# Desert Ant React Native local AI SDK repository

Captured: 2026-10-15
Source URL: https://github.com/react-native-feel/desert-ant-local-ai-sdks
Inspected branch: `main`
Latest commit shown: `a69ed7b`, dated 2026-10-09
Repository state shown: 4 stars, 1 fork, 23 commits, 1 branch, no tags, no published GitHub releases, and no published GitHub packages.

## Repository claims and model table

The README describes Expo modules over Desert Ant on-device models. It says iOS uses Core ML, Android uses LiteRT, and there is no server or API key. It calls the SDK free and open source and lists MIT for the SDK code.

The README table lists these 12 packages and weight sizes:

| Model | Approximate weights | iOS | Android |
| --- | ---: | --- | --- |
| Clear | 9 MB | 18+ | listed |
| Ear | 9 MB | 17+ | listed |
| Voz | 490 MB | 17+ | not listed |
| Uhm | 45 MB | 17+ | not listed |
| Align | 0.7 MB plus Apple locale | 26+ | not listed |
| Clips | 288 MB | 18+ | not listed |
| Title | 280 MB | download only | not listed |
| Gist | 74 MB | 17+ | listed |
| Redact | 12 MB | 17+ | listed |
| Tongue | 2 MB bundled | blocked | listed |
| Emo | 5 MB | 17+ | listed |
| Shapes | 0.2 MB | 17+ | listed |

The README says the Title weights download, but generation throws `ERR_UNSUPPORTED_PLATFORM` because its SwiftPM package trait cannot be enabled through CocoaPods. It says the upstream Desert Ant Core 3.1.0 declares Tongue but does not export its Swift product.

## Install and platform notes

The README says these packages are not on npm yet. It recommends a workspace, Git dependency, or local path. These are native modules, so Expo Go is not supported; it calls for a development build. Stated requirements include Expo SDK 57+, React Native 0.75+, Xcode 26, iOS 17+ (18+ with Clear or Clips), and Android API 24+.

The architecture section says Android Kotlin modules are written but not yet compiled or run on a device. This qualifies the Android checkmarks in the model table.

## License statement

The README says the SDK code is MIT. It says the models use the Desert Ant Labs Source-Available License 1.0: free below 100,000 monthly active devices per platform per model, attribution required, and no training competing models on the models or their outputs.

## Evidence limits

These are repository statements. I did not install, build, or test the packages. The announcement and product page are recorded separately as [src-2026-10-15-007] and [src-2026-10-15-009].
