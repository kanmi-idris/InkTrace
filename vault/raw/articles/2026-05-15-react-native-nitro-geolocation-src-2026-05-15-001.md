# react-native-nitro-geolocation

Captured from the public GitHub repository page on 2026-05-15.

Canonical URL:
https://github.com/jingjing2222/react-native-nitro-geolocation

---

Repository metadata captured from the public page:

- Repository: `jingjing2222/react-native-nitro-geolocation`
- Public GitHub repository
- Visible star count at capture time: `72`
- Visible fork count at capture time: `3`
- README tagline: `Nitro-powered geolocation for modern React Native apps`

Positioning and platform scope captured from the public README:

- The package is described as a native iOS and Android geolocation module for `React Native 0.75+` and New Architecture apps.
- The project explicitly recommends replacing `@react-native-community/geolocation` with `/compat` first, then migrating toward a typed Modern API later.
- The README says Expo development builds and custom native builds are supported.
- It also says Expo managed apps without native rebuilds should use `expo-location`.
- Web is explicitly not supported in `v1.2.x`, with a `/compat` browser fallback planned for `v1.3`.

API design captured from the public README:

- The project exposes two API layers:
  - `Modern API (Recommended)` with direct functions and a single tracking hook
  - `Compat API` at `react-native-nitro-geolocation/compat` for drop-in compatibility with `@react-native-community/geolocation`
- The Modern API examples include:
  - `setConfiguration`
  - `requestPermission`
  - `requestLocationSettings`
  - `getLocationAvailability`
  - `getCurrentPosition`
  - `getLastKnownPosition`
  - `geocode`
  - `reverseGeocode`
  - `getHeading`
  - `watchHeading`
  - `unwatch`
  - `getAccuracyAuthorization`
  - `requestTemporaryFullAccuracy`
  - `useWatchPosition`

Performance and implementation notes captured from the public README:

- The README positions the module around Nitro and JSI-powered direct native calls without Bridge overhead.
- It says benchmark claims apply to cached `getCurrentPosition` reads and the JS-to-native path, not cold GPS acquisition itself.
- The benchmark note explicitly warns that Nitro does not make GPS acquisition `22x faster`; it makes cached reads and call overhead cheaper.

Android, iOS, and development-tooling notes captured from the public README:

- On Android, the README distinguishes between platform `LocationManager` default behavior and explicit Google Play Services fused location when `locationProvider: "playServices"` is selected.
- It also highlights settings resolution, approximate/coarse handling, cached reads, and structured Modern API errors such as `PLAY_SERVICE_NOT_AVAILABLE`, `SETTINGS_NOT_SATISFIED`, and `TIMEOUT`.
- On iOS, the docs mention accuracy authorization and temporary full-accuracy requests.
- The repository also advertises an optional Rozenite DevTools plugin for interactive location mocking, but only for the Modern API, not `/compat`.

Migration notes captured from the public README:

- The repository provides a conservative migration path from `@react-native-community/geolocation`:
  1. swap imports to `/compat`
  2. verify behavior
  3. migrate call sites to the Modern API
- It also provides separate migration guidance for `react-native-geolocation-service`, which the README says should move directly to the Modern API rather than through `/compat`.
- The README additionally surfaces coding-agent migration skills via the Vercel Labs `skills` CLI.

Interpretive note:

- This source is strongest as modern native-utility and migration guidance for React Native geolocation: it combines Nitro and New Architecture positioning, a practical `/compat` bridge for safer adoption, and explicit boundaries around Expo support, web support, and benchmark interpretation.
