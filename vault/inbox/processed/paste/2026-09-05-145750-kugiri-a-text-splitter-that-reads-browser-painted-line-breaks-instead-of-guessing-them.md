---
title: "kugiri: A Text Splitter That Reads Browser-Painted Line Breaks Instead of Guessing Them"
kind: "paste"
captured_at: "2026-09-05 14:57"
tags: ["kugiri", "text-splitting", "javascript", "typescript", "web-animations-api", "css-animation", "text-reveal", "gsap", "motion", "mit", "npm"]
source_url: "https://github.com/edoardolunardi/kugiri"
status: "inbox"
---

# kugiri: A Text Splitter That Reads Browser-Painted Line Breaks Instead of Guessing Them

## Source overview
kugiri (Japanese for the point where one segment ends and the next begins) is a small, dependency-free JavaScript/TypeScript library by Edoardo Lunardi that splits text into lines, words, and characters for animated text-reveal effects. It is newly public per the author's announcement, already used in production on several of the author's own sites beforehand. GitHub API metadata checked at capture time reports 53 stars, 0 forks, MIT license, TypeScript as the primary language, and a repository creation date of 2026-09-03. The npm registry lists the current published version as 0.3.0, also MIT licensed.

## The core problem it addresses
Most text-splitting libraries for reveal animations predict where a line of text will wrap, using their own line-breaking logic. The author's stated argument is that this prediction breaks down whenever real-world CSS text features are involved, naming examples such as `text-wrap: balance`, hyphenation, drop caps, floated elements, wrapped inline links, right-to-left text, and languages like Japanese that do not use spaces to separate words. kugiri instead reads the line boxes the browser has already rendered directly, via `Range.getClientRects()`, and cuts the DOM at exactly those already-painted boundaries rather than recomputing where a line should break. The stated result is that the split text is described as pixel-for-pixel identical to the original layout.

## What the library does and does not do
The library's stated scope is narrow and deliberate: it only performs the split itself. It ships no animation system, no scroll-triggering logic, and no built-in opinions about how a reveal should look. Every produced unit (each line, word, or character) receives an index, both as a data attribute and as a CSS custom property, so the actual animation can be driven by plain CSS, the Web Animations API, GSAP, Motion, or any other animation approach the consuming project already uses.

A companion design principle, called out explicitly in the documentation, is that a single split call is a one-time snapshot of the layout at that moment: kugiri does not watch the viewport, container size, fonts, or text content for changes, and will not automatically re-split if the layout changes later (for example on a browser resize that changes where lines wrap). Re-splitting after such a change is left entirely to the consumer's own code, and the library's own demo/documentation shows one example pattern for doing this (observing element size changes and re-splitting on a debounced resize), presented explicitly as an example rather than a built-in library feature.

## Documented content-handling behavior
The README documents specific rules for how different kinds of content are treated during a split: inline elements (links, emphasis, spans) that wrap across multiple lines are cloned per line with their original attributes preserved; block-level containers (paragraphs, list items, headings) are split inside themselves so structural elements like list numbering are preserved; content that is not plain text and does not wrap as text (images, buttons, tables, custom elements treated as opaque boxes, or anything matched by a configurable 'ignore' selector) is left untouched as a single unit rather than being cut into pieces; floated elements are repositioned relative to the line they visually sit beside rather than being animated as text; and hidden content (collapsed `<details>` sections, `display: none` elements) is left alone entirely. Styled first-line and first-letter effects (including a floated drop-cap letter) are documented as being specifically preserved across the split operation, since the underlying CSS pseudo-elements do not normally survive being manually cut into separate DOM nodes.

## Documented limitations and caveats
The README explicitly documents several known limitations rather than presenting the tool as universally seamless: splitting text into individual characters necessarily loses kerning between adjacent letters, since each character becomes its own separate box (described as an inherent limitation shared by any character-splitting approach, not specific to this library); calling the library's revert function to restore original markup will lose any state or event listeners that were separately attached to the target element between splitting and reverting; word and grapheme-cluster detection relies on the browser's `Intl.Segmenter` API (documented minimum support: Chrome 87, Safari 14.1, Firefox 125), and falls back to simpler whitespace/code-point splitting without it, which the README notes can incorrectly break apart multi-codepoint emoji sequences; screen readers may read a character-level split letter by letter, so the README recommends adding an `aria-label` with the full original text plus `aria-hidden` on the generated units when splitting into characters for accessibility; sub-pixel measurement differences mean Chromium and Firefox are documented as exact, while WebKit's rounded internal measurements can place a line boundary within about one pixel of its original position; and a specific WebKit rendering quirk around `text-transform` combined with `::first-line` styling is called out as needing manual visual verification in Safari.

## Size, performance, and testing
The README states the library is a single file, written in ES2022, with no runtime dependencies, at roughly 6.9 kB minified and gzipped (about 18.9 kB minified, or 6.3 kB with Brotli compression). It reports splitting a roughly 2,000-word article into lines in about 10 milliseconds on a laptop, achieved through a documented single-read-then-single-write execution pattern intended to avoid forcing an extra layout reflow. The project's own demo page doubles as its test suite: fifty documented layout scenarios, each verified against what the three major browser engines (Chromium, WebKit, and Firefox) actually painted, runnable headlessly via Playwright with `npm test`.

## API shape (high level)
The library exposes a single primary function, `splitText(target, options?)`, which mutates the target element in place and returns an object describing the resulting `lines`, `words`, `chars`, and any `masks` (clipping wrappers used to slide content out from under a mask edge), along with a `revert()` method to restore the original markup. Configurable options include which unit types to produce, which elements to mask for clip-based reveal animations (with per-level clip-reach tuning for descenders and accents), a CSS selector for content to leave untouched, and custom class names to apply alongside the library's own data attributes.

## Showcase and licensing
The README lists four external sites reported to already use kugiri for their text splitting (Ascension, House of Honey, The Content Architecture, and Aspen Search), consistent with the author's claim of prior production usage before the public release. The project is MIT licensed on both GitHub and npm.

## Evidence boundary
The GitHub README, GitHub API repository metadata, and npm registry metadata were inspected directly for this capture. No package was installed, no demo or test suite was run, and no text-splitting behavior was independently verified across browser engines in this capture; all performance, size, and cross-browser-parity figures are the author's own stated and self-tested results.

## Sources
- https://github.com/edoardolunardi/kugiri
- https://www.npmjs.com/package/kugiri
- https://edoardolunardi.github.io/kugiri/ (live demo and test suite)
