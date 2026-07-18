---
title: react-native-enriched-markdown — Native Markdown Renderer & Rich Text Input (Software Mansion)
kind: paste
captured_at: 2026-07-10 07:16
tags: [react-native, markdown, software-mansion, new-architecture, rich-text, latex, gfm, ios, android, macos, web]
source_url: https://github.com/software-mansion/react-native-enriched-markdown
status: inbox
---

# react-native-enriched-markdown — Native Markdown Renderer & Rich Text Input (Software Mansion)

# react-native-enriched-markdown

**Author / org:** Software Mansion  
**Primary URL:** https://github.com/software-mansion/react-native-enriched-markdown  
**Docs site:** https://enriched.swmansion.com/markdown/  
**License:** MIT  
**Platforms:** iOS, Android, macOS, Web (input is native-only)  
**Requirement:** New Architecture (Fabric) on native platforms

## Overview

`react-native-enriched-markdown` is a React Native library that renders Markdown as native text and provides a rich text input that outputs Markdown. Not WebView-based. Built by Software Mansion (Core React Native Contributors).

Two main components:

1. **EnrichedMarkdownText** — native Markdown renderer
2. **EnrichedMarkdownTextInput** — rich text input with Markdown output

## EnrichedMarkdownText features

- Fully native text rendering (no WebView)
- Web support via react-native-web + md4c compiled to WebAssembly
- High-performance Markdown parsing with [md4c](https://github.com/mity/md4c)
- CommonMark compliant
- GitHub Flavored Markdown (GFM): tables, task lists, strikethrough, etc.
- LaTeX math: block `$$...$$` with `flavor="github"`; inline `$...$` in all flavors
- Markdown streaming support via [react-native-streamdown](https://github.com/software-mansion-labs/react-native-streamdown)
- Fully customizable styles for all elements
- Text selection and copy support
- Custom text selection context menu items
- Interactive link handling with per-URL-pattern styling (`linkVariants`)
- Mentions rendered as styled links (compatible with input mention output)
- Spoiler text with animated particle overlay and tap-to-reveal
- Native image interactions (iOS: Copy, Save to Camera Roll)
- Native platform features (Translate, Look Up, Search Web, Share)
- Accessibility (VoiceOver iOS, TalkBack Android, semantic HTML on web)
- Full RTL support: text, lists, blockquotes, tables, task lists

## EnrichedMarkdownTextInput features

- Rich text input with Markdown output
- Imperative API for toggling styles and managing links
- Native context menu with formatting submenu
- Real-time style state detection
- Auto-link detection with customizable regex
- Smart copy/paste with Markdown preservation
- Customizable bold, italic, and link colors
- Mentions with configurable indicators, suggestion lifecycle events, and per-pattern link styling

## Prerequisites

**Native (iOS / Android / macOS)**
- React Native New Architecture (Fabric) required
- macOS via react-native-macos 0.81+

**Web**
- Requires react-native-web + Metro (or bundler with `.web.tsx` resolution)
- No New Architecture requirement (WASM/JS renderer)
- Only `EnrichedMarkdownText` on web (`EnrichedMarkdownTextInput` is native-only)
- LaTeX math needs optional `katex` peer dependency

## Installation

### Bare RN
```sh
yarn add react-native-enriched-markdown
# iOS
cd ios && bundle install && bundle exec pod install
# macOS
cd macos && bundle install && bundle exec pod install
```

Nightly: `yarn add react-native-enriched-markdown@nightly`

### Expo
```sh
npx expo install react-native-enriched-markdown
npx expo prebuild
```
Does not work in Expo Go (native code required).

iOS photo save needs `NSPhotoLibraryAddUsageDescription` in Info.plist if saving images to Camera Roll.

## Compatibility table (RN versions)

| Package version | 0.82 | 0.83 | 0.84 | 0.85 | 0.86 |
|-----------------|:----:|:----:|:----:|:----:|:----:|
| nightly         | no   | yes  | yes  | yes  | yes  |
| 0.7.0           | no   | yes  | yes  | yes  | yes  |
| 0.6.0           | no   | yes  | yes  | yes  | no   |
| 0.5.0           | no   | yes  | yes  | yes  | no   |
| 0.4.x           | yes  | yes  | yes  | no   | no   |
| 0.3.0           | yes  | yes  | yes  | no   | no   |

## Roadmap / future plans

- Input: headings, lists, blockquotes, code blocks, inline images
- Input web support
- macOS: block math, VoiceOver, tail fade-in animation
- Web: spoiler text, streaming animation, configurable link target, copy options (Copy as Markdown, multi-format clipboard)

## Related docs (in repo)

- TEXT.md — EnrichedMarkdownText usage, elements, copy, a11y, RTL, styles
- INPUT.md — EnrichedMarkdownTextInput
- MENTIONS.md — mentions & linkVariants
- LATEX_MATH.md — LaTeX math
- IMAGE_CACHING.md — image caching
- MARKDOWN_STREAMING.md — streaming via react-native-streamdown
- WEB.md / MACOS.md — platform notes
- API_REFERENCE.md — props, methods, events

## Key links

- GitHub: https://github.com/software-mansion/react-native-enriched-markdown
- Product site: https://enriched.swmansion.com/markdown/
- Software Mansion: https://swmansion.com
- md4c parser: https://github.com/mity/md4c
- Streamdown: https://github.com/software-mansion-labs/react-native-streamdown
- Get started (TEXT usage): https://github.com/software-mansion/react-native-enriched-markdown/blob/main/docs/TEXT.md#usage

## Key claims for citation

1. Fully native Markdown rendering and editing for React Native — not WebView-based.
2. Requires New Architecture (Fabric) on iOS/Android/macOS; web uses md4c WASM without New Arch.
3. Parser is md4c; CommonMark + GFM + LaTeX math + streaming + mentions + spoilers + RTL + a11y.
4. Dual surface: renderer (`EnrichedMarkdownText`) + editor (`EnrichedMarkdownTextInput` with Markdown output).
5. MIT-licensed, built by Software Mansion.
6. Stable 0.7.0 supports RN 0.83–0.86 per compatibility table in README.
