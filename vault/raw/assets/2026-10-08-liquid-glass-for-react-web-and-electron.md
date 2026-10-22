---
title: "Liquid Glass for React, web, and Electron"
kind: "project capture"
author: "Glass-HQ"
source_url: "https://github.com/Glass-HQ/liquid-glass"
origin_url: "https://github.com/Glass-HQ/liquid-glass"
related_urls: ["https://liquid-glass.glassapp.dev/", "https://www.npmjs.com/package/@glass-sdk/liquid-glass"]
tags: ["liquid-glass", "webgpu", "react", "electron", "ui", "MIT", "experimental"]
---

# Liquid Glass for React, web, and Electron

## Product description
Glass-HQ publishes an MIT-licensed package, `@glass-sdk/liquid-glass`, for React, web, and Electron. It provides Clear and Regular glass materials, light and dark appearances, and refraction over live DOM content. The project uses vgpu and WGSL material maps, with SVG filters applied to the designated DOM content layer. The README says it does not capture or screenshot the DOM.

The demo shows surfaces, buttons, toolbars, tab bars, menus, sliders, switches, and progressive blur. The repository quick start pins `@glass-sdk/liquid-glass@~0.0.1`; the npm package page documents the same package. GitHub lists the project as MIT licensed.

## Requirements and limitations
React components require React 19+. Rendering requires HTTPS or localhost and an available WebGPU adapter. The project also offers a framework-independent DOM API.

The README says Safari has known rendering issues. It reports that the initial release showed blank tab-example content in Safari. Chromium, Firefox, Safari, and Electron are listed as acceptance targets, but the initial publication does not establish parity across them. The supplied text says desktop Chromium works well, while Safari and mobile remain rough. I did not test other browsers or mobile devices.

The README excludes arbitrary page-backdrop sampling, native video composition, transformed ancestors, and native or React Native ports. Cross-origin image policies also apply. The project is newly public, with three commits and no GitHub releases visible at capture time.

The user's wording compares the visuals to Apple's Liquid Glass. The repository describes an independent web and Electron implementation; it does not claim to be an Apple SDK or an Apple-affiliated project.

## Related InkTrace records
This is distinct from the earlier WebGPU-focused Liquid DOM repository (`src-2026-05-24-001`) and the native Expo adaptive-glass package (`src-2026-09-23-001`). Those projects share a visual theme but use different repositories and targets.

## Evidence limits
I inspected the repository README, its compatibility notes, the npm package page, and the demo page. I did not install the package, run its code, or test its behavior in Safari, Firefox, Electron, or on mobile. The browser statements remain author-reported or repository-documented claims.
