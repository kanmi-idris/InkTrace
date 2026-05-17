# CSS tip: scope hover states to hover-capable devices

Captured from user-supplied text on 2026-05-01.

No canonical source URL was provided with the capture.

---

Some hover states can hurt mobile experience because tapped elements may retain hover styling on devices that do not truly support hover interactions.

CSS shown in the supplied text:

```css
@media (hover: hover) {
  .card:hover {
    opacity: 0.5;
  }
}
```

Claim from the supplied text:

- This limits hover transitions to devices that actually support hovering and avoids sticky hover behavior on mobile.
