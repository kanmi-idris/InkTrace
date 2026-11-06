# React Native SplashMotion repository

Captured: 2026-11-05
User-shared URL: https://t.co/STQwAcSOu5
Resolved destination: https://github.com/seyedmostafahasani/react-native-splash-motion
Repository metadata: https://github.com/seyedmostafahasani/react-native-splash-motion/blob/main/package.json
NPM registry: https://registry.npmjs.org/react-native-splash-motion
Author: Mostafa Hasani

## Purpose

The README presents SplashMotion as a React Native library for animated launch screens. It accepts Lottie JSON and dotLottie files. It says native animation can run while the JavaScript bundle loads, then `hide()` can finish the loop, play an optional outro, and fade to the app. These are repository claims; no package code was installed or tested.

## Requirements and setup

The README requires the React Native New Architecture, `react-native-nitro-modules`, iOS 15 or later, or Android 7 / API 24 or later. Expo requires a development build; Expo Go cannot load the native code. The package metadata lists version 0.1.0, MIT license, and `react-native-nitro-modules` as a peer dependency at `^0.37.1`. The NPM registry lists 0.1.0 as the latest version.

The README's install command is `yarn add react-native-splash-motion react-native-nitro-modules`. Expo users must remove `expo-splash-screen`, add the config plugin, and run `npx expo prebuild --clean`. Bare React Native users run the generator and rebuild; iOS users also run `pod install`.

## Important limits

- The operating system shows a static launch screen before the app process runs. Without a supplied `--still` PNG, this first screen shows only the background color.
- Automatic first-frame extraction is on the roadmap. The developer must supply the PNG now.
- Android's system splash shows a centered 192 dp circle. The README says to keep the first-frame art inside it, or use a width near 135 dp or less.
- The README says the animation scales down to fit 90% of the screen but does not scale up. Default width is 160 points on iOS and dp on Android.
- The package replaces Expo's `expo-splash-screen`. It needs custom native code, so it does not work in Expo Go.
- The repository is at version 0.1.0. The README and demo claims were not independently tested in this capture.

## Evidence and actions

The short URL opened the public GitHub repository. I reviewed its README and package metadata. The NPM registry confirms version 0.1.0 is published. The repository declares an MIT license. I did not install the package, run its generator, or run its tests.
