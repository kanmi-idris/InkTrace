---
title: "rn-story: Instagram-Style Stories for React Native (Post Describes 2.0/expo-av, Current Release Is 3.0/expo-video)"
kind: "paste"
captured_at: "2026-09-17 04:45"
tags: ["rn-story", "react-native", "expo", "expo-video", "expo-av", "instagram-stories", "typescript", "ui-component", "mit"]
source_url: "https://github.com/AbdullahAnsarii/rn-story"
status: "inbox"
---

# rn-story: Instagram-Style Stories for React Native (Post Describes 2.0/expo-av, Current Release Is 3.0/expo-video)

## Source overview
rn-story is a TypeScript React Native/Expo component by Abdullah Ansari that renders an Instagram/WhatsApp-style full-screen stories viewer: per-story animated progress bars, tap-left/tap-right navigation, long-press to pause, image and video support, and a 'See More' link button. A Reddit post shared in this conversation (originally posted to r/expo) describes version 2.0 of the package, built on `expo-av` as its video-playback peer dependency.

GitHub API metadata and the npm registry, checked directly at capture time, show the package has since moved past that description: GitHub reports 16 stars, 2 forks, MIT license, TypeScript as the primary language, and a repository creation date of 2023-05-26; npm's registry reports the current published version as 3.0.1, also MIT licensed.

## Important discrepancy: the shared post describes an outdated version
The current GitHub README documents a 3.0 release that specifically replaces `expo-av` (described in the README itself as deprecated) with `expo-video` as the video-playback peer dependency, stating this change was made because `expo-av` no longer exists starting at Expo SDK 55. The current installation command is documented as `npx expo install rn-story expo-video react-native-safe-area-context`, not the `rn-story expo-av` combination shown in the shared post. The README explicitly preserves 2.x for apps still on `expo-av` (available as `rn-story@2` on npm) and documents a short migration table for upgrading to 3.0. The project's own live Expo Snack demo is noted in the current README as still intentionally running 2.x/`expo-av`, specifically because Expo Snack's web player cannot yet load `expo-video` and Snack itself is capped at Expo SDK 55; the README states the demo will move to 3.x once that limitation is resolved.

This record therefore treats the shared post's specific version number (2.0), peer dependency (expo-av), and 'first release with a real test suite (30 tests)' claim as accurate for the version it was actually describing at the time it was written, but out of date relative to the package's current 3.0.1 release, which this capture verifies directly from the current README and npm registry.

## What the component provides (per the current README, current for 3.0)
- Full-screen image and video stories with a synced animated progress bar per story, played through `expo-video` with a dedicated player per story.
- Preloading: the next story's image is prefetched and the next video's player buffers ahead of time, so advancing does not show a loading flash; this can be disabled via a `preloadNext` prop.
- Familiar gesture set: tap the right half to advance, tap the left half to go back, long-press to pause (with resume continuing from the remaining time rather than restarting), and the Android hardware back button wired through an `onClose` callback.
- A distinction between ordinary navigation callbacks (`onNext`/`onPrevious`, which do not fire at the ends of the story list) and two dedicated edge callbacks (`onAllStoriesEnd` when the user tries to advance past the last story, `onPreviousFirstStory` when backing out of the first story), specifically intended for building a multi-profile 'avatar rail' experience where finishing one profile's stories moves to the next profile.
- An optional 'See More' link per story (the swipe-up pattern implemented as a tappable button rather than an actual swipe gesture), with hooks (`onSeeMorePress`, `renderSeeMore`) to fully customize or replace that button.
- A customizable per-story header slot (`ReactNode`) intended for an avatar, username, and close button.
- Extension points for swapping in a custom image component (e.g. `expo-image` with blurhash placeholders) via `renderImage`, extra props reaching the underlying `Image` and `expo-video`'s `VideoView` directly, and a `configurePlayer` callback for reaching `expo-video`'s player object directly (for settings like background audio mixing behavior).
- Safe-area awareness: when `react-native-safe-area-context` is installed, progress bars, the header, and the See More button are automatically kept clear of notches and Android's edge-to-edge status/navigation bars; otherwise a manual `safeAreaInsets` prop is available as a fallback.
- Per-story HTTP headers for authenticated/protected media, an `onStoryStart` callback documented as intended for view-tracking/analytics, and a documented watchdog/timeout mechanism so a video that never reports its duration or an image that never finishes loading does not permanently stall the viewer.
- Full TypeScript coverage: `Story`, `StoriesProps`, `StoryMediaType`, and other related types are exported.

## Requirements (current, 3.0)
Expo SDK 52 or newer with `expo-video` 2.0 or newer, or a bare React Native 0.76+ app with Expo modules manually configured, plus React 18 or newer. A documented note on video hosting: iOS's AVPlayer-based playback requires the video's hosting server to support HTTP range requests (returning `206 Partial Content`) for progressive MP4 playback to work; the README suggests testing a video URL with a manual range-request curl command and notes that MP4s encoded with the `moov` atom placed up front ('+faststart') start noticeably faster.

## License
MIT.

## Evidence boundary
The current GitHub README was fetched and read directly, and GitHub API plus npm registry metadata were checked separately, both confirming the package has moved to version 3.0.1 on `expo-video` since the shared Reddit post (which describes 2.0 on `expo-av`) was written. No package was installed, and the linked Expo Snack demo and the migration/testing claims were not independently run or reproduced in this capture.

## Sources
- https://github.com/AbdullahAnsarii/rn-story (current README, primary source for this record)
- https://www.npmjs.com/package/rn-story
- https://snack.expo.dev/@abdullahansari/rn-story-demo (linked demo, noted by the current README as still running the older 2.x/expo-av build)
- User-provided Reddit post (r/expo) describing rn-story 2.0, treated as accurate for the version it describes but superseded by the current 3.0.1 release
