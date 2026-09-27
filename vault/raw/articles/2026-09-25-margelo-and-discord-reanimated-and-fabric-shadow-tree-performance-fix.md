---
title: "Margelo and Discord: Reanimated and Fabric Shadow Tree Performance Fix"
kind: "paste"
captured_at: "2026-09-25 15:18"
tags: ["react-native", "discord", "margelo", "reanimated", "fabric", "shadow-tree", "new-architecture", "android", "performance", "feature-flags", "supplemental-capture"]
source_url: "https://margelo.com/blog/margelo-discord-react-native-performance"
status: "inbox"
---

# Margelo and Discord: Reanimated and Fabric Shadow Tree Performance Fix

## Relation to existing coverage
InkTrace already has a placeholder-only record for this article: src-2026-06-14-008, titled margelo on discord new architecture performance. This supplemental capture fills that record's missing evidence without overwriting the earlier raw file or source record. The article is Margelo's April 21, 2026 engineering write-up by Hanno Gödecke about Discord's Android New Architecture animation regression.

## Problem
Discord had migrated much of its Android app to React Native's New Architecture, but animations and transitions became visibly janky. The investigation focused on Reanimated 3 shared-value animations and how Reanimated applied UI updates through Fabric's Shadow Tree. The article's central finding was not that the recursive cloning algorithm was inherently incorrect. The cost came from the number of Shadow Nodes it had to traverse and clone, including nodes that were registered as animated but were no longer actively animating.

## Reanimated update path
A shared value created on the normal React Native JavaScript runtime schedules its update onto Reanimated's UI runtime. An animation such as withTiming produces an animation object, and Reanimated advances it frame by frame through its UI-runtime requestAnimationFrame implementation. On Android this is backed by Choreographer; on iOS it is backed by CADisplayLink.

useAnimatedStyle creates a mapper that recomputes styles when shared values change. createAnimatedComponent associates the animated style with mounted views through view descriptors containing the view tag and Shadow Node. The resulting property updates are batched and sent through Reanimated's global updateProps JSI function into its C++ implementation.

## Fabric and the bottleneck
In the New Architecture, Shadow Nodes are immutable snapshots. Reanimated cannot modify one in place. To apply animated properties through the Shadow Tree, it calls shadowTree.commit and clones the affected tree path with the new props. A recursive clone algorithm traverses the existing tree and shares unaffected branches.

The Discord problem was the size of the update set. If a screen contained many Animated.Views, Reanimated's props registry could retain all of them while the screen remained mounted. Animating one notification bell could therefore cause the commit path to traverse and clone hundreds of Shadow Nodes, even when most nodes had finished their animations. A React commit also passed through Reanimated's commit hook so settled animated props could be merged back over React's tree state, adding more repeated work.

A second issue involved non-layout properties such as opacity. Updating them through Shadow Tree commits could trigger layout work, even though opacity does not change size, padding, or position. Reanimated had a direct native fast path for non-layout updates, but that path could create correctness problems with Pressable and touch handling because it bypassed the Shadow Tree source of truth. The article explains why raw speed was not enough without state synchronization.

## Discord's fix
The fix had two connected parts:

1. Sync settled animation values back into React once an animation finished. This made React and the Shadow Tree agree with the final animated state.
2. Remove nodes from the animated props registry once they were synchronized and no longer animating. This was the main performance improvement because future commits no longer treated settled nodes as active animated targets.

After state synchronization was available, the team could safely restore the synchronous fast path for non-layout properties. Those updates could then reach native views without paying the full layout-oriented Shadow Tree commit cost, while layout-affecting properties continued through the normal commit path.

The article says Margelo and Discord discussed the changes with Software Mansion and Meta, and that much of the work was later upstreamed. It reports a 26 percent reduction in Discord's janky-frame rate on the Android New Architecture app, returning it to earlier performance levels. This percentage is an author-reported real-world result, not independently reproduced in this capture.

## Current upstream status
The article identifies FORCE_REACT_RENDER_FOR_SETTLED_ANIMATIONS as the flag that enables React synchronization for settled animations. The official Reanimated feature-flag documentation lists this flag as available since Reanimated 4.2.0 and enabled by default from 4.3.0 onward.

The article also identifies ANDROID_SYNCHRONOUSLY_UPDATE_UI_PROPS and IOS_SYNCHRONOUSLY_UPDATE_UI_PROPS as flags for synchronous non-layout property updates. The official feature-flag documentation lists the Android flag from Reanimated 4.0.0 and the iOS flag from 4.2.0, with both defaulting to false in the current documentation.

The article's longer-term direction is the shared animation backend. React Native 0.85 officially introduced that backend in collaboration with Software Mansion. The React Native release notes describe it as an internal engine shared by Animated and Reanimated, moving core animation update logic into React Native so reconciliation can be tested and kept stable across future releases.

## Practical model
The article's useful mental model is that New Architecture animation performance depends on both animation execution and tree reconciliation. UI-thread execution alone does not guarantee smoothness if each frame causes an unnecessarily large Shadow Tree update. A high-performance animation system must keep three states aligned: the current animated value, React's source-of-truth props, and Fabric's immutable Shadow Tree. Once an animation settles, its target should leave the active registry. For non-layout props, a direct UI-thread update can be valuable, but only when React and Fabric will not later overwrite it with stale state.

## Evidence boundary
The Margelo article was fetched directly. The React Native render-pipeline documentation, Reanimated feature-flag documentation, and React Native 0.85 release notes were also checked as primary references. I did not build Discord, run a Reanimated benchmark, reproduce the 26 percent jank reduction, or enable these flags in an application. The article's performance measurements and Discord-specific results remain author-reported.

## Sources
- https://margelo.com/blog/margelo-discord-react-native-performance
- https://docs.swmansion.com/react-native-reanimated/docs/guides/feature-flags
- https://reactnative.dev/blog/2026/04/07/react-native-0.85
- https://reactnative.dev/architecture/render-pipeline
- Existing placeholder: src-2026-06-14-008
