---
title: "Workout Guide: Searchable Exercise Illustration Library and npm Package"
kind: "paste"
captured_at: "2026-08-25 06:19"
tags: ["github", "workout-guide", "exercise", "fitness", "svg", "npm", "typescript", "react-native", "expo", "astro", "mit", "cc-by-sa"]
source_url: "https://github.com/bryllim/workout-guide"
status: "inbox"
---

# Workout Guide: Searchable Exercise Illustration Library and npm Package

## Source overview
Workout Guide is an open exercise illustration library with 302 exercises and three consistent frames per exercise. It provides a typed, framework-neutral npm package and a searchable static gallery.

The original pose artwork comes from Everkinetic under CC BY-SA 4.0. Bryl Lim expanded the foundation with additional exercises and animation frames, normalized the assets, added structured metadata and package APIs, and built the documentation gallery.

## Package contents
The npm package is @bryllim/workout-guide. It ships dual ESM and CommonJS builds, TypeScript declarations, a JSON manifest, and all 906 SVG assets.

The repository is an npm-workspace monorepo containing:
- packages/workout-guide with the package API, canonical manifest, and assets.
- apps/site with an Astro landing page, gallery, detail pages, and guide.
- scripts for deterministic catalog import and validation.

The package directory contains 906 transparent 512 x 512 SVGs. PNG source files are retained for compatibility.

## JavaScript API
The package exports exercises, getExercise, searchExercises, and getAssetUrl.

getExercise retrieves an exact exercise by slug. searchExercises searches the normalized catalog with optional equipment, muscle, type, and stretch filters. getAssetUrl returns a stable asset URL.

The raw manifest is available at @bryllim/workout-guide/manifest.json. The documented manifest length is 302.

Each exercise has stable asset paths:

assets/<slug>/frame-<1|2|3>.svg

Direct static imports can be used in web applications. The guide shows importing push-up frame SVGs and rendering them in an img element.

## Expo and React Native
React Native and Expo integrations use literal require() paths because Metro resolves static assets at build time. The guide warns against assembling these paths dynamically.

Three literal requires can load the three frames for an exercise. This makes the package suitable for frame-based exercise illustrations in React Native applications.

## CDN usage
Production applications can pin a package version in jsDelivr URLs. getAssetUrl() generates the same versioned pattern. The guide uses @1.0.0 as its example package version.

## Catalog and maintenance
The normalized catalog and package assets are checked into the repository. Maintainers can regenerate them from a compatible source export with the documented catalog import command. The repository documents npm install, npm run check, and npm run dev for local work.

## Licensing
Code and documentation use the MIT License. Visual assets use CC BY-SA 4.0. LICENSES.md and ATTRIBUTION.md provide the complete breakdown, including Everkinetic-derived poses.

Suggested attribution:
Original exercise artwork by Everkinetic, expanded by Bryl Lim, licensed under CC BY-SA 4.0.

The code and asset licenses are separate. Applications using the visual assets must follow the CC BY-SA 4.0 attribution and share-alike terms.

## Execution boundary
The repository and guide were inspected through their published pages. No package was installed and no repository command was executed.

## Sources
- https://github.com/bryllim/workout-guide
- https://bryllim.github.io/workout-guide/guide/
- https://www.npmjs.com/package/@bryllim/workout-guide
