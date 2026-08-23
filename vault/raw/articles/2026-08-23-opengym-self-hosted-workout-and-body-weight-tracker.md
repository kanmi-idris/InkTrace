---
title: "openGym: Self-Hosted Workout and Body-Weight Tracker"
kind: "paste"
captured_at: "2026-08-23 20:20"
tags: ["gitea", "gitlab", "opengym", "fitness", "workout-tracker", "self-hosted", "pwa", "passkeys", "docker", "react", "privacy", "web-authn"]
source_url: "https://gitea.com/DuarteSantos/openGym"
status: "inbox"
---

# openGym: Self-Hosted Workout and Body-Weight Tracker

## Source overview
openGym is a self-hosted gym and body-weight tracker. It runs on the user's own server or as a standalone mobile app. The project is described as free, ad-free, subscription-free, and without telemetry.

The inspected Gitea repository is a public mirror. Its repository metadata lists AGPL-3.0, JavaScript, React, Docker, PWA, Passkey, Privacy, and WebAuthn topics. The README states that GitLab is the project home and that the Gitea repository is a mirror.

Project home links in the README:
- Web app: https://opengym.duarte-santos.ch
- GitLab source: https://gitlab.com/DuarteSantos8/opengym
- Gitea mirror: https://gitea.com/DuarteSantos/openGym

## Main features
- Body-weight tracking with interactive chart and goal line.
- Weekly plans with a library of 1,324 exercises and animated demos.
- Rescheduling without changing the weekly plan.
- Guided workouts with body-weight prompts, previous weights, rest timer, PR detection, and per-exercise tracking.
- Screen-awake mode during workouts.
- Supersets and warm-up sets.
- Add or remove exercises during a session.
- Timed exercises and loaded carries.
- Progression rules including linear progression, Greyskull LP, double progression, and adding time.
- Estimated one-rep max calculations.
- Optional RIR or RPE effort tracking.
- Body-weight exercise handling, reps per side, freestyle sessions, and cardio.
- Shareable plans and printable PDF plans.
- Equipment filtering and custom exercises.
- Activity heatmap and muscle maps for balance, fatigue, and strength.
- Push notifications for rest timers and planned-workout reminders.
- Passkey authentication with profile-specific data and sign-out everywhere.
- Optional admin dashboard with user activity and audit logs.
- Themes, accent colors, hand-drawn icons, and 12 UI languages.
- Import from FitNotes, Strong, Hevy, and Apple Health exports.
- JSON export and import, guest mode, and no telemetry.
- Optional read-only MCP server for local AI clients such as Claude Desktop or Cursor.
- Standalone Android APK with local data and workout reminders.

## Deployment modes
### Self-hosted web app
The README documents Docker Compose deployment:
- Clone the project.
- Copy .env.example to .env.
- Pull prebuilt amd64 or arm64 images, or build locally.
- Run docker compose up.
- Open the web app and create a profile.

The first launch downloads approximately 140MB of exercise media.

The app stores data under a host-controlled ./data directory. The README identifies db.json, per-user state JSON files, audit.log, and the session-cookie secret. It recommends backing up ./data.

### Standalone mobile app
The same codebase builds a Capacitor Android app with no server, account, or backend. Data remains on the phone. Android users can sideload the APK. iOS users can self-host the PWA or build a native app through Xcode.

## Architecture
- Frontend: React 19, Vite, React Router, and Zustand.
- API: Node without a framework, using @simplewebauthn/server and web-push.
- Web: nginx serves the built frontend and proxies /api to the backend on one origin.
- Storage: plain JSON files rather than a database server.
- Deployment: Docker Compose.
- Optional MCP server: local stdio access for AI clients.

The README describes the training logic as pure functions under frontend/src/lib/, with adjacent tests run through Vitest. The application has few runtime dependencies beyond React, routing, and Zustand.

## Privacy and authentication
Passkeys use Face ID, Touch ID, fingerprint, or a password-manager authenticator. Private passkey keys remain on the user's device or password manager. The server stores public passkeys and session data.

The optional audit log records sign-ins and admin actions. IP logging is configurable. The README says the default audit log does not record IP addresses unless configured.

## Media licensing caveat
The exercise metadata and instruction text come from hasaneyldrm/exercises-dataset under MIT terms. The exercise images and animations come from Gym visual under that dataset's terms and are not covered by openGym's AGPL license. A self-hosted instance downloads the media from upstream. Reuse requires checking Gym visual's license.

## Current project status and caveats
The Gitea repository metadata reported 23 stars, 12 forks, 6 open issues, 2 open pull requests, and an update on 2026-08-23. These values may change.

The README states that GitHub is offline because the account was suspended and that GitLab is now the canonical project home. Gitea is described as a stopgap mirror.

## User-provided source
@gitea.com/DuarteSantos/openGym
