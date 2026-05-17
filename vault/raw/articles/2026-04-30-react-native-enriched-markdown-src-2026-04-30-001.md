# react-native-enriched-markdown

Captured from user-supplied repository page text on 2026-04-30.

Canonical URL:
https://github.com/software-mansion-labs/react-native-enriched-markdown

---

Repository: `software-mansion-labs/react-native-enriched-markdown`

Repository description:
Markdown Input & Text for React Native.

README highlights from the supplied text:

- `react-native-enriched-markdown` renders Markdown as native text and also provides a rich text input that outputs Markdown.
- Supported platforms listed: iOS, Android, macOS, and Web.
- Native platforms require the React Native New Architecture (Fabric).
- Supported React Native releases listed: 0.81, 0.82, 0.83, and 0.84.
- `EnrichedMarkdownText` features highlighted:
  - fully native text rendering with no WebView
  - web support via `react-native-web` plus `md4c` compiled to WebAssembly
  - CommonMark compliance
  - GitHub Flavored Markdown support
  - LaTeX math rendering
  - Markdown streaming support via `react-native-streamdown`
  - customizable styles for all elements
  - text selection and copy support
  - custom selection menu items
  - interactive links
  - spoiler text
  - native image interactions on iOS
  - accessibility support
  - full RTL support
- `EnrichedMarkdownTextInput` features highlighted:
  - rich text input with Markdown output
  - imperative formatting API
  - native context menu with formatting submenu
  - real-time style state detection
  - auto-link detection
  - smart copy/paste with Markdown preservation
  - customizable bold, italic, and link colors
- Web support notes:
  - no New Architecture requirement on web
  - only `EnrichedMarkdownText` is supported on web
  - `EnrichedMarkdownTextInput` is native-only
  - LaTeX math on web requires optional `katex`
- Expo setup notes:
  - `npx expo install react-native-enriched-markdown`
  - `npx expo prebuild`
  - not supported in Expo Go because native changes are required
- Future plans listed:
  - richer input support for headings, lists, blockquotes, code blocks, mentions, and inline images
  - web support for `EnrichedMarkdownTextInput`
  - macOS improvements
  - additional web features like spoiler text and copy options

Repository metadata visible in the supplied text:

- Public repository
- 594 stars
- 30 forks
- 7 releases
- Latest visible release: `v0.5.0`
- 13 contributors
- MIT license
