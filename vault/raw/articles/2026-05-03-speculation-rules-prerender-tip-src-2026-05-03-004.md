# Speculation Rules Prerender Tip

Captured from a user-supplied explanatory note on 2026-05-03.

Source type:

- User-supplied web-performance note about the HTML Speculation Rules API.

---

Core mechanism captured from the supplied text:

- Add a single `<script type="speculationrules">` tag containing JSON.
- The browser can then prefetch or prerender likely next pages before the user clicks.

Example captured from the supplied text:

```html
<script type="speculationrules">
{
  "prerender": [{
    "where": { "href_matches": "/*" },
    "eagerness": "moderate"
  }]
}
</script>
```

Behavior notes captured from the supplied text:

- `prerender` is described as fully loading and rendering the page in the background, including JavaScript execution.
- `eagerness` levels are described as `conservative`, `moderate`, and `eager`.
- Rules can target specific URLs, patterns, or CSS selectors.

Positioning captured from the supplied text:

- The note emphasizes that the feature works on plain static HTML and does not require React, Next.js, Nuxt, Vue, or another frontend framework.
- It is framed as especially relevant for traditional multi-page applications.

Support and caveats captured from the supplied text:

- Support is described as strong in Chrome and Edge.
- Firefox and Safari are described as safely ignoring the tag as progressive enhancement.
- The note warns that prerendering consumes CPU and memory and should be avoided on pages with heavy side effects.
- The note claims the browser usually limits prerendered pages to a small number and applies heuristics.

Interpretive note:

- This source fits the catalog as a practical browser-platform performance tip for fast-feeling MPA navigation without framework-specific infrastructure.
