---
title: unplugin-icons — on-demand universal icon components (Anthony Fu)
kind: paste
captured_at: 2026-07-18 01:14
tags: [icons, iconify, web, vite, react, vue, unplugin, frontend, antfu, components]
source_url: https://github.com/unplugin/unplugin-icons
status: inbox
---

# unplugin-icons — on-demand universal icon components (Anthony Fu)

# unplugin-icons (unplugin/unplugin-icons)

🤹 Access thousands of icons as components **on-demand**, universally. By Anthony Fu (antfu), MIT, 4.9k★, 158 forks, 445 commits. Latest v23.0.1 (Jan 14 2026). TypeScript 98.7%. Built on [Iconify](https://github.com/iconify/iconify) + [unplugin](https://github.com/unjs/unplugin).

## What it is
A universal build-time plugin that turns any icon set into framework components, bundling only the icons you actually import. Renamed from `vite-plugin-icons` (migration guide in README).

## Key features
- 🌏 Universal: ~150 icon sets / 200,000+ icons, logos, emojis via Iconify.
- 📦 Major build tools: Vite, Webpack, Rollup, Nuxt, Rspack, esbuild, Astro (via unplugin).
- 🚀 Major frameworks: Vanilla, Web Components, React, Vue 3, Preact, Solid, Svelte, Qwik, Ember.
- ☁️ On-demand — only used icons bundled.
- 🖨 SSR/SSG friendly — no FOUC.
- 🌈 Stylable via size/color/animation classes.
- 📥 Custom icons + auto-importing.
- 🦾 TypeScript support. Browse at icones.js.org.

## Usage
Import convention: `~icons/{collection}/{icon}`. React: `import IconAccess from '~icons/carbon/accessibility'`. Vue: `<icon-accessibility />`.
Auto-import: Vue via `unplugin-vue-components` (`IconsResolver`), React/Solid via `unplugin-auto-import` with `prefix: 'Icon'`.

## Install
```
npm i -D unplugin-icons
npm i -D @iconify/json          # all sets (~120MB, only used bundled)
# or per-set: npm i -D @iconify-json/mdi @iconify-json/carbon
# or autoInstall: Icons({ autoInstall: true })
```
ESM-only. VS Code: Iconify IntelliSense extension (antfu.iconify) for preview/autocomplete.

## Compiler / framework config
- Vue 3: `compiler: 'vue3'`
- React: `compiler: 'jsx', jsx: 'react'` (+ `@svgr/core @svgr/plugin-jsx`)
- Solid: `compiler: 'solid'`
- Svelte: `compiler: 'svelte'`
- Astro: `compiler: 'astro'`
- Qwik: `compiler: 'qwik'` (+ `@svgx/core`) or jsx
- Ember: `compiler: 'ember'`

Raw SVG import (`v0.13.2+`): `~icons/mdi/alarm-off?raw&width=4em`. Custom collections via `FileSystemIconLoader` / `ExternalPackageIconLoader` / async loaders; `iconCustomizer` and `transform` hooks for per-icon/global styling.

## Options
`scale` (default 1.2), `defaultStyle`, `defaultClass`, `compiler`, `jsx`, `customCollections`, `iconCustomizer`, `transform`, `autoInstall`.

## Positioning in vault
Fits the frontend/UI tooling cluster: complements animated component libs (Rare UI, Reverse UI, Unlumen, Originkit, Amicro) and icon resources (Its Hover `src-2026-06-28-014`, Cuelume `src-2026-07-17-013` for sound). The canonical "icon-as-component, on-demand, multi-framework" solution for web projects — relevant whenever building web UIs in the vault's tooling context. Note: web/JS only, not RN-native (RN would use a different icon lib like react-native-vector-icons / SF Symbols).
