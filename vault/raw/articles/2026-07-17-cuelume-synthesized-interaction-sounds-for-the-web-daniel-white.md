---
title: Cuelume — synthesized interaction sounds for the web (Daniel White)
kind: paste
captured_at: 2026-07-17 13:01
tags: [ui-sounds, web-audio, micro-interactions, accessibility, feedback, cuelume, no-deps]
source_url: https://cuelume-site.pages.dev/
status: inbox
---

# Cuelume — synthesized interaction sounds for the web (Daniel White)

# Cuelume — interaction sounds for the web (Daniel White)

A tiny library of synthesized interaction sounds (UI feedback cues) for the web. v0.1.2, 14 cues, 0 dependencies. By Daniel White (github.com/Danilaa1/cuelume). Site: cuelume-site.pages.dev. MIT.

## What it is
"Tiny interaction sounds that make interfaces feel alive." Cuelume synthesizes every cue live with Web Audio — no audio files, no runtime dependencies. All 14 cues together are smaller than one MP3 click (<5 kB total).

## The 14 cues
idle, chime, sparkle, droplet, bloom, whisper, tick, press, release, toggle, success, error, page, loading, ready.

## How it works
- **Live synthesis**: every cue is synthesized with Web Audio at play time. No recordings to load.
- **Declarative**: one `data-cuelume-*` attribute per behavior, bound by `bind()`.
- **Curated**: 14 distinct shapes (chimes, glides, clicks, blooms) — not 14 tweaks of one click.

## Interaction patterns
- `data-cuelume-hover` (fine-pointer hover) — e.g. `<a data-cuelume-hover="tick">Docs</a>`
- `data-cuelume-press` + `data-cuelume-release` — e.g. `<button data-cuelume-press data-cuelume-release>Save</button>`
- `data-cuelume-toggle` — e.g. `<button data-cuelume-toggle>Dark mode</button>`

## Install / usage
```
npm install cuelume
```
```html
<button data-cuelume-press data-cuelume-release>Save</button>
<a data-cuelume-hover="tick">Docs</a>
<button data-cuelume-toggle>Dark mode</button>
```
```ts
import { bind, play } from "cuelume";
bind();           // wires every data-cuelume-* attribute
play("success");  // or play imperatively
```

## Positioning
Fits the "UI feel / micro-interaction" cluster in the vault: Transitions.dev (src-2026-07-17-009, motion/transition taste as skill), animation/design resources (Emil Kowalski, Taste Skill), and the RN animation/graphics sources. Note: cuelume is web-only (Web Audio API), no RN-native port mentioned — relevant context for anyone wanting sound feedback in React Native (would need a native audio module, e.g. react-native-audio-api, or a different lib). Complements visual motion with auditory feedback.
