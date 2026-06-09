# Details that make interfaces feel better

Captured from the user-supplied article text and URL on 2026-05-27.

Canonical URL:
https://jakub.kr/writing/details-that-make-interfaces-feel-better

Source type:
- article
- design-engineering guidance

Project relationship visible in the supplied text:

- The article is by Jakub Krehel.
- It also promotes a related installable skill:
  - `npx skills add jakubkrehel/make-interfaces-feel-better`
- The article therefore serves both as standalone interface-craft guidance and as the conceptual basis for an agent skill.

Core framing captured from the article:

- The article argues that strong interfaces usually emerge from many small details compounding together rather than one large design move.
- The tips are intentionally small, implementation-oriented, and directly applicable to production interfaces.

Concrete interface details captured from the article:

- text wrapping improvements
  - `text-wrap: balance` for titles
  - `text-wrap: pretty` for paragraphs
- concentric border radius
  - outer radius equals inner radius plus padding
- contextual icon animation
  - opacity, scale, and blur when swapping or revealing icons
- crisp text on macOS
  - `-webkit-font-smoothing: antialiased`
- tabular numbers
  - `font-variant-numeric: tabular-nums`
- interruptible animations
  - transitions for interactions
  - keyframes for staged sequences
- split and staggered enter animations
  - animate smaller chunks rather than one large block
- subtler exit animations
  - less motion than enter transitions
- optical rather than purely geometric alignment
- layered shadow treatment instead of visible borders
- faint image outlines using low-opacity overlays

Implementation emphasis captured from the article:

- The examples are not abstract aesthetic advice; they are paired with CSS, Tailwind, Motion, or component snippets.
- Several recommendations are especially about perceptual polish rather than formal layout correctness, such as optical alignment, concentric radius matching, and subtle exit motion.

Interpretive note:

- This source is strongest as practical design-engineering and UI-polish guidance. Its durable value is a compact set of concrete implementation heuristics for typography, spacing, animation behavior, alignment, borders, and image treatment that collectively make interfaces feel more deliberate.
