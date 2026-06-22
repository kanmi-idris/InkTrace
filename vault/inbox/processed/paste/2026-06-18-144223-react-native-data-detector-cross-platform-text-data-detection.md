---
title: react-native-data-detector - Cross-Platform Text Data Detection
kind: paste
captured_at: 2026-06-18 14:42
tags: [react-native, expo, ios, android, text-processing, nlp, data-detection, ml-kit]
source_url: 
status: inbox
---

# react-native-data-detector - Cross-Platform Text Data Detection

react-native-data-detector - Cross-Platform Text Data Detection for React Native

## Overview
Cross-platform text data detection for React Native. Uses NSDataDetector on iOS and ML Kit Entity Extraction on Android to detect phone numbers, URLs, emails, dates, and addresses — returning structured results to JavaScript. Built with Expo Modules API.

## Repository
- GitHub: https://github.com/pablogdcr/react-native-data-detector
- npm: react-native-data-detector
- License: MIT

## Requirements
- iOS 15.1+
- Android API 26+ (minSdk) — required by ML Kit Entity Extraction
- Expo SDK 50+ or bare React Native with expo-modules-core

## Features
- Phone numbers detection and extraction
- URL/web link detection
- Email address detection
- Address detection with parsed components (iOS structured, Android raw)
- Date/time detection with ISO 8601 output
- Native accuracy (NSDataDetector / ML Kit, not regex)
- React hooks: useDataDetector (imperative) and useDetectedEntities (reactive, as-you-type)
- 15 ML Kit language models on Android
- Expo Modules API

## Install
npm install react-native-data-detector
# iOS
npx pod-install

ML Kit entity extraction model (~5.6MB per language) is downloaded at runtime on Android. Can use prepareModel() or useDataDetector hook for auto-download.

## API

### prepareModel(options?)
Pre-downloads ML Kit model for offline use. No-op on iOS (always resolves true).
- options.language: ModelLanguage (default 'en')
- Returns: Promise<boolean>

### detect(text, options?)
Detect entities in text using native APIs.
- text: string
- options.types: DetectionType[] (all types by default)
- options.language: ModelLanguage (Android only)
- Returns: Promise<DetectedEntity[]>
- DetectionType: 'phoneNumber' | 'link' | 'email' | 'address' | 'date'

### useDataDetector(options?)
React hook for imperative detection. Tracks model readiness, auto-downloads on Android.
- options.language: ModelLanguage (default 'en')
- options.autoPrepare: boolean (default true)
- Returns: { detect, prepare, status, isReady, error }

### useDetectedEntities(text, options?)
Reactive hook for as-you-type detection. Debounced and cancellation-safe.
- text: string
- options.debounceMs: number (default 300)
- options.types: DetectionType[]
- options.language: ModelLanguage
- options.enabled: boolean (default true)
- Returns: { entities, isDetecting, status, error }

### DetectedEntity
- type: DetectionType
- text: matched substring
- start: start index
- end: end index (exclusive)
- data: { phoneNumber }, { url }, { email }, { street, city, state, zip, country } (iOS), { address } (Android), { date } (ISO 8601)

## Supported Languages (15 ML Kit models, Android only)
ar (Arabic), nl (Dutch), en (English), fr (French), de (German), it (Italian), ja (Japanese), ko (Korean), pl (Polish), pt (Portuguese), ru (Russian), es (Spanish), th (Thai), tr (Turkish), zh (Chinese)

## Platform Differences
- iOS: NSDataDetector, always offline, language-agnostic, structured address parsing
- Android: ML Kit, offline after model download (~5.6MB/language), 15 selectable language models, raw address string
