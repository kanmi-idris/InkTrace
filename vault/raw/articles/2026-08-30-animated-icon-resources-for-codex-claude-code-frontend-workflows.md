---
title: "Animated Icon Resources for Codex/Claude Code Frontend Workflows"
kind: "paste"
captured_at: "2026-08-30 20:35"
tags: ["animated-icons", "lucide", "shadcn", "lottie", "font-awesome", "react", "ai-workflow", "design-resources"]
source_url: "https://lucide-animated.com"
status: "inbox"
---

# Animated Icon Resources for Codex/Claude Code Frontend Workflows

## Source overview
This captures a curated list of animated-icon resources shared alongside a workflow suggestion: pick an icon, hand its shadcn install command (or embed code) to an AI coding agent like Codex or Claude Code, and have the agent wire it into buttons, navigation, or status indicators matched to the page's existing colors and sizing. Its Hover (itshover.com/icons) was already captured previously in this vault (src-2026-05-13-005, src-2026-06-28-014) as a shadcn-installable animated icon library; it is cross-referenced here rather than re-documented. The four resources below were newly inspected for this capture.

## lucide-animated.com (Lucide Animated)
An open-source (MIT License) collection of smooth animated icon components, built on top of Motion (the animation library) and Lucide (the base icon set). The creator is credited as dmytro. Icons are organized in a searchable grid (accessible via Cmd/Ctrl+F) covering the full range of Lucide's icon names (arrows, alarm clocks, accessibility, activity, airplane, alignment icons, ambulance, and so on, following Lucide's existing naming conventions since it extends that icon set with animation).
The project is promoted alongside a paid course/resource called Invisible Details, about interface micro-details such as timing, states, feedback, and click weight, but the icon library itself is presented as free and open source, matching the user's description.

## lottiefiles.com/free-animations/icon (LottieFiles free icon animations)
A browsable catalog of free icon animations from the LottieFiles community, downloadable as Lottie JSON, dotLottie, GIF, or MP4. At the time of this capture the icons section listed 5,926 free icon animations, alongside adjacent categories for interactivity and theming animations, and separate thematic browse categories (business, festive, health, finance, gaming, and others). Lottie-format downloads are described as vector-based, a few kilobytes each, sharp at any screen density, and recolorable to match a project's palette. The site states these are free for personal and commercial use under the Lottie Simple License, and also offers a paid premium-assets marketplace and a custom-animation commissioning service alongside the free catalog.

## app.iconsax.io (Iconsax, animated tab)
A paid icon platform (per the user's own description) offering icon sets in multiple formats, including an explicit "Animated" type filter alongside "Static" and a newer "Ai" type. At the time of this capture the animated/all icon browser reported a total of 1,000 icons across categories such as arrow (65), business (19), computers-devices-electronics (48), content (35), crypto-company (101), delivery (16), design-tools (50), emails-messages (35), essential (101), location (27), money (78), notifications (9), programming (27), security (28), settings (17), users (20), video-audio-image (81), and weather (18), among others. The interface supports selecting multiple icons into a project/download configuration before exporting. Separate Pricing and License pages exist on the site; this capture did not access pricing details or licensing terms beyond confirming their existence as separate site sections, and did not complete any purchase or download.

## docs.fontawesome.com/web/style/animate (Font Awesome: Animating Icons)
Font Awesome's own documentation for adding CSS-driven animation classes to any existing Font Awesome icon, rather than a separate animated-icon set. Documented animation classes include: fa-beat (scale up/down, useful for attention or heart/health icons), fa-fade (opacity fade in/out), fa-beat-fade (combined scale-and-fade pulse), fa-bounce (vertical bounce with configurable squish/rebound), fa-buzz (fast tight vibration, added in version 7.3), fa-flip and fa-flip-360 (3D Y-axis rotation, with flip-360 doing a full smooth rotation, added in 7.3), fa-float (slow vertical drifting motion, added in 7.3), fa-jello (playful wobble/squash distortion, added in 7.3), fa-shake (attention-grabbing side-to-side shake), fa-swing (slow-decaying dangle, for keys/hangers/bells, added in 7.3), fa-wag (slow-decaying top wobble, for pointing hands, added in 7.3), and a family of spin variants (fa-spin, fa-spin-pulse, fa-spin-snap/-snap-4/-snap-8, all combinable with fa-spin-reverse). Each animation exposes CSS custom properties (for example --fa-beat-scale, --fa-bounce-height, --fa-swing-angle, --fa-float-height) for fine-tuning without writing new keyframes, plus shared properties (--fa-animation-delay, --fa-animation-direction, --fa-animation-duration, --fa-animation-iteration-count, --fa-animation-timing) that apply across all animation types.

The documentation explicitly addresses accessibility: all animations respect the prefers-reduced-motion media feature and disable themselves when a user has that preference set, and the docs recommend against relying on animation alone to signal a state change, and against animating faster than three times per second (photosensitive-epilepsy risk). It also documents known bugs and fixes: a Safari WebKit bug that clips some animated icons when using the Web Fonts + CSS integration method (fixed via new fa-canvas-roomy/fa-canvas-square sizing classes in version 7.3, or a manual CSS backport for earlier versions), an older class-name conflict with animate.css's .fast selector, and general "wobble" centering issues recommended to be fixed by using display: block, sizing in multiples of 16px, or switching to the SVG + JS integration method instead of Web Fonts + CSS.

## Suggested workflow (as described by the source)
The suggested pattern across these libraries is: pick a specific animated icon (for example, an arrow for navigation, a bell for notifications, a checkmark for completed actions, or a gear for settings), then give an AI coding agent (Codex or Claude Code was suggested) the relevant install command (a shadcn CLI command for Lucide Animated or Its Hover) or embed reference (a Lottie file, GIF, or Font Awesome class), and have the agent wire the icon into the target UI element while matching the surrounding page's existing color and sizing conventions, rather than hand-writing the animation from scratch.

## Evidence boundary
Lucide Animated, LottieFiles, Iconsax, and the Font Awesome documentation were each directly inspected during this capture. Total icon/animation counts (1,000 for Iconsax, 5,926 for LottieFiles icons) reflect the count shown on each site at the time of this capture and may change. No account was created, no purchase was made, and no icon or animation file was downloaded from any of these sites during this capture.

## Sources
- https://lucide-animated.com
- https://lottiefiles.com/free-animations/icon
- https://app.iconsax.io/?tab=animated
- https://docs.fontawesome.com/web/style/animate
- Its Hover (already captured: src-2026-05-13-005, src-2026-06-28-014) at https://itshover.com/icons
