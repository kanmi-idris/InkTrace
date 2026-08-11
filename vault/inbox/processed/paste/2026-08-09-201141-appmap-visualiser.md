---
title: "AppMap Visualiser"
kind: "paste"
captured_at: "2026-08-09 20:11"
tags: ["appmap", "visualisation", "software-testing", "react-navigation", "bluesky", "qa"]
source_url: "https://appmap-visualiser.vercel.app/"
status: "inbox"
---

# AppMap Visualiser

## Source overview
AppMap Visualiser is an interactive route-map viewer for an AppMap bundle. The inspected bundle is labelled bluesky and uses react-navigation on an iPhone 17 Pro.

## Bundle summary
The page reports:
- 70 screens
- 50 captured screens
- 126 flows
- Capture date: 8/8/2026

The main canvas shows screen nodes and directed edges between routes. A mini map and zoom controls support navigation. The page also offers an option to open a different .appmap bundle.

## Visible route coverage
The map includes routes for home, profile, feeds, notifications, settings, moderation, lists, messages, starter packs, video feed, bookmarks, search, support, and related sub-routes.

## Visible findings and capture notes
The visualiser displays route-level annotations, including:
- A deep-link crash for an activity route when the required post at-uri is undefined.
- Empty or missing-data states for lists, moderation lists, muted accounts, blocked accounts, saved feeds, and messages.
- Routes that need navigation state or real account data before they can be tested.
- A camera-permission gate for invite scanning.
- A stuck-loading state for some message and starter-pack routes.
- False-empty or crash annotations for post interaction routes when the backend or test account lacks the required data.

These are displayed annotations from the selected AppMap bundle. They are not independent runtime verification by this capture.

## Agent flows
The page lists generated flows such as navigating to settings, moderation, profile, search, notifications, messages, feeds, and post routes, plus opening notification-preference dialogs and profile actions.
