# Shapeshift GitHub repository capture

Captured: 2026-10-12
Repository: https://github.com/anishfn/shapeshift
Evidence inspected: GitHub README article. No installation, build, tests, or code audit was performed.

## Product description and architecture

- Shapeshift is described as a text box that turns natural-language input into typed cards, such as event cards, checklists, timers, color pickers, bill splitters, polls, and converters.
- The README says TypeSafe AI's Jev model classifies intent with one call that answers 14 typed questions in parallel. Deterministic code parses dates, amounts, units, and math.
- The project works offline by default with a built-in keyword classifier. The README says the online Jev model is optional.
- To use the online model, the README instructs users to set `TYPESAFE_API_KEY`; it says the key is read on the server route and never reaches the browser. If the API is unreachable or rate-limited, the app falls back to offline mode. These are repository claims and were not audited.
- The default `JEV_MODEL` is `jev-1.13.0`; `NEXT_PUBLIC_USE_MOCK=true` forces offline mode.

## Setup and implementation notes

- Requires Bun 1.2+; the README gives `bun install` and `bun dev`.
- The stack is Next.js App Router, React 19, strict TypeScript, Tailwind CSS v4, shadcn/ui, Motion, chrono-node, and zod.
- The README lists 19 card types: Event, Reminder, Checklist, Timer, Habit, Color, Split, Expense, Convert, Calculate, Trip, Poll, Contact, Bookmark, Countdown, Time zone, Random, Goal, and Note.
- Saved cards live in browser localStorage until the user deletes them.
- Keyboard actions: Enter saves; Escape clears or cancels; Tab keeps a preview; left/right choose among suggestion chips; `/` opens all card types.
- A state machine stabilizes intent changes. A card changes when a challenger wins twice in a row or has very high confidence. Signal badges use hysteresis.
- The README identifies an MIT license.

## Evidence limits

This is a direct README capture. I did not install or run the application, inspect its implementation, test localStorage behavior, or audit server-side API-key handling. No text was entered into the live site.
