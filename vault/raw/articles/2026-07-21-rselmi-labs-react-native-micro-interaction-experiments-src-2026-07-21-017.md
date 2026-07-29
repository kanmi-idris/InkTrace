Source: https://rselmi.com/lab/
Title: RSLab — React Native Micro-Interaction Experiments by Rayan Selmi
Author: Rayan Selmi
Retrieved: 2026-07-21

---

Rayan Selmi's lab of open-source React Native micro-interaction experiments. Stack: Expo, Reanimated 4, Skia, Gesture Handler, NativeWind.

## Card Expand — App Store Card Transition
- Shared element transition rebuilt from scratch
- Uses measureInWindow to capture card position, then interpolates clone from card slot to fullscreen
- Single progress value drives everything (position, size, border radius from 28→55, list scale/opacity)
- Drag down to dismiss with threshold (140px) or flick velocity (900px/s)
- Apple-style easing: bezier(0.32, 0.72, 0, 1), 440ms
- Source: https://github.com/rs-4/labs/tree/main/src/components/card-expand

## Ink Toggle — Dark Mode Pour Animation
- Tap moon, ink drops out of it, free-falls, impacts bottom, wave rises revealing the other theme
- Screenshot reveal: captures screen, flips color scheme underneath, liquid shapes erase capture
- Metaball teardrop: two circles in blur + color matrix layer
- Impact wave surges from landing point, tangent to bottom edge
- Source: https://github.com/rs-4/labs/tree/main/src/components/ink-toggle

## Pull Refresh Island — Dynamic Island Pull-to-Refresh
- Gooey pull-to-refresh where Dynamic Island is the refresh indicator
- Metaball effect: blur + color matrix on Skia layer
- One Pan gesture alongside native scroll with progressive resistance, all on UI thread
- Island detection: devices report 59-62pt top inset, island sits 48pt above bottom — no native module needed
- Source: https://github.com/rs-4/labs/tree/main/src/components/pull-refresh-island

## Other labs
- Pull Search — another pull-interaction experiment
- Water Tank — listed under "shitlab" (experimental/less polished)

## About Rayan Selmi
- Freelance front-end / React Native developer based in Paris, currently in Hanoi
- Founder of Stamply, Expobase (CEO), Tanplate, Supastats, co-founder Hannera
- Previous: DealSeek (SWE), ISG (AI Agent Teacher), Cegid (Fullstack)
- Stack: Next.js, React, Expo, RN, TypeScript, Reanimated, Skia, Tailwind, Framer Motion, Figma, Cursor, Claude Code
