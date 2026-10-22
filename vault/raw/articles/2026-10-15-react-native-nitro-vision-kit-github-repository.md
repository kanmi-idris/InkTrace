# react-native-nitro-vision-kit GitHub repository snapshot

Captured: 2026-10-15
Source URL: https://github.com/sagawrr/react-native-nitro-vision-kit
Inspected branch: `main`
Latest commit shown: `7cc3a78`, dated 2026-08-22
Repository state shown: 58 stars, 0 forks, 64 commits, 11 branches, 6 tags, 6 releases, and no GitHub packages. The latest release shown was `v0.4.0` from 2026-08-05.

## README claims and API

The README describes subject cutouts, image labels, and OCR for React Native. It uses Apple Vision on iOS, Google ML Kit on Android, and Nitro Modules. It says results remain in native HybridObjects until exported or disposed.

The README lists four APIs:

- `removeBackground(path, options?)`: returns a cutout HybridObject with optional trim, PNG/JPEG export, and a mask.
- `classifyImage(path, options?)`: returns ranked labels with confidence and index.
- `readText(path, options?)`: returns OCR text in a native HybridObject.
- `analyzeImage(path, options)`: runs selected operations from one image decode.

The README says the package requires React Native 0.75+, `react-native-nitro-modules` 0.36.0+, and the New Architecture. It lists iOS 13+ overall, iOS 17+ for cutouts, iOS 18+ for OCR, and Android API 24+.

## Platform limits

The README says Android background removal requires Google Play Services and ML Kit subject segmentation, marked beta. Android image classification uses a bundled model and works offline. Android background removal and OCR download a Play Services model on first use; the page says to allow up to about two minutes online. If the model is not present, offline first use fails immediately. iOS models ship with the OS.

The README sets an image-loading cap of 4 million pixels on both platforms. It also caps Android's longest image side at 2048 pixels. It says only paths created by the application should be passed to native code.

## Install and license

The README gives `npm install react-native-nitro-vision-kit react-native-nitro-modules`, followed by `pod install` in `ios/`. It lists an MIT license.

## Evidence limits

These are repository statements. I did not install the package, build the example, or run tests. The original X post is [src-2026-07-17-003]. The npm page is captured separately as [src-2026-10-15-011].
