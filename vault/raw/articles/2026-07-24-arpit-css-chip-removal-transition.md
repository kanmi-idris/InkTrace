---
title: Arpit - CSS Chip Removal Transition
kind: paste
captured_at: 2026-07-24 19:29
tags: []
source_url: 
status: inbox
---

# Arpit - CSS Chip Removal Transition

Design Engineering Tip by Arpit (@Arpit_2023) on X (Jul 24, 2026, 2.3K views): CSS transition pattern for removing elements like chips.

Instead of random easing, use linear with will-change for removing elements:

.chip {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: linear;
  will-change: width, transform;
  width: 130px;
  transform: translateX(0);
}

.chip.removing {
  width: 0px;
  transform: translateX(40px);
  filter: blur(4px);
}

Key: same duration + same easing on both states for smooth, predictable removal. Combine width collapse, translateX slide-out, and blur for a polished exit animation.
