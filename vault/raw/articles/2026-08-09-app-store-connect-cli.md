---
title: "App Store Connect CLI"
kind: "paste"
captured_at: "2026-08-09 20:12"
tags: ["github", "app-store-connect", "testflight", "ios", "macos", "xcode", "go", "ci-cd", "automation"]
source_url: "https://github.com/rorkai/App-Store-Connect-CLI"
status: "inbox"
---

# App Store Connect CLI

## Source overview
App Store Connect CLI, invoked as asc, is a fast, lightweight, scriptable CLI for the App Store Connect API. It automates iOS, macOS, tvOS, and visionOS release workflows from a terminal, IDE, or CI/CD pipeline.

The repository describes the tool as JSON-first with no interactive prompts. It is an independent, unofficial tool and is not affiliated with Apple.

## Agent skills
The repository provides agent skills for builds, TestFlight, metadata synchronization, submissions, and signing. asc install-skills installs 23 reviewed skills from the app-store-connect-cli-skills repository. The installer pins a reviewed commit, verifies the complete pack, preserves unrelated skills, and rolls back if replacement fails.

## Installation and authentication
- Homebrew: brew install asc
- macOS/Linux install script: curl -fsSL https://asccli.sh/install | bash
- Windows options include WinGet or signed GitHub release binaries.
- Authenticate with asc auth login using an App Store Connect API key ID, issuer ID, and private-key .p8 file.
- CI or keychain-unavailable environments can use --bypass-keychain and config-backed authentication.
- Validate with asc auth status --validate and asc auth doctor.
- First data command: asc apps list --output table or --output json --pretty.

## Output and stability
Interactive terminals default to table output. Pipes, files, and CI default to JSON. Users can set ASC_DEFAULT_OUTPUT, but explicit --output flags take precedence.
Commands have visible lifecycle labels: unlabeled commands are stable, experimental commands can change faster, and deprecated commands are compatibility paths.

## Privacy and telemetry
The CLI sends pseudonymous command-level usage telemetry by default. Events can include a random installation ID, CLI version, platform, command path, duration, runtime context, invocation source, bounded outcome class, HTTP status on API failure, and a sanitized public flag name.

The documented telemetry does not include raw arguments, stderr, error messages, flag values, response bodies, credentials, private keys, Apple account data, team or issuer IDs, app or bundle IDs, usernames, hostnames, repository names, or file paths. Controls include asc telemetry status, asc telemetry disable, asc telemetry reset-id, ASC_TELEMETRY_DISABLED=1, and DO_NOT_TRACK=1.

## Main workflows
- TestFlight feedback and crash listing.
- IPA and PKG build uploads, build listing, and beta-group management.
- Release staging, validation, submission status, and cancellation.
- App metadata and localization management.
- Screenshot planning and upload.
- Certificates, provisioning profiles, and bundle IDs.
- GitHub Actions and other CI/CD workflows.
- Xcode archive and export workflows.
- Xcode Cloud build runs.
- Apple Ads management with separate OAuth credentials.
- StoreKit Retention Messaging with a separate in-app-purchase API key.

The README recommends built-in help as the command source of truth: asc --help and nested command help. It links command taxonomy, CI/CD, workflow, API-notes, testing, and architecture documentation.

## Repository metadata
The inspected repository is primarily Go. The page showed release 3.7.0 as the latest release on 2026-08-09 and an MIT license.
