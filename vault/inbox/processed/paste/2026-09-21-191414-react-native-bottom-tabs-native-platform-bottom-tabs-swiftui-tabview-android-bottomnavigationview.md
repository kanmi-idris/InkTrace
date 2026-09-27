---
title: "react-native-bottom-tabs: Native Platform Bottom Tabs (SwiftUI TabView / Android BottomNavigationView)"
kind: "paste"
captured_at: "2026-09-21 19:14"
tags: ["react-native", "callstack", "bottom-tabs", "navigation", "swiftui", "android", "react-navigation", "typescript", "mit"]
source_url: "https://oss.callstack.com/react-native-bottom-tabs/"
status: "inbox"
---

# react-native-bottom-tabs: Native Platform Bottom Tabs (SwiftUI TabView / Android BottomNavigationView)

## What it is
react-native-bottom-tabs is a Callstack-maintained React Native library that renders bottom tab navigation using each platform's own native primitive rather than a JavaScript-drawn tab bar: SwiftUI's TabView on iOS and Android's BottomNavigationView on Android. GitHub API metadata checked at capture time reports 1,457 stars, 108 forks, MIT license, TypeScript as the primary language, and a repository creation date of 2024-09-27, indicating a project with roughly two years of history rather than a brand-new release. The README documents supported platforms as iOS, iPadOS, visionOS, tvOS, macOS, and Android; it explicitly notes the library does not support web because it depends on native platform primitives, pointing to a separate 'Web Platform Support' documentation guide for that case.

## Positioning
The project's own landing page describes three intended selling points: (1) using genuine native platform primitives rather than a JS-rendered tab bar, (2) integrating with React Navigation (the dominant React Native navigation library) rather than requiring a separate navigation system, and (3) being designed as a drop-in replacement for existing JavaScript-based bottom tab implementations, implying an intended migration path from React Navigation's standard JS-based bottom tabs rather than a from-scratch integration.

## Distinction from related captures already in this vault
This vault already has records for other native-bottom-tab-adjacent projects that are separate from this one: an Expo NativeTab + Liquid Glass bottom-tabs implementation (2026-07-12 capture) and a general article on nesting tabs and drawers with Expo Router (also 2026-07-12). Those are distinct projects/articles from different authors; this capture does not assume they cover the same codebase. react-native-bottom-tabs is a monorepo maintained by Callstack (an established React Native consultancy that also maintains React Native Testing Library and other widely used RN tooling) with at least three published packages under one repo: the core `react-native-bottom-tabs` package, an `@bottom-tabs/expo-template` package, and an `@bottom-tabs/react-navigation` integration package.

## Repository structure signals
The GitHub repository shows a mature open-source project structure: a monorepo with `apps/`, `docs/`, and `packages/` directories, Yarn workspaces tooling (`.yarn/`, `yarn.lock`, `yarn.config.cjs`), Turborepo (`turbo.json`), SwiftLint configuration (indicating native Swift code, consistent with the SwiftUI TabView claim), a changeset-based release process (`.changeset/`), and both an `AGENTS.md` and a `.agents/skills/agent-device` directory, suggesting the maintainers have set up the repository with AI-coding-agent-specific instructions/skills as part of their contributor tooling. It was scaffolded with Callstack's own `create-react-native-library` tool (`react-native-builder-bob`).

## License
MIT.

## Evidence boundary
The documentation landing page and GitHub repository README were fetched and read directly for this capture, and GitHub API repository metadata was checked separately. The library was not installed, and no bottom tab bar was rendered on any platform during this capture, so the actual visual fidelity of the native TabView/BottomNavigationView integration (shown in a linked demo video on the GitHub README) was not independently verified. Attempting to fetch the getting-started/quick-start docs subpage directly returned an HTTP 404 at the URL path tried, so per-platform setup instructions were not captured in this record; only the landing page and repository-level information are covered here.

## Sources
- https://oss.callstack.com/react-native-bottom-tabs/
- https://github.com/callstack/react-native-bottom-tabs

## Related records in this vault
- Expo NativeTab + Liquid Glass native bottom tabs (2026-07-12 capture) — a separate, unrelated implementation of native-styled bottom tabs for Expo
- Building Balanced Mobile Layouts: Nesting Tabs and Drawers with Expo Router (2026-07-12 capture) — a general navigation-pattern article, not specific to this library
