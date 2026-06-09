# Diffshub / On Rendering Diffs

Captured from the user-supplied Diffshub URL, pasted article text, and pasted demo text on 2026-06-03.

Canonical URL:
https://diffshub.com/

Article metadata captured from pasted page:
- Site/header: Pierre Computer Company
- Article title: On Rendering Diffs
- Posted: May 29, 2026
- Author handle shown: `@amadeus`
- Package mentioned: `@pierre/diffs`
- Playground/site mentioned: DiffsHub.com

Core framing captured from the article:

- The article argues that diff rendering is hard at large scale even though it looks like "just text".
- Code review surfaces need syntax highlighting, line numbers, annotations, comments, theming, split and unified layouts, wrapping modes, and design-system integration.
- The article presents `CodeView` as a virtualization-first component for reviewing code and diffs.
- The goal is framed as: teams should be able to "just render any diff", within practical browser, compute, and memory limits.

Diff rendering problem categories captured:

- Rendering: DOM complexity grows quickly and can overload scrolling or interaction.
- Processing: per-file or per-diff work gets multiplied across thousands of files.
- Memory: patch content and derived rendering structures can push browser memory limits and increase garbage collection.

Virtualization details captured:

- The earlier simple virtualizer reduced offscreen rendering but still had O(n x m) complexity, high memory use, and virtualization blanking.
- Common virtualization tradeoffs described:
  - Real scroll region plus positioned visible items preserves native scrolling but can expose blank space if JavaScript lags.
  - Sticky/fixed visible content updated with `requestAnimationFrame` avoids blanking but can hitch when JavaScript cannot keep up.
  - Fully emulated scrolling avoids browser scroll-size limits but requires owning native-feeling, accessible scrolling behavior.
- `CodeView` uses an "Inverse Sticky Technique".
- Inverse sticky behavior:
  - The rendered region scrolls normally while the viewport is inside the rendered range.
  - If JavaScript falls behind, the rendered region sticks to an edge rather than scrolling away and exposing blank space.
  - The bottom edge sticks to the bottom of the viewport while scrolling down past the rendered range.
  - The top edge sticks to the top of the viewport while scrolling back up.
  - Negative top and bottom sticky offsets use the formula `(contentHeight - viewportHeight) * -1`.
- Safari can still expose blank space under aggressive scrolling because of compositing behavior.

Scalable layout details captured:

- First-pass estimates are cheap:
  - files are roughly `lineHeight * totalLines`
  - diffs can use `(lineHeight * diff.splitLineCount) + (diff.hunks.length * hunkSeparatorHeight)`
- Each rendered file or diff receives viewport size and position and decides which internal line range to render.
- The old line-range lookup could pathologically iterate from the start of huge hunks.
- A cached position-to-line checkpoint system allows binary search to find a closer starting point before doing remaining range search.
- Rendered ranges can verify estimates against the actual DOM and store deltas.
- Built-in browser scroll anchoring is disabled with `overflow-anchor: none`.
- CodeView implements its own anchoring by choosing a visible file or line from the layout model before DOM changes, reconciling measured height changes, and adjusting scroll position if the anchor moved.

Memory and processing details captured:

- Pathological diffs such as Linux v6 to v7 can mean more than 700 MB of patch content.
- Small parsed substrings can accidentally retain large source strings depending on JavaScript engine representation.
- Copying strings can reduce retained memory by detaching parsed line content from the original patch input.
- The article reports memory dropping from 2.4 GB to around 1.15 GB and parse time dropping by about 80% for a Linux diff after this optimization.
- DOM element pooling reuses Shadow DOM wrappers, stylesheets, theme styles, and SVG icon atlases rather than recreating them whenever virtualized items enter and leave view.
- Shared options state avoids spreading new configuration objects across every file or diff instance when global display settings change.
- Deferred syntax highlighting lets files and diffs render first as plain text, then request highlighted output from a worker pool.
- Each worker owns a Shiki highlighter.
- An LRU cache stores highlighted results, and APIs can prime the highlight cache for soon-to-render files.

Open issues and future work captured:

- CSS layout and paint costs can become major costs during aggressive scrolling.
- Serialization in the syntax-highlighting worker pipeline can become expensive for files with tens of thousands of lines.
- Horizontal scrolling and extremely long lines are not virtualized.
- Future plans include lightweight editing, semantic diffs, and moving some work server-side when appropriate.
- WebKit/Safari issues noted include sticky compositing performance, limited profiling visibility, offscreen compositing unpredictability, deep scrolling/layout bugs with slot containers, and `requestAnimationFrame` capped at 60Hz on high-refresh displays.

Diffshub text-range highlighting demo captured from the user message:

- The demo compares two elements' flattened text character-by-character.
- Mismatches are painted with CSS Custom Highlight API names:
  - `::highlight(highlight-diff-base)` on the left/reference side.
  - `::highlight(highlight-diff-compare)` on the right/compare side.
- No markup is injected.
- Example comparison:
  - `Hello, world.`
  - `Hello, kitty.`
  - differing positions: 5.
- A DOM-split example wraps each word in its own inline node, but flattened text and positional diff remain unchanged; highlight ranges are clipped to real text-node ranges and split across spans as needed.
- A string-reference example uses a plain expected string without its own DOM; only the editable element is painted because the reference string contributes to diff counting but has no DOM ranges to highlight.
- A live algorithm-swap demo uses `ctrl.update({ diff })`.
- The positional algorithm compares index by index, so insertions shift downstream positions into the diff.
- An LCS-based edit-script aligns equal substrings and paints only actual insertions and deletions.
- Algorithm switching triggers recomputation through `COMPARE_RECOMPUTE_KEYS`.

Interpretive note:

- This source belongs in the catalog as diff-rendering infrastructure and browser performance engineering.
- The article is unusually implementation-specific: it documents virtualization, scroll anchoring, DOM pooling, worker-based highlighting, memory retention, and browser-specific compositing tradeoffs.
