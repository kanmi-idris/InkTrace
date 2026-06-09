# react-native-teleport docs: Instagram-like transitions and core guides

Captured from the public documentation referenced by the user on 2026-05-20.

Canonical URL supplied by the user:
https://kirillzyusko.github.io/react-native-teleport/docs/recipes/instagram-shared-transitions

Additional public docs captured in the supplied text:
- `Guides > Teleport`
- `Guides > Portal`
- `Guides > Lifecycle & behavior`
- `Recipes > Jest testing guide`

---

Core recipe framing captured from the Instagram-transition guide:

- The recipe recreates an Instagram-style transition where a tapped feed video expands into a full-screen reels viewer and shrinks back on dismiss.
- The key architectural claim is that there is only one video instance, which is moved between screens rather than unmounted and remounted.
- The documentation describes this sequence:
  - video starts inside a `<Portal>` on the feed
  - on tap, it is teleported to an overlay layer above all screens
  - it animates from card size to full screen
  - after animation, it is teleported into a `<PortalHost>` inside the reels screen
  - going back reverses this path

Why this matters, according to the docs:

- Re-parenting preserves:
  - playback progress
  - animations
  - internal component state
  - scroll position
- The recipe explicitly contrasts this with ordinary navigation, which would unmount the old video and mount a new one, causing visible flashes and playback resets.

State and animation architecture captured from the recipe:

- The example uses:
  - `react-native-teleport`
  - `@react-navigation/native-stack`
  - `react-native-reanimated`
  - `react-native-video`
  - `zustand`
- A Zustand store coordinates:
  - current destination host
  - current transitioning item ID
  - measured Y position
  - Reanimated shared progress value
- The docs emphasize that a shared value keeps animation work on the UI thread and avoids performance issues.

Navigation and layering details captured from the recipe:

- The reels screen is configured as a `transparentModal`.
- The docs explain that this preserves visibility of the feed underneath during animation and makes future swipe-to-dismiss gestures possible.
- A root-level `<PortalHost name="overlay" />` is placed above the navigation tree so teleported content can animate over every screen.

Measurement and layout details captured from the recipe:

- The guide uses `measureInWindow` to capture the tapped video’s absolute on-screen coordinates.
- The feed keeps a fixed outer container height so the scroll layout does not collapse when the video is teleported away.
- Both feed and reels scrolling are disabled during the transition by binding `scrollEnabled` to the shared progress value.

Core library guides captured from the supplied documentation:

- `Portal`
  - renders a component into a different place in the native view hierarchy
  - solves clipping, stacking, and overlay problems better than `zIndex`
- `Teleport`
  - moves an existing view without unmounting or remounting it
  - explicitly positioned for preserving animations, video progress, inputs, and other imperative state
- `Lifecycle & behavior`
  - if a target host does not exist, a portal falls back to local rendering
  - if a host later mounts, children migrate automatically
  - if a host unmounts, children return locally without losing state
  - changing `hostName` migrates content between destinations
  - host ordering and identity rules are documented
- `Jest testing guide`
  - the library ships with a built-in Jest mock via `react-native-teleport/jest`

Interpretive note:

- This source is strongest as view-hierarchy and motion-infrastructure guidance for React Native. The durable value is broader than one Instagram clone: `react-native-teleport` is positioned as a primitive for native-level re-parenting, overlay escapes, mini-player transitions, shared-element-like motion, and other state-preserving UI moves that are difficult to model with ordinary component remounting.
