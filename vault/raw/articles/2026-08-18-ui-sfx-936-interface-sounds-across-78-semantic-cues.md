---
title: "UI SFX: 936 Interface Sounds Across 78 Semantic Cues"
kind: "paste"
captured_at: "2026-08-18 20:24"
tags: ["ui-sound", "sound-design", "react", "web-audio", "npm", "open-source", "cc0", "coding-agents", "accessibility", "product-design"]
source_url: "https://uisfx.com/"
status: "inbox"
---

# UI SFX: 936 Interface Sounds Across 78 Semantic Cues

## Source overview
UI SFX is an open-source interface sound library for web apps, mobile apps, SaaS, education, media, and games. The site presents 936 sounds generated from 78 semantic interface cues across 12 sound feels.

The code is MIT-licensed and the audio is CC0 according to the site footer. Source repository: https://github.com/romainsimon/uisfx. npm package: https://www.npmjs.com/package/uisfx.

## Sound structure
The library has 13 interaction categories, with 6 cues per category:
1. Input: hover, press, release, double-click, focus, long-press.
2. Selection: select, deselect, toggle-on, toggle-off, check, uncheck.
3. Navigation: open, close, back, forward, expand, collapse.
4. Editing: delete, cancel, undo, redo, copy, paste.
5. Movement: drag-start, drop, snap, swipe, reorder, invalid-drop.
6. Communication: send, receive, notification, mention, typing, reaction.
7. Feedback: success, error, warning, info, blocked, retry.
8. Progress: start, stop, progress-step, complete, queued, checkpoint.
9. Loops: loading, processing, recording, connecting, scanning, streaming.
10. Media: play, pause, seek, volume-change, skip-next, skip-previous.
11. System: connect, disconnect, lock, unlock, wake, sleep.
12. Reward: reward, level-up, achievement, streak, badge, bonus.
13. Commerce: add-to-cart, remove-from-cart, checkout, purchase, coupon, refund.

The site shows each cue as a one-shot or loop with a duration. Users can filter by category, search cues, choose one-shot or loop playback, and compare the same event across feels.

## Twelve sound feels
- Minimal: dry, precise, almost invisible; productivity and SaaS.
- Soft: warm and reassuring; mobile and wellness.
- Glass: bright and crystalline; media, finance, and luxury.
- Arcade: chunky and cheerful; games and gamified learning.
- Mechanical: switches and relays; devtools, hardware, and industrial UI.
- Organic: wood, water, breath, and stones; education and calm games.
- Dreamy: airy blooms and slow sparkle; creative tools and wellness.
- Sci-fi: restrained digital shimmer; AI and spatial interfaces.
- Rubber: elastic taps and friendly rebound; playful mobile apps.
- Cinematic: deep impacts and polished tails; premium media and games.
- Studio: tactile editing precision; film, audio, and AI creative tools.
- Zen: pure tones and brief washi detail; mindfulness, reading, and writing.

## Agent integration guidance
The coding-agent guide recommends semantic cues for meaningful outcomes, not sound for every click. It advises:
- Audit shared controls, asynchronous workflows, state management, accessibility, preferences, and tests before editing.
- Choose cues for what happened, such as success after an operation resolves and error after it fails.
- Usually play one cue per interaction instead of stacking press, select, and success.
- Use hover sparingly and only for fine-pointer targets.
- Keep visual, text, motion, haptic, and ARIA feedback. Sound must not be the only signal.
- Add a clearly labelled persistent sound preference.
- Support pointer, touch, and keyboard activation without duplicate playback.
- Run formatter, typecheck, tests, and production build after integration.

## API and installation
The guide documents:
- npm install uisfx.
- createUISFX({ pack, volume, enabled, maxVoices, cooldownMs, preferences, context }).
- player.unlock() from a trusted pointer or keyboard action.
- player.play(cue, options), returning a stop handle and ended state.
- preload, setPack, getPack, setVolume, getVolume, setEnabled, isEnabled, stopAll, and destroy.
- bindUISFX for simple declarative DOM use.
- CUES, PACKS, CATEGORIES, cueNames, packNames, getCue, getPack, and getPlaybackMode.

The guide says to create one long-lived browser player. It warns not to instantiate or play audio during server-side rendering, not to autoplay on page load, and not to queue stale cues before audio unlock. Native mobile or game environments can use packaged MP3 or Ogg assets while preserving semantic rules.

## Async loops
The six loop cues are loading, processing, recording, connecting, scanning, and streaming. The guide recommends retaining the returned handle, stopping loops on success, failure, cancellation, timeout, navigation, unmount, mute, disable, and finally. It recommends classifying cancellation so an inappropriate error cue is suppressed without changing the product's existing cancellation behavior.

## Source boundary
This capture inspected the public UI SFX site and its agent integration guide. It does not verify the audio files, package internals, browser support, or accessibility of a specific product integration.

## User-provided source
@UI Sound Design: 936 Interface Sound Effects | UI SFX
https://uisfx.com/
