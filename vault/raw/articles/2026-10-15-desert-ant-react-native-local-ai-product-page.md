# Desert Ant React Native local AI product page

Captured: 2026-10-15
Source URL: https://reactnativefeel.com/local-ai

## Product-page claims

The page presents a React Native SDK suite of local AI models. It says eight models run end to end, with no server, device key, or per-minute bill. It says three additional models ship in the repository but have only been built and bound, not driven end to end: Voz, Tongue, and Align.

The page's eight featured models are Clear, Clips, Uhm, Emo, Ear, Gist, Redact, and Shapes. It lists Clear and Ear at about 9 MB each and gives platform and model-size details for the others. It says the models can be loaded and run on device, with downloadable weights and progress reporting.

The “Where it stands” section says Clear ran end to end on an iPhone 16 with iOS 26.3.1 at 16x realtime. It describes several other tests as simulator tests. It says Voz builds and binds but has not completed a full transcription on hardware. It says Tongue's Android half works, while its Apple half is disabled because the upstream Swift package does not export the product.

The page's “What's inside” section says there are eleven model packages: Clear, Voz, Clips, Uhm, Emo, Ear, Gist, Redact, Shapes, Tongue, and Align. It does not list Title. The GitHub README lists Title as an additional twelfth package and says its generation is unsupported. See [src-2026-10-15-008].

The page calls the suite free and open source, MIT-licensed. The repository clarifies that the SDK code is MIT, while the model weights use a separate source-available license. This is a scope distinction, not evidence that the model weights are MIT-licensed.

## Platform and maturity claims

The page lists Expo SDK 57+, React Native 0.75+, Xcode 26, iOS 17+ (18+ for Clear or Clips), and Android API 24+. It says Expo Go is unsupported because these are native modules.

The page presents Android support for some models. The GitHub README says the Kotlin wrappers have not yet been compiled or run on a device. I did not verify Android behavior.

## Evidence limits

This is a snapshot of the product page, not an independent benchmark. I did not install or test any model. The announcement is [src-2026-10-15-007]; the repository README is [src-2026-10-15-008].
