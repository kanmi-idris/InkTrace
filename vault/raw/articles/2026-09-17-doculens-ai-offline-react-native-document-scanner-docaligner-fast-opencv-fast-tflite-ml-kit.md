---
title: "DocuLens AI: Offline React Native Document Scanner (DocAligner + Fast OpenCV + Fast TFLite + ML Kit)"
kind: "paste"
captured_at: "2026-09-17 04:51"
tags: ["react-native", "document-scanner", "ocr", "visioncamera", "fast-tflite", "fast-opencv", "docaligner", "ml-kit", "android", "expo"]
source_url: "https://play.google.com/store/apps/details?id=com.anwersolangi.doculensai"
status: "inbox"
---

# DocuLens AI: Offline React Native Document Scanner (DocAligner + Fast OpenCV + Fast TFLite + ML Kit)

## Source overview
DocuLens AI is a personal-project Android document-scanner app by developer Anwer Solangi, announced in a Reddit-style post as a privacy-focused, fully on-device alternative to apps like CamScanner: no account, no cloud upload, all processing (corner detection, perspective correction, OCR) done locally. The Play Store listing was confirmed directly: package `com.anwersolangi.doculensai`, titled 'DocuLens AI: PDF Scanner & OCR,' rated 3+, contains ads and in-app purchases, showing 1+ downloads at time of this capture, with a v1.0 changelog dated 2026-08-27, consistent with this being a very new, low-traction release rather than an established app.

## Documented feature set (per the Play Store listing)
Automatic edge detection with hands-free auto-capture, instant perspective correction, a multi-page scan mode, gallery-import-to-PDF conversion, on-device OCR for extracting and searching text inside scans, 10 one-tap visual filters (Original, Lighten, Grayscale, Enhance, Magic, Vivid, Warm, Cool, Black & White, Ink), manual brightness/contrast/crop/rotate/flip editing, export to PDF/JPG/PNG/TXT, direct Android printing, and full-text search across document titles, custom tags, and OCR'd text with basic categorization (invoices, receipts, IDs, contracts, personal notes). The app is free with daily scan limits and ads, with a paid Pro tier removing those limits and ads and adding premium filters and batch export.

## Technical stack, independently verified
The post's described stack for the live corner-detection and processing pipeline checks out against real, independently verifiable projects:
- react-native-vision-camera and react-native-fast-tflite (by Marc Rousavy / Margelo, MIT licensed; react-native-fast-tflite is a high-performance TensorFlow Lite binding for React Native built on Nitro Modules, GitHub-confirmed at 1,223 stars) are used to run a live document-corner detection model inside VisionCamera frame-processor worklets.
- The corner-detection model itself, DocAligner (DocsaidLab, Apache-2.0 licensed, GitHub-confirmed at 109 stars), is a real published model specifically designed to predict the four corners of a document in an image using a heatmap-regression approach (trained in PyTorch, exported to ONNX for cross-platform inference), rather than a simple edge-detection heuristic; its own documentation describes deliberately introducing spatial 'fuzziness' into corner predictions to avoid a documented amplification-error problem that occurs when corner coordinates are naively upscaled from a downscaled working image back to the original resolution.
- react-native-fast-opencv (by lukaszkurantdev, MIT licensed, GitHub-confirmed at 253 stars) is a real JSI-based OpenCV C++ binding for React Native, explicitly built for easy integration with VisionCamera and credited by its own README as inspired by and crediting Marc Rousavy's VisionCamera, WorkletsCore, and FastTFLite libraries — consistent with the post's description of using it for perspective-warping the detected document region.
- Google ML Kit is used for the on-device OCR/text-recognition step powering full-text search across scanned documents.
- The app is additionally built on Expo SDK 57, Reanimated 4, Skia (used for a live camera overlay during scanning), and SQLite (used, per the app's own feature set, for local document/text indexing and search).

## Privacy claim versus the Play Store's own data-safety disclosure
The listing's marketing language states the app is '100% PRIVATE & OFFLINE' with 'no cloud uploads, no forced accounts, no tracking,' and separately clarifies that the only network activity is ad delivery and optional store purchases, never document content. However, the Play Store's own data-safety section for this listing (a Google-mandated developer disclosure, not marketing copy) states the app may collect financial info, app activity, and device or other IDs, with data encrypted in transit but explicitly not deletable. This is a meaningful nuance the marketing copy does not surface: 'no cloud uploads of your documents' is a narrower and more defensible claim than 'no data collection at all,' since the disclosed data types (likely tied to the ad SDK and in-app purchase billing) are still collected and, per the listing itself, cannot be deleted by the user. This record notes the distinction rather than treating the marketing framing as the full picture.

## Evidence boundary
The Play Store listing (feature description, data-safety section, download count, and update history) was fetched and read directly for this capture. Each named open-source dependency (react-native-vision-camera, react-native-fast-tflite, react-native-fast-opencv, DocAligner) was independently checked against its own GitHub repository to confirm it is a real project matching the described purpose, rather than taking the post's technical description at face value. The app itself was not installed, no scan was performed, and no in-app purchase or ad interaction was tested during this capture; the '10 one-tap filters' and specific feature list are the developer's own store-listing claims.

## Sources
- https://play.google.com/store/apps/details?id=com.anwersolangi.doculensai
- https://github.com/mrousavy/react-native-fast-tflite
- https://github.com/lukaszkurantdev/react-native-fast-opencv
- https://github.com/DocsaidLab/DocAligner
- https://github.com/mrousavy/react-native-vision-camera
