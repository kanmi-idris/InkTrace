Source: https://orbs.jakubantalik.com / https://github.com/Jakubantalik/thinking-orbs
Title: Thinking Orbs — Dotted thought-orb loading indicators for AI & agent UIs
Author: Jakub Antalik
Retrieved: 2026-07-21
Stars: 342 | License: MIT

---

Six hand-tuned animated loading states for AI & agent UIs, rendered on plain 2D Canvas — no WebGL, no SVG filters, same pixels in Chrome/Safari/Firefox. Two purpose-tuned sizes (64 for chat-avatar scale, 20 for inline-text scale), each with its own dot count, dot size, and speed tuning.

## States
- **working** — particles on tilted orbits
- **searching** — scan meridian sweeps a dotted globe
- **solving** — bands scramble, then click back solved
- **listening** — waveform rolls through the rings
- **composing** — undulating multi-band sash
- **shaping** — dotted outline morphs: circle → triangle → square

## Features
- `npm install thinking-orbs` — zero dependencies
- Auto dark/light via `data-theme`, `class`, or `prefers-color-scheme` with live MutationObserver
- `speed` multiplier, `paused` freeze, custom `aria-label`
- `prefers-reduced-motion: reduce` renders static frame
- Offscreen auto-pause via IntersectionObserver + tab visibility, shared clock
- Device-pixel-ratio capped at 2

## About Jakub Antalik
- Product designer, Design Lead at Fun.xyz
- Previously 0x.org, Frame.io (acq. by Adobe), Intercom
- Also created transitions.dev, border beam component, liquid metal component
- Collaborated with @a_brinza on this project
