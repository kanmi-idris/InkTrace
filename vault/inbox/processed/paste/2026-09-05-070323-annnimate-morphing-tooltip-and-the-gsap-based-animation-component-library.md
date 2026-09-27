---
title: "Annnimate: Morphing Tooltip and the GSAP-Based Animation Component Library"
kind: "paste"
captured_at: "2026-09-05 07:03"
tags: ["annnimate", "gsap", "react", "vue", "tooltip", "animation", "ui-component", "goo-filter", "paid-component", "prefers-reduced-motion"]
source_url: "https://annnimate.com/animations/morphing-tooltip"
status: "inbox"
---

# Annnimate: Morphing Tooltip and the GSAP-Based Animation Component Library

## Source overview
Annnimate is a paid subscription library of React and Vue animation components built on GSAP (the GreenSock Animation Platform), marketed as production-grade UI motion patterns ('the animated UI components studios ship on real brand work') covering scroll reveals, magnetic buttons, text effects, page transitions, and similar interaction patterns. The gallery lists a mix of free and paid ('locked source') components, refreshing with what the site describes as a new free component every week. Named components visible in the gallery browse view at time of capture include Morphing Tooltip, Gooey Filter Chips, Morphing Island, a free Pricing section, Scatter Cluster, Photo Stack Gallery, Dither Cursor Trail, Spiral Gallery, a free ASCII Overlay, Text On Path, Lens Rail, and Grid Chapters.

## Morphing Tooltip: concept and mechanism
Morphing Tooltip is a single persistent tooltip element for a row of buttons or a toolbar, rather than a separate tooltip instance per button. When the user hovers a different button, the same tooltip element travels and resizes to the new target instead of the previous approach the author describes trying first, where each button's tooltip faded in and out independently and reportedly felt like multiple flickering tooltips rather than one coherent element.

The visual join between the hovered button and the tooltip is described as an actual liquid/goo merge effect rather than a drawn connector line or arrow: a hidden duplicate copy of each shape sits directly behind the real shapes, and a filter effect fuses the two visible copies into one connected blob wherever they overlap. The author states this makes the 'pulling apart' transition (moving away from a button) visually convincing, since the connecting bridge stretches, thins, and visibly snaps, while the 'merging' transition (approaching a new button) has no equivalent visible break, so the tooltip appears to originate from inside the button and get carried out through its edge by the animation.

The page states the component exposes user-tunable controls for travel speed between buttons, dwell time before the tooltip disappears, the thickness of the goo/merge effect, and which side of the button the tooltip appears on, plus that the caption text keeps its final rendered width throughout the animation so it does not visibly re-wrap while the tooltip shape is still growing.

## Platform support and dependencies
The FAQ states Morphing Tooltip ships in three equivalent implementations: React (including Next.js, using GSAP's official useGSAP hook with animation cleanup handled), Vue 3 (including Nuxt, as a single-file component using script setup), and plain HTML/CSS/JS. GSAP itself is a required dependency; the FAQ notes GSAP has been free for commercial use, including all of its plugins, since version 3.13.

The component page documents 7 tunable controls exposed in an interactive customization panel, letting a visitor adjust settings via a live preview and then copy code reflecting those exact settings, for members.

## Access model and pricing
Morphing Tooltip's specific source code, along with a documented data attribute table, tuning documentation, and real-world use-case guidance, is gated behind an Annnimate subscription, starting at a stated EUR 20/month (billed quarterly) or EUR 199/year. The live interactive preview and the customization panel are described as free to use without an account; only the final copy-ready code requires membership. Annnimate is stated to offer a 14-day money-back guarantee, and its license is stated to cover commercial and client work with no attribution requirement and no stated limit on number of projects. The FAQ also states every component, including Morphing Tooltip, respects the operating system's reduced-motion accessibility preference via GSAP's matchMedia utility, falling back to an effectively instant, readable state for users who have that preference enabled.

## Evidence boundary
The animations gallery listing page and the dedicated Morphing Tooltip product page (including its public FAQ section) were fetched and read directly for this capture. The component's actual source code, its full documented attribute table, and its use-case documentation are gated behind a paid subscription and were not accessed, purchased, or independently verified in this capture.

## Sources
- https://annnimate.com/animations
- https://annnimate.com/animations/morphing-tooltip
- https://annnimate.com/pricing
