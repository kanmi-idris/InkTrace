---
title: "Speedflight: Agent-Driven Ad Hoc iOS Build Sharing via Safari Install Links"
kind: "paste"
captured_at: "2026-08-31 21:46"
tags: ["speedflight", "ios", "testflight-alternative", "ad-hoc-distribution", "coding-agents", "claude-code", "app-store-connect", "ci-cd", "github-actions", "websockets"]
source_url: "http://speedflight.dev"
status: "inbox"
---

# Speedflight: Agent-Driven Ad Hoc iOS Build Sharing via Safari Install Links

## Source overview
Speedflight is a free service (no signup required, per the user's post) that lets a coding agent cut a cloud-signed ad hoc iOS build and share it as a Safari-installable link, without the developer needing to be physically at the Mac that built it. The official site, its llms.txt agent-setup file, and its GitHub README (jakemor/speedflight) all corroborate the same core description: a coding agent builds and signs the app, uploads it to speedflight.dev, and posts a link; opening that link in Safari on any iPhone registered to the relevant Apple account lets the user tap Install directly, similar in spirit to TestFlight but self-hosted per project and driven by an agent rather than App Store Connect's TestFlight pipeline.

## Underlying iOS mechanism (ad hoc distribution)
The user's post explains the technique this service is built on: Apple allows a 'little known trick' of hosting a signed ad hoc distribution build (one whose provisioning profile has the target device's UDID registered in the developer's App Store Connect account) and installing it directly from Safari, without going through TestFlight or the App Store. Ad hoc distribution and its device-registration requirement (Apple limits ad hoc provisioning profiles to a capped number of registered devices per membership year) are standard, documented Apple developer program mechanics; only devices already on the app's provisioning profile can install a given build, which is also the stated security model: 'No accounts. The link is the only key, and Apple signs the app, so only devices on the provisioning profile can install it' (per the GitHub README).

## Setup and agent workflow
Per the site, the llms.txt agent instructions, and the GitHub README, setup is meant to be handed to a coding agent rather than done manually:
1. The agent installs the Speedflight skill, documented as runnable via `npx skills add jakemor/speedflight --global --yes --agent claude-code universal --skill speedflight`, or by reading the skill file directly from GitHub if the `npx skills` tool is unavailable.
2. The agent runs the skill's Setup routine once inside the user's iOS repository. This step is described as discovering the Xcode project, finding or requesting an App Store Connect API key, adding a URL scheme to the app if it does not already have one, generating an upload secret stored in a gitignored `.env.speedflight` file, and writing a `scripts/speedflight.sh` helper script.
3. The agent then cuts and shares the first build using the skill's 'Share a build' routine, and posts the resulting page link back to the user (for example, in chat or in a pull request comment).
After initial setup, the documented usage pattern is invoking the skill again with a `/speedflight` command, or having the agent proactively cut and share a build whenever the user's phone is not physically connected but a build is needed.

## Build page features
Per the user's post, each shared build page includes screenshots, a history of past builds, and a 'what's new' / release-notes section, intended to reduce confusion when several builds are in flight across multiple concurrent work threads. The GitHub README corroborates that every build listed on a project's page carries a title, release notes, the source branch and commit, and an attribution of who cut the build.

## GitHub Actions / CI compatibility
The user states the service works with GitHub Actions: an agent operating inside a Linux sandbox or devbox (which cannot itself compile or sign an iOS app) can trigger a CI workflow that runs the actual build and signing step on a macOS CI runner, with the agent then relaying the resulting Speedflight link back to the user or posting it as a pull-request comment. This CI-based flow was not independently verified against Speedflight's own documentation beyond the user's description in this capture; the site's own setup instructions describe an agent working directly inside the user's iOS repo (implicitly on a Mac, or via a Mac-hosted build step) rather than detailing a specific GitHub Actions configuration.

## Install-progress UX detail (as described by the creator)
The user, describing a specific technical UX problem they solved, explains that Apple's default ad hoc install flow (tapping a download link and letting iOS handle the install via its system-level prompt) gives no confirmation once the install actually completes, which they characterize as poor UX. To address this, they describe watching the packets leaving the server during the app-package transfer to estimate download progress, then streaming that estimated progress back to the Speedflight web page over WebSockets, so the person installing the app sees a progress indicator and some signal that the install/open step has occurred, rather than being left with no feedback after tapping Install. This technique (server-side packet-based progress estimation relayed over WebSockets) is the creator's own account of the implementation and was not independently verified against the project's source code during this capture.

## License and access model
No licensing terms were located on the pages inspected during this capture. Per the site and GitHub README, the service itself is free and does not require a user account to receive or install a shared build; the security boundary instead relies on Apple's own ad hoc provisioning profile device-registration mechanism, meaning only devices already registered to the relevant Apple developer account/build can install a given app regardless of who has the link.

## Evidence boundary
speedflight.dev, its llms.txt, and the top-level GitHub README for jakemor/speedflight were inspected during this capture. The skill's SKILL.md file (with the detailed step-by-step agent script) was not fetched in this pass. No skill was installed, no App Store Connect API key was configured, and no build was cut or shared during this capture.

## Sources
- http://speedflight.dev
- https://speedflight.dev/llms.txt
- https://github.com/jakemor/speedflight
- https://raw.githubusercontent.com/jakemor/speedflight/main/skills/speedflight/SKILL.md
