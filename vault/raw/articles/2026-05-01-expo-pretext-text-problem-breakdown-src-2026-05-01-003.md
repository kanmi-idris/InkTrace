# expo-pretext text-layout problem breakdown

Captured from user-supplied explanatory text on 2026-05-01.

No canonical source URL was provided with the capture.

---

The supplied text frames React Native text layout as having several long-standing pain points:

- text layout positions are not known until render time
- virtualized lists often need text heights up front but normally require render-then-measure workarounds
- paragraph text cannot naturally flow around irregular shapes like circular avatars
- several text-rendering bugs are described as long-standing, including italic clipping, Android ellipsis issues, and `letterSpacing` problems

The text then positions `expo-pretext` by Juba Kitiashvili, based on Cheng Lou’s original Pretext, as a serious response to those problems.

Claims from the supplied text:

- “Measure before render” is the core idea: hand the library a string, style, and max width, and get back exact rendered height before mounting.
- The text claims text measurement performance on the order of roughly `0.0002ms`.
- The library is described as enabling text that flows around shapes on mobile without Skia or SVG tricks.
- Drop-in components such as `<SafeText>`, `<TruncatedText>`, and `<InkSafeText>` are said to address more than eighteen long-standing React Native rendering bugs.
- The library is also described as exposing hooks for:
  - streaming AI text
  - pinch-to-zoom with per-frame layout recomputation
  - typewriter animations
  - collapsible text
  - `useFlashListHeights` for pre-warmed virtualization height caches

Positioning from the supplied text:

- `expo-pretext` is framed as removing an entire category of React Native text-layout pain rather than merely adding a convenience feature.
- The text mentions that a deeper breakdown is covered in “React Native Rewind #39,” but no canonical URL for that material was supplied here.
