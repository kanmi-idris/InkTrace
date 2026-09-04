---
title: "react-native-screen-choreography: Multi-Element Shared Transition Coordination for React Navigation"
kind: "paste"
captured_at: "2026-09-04 02:56"
tags: ["react-native", "react-navigation", "shared-element-transition", "reanimated", "worklets", "react-native-screens", "react-native-teleport", "animation", "mit", "pre-1.0"]
source_url: "https://github.com/DorianMazur/react-native-screen-choreography"
status: "inbox"
---

# react-native-screen-choreography: Multi-Element Shared Transition Coordination for React Navigation

## Source overview
react-native-screen-choreography is a React Native library for coordinating shared-element transitions between screens that involve more than one moving element at once (for example a card container, an icon, and a label all animating together during one navigation), rather than the single-element crossfade most shared-transition libraries provide. It is authored by Dorian Mazur and is explicitly marked pre-1.0: the README states the public API is still converging and minor version bumps can introduce breaking changes.

GitHub API metadata checked on 2026-09-04 reports 47 stars, 0 forks, 0 open issues, TypeScript as the primary language, MIT license. The repository was created 2026-04-28.

## What it coordinates
Per the README, one 'transition session' is driven by a single shared progress value and can include multiple paired elements, a dimmed backdrop, progressive reveal of destination content, and handling for a transition being interrupted or reversed mid-flight (such as an in-progress back gesture). It provides a native overlay that sits above React Navigation's native-stack screen containers so the library, rather than the stack navigator's own screen-transition animation, owns how the visible transition is presented.

## Required stack and peer dependencies
The library requires React Native 0.76 or newer with the New Architecture (Fabric) enabled, React 18+, React Navigation's native stack (v6+, validated on v7), react-native-reanimated 4+, react-native-screens 4+, react-native-teleport 1.2+, and react-native-worklets 0.8+. Its own example app is validated against React Native 0.83, React 19, and Reanimated 4. Because the library depends on UI-thread worklets for measurement and scheduling, the app's Babel config must include the react-native-worklets Babel plugin, and iOS setup requires the usual CocoaPods install step.

The documented native-stack configuration needed for reliable behavior is: disabling the stack's own screen-transition animation, presenting the destination screen as a transparent contained modal, and giving that destination screen a transparent content style, so the choreography library's own overlay is the only thing animating the visible transition rather than competing with the navigator's built-in animation.

## Core building blocks
- `ChoreographyProvider`: a top-level provider hosting the element registry, transition coordinator, and native overlay; wraps the app above `NavigationContainer`.
- `ChoreographyScreen`: wraps each screen to give it a stable identity for registration and to manage per-screen visibility during a transition (the source screen's non-shared content fades out as a forward transition begins; the destination screen is revealed starting from the transition's first animation frame, with only its individually shared elements hidden until they are handed off).
- `SharedElement`: tags one element by a compound (screen ID, group ID, element ID) identity on both the source and destination screen, paired with a developer-supplied 'transition renderer' function that defines how that specific element visually moves, resizes, or fades between its two positions; the library coordinates timing and measurement but does not choose the visual behavior itself. `SharedElement.Target` handles cases where a nested child, rather than the wrapping element, owns the actual visual bounds being measured.
- `SharedElement.Live` / `SharedElement.LiveTarget`: for one stateful native view (for example a video player, a map, or a camera preview) that must physically survive the transition without remounting; this pairing uses the react-native-teleport library to reparent the live native subtree into the overlay and then into its destination host, rather than treating it as an ordinary re-rendered element.
- `useChoreographyNavigation`: a hook wrapping standard React Navigation navigation calls to pre-measure the source element, prepare the pending destination's visibility, and start (or reverse) a transition session.
- `useInteractiveTransition`: a hook for driving a custom gesture-based back transition, exposing a gesture-normalized progress value (0 for the untouched detail screen, 1 for a fully completed back gesture), a worklet-compatible per-frame progress setter, and a velocity-aware settle function; the README notes this controlled API is not yet automatically wired to native-stack's own built-in swipe-back gesture.
- `useChoreographyProgress`, `useLatchedReveal`, and `useStaggeredReveal`: companion hooks for reacting to the active transition's progress on the destination screen, such as fading in a backdrop, gating when secondary content appears, or staggering multiple sections' reveal timing.

## Documented troubleshooting patterns
The README includes a symptom-to-fix troubleshooting table covering several specific failure modes: a blank flash at animation start (fixed by ensuring `ChoreographyProvider` stays mounted above the navigator and is not remounting between routes); a source card visibly double-rendering during the transition (fixed by disabling the stack's own screen animation); an opaque background showing behind a supposedly transparent morphing element (fixed by using the documented transparent contained-modal presentation and content style); a 'no valid pairs found' warning when a target element never registered or measured to zero size; visual snapping at the end of an animation caused by animating shadow properties per-frame instead of the newer `boxShadow` style property; a warning about a duplicate element identity when the same (screen ID, group ID, element ID) tuple is mounted twice; and a jump on the reverse transition on Android when the originating list row was scrolled off-screen and unmounted while its detail view was open.

## Known limitations (as stated by the author)
The README explicitly documents that: the best-supported configuration remains React Navigation's native-stack with its built-in screen animation disabled; custom back-gesture progress is not yet automatically linked to native-stack's own built-in swipe-to-go-back gesture; starting a transition still depends on a live measurement of the destination's structural elements on first open, though repeated openings of the same destination layout can reuse cached measurements after that first validation pass; and ordinary shared-element renderers receive frozen React content, computed style, and measured bounds rather than a captured pixel snapshot of the source view, with `SharedElement.Live` as the specific, opt-in mechanism for the one case (a stateful native view) where that frozen-content model would not work. A separate `docs/library-comparison.md` file in the repository is stated to compare this approach against other shared-transition libraries, though that comparison document's specific content was not independently reviewed in this capture.

## Example app
The repository ships an example app demonstrating a wallet-style token list to token detail transition, runnable via a standard Yarn install, iOS pod install, and `yarn ios` / `yarn android`.

## License
MIT.

## Evidence boundary
The GitHub README and repository API metadata were inspected for this capture. No package was installed, no example app was run, and no shared-element transition was implemented or tested during this capture. Behavioral claims about transition smoothness, native overlay ownership, and the documented troubleshooting fixes are the library author's own stated design and have not been independently verified in this capture.

## Sources
- https://github.com/DorianMazur/react-native-screen-choreography
- https://github.com/DorianMazur/react-native-screen-choreography/blob/main/docs/architecture-plan.md
- https://github.com/DorianMazur/react-native-screen-choreography/blob/main/docs/limitations-and-next-steps.md
- https://github.com/DorianMazur/react-native-screen-choreography/blob/main/docs/library-comparison.md
