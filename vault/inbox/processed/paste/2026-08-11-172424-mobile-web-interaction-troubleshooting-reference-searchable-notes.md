---
title: "Mobile Web Interaction Troubleshooting Reference: Searchable Notes"
kind: "paste"
captured_at: "2026-08-11 17:24"
tags: ["user-provided", "derived-from-image", "mobile-web", "css", "touch-interaction", "responsive-design"]
source_url: "user-provided://attachment/image.png"
status: "inbox"
---

# Mobile Web Interaction Troubleshooting Reference: Searchable Notes

## Source relation
This searchable note is transcribed from the preserved attached PNG: Mobile Web Interaction Troubleshooting Reference.

| Problem | Solution |
| --- | --- |
| Hover state stuck after tap | Wrap in @media (hover: hover) and (pointer: fine) |
| Gray/blue flash on tap | Kill -webkit-tap-highlight-color |
| Layout has wrong height | 100dvh (app) or 100svh (hero) |
| Page zooms into input | Input's font size should be 16px at the minimum |
| Tap feels laggy | Feedback on pointer-down + touch-action: manipulation |
| Pull-to-refresh hijacks scroll | overscroll-behavior: none on html, body |
| Content stops at the notch | viewport-fit=cover + env(safe-area-inset-*) |
| Long-press selects button text | Add user-select: none |
| Carousel scrolls vertically | touch-action: pan-y on the gesture surface |
| Status bar color does not match | theme-color per color scheme |
| Right in chrome, wrong on phone | Test on real hardware!
