# Moving away from @expo/vector-icons

Captured from the Expo blog on 2026-06-10.

Canonical URL:
https://expo.dev/blog/moving-away-from-expo-vector-icons

Article metadata captured:
- Title: Moving away from @expo/vector-icons
- Publisher: Expo Blog
- Author: Vojtech Novak
- OG description: We cut our repro app's bundle by 4 MB by switching from @expo/vector-icons to @react-native-vector-icons. Here's why we now recommend the change.

Core framing captured from the article:

- Expo now recommends switching from `@expo/vector-icons` to the icon-pack-specific `@react-native-vector-icons/*` packages.
- The latest `@react-native-vector-icons` packages now fully support Expo apps, including Expo Go, and integrate directly with `expo-font` by calling its native font-loading API when needed.
- Expo says this change simplifies the ecosystem, reduces confusion, and can shrink shipped bundle and asset size.

Why Expo no longer recommends `@expo/vector-icons`:

- Historically, `@expo/vector-icons` was a convenience wrapper around `react-native-vector-icons` that used `expo-font` to load icon fonts dynamically for Expo Go, development builds, OTA updates, and projects where fonts were not bundled natively.
- Expo says the ecosystem has evolved enough that this wrapper is no longer necessary.
- Supporting third-party libraries that imported `react-native-vector-icons` required aliasing it to `@expo/vector-icons` through Babel or Metro, which Expo now describes as unnecessary complexity and maintenance burden.
- Expo also says maintaining a wrapper around third-party icon fonts is not aligned with Expo's core platform focus.

Benefits of the migration captured from the article:

- Access to newer icon-set packages and versions, including sets not previously available in `@expo/vector-icons`, such as Lucide.
- Easier custom icon-set creation via the upstream generator tooling.
- Better type-checking for icon names when using helpers like `createIconSetFromFontello` or `createIconSetFromIcoMoon`.
- Smaller shipped bundle and asset payloads because apps may accidentally bundle all icon fonts through `@expo/vector-icons` even if they only use one or two.
- Expo links to a repro app where changing the import statement and package dependency cut shipped bundle and asset payload size by around `4 MB`.
- Cleaner project setup with no aliasing configuration, one source of truth for icon packages, and less version-drift risk.

Migration steps captured from the article:

- Run `npx @react-native-vector-icons/codemod` and verify the output.
- Run `npx expo doctor` to verify that `@expo/vector-icons` or `react-native-vector-icons` have not remained in the project.
- Ensure `expo-font` is installed and configured.
- Do not add font paths from `node_modules/@react-native-vector-icons/` to the `expo-font` config plugin, because Expo says this causes a build error.
- Double-check custom fonts or icons, especially if the project previously relied on helpers such as `createIconSetFromIcoMoon`.

Potential issues captured from the article:

- Mixing old and new icon package families or multiple versions of the same font package can lead to rendering failures such as `?` or empty squares.
- Expo says it added a doctor warning to detect mixing of the new icon packages from `@react-native-vector-icons` with older package shapes.

Interpretive note:

- This is the stronger primary source behind the earlier Expo deprecation tweet.
- The durable takeaway is not just that `@expo/vector-icons` is being deprecated, but that Expo now recommends direct upstream package usage because the compatibility gap has closed and the wrapper can materially increase bundle size and project complexity.