---
title: "Top Welcome Screens: React Native Expo Onboarding UI Studies"
kind: "paste"
captured_at: "2026-08-09 20:32"
tags: ["github", "react-native", "expo", "uiux", "onboarding", "motion-design", "ios", "typescript", "mobile-ui"]
source_url: "https://github.com/Appllama/top-welcome-screens"
status: "inbox"
---

# Top Welcome Screens: React Native Expo Onboarding UI Studies

## Repository overview
Top Welcome Screens is an open-source collection of ten animated splash, loading, welcome, and onboarding UI studies. It is rebuilt in React Native and Expo and is intended for education, UI research, and technical demonstration.

The repository is an independent and unofficial Appllama project. It is not affiliated with or endorsed by the referenced companies.

## Technology and scope
- Expo SDK 57.
- React Native 0.86.
- TypeScript.
- React Native Reanimated.
- Expo Router demo app.
- Ten independently importable full-height components.
- Responsive scaling, reduced-motion handling, accessible actions, and deterministic final-state mode.
- Typed semantic action IDs for visible actions.

## Ten screen studies
The repository lists these screen IDs and components:
- Duolingo-inspired: duolingo, DuolingoWelcome, entrance 2.667 seconds.
- Strava-inspired: strava, StravaWelcome, entrance 6.600 seconds.
- MyFitnessPal-inspired: myfitnesspal, MyFitnessPalWelcome, entrance 8.867 seconds.
- Perplexity-inspired: perplexity, PerplexityWelcome, final state only.
- Yazio-inspired: yazio, YazioWelcome, entrance 1.733 seconds.
- onX Hunt-inspired: onx-hunt, OnxHuntWelcome, entrance 1.467 seconds.
- Speak & Learn-inspired: speak-learn, SpeakLearnWelcome, entrance 4.940 seconds.
- Hallow-inspired: hallow, HallowWelcome, entrance 4.500 seconds.
- SCRL-inspired: scrl, ScrlWelcome, entrance 1.999 seconds.
- Speak: Language Learning-inspired: speak-language, SpeakLanguageWelcome, entrance 5.070 seconds.

The Perplexity study has no entrance animation because the research set contained only a final-state reference. The implementation avoids inventing unsupported motion.

## Agent prompts and integration
Each screen has a copyable prompt for Codex, Claude Code, Cursor, or another coding agent. The prompts tell the agent which files, assets, fonts, motion specifications, and semantic actions to inspect.

A developer can import a named component such as StravaWelcome, use a typed WelcomeScreen registry, or use the optional Zustand-powered WelcomeGallery. The source-distributed package entry is src/index.ts and can be installed through the GitHub package reference.

Shared props include autoplay, replayKey, onActionPress, onPrimaryPress, onSecondaryPress, and onClosePress. onActionPress receives typed semantic IDs and takes precedence over the backward-compatible handlers.

## Run locally
Requirements include Node.js 22.13 or newer, Xcode for iOS, or Android Studio for Android.

Typical setup:
- git clone the repository.
- npm ci.
- npm run ios.

Direct routes include /duolingo, /strava, /myfitnesspal, /perplexity, /yazio, /onx-hunt, /speak-learn, /hallow, /scrl, and /speak-language. motion=0 renders the deterministic final state. A replay query value restarts a mounted route.

## Motion and accessibility
- Layouts use a 640 by 1385 reference canvas and a shared responsive transform.
- Motion timings are documented in docs/MOTION_SPEC.md.
- Reference-like iPhone ratios use full-bleed cover. Other portrait ratios use uniform contain.
- Reduced-motion preference renders the final state immediately.
- Buttons remain inert and absent from the accessibility tree until their visible surface appears.
- Fonts and image modules are preloaded before the animated layer is shown.

The README distinguishes the native Expo splash screen, which appears before JavaScript is ready, from the animated React Native welcome screen, which appears after the React tree can render.

## Verification
npm run verify runs TypeScript type checking, Expo ESLint, and a production static web export. The same checks run in GitHub Actions. Motion was calibrated in an iPhone simulator against 30 fps research captures.

## Licensing and intellectual-property restrictions
Original project code is under the GNU General Public License v3.0. The license does not grant permission to use third-party trademarks, copyrighted material, protected trade dress, or other proprietary material referenced by the studies.

The repository instructs users not to ship these reference implementations unchanged. Public or commercial adaptations must replace third-party names, logos, icons, mascots, illustrations, images, phrases, colours, typography, spacing, composition, and motion language, remove any implication of affiliation, and obtain required permissions or legal clearance. Third-party research clips and final-state stills are not redistributed. Asset provenance is documented in docs/ASSET_PROVENANCE.md.
