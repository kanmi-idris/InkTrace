---
title: "React Native Barcode Scanning in 2026: Data Scanner, VisionCamera, and Expo"
kind: "paste"
captured_at: "2026-08-11 17:42"
tags: ["react-native", "barcode-scanner", "qr-code", "visioncamera", "nitro-modules", "expo", "ml-kit", "avfoundation", "visionkit", "zxing", "mobile-development"]
source_url: "https://margelo.com/blog/react-native-barcode-scanner"
status: "inbox"
---

# React Native Barcode Scanning in 2026: Data Scanner, VisionCamera, and Expo

## Source overview
Margelo's React Native barcode-scanning guide compares the main approaches for QR codes and barcodes in 2026. The central decision is how much control the app needs: one-shot scanning, a custom in-app camera, Expo Go compatibility, image scanning, or industrial-grade decoding.

The article author created react-native-vision-camera and react-native-data-scanner. Existing local InkTrace records also cover related React Native Nitro and VisionCamera work.

## Decision guide
- One QR code or barcode with no custom UI: react-native-data-scanner.
- In-app camera view, custom overlays, multiple codes, or validation before accepting: react-native-vision-camera with the barcode scanner plugin.
- iOS-only with the smallest footprint: VisionCamera Object Output.
- Expo-first or Expo Go: expo-camera.
- Damaged or dense codes at industrial scale: evaluate a commercial SDK such as Scandit or Scanbot.

## Native engines
The article maps the wrapper libraries to four native engines:
- Google ML Kit: VisionCamera Barcode Scanner on iOS and Android, expo-camera on Android, and react-native-data-scanner on Android.
- AVFoundation AVCaptureMetadataOutput: VisionCamera Object Output and expo-camera on iOS for most formats.
- VisionKit DataScannerViewController: react-native-data-scanner on iOS 16+ and expo-camera launchScanner on iOS 16+.
- ZXing: bundled by expo-camera on iOS for PDF417, Code 39, and Codabar.

Decoder behavior belongs to the underlying engine. The article highlights Apple's UPC-A to EAN-13 reporting behavior on iOS as an example.

## One-shot scanning with react-native-data-scanner
The package exposes DataScanner.scanBarcode(). The native platform scanner UI handles the viewfinder, guidance, highlighting, and zoom. The Promise returns one barcode or rejects on cancellation, missing iOS camera usage text, or unavailable scanning.

The package needs react-native-nitro-modules and a native rebuild. It does not need camera permission on Android because Google code scanner runs in a separate Google Play services activity. iOS still requires NSCameraUsageDescription.

Trade-offs:
- The UI is controlled by the operating system.
- One code is returned per scan.
- There is no pre-validation before the scanner closes.
- iOS requires runtime iOS 16 or later.
- Android requires Google Play services and may download the scanner module on first use.
- Expo Go is not supported because the package contains native code.

## Custom camera scanning with VisionCamera
VisionCamera provides the in-app camera session, preview, lenses, focus, zoom, FPS, photo and video capture, outputs, and coordinate conversion. The decoder is replaceable.

The article describes Native Frame Processor Plugins and custom native CameraOutput implementations. These adapters can connect ML Kit, ZXing, in-house C++ decoders, or commercial SDKs while keeping the camera screen and controls.

The react-native-vision-camera-barcode-scanner package runs ML Kit on both iOS and Android. The CodeScanner view supports format selection, active state, callbacks, and errors. VisionCamera needs camera permission on both platforms.

The article notes that the ML Kit iOS pod requires an iOS 15.5+ deployment target and has no Apple Silicon Simulator slice. Real-device testing is recommended.

## iOS Object Output
VisionCamera V5 Object Output wraps AVFoundation AVCaptureMetadataOutput. It adds no third-party dependencies or ML model and can detect barcodes, faces, bodies, and pets. It is iOS-only.

A lean cross-platform design can use Object Output on iOS and ML Kit on Android. React Native platform-specific files can keep the screen and hook API shared while excluding the ML Kit package from the iOS bundle.

## Expo options
Expo Go projects should use expo-camera CameraView. VisionCamera and react-native-data-scanner require a development build.

expo-camera also provides launchScanner(), based on VisionKit on iOS 16+ and Google code scanner on Android. It works in Expo Go.

For image scanning, VisionCamera can scan still images with scanCodesInImageAsync() and react-native-nitro-image. Expo provides Camera.scanFromURLAsync(), but iOS supports only QR codes through that path.

## Format and platform caveats
The article includes a format matrix for QR, EAN, Code 128, Code 39, Code 93, PDF417, Data Matrix, Aztec, UPC, ITF, and Codabar. Format string names differ across libraries.

Important caveats:
- iOS APIs may report UPC-A as EAN-13. Normalize in JavaScript only when appropriate. ML Kit avoids the cross-platform mismatch.
- Very dense or damaged PDF417 codes can fail in free decoders. Full-resolution scanning can help.
- Request only the formats needed. Scanning all formats can reduce performance.
- Live camera scanners can report the same code on many frames. Debounce in JavaScript or disable the scanner after accepting a code.

## Commercial SDK guidance
The article recommends starting with free options. Commercial SDKs may be justified for high-throughput warehouse scanning, damaged or poorly printed codes, long-range scanning, dense driver's-license PDF417, or multi-code AR overlays.

Commercial performance claims are vendor-published and may lack public methodology or third-party verification. Pricing is often quote-only and licenses are commonly annual. A commercial decoder can still sit behind VisionCamera's native frame or camera-output extension points.

## User-provided source
https://margelo.com/blog/react-native-barcode-scanner
