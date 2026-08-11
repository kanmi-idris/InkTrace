---
title: "MengTo/kage: Interactive Kyoto Mountain Temple"
kind: "paste"
captured_at: "2026-08-09 08:06"
tags: ["github", "threejs", "webgl", "scroll-storytelling", "web-design", "kage"]
source_url: "https://github.com/MengTo/kage"
status: "inbox"
---

# MengTo/kage: Interactive Kyoto Mountain Temple

## Source overview
Kage is an interactive five-chapter night walk through a Kyoto mountain temple. It is rendered live in Three.js and layered with cinematic generated imagery.

## Technical pattern
- A live WebGL camera moves through the temple as the page scrolls.
- The scene combines procedural architecture, lantern light, fog, rain, leaves, a vermilion moon, and bloom.
- Editorial typography and generated WebP foreground layers sit over the 3D world.
- The page includes chapter navigation, responsive mobile layout, reduced-motion behavior, and a custom cursor.
- It is a small static site. The repository uses a vendored Three.js r149 build and has no package-manager build step.
- The project states that no reuse or redistribution license is granted for the original code or artwork. Three.js retains its MIT notice.
