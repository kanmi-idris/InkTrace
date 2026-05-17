# reanimated-css-animations

Captured from the public GitHub repository page, README, and the linked example component on 2026-05-01.

Canonical URLs:
- https://github.com/yui540/reanimated-css-animations
- https://github.com/yui540/reanimated-css-animations/blob/main/components/Room1/Area1.tsx

---

Repository positioning captured from the public page:

- The repository is `yui540/reanimated-css-animations`.
- The short README and repository description frame it as a personal playground for CSS-animation-like experiments built with React Native Reanimated.
- Public repository metadata at capture time showed a small exploratory project rather than a production library: 26 stars, 1 fork, 4 commits, and no releases.

README text captured from the raw file:

- “React Native Reanimatedは楽しい”
- The text says the repository is a place where the author publishes some of the things they played with in React Native Reanimated.
- The About section describes it as a personal Reanimated version of a CSS-animation playground.

Linked example component observations from `components/Room1/Area1.tsx`:

- The example uses `react-native-reanimated` with `styled-components/native`.
- It defines keyframe-like objects as plain JavaScript maps keyed by percentages such as `0%`, `60%`, and `100%`.
- The `open` and `close` animation objects drive changes in `height`.
- The animation config uses CSS-like properties such as:
  - `animationName`
  - `animationDuration`
  - `animationTimingFunction`
  - `animationDelay`
  - `animationFillMode`
- The config sequences two animations by passing arrays for these properties.
- The example also uses a custom `useLoopFlg` helper to loop the effect over a fixed interval.

Interpretive note:

- This is best treated as pattern and inspiration material for CSS-like animation authoring in React Native rather than as a mature reusable package.
