---
title: "Telling: Flutter error tracking and analytics"
kind: "project capture"
author: "Telling / Kiishi (GitHub account: ThatSaxyDev)"
source_url: "https://telling.cv/landing"
origin_url: "https://t.co/EEHtXSREYA"
related_urls: ["https://pub.dev/packages/telling_logger", "https://github.com/ThatSaxyDev/telling-logger", "https://dart.dev/tools/pub/publishing", "https://telling-api.kiishi.space/api/v1"]
tags: ["Flutter", "error-tracking", "crash-reporting", "analytics", "SDK", "telemetry", "privacy", "MIT"]
---

# Telling

## Product description
The landing-page metadata describes Telling as error tracking and analytics for Flutter applications. The linked `telling_logger` package is a Flutter SDK for crash reporting, event analytics, session tracking, screen tracking, and user context. The package page lists version `1.4.8` and an MIT license.

The package documentation also lists widget-visibility tracking, offline buffering, rate limiting, remote configuration, and forced app-update prompts. Automatic performance tracking is marked “Coming Soon.” These are package and maintainer claims, not independently tested features.

## Data collected and sent
I statically inspected the public SDK source. The initialization code collects platform, OS/browser version, device model, app version, and build number. Platform-specific values include a Windows computer name and a Linux machine ID.

The SDK can attach user ID, name, email, session ID, screen names, time spent on screens, custom event properties, recent analytics breadcrumbs, error messages, and stack traces to logs. The source posts log batches to `https://telling-api.kiishi.space/api/v1/logs` with an `x-api-key` header.

The SDK queues unsent logs in `SharedPreferences` and retries them. I did not see encryption for this local buffer in the inspected code. This was a limited static review, not a full security audit.

## Publisher, license, and pricing
The GitHub repository is `ThatSaxyDev/telling-logger`; its README credits Kiishi. The repository and package page list an MIT license. Pub.dev labels the publisher “unverified uploader.” Dart's publishing guidance says this label is used when a package has no verified publisher; it is not by itself evidence of malicious behavior.

The package README requires a Telling Dashboard account and API key. I did not find pricing or a privacy/retention policy in the landing page, package README, or repository pages inspected.

## Evidence limits
I inspected the landing-page metadata, pub.dev package page, GitHub README, and selected SDK source files. I did not install or run the package, create an account, call the API, or test server-side data handling. Treat the SDK as untrusted code until it receives a separate review. Avoid sending personal data, secrets, or sensitive event properties until server retention and privacy terms are clear.
