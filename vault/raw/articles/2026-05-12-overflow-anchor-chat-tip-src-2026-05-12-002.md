# overflow-anchor Chat Scroller Tip

Captured from a user-supplied frontend note on 2026-05-12.

Source type:

- User-supplied CSS implementation tip.

---

Core idea captured from the supplied text:

- A chat scroller can be pinned to the bottom using CSS `overflow-anchor` rather than JavaScript mutation observers or imperative `scrollTo()` logic.

Example structure captured from the supplied text:

```html
<div id="scroller">
  ...
  ...
  <div id="anchor"></div>
</div>
```

```css
#scroller * { overflow-anchor: none; }
#anchor { overflow-anchor: auto; height: 1px; }
```

Behavior explanation captured from the supplied text:

- Browsers run scroll anchoring by default to reduce layout shifts.
- The tip disables anchoring on the scrolling children and re-enables it on a 1px anchor element at the end.
- The result is that the scroll position follows new content downward automatically.

Interpretive note:

- This source fits the catalog as a small browser-behavior trick for chat, streaming, or feed-like interfaces where bottom-stickiness is desired without extra JavaScript bookkeeping.
