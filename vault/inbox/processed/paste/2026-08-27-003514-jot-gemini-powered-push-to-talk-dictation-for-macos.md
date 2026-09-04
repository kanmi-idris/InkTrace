---
title: "Jot: Gemini-Powered Push-to-Talk Dictation for macOS"
kind: "paste"
captured_at: "2026-08-27 00:35"
tags: ["jot", "gemini", "macos", "dictation", "transcription", "swift", "voice-to-text", "google-gemini", "apache-2"]
source_url: "https://github.com/google-gemini/jot-gemini-transcribe-macOS"
status: "inbox"
---

# Jot: Gemini-Powered Push-to-Talk Dictation for macOS

## Source overview
Jot is a macOS menu bar app that transcribes speech to text at the cursor using the Gemini API. The README explicitly states it is not an officially supported Google product, despite living under the google-gemini GitHub organization.

GitHub API metadata checked on 2026-08-27 reports 219 stars, 16 forks, 2 open issues, Swift as the primary language, and Apache License 2.0. The repository was created 2026-08-19 and last pushed 2026-08-26.

## Core interaction model
Three gestures drive the app:
- Hold fn: records while held; release inserts the transcript at the cursor.
- fn + tap Space: hands-free recording that continues after release; tap fn again to finish.
- Esc: cancels the current recording, though anything over 10 seconds is still kept in History.

The fn key is rebindable in Settings if it conflicts with another use.

## Distinguishing claims
The README highlights three design claims:
- It follows a change of mind: an example shows the model revising 'let's meet at 1pm actually no make it 2pm' into a single corrected sentence, and onboarding walks the user through this once.
- It never loses words: audio is written to disk from the first millisecond of capture, so a crash or dead battery does not lose the recording; it recovers on next launch. Offline dictations queue and send when reconnected, and failures are retryable from History.
- It is private by architecture: audio goes directly from the Mac to the Gemini API using the user's own API key, with no middleman server, account, analytics, screenshots, or keystroke logging. The README points to a PRIVACY.md file as the documented basis for this claim; this capture did not independently audit the codebase for network calls.

## Setup and cost model
Installation requires downloading a DMG from GitHub Releases and moving the app to Applications, because apps run directly from a mounted disk image are sandboxed and do not retain granted permissions.

Setup requires a Gemini API key from Google AI Studio, stored in macOS Keychain and only sent to Google according to the README. It also requires microphone and Accessibility permissions, the latter needed for any app that types text into another app.

The README states users pay Google directly for Gemini API usage per the public Gemini API pricing, that a free tier exists, and that a typical dictation is a few seconds of audio. Jot itself is described as free with no account requirement.

## Model requirement
The README says Jot uses Gemini's transcription-specialized model, referred to as gemini-3.5-transcribe. It states the user's API key needs access to that specific model, and that setup checks for this access upfront rather than failing on first use. This model name and its general availability were not independently verified beyond the README's own statement.

## Architecture notes
The documented pipeline is: fn-key press starts capture to a CAF file on disk from time zero; fn-key release triggers FLAC conversion and a Gemini transcription call; an optional tone-formatting pass with a validation gate follows; then insertion happens through an Accessibility API, paste, or clipboard fallback ladder; all events are logged to a local SQLite-backed History store.

Other documented implementation details:
- The capture graph is pre-warmed while idle so a key press only pays engine-start latency (reported as 20 to 40 ms versus 75 to 150 ms), with no microphone activity or indicator until the key is actually held.
- The microphone continues draining one buffer past the stop signal to avoid cutting off the tail of the last word, since the audio tap delivers roughly 100 ms chunks.
- Insertion is layered: Accessibility API first, then a guarded paste that restores the clipboard, then a manual-paste fallback chip if neither works.
- A validation gate is meant to catch cases where the model answers the audio instead of transcribing it, falling back to the raw transcript.
- The core engine (JotCore) is a headless Swift package covering the state machine, hotkey grammar, audio, transcription, formatting, insertion, and history, allowing these failure paths to be tested without launching the full app.

## Development requirements
Building requires macOS 14 or newer, Xcode 16 or newer, and xcodegen, since the Xcode project file is generated rather than checked into the repository. Documented build commands include a build script that runs xcodegen and xcodebuild, and a test script that runs swift test against JotCore.

Debug builds sign ad-hoc and do not require an Apple developer account; only release builds documented in a separate release script require a real Developer ID for signing and notarization.

## License
The repository uses Apache License 2.0. Bundled fonts (Google Sans Flex, Google Sans Code) use the SIL Open Font License 1.1. The README states the included sound effects (earcons) are original works also covered by Apache 2.0.

## Execution boundary
The repository README and GitHub API metadata were inspected. No DMG was downloaded, no API key was configured, no microphone permission was granted, and no build command was executed during this capture.

## Sources
- https://github.com/google-gemini/jot-gemini-transcribe-macOS
- https://github.com/google-gemini/jot-gemini-transcribe-macOS/blob/main/docs/PRIVACY.md
- https://github.com/google-gemini/jot-gemini-transcribe-macOS/blob/main/docs/RELEASING.md
