# GeekNative repository audit

## Source

- https://github.com/GeekyAnts/geeknative

## Project model

The README describes GeekNative as a project template and CLI. It creates an iOS app in SwiftUI, an Android app in Kotlin and Jetpack Compose, and a web app in React and TanStack Start. The apps share no source code. They share product and feature specs, design tokens, copy, icons, app identity, and test criteria.

The CLI generates code from contracts. An agent reads `AGENTS.md`, updates the source of truth, implements changes in each app, runs checks, and records parity. Claude Code has extra subagent and hook support. The README also names Codex, Cursor, and Gemini CLI.

The repository says it has no backend. Its roadmap lists upgrades, broader agent evaluations, visual and end-to-end parity, and backend support as future work.

## Stack and test claims

The README lists SwiftUI and Swift Testing for iOS; Jetpack Compose, Material 3, JUnit, and coroutines-test for Android; and React 19, TanStack Start, Tailwind CSS v4, and Vitest for web. It says the CI workflow runs CLI tests, a project-creation smoke test, and template checks for iOS, Android, and web.

These are repository claims. I did not install the CLI, generate an app, build the template, or run its tests.

## License

The repository lists Apache-2.0. The npm registry lists the same license; see [src-2026-11-06-010].
