---
title: "React Native Deploy: EAS-compatible builds on GitHub Actions"
kind: "project capture"
source_url: "https://reactnativefeel.com/deploy"
short_url: "https://t.co/vSNT6o0dmJ"
tags: ["react-native", "expo", "eas", "github-actions", "ios", "android", "build-pipeline", "testflight", "preview-builds", "ci-cd"]
status: "inbox"
---

# React Native Deploy: EAS-compatible builds on GitHub Actions

## User-provided post text

RO
@bidah
·
30m
Introducing React Native Deploy: free unlimited mobile cloud bluilds managed by you through Github runners.

~/ npm install -g 
@react
-native-feel/deploy

- Share preview builds with a QR code
- Send to TestFlight
- eas.json compatible

The supplied short link redirects to https://reactnativefeel.com/deploy.

## Product claims
The project presents React Native Deploy (`rnd`) as an EAS-compatible CLI for the build and submit parts of Expo Application Services. It uses the app's existing `eas.json` and runs builds in GitHub Actions on the user's repository. The site says standard runners are free for public repositories. Private repositories use GitHub runner minutes. The product says builds can be shared through a QR install page and submitted to TestFlight.

The getting-started guide requires Node.js 20 or later, a GitHub repository, and a token with `repo` and `workflow` scopes. It says the token is stored locally in `~/.eas-gh/auth.json` with mode 0600. App Store Connect workflows also need the relevant App Store Connect credentials. Build and signing secrets are kept in the user's repository and workflow.

## EAS compatibility limits listed in the docs
The docs call the product a drop-in for the `build` and `submit` parts of EAS, not a full EAS replacement. They list several differences and gaps: local builds are refused; Android store submission is not wired up; EAS Update, channels, branches, and other Expo-hosted services are refused; `rnd credentials` reports existing credentials but does not create them; `autoIncrement` is not applied; and some auto-submit and `what-to-test` flags are accepted but do nothing.

## Pricing and evidence limits
The website's pricing page lists standard public-repository runners as free and private-repository rates of $0.062 per macOS minute and $0.006 per Linux minute. These are product-page claims that refer to GitHub runner pricing. The project was not installed, and no build or submission was run. Treat compatibility, costs, feature gaps, and security details as documentation claims that may change.
