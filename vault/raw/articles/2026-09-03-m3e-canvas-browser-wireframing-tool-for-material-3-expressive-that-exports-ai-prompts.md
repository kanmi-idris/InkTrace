---
title: "M3E Canvas: Browser Wireframing Tool for Material 3 Expressive That Exports AI Prompts"
kind: "paste"
captured_at: "2026-09-03 00:00"
tags: ["m3e-canvas", "material-3-expressive", "material-design", "design-tool", "wireframing", "vibe-coding", "nextjs", "react", "prompt-generation", "mit"]
source_url: "https://lnkiai.github.io/m3e-canvas/"
status: "inbox"
---

# M3E Canvas: Browser Wireframing Tool for Material 3 Expressive That Exports AI Prompts

## Source overview
M3E Canvas is a free, browser-based screen-sketching tool for laying out Material 3 Expressive (Google's newer expressive evolution of Material Design) mobile UI screens, wiring them together with tappable navigation, and exporting the resulting design as a natural-language prompt intended to be handed to an AI coding tool rather than as design files or code. It resolves from the shared t.co link to lnkiai.github.io/m3e-canvas/, backed by the GitHub repository lnkiai/m3e-canvas.

GitHub API metadata checked on 2026-09-02 (the same day the repository was created) reports 59 stars, 2 forks, 0 open issues, TypeScript as the primary language, and MIT license.

## Core capabilities
- A drag-and-drop parts library covering common Material 3 Expressive components: buttons, icon buttons, FABs, chips, app bars, navigation bars, search bars, cards, lists, dialogs, snackbars, text fields, switches, checkboxes, sliders, plain text, images, boxes, and dividers.
- A 'magnetic connection' behavior where dragging two compatible parts (such as buttons or list items) close together visually fuses them into a connected group with softened corners at the seam, rather than requiring manual grouping.
- A real, ported implementation of Material 3 Expressive's shape-morphing loading indicator and wavy linear/circular progress indicators, credited as adapted from the official material-components-android project via an intermediate open-source port (Aler1x/m3-loading-indicator).
- Support for multiple named phone screens with independent backgrounds, each screen draggable as a whole unit.
- Tap-to-navigate wiring: any tappable part can be assigned a target screen and a transition style (slide, fade, expand, or none), visualized as arrows on the canvas, and testable by actually tapping through a live preview mode.
- A prompt-export feature that converts an entire design, or a single selected screen, into a concise natural-language description (available in English or Japanese) that includes any per-part behavior notes the user has added, intended for pasting into an AI coding assistant.
- Additional export as a PNG snapshot of a single screen; alignment guides, undo/redo, keyboard shortcuts, seven built-in color themes, and a favorites row for frequently used parts.
- All work is persisted client-side in the browser's localStorage rather than to a server or account.
- A simplified phone-optimized mode: on a touchscreen phone, the tool restricts itself to one fixed screen and a buttons-only editor (add via a plus button, move by tapping, edit text/icon/style through a bottom sheet), reserving the full multi-screen editor for desktop browsers.

## Technical implementation
The app is described as a statically-exported Next.js application. Documented local development commands are `npm install`, `npm run dev` (serves at localhost:3000), and `npm run build` (produces a static export to `./out`). To host the static export under a sub-path, such as a GitHub Pages project site, the README documents setting a `NEXT_PUBLIC_BASE_PATH` environment variable at build time; a GitHub Actions workflow file in the repository automates this and publishes the build output to GitHub Pages on every push to the main branch.

## Attribution and related project
The README credits Google's material-components-android project (Apache-2.0) for the loading-indicator shapes and animation model, reached via an intermediate open-source port, and credits Google's Material Symbols icon set (Apache-2.0), loaded from Google Fonts. It separately points to matraic/m3e, described as an MIT-licensed implementation of Material 3 Expressive as Lit web components with React bindings and an icon package, positioned in the README as a suggested downstream implementation target for screens sketched in M3E Canvas, rather than a component of M3E Canvas itself.

## License
M3E Canvas itself is MIT licensed, attributed to the author lnkiai. Its two credited upstream dependencies (material-components-android and Material Symbols) are separately Apache-2.0 licensed.

## Evidence boundary
The live app was opened and its interface panel (parts categories, color theme buttons, canvas toolbar) was inspected via the accessibility tree. The GitHub README and repository API metadata were also inspected. No screen was sketched, no prompt was generated or exported, and no local build was run during this capture.

## Sources
- https://lnkiai.github.io/m3e-canvas/
- https://github.com/lnkiai/m3e-canvas
- https://github.com/matraic/m3e
- https://github.com/material-components/material-components-android
