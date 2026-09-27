---
title: "TraceSift: Local AI-Assisted CPU, Hermes, and React Profile Analysis"
kind: "paste"
captured_at: "2026-09-26 07:54"
tags: ["callstack", "tracesift", "react-native", "performance", "profiling", "hermes", "javascript", "react", "ai", "local-first", "typescript", "mit"]
source_url: "https://github.com/callstackincubator/tracesift"
status: "inbox"
---

# TraceSift: Local AI-Assisted CPU, Hermes, and React Profile Analysis

## Link resolution
The supplied X shortened link, https://t.co/iDZlNn1mOo, resolves to https://github.com/callstackincubator/tracesift. No existing TraceSift source record was found in InkTrace.

## Repository scope
TraceSift is a Callstack open-source tool for finding bottlenecks in CPU and React performance profiles. It presents the slowest or longest-rendering findings in a readable interface and generates a handoff prompt for an AI agent to continue the investigation in source code. The user decides which finding to fix.

The inspected repository uses TypeScript and the main branch. The GitHub API snapshot reported creation on September 7, 2026, an update on September 26, 2026, 8 stars, 0 forks, 1 open issue, and an MIT license. These counters and dates can change.

## Supported analysis flow
The README documents three profile categories:

- JavaScript CPU profiles.
- Hermes profiles.
- React profiles.

The user selects the matching profile type, uploads or drops the profile into the web interface, and starts analysis. TraceSift sorts CPU and Hermes findings by slowest work. It sorts React findings by longest render time. Each result card includes a short explanation of the suspected source and its impact on the recorded flow. A Copy Prompt action creates a focused handoff for an agent.

The tool is designed to avoid sending an entire performance profile into an agent context. It first reduces the profile into prioritized findings. The resulting prompt lets the agent inspect the relevant code without making the profile analysis itself the agent's only task.

## Local execution model
The repository states that TraceSift runs locally with OpenAI, Anthropic, or Callstack Apex. The README says credentials remain in the local TraceSift home directory, and that TraceSift does not read the separate PI authentication file. Browser sign-in and subscription sign-in options are documented. ChatGPT Codex subscription sign-in and Anthropic subscription or API-key authentication are listed as supported settings.

These are repository claims about the current application behavior. I did not inspect network traffic or perform a credential-storage audit.

The application can save completed analyses automatically to local history or save individual reports manually. Saved reports can be reopened or deleted from the Analyses view.

## Installation and commands
The documented CLI flow is:

1. Install the global package `@callstack/tracesift` with npm.
2. Run `tracesift init` once to download and verify the matching prebuilt web application. Run it again after a CLI update.
3. Run `tracesift start` to start a local server at `http://127.0.0.1:3000` and open it in a browser.

The README states that the installed command requires Node.js 22.19 or newer and npm on macOS or Linux. It does not require Git or build tools after installation. The init step downloads a platform-specific prebuilt application, so it is a network and filesystem side effect.

## Repository structure and development
The repository contains a web application, a CLI package under `packages/cli`, profile fixtures, tests, patches, scripts, and release configuration. The CLI exports shared configuration, a provider catalog, and server-runtime modules. It uses a pinned agent SDK version shared with the application.

Contributors can run `npm run test:release:local` to test the packaged download and startup flow against a local artifact server before a GitHub release. The project documents a manual browser checkpoint and Changesets-based release process.

## Practical use
TraceSift fits a workflow where the engineer already has a JavaScript CPU, Hermes, or React profile and needs a prioritized starting point. It is not presented as a profiler, profile recorder, or automatic code-fix system. The engineer must first capture a profile with another tool, then use TraceSift to narrow the investigation.

The generated handoff is an aid for source-code investigation. It does not prove that the identified function is the root cause, and the agent's suggested fix still requires human review, profiling, and regression testing.

## Security and privacy boundaries
The local-first design keeps credentials and saved analysis history on the host according to the README. AI analysis still requires sending relevant profile-derived information to the selected provider unless a local provider path is used. The README does not establish that all uploaded profile content remains local.

The CLI installation is global, and the init command downloads a prebuilt web application. Review the package, release, provider settings, and local storage behavior before using it with sensitive profiles.

## Evidence boundary
The shortened URL was resolved through browser navigation. I inspected the TraceSift GitHub repository README, repository tree, GitHub API metadata, and license references.

I did not install the npm package, run `tracesift init`, start the local server, upload a performance profile, connect an AI provider, or inspect credential storage and network traffic. No benchmark or performance improvement claim was found in the inspected README.

## Sources
- Resolved short link: https://t.co/iDZlNn1mOo
- https://github.com/callstackincubator/tracesift
- https://github.com/callstackincubator/tracesift/blob/main/README.md
- https://api.github.com/repos/callstackincubator/tracesift
- https://github.com/callstackincubator/tracesift/blob/main/LICENSE
