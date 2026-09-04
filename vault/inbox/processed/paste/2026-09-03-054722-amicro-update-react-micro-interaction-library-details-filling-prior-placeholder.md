---
title: "Amicro Update: React Micro-Interaction Library Details (Filling Prior Placeholder)"
kind: "paste"
captured_at: "2026-09-03 05:47"
tags: ["amicro", "react", "motion", "micro-interactions", "animation", "component-library", "mit", "cli"]
source_url: "https://amicro.vercel.app/"
status: "inbox"
---

# Amicro Update: React Micro-Interaction Library Details (Filling Prior Placeholder)

## Relation to existing source
Amicro was previously captured as src-2026-07-14-003, but that record was never filled in beyond boilerplate placeholder text ('Neutral summary of the source' / 'Claim with evidence'). This record supplies the substantive content that record was missing, based on a direct re-inspection of the live site and its GitHub repository on 2026-09-03.

## What it is
Amicro is a free, curated library of React micro-interaction and transition components, built with React and Motion (the animation library formerly known as Framer Motion). The site's own framing is a component gallery organized by interaction category rather than a single all-purpose component package.

## Site structure
Top-level navigation sections observed: Buttons, Components, Anime, CLI, Skills, plus an expandable 'More' menu. The homepage groups interactions into categories including Buttons, Card Spreads, 3D Carousels, Loaders, and Dither Charts, with layout-view toggles (A-Z sort, List, Grid, Matrix) for browsing the full catalog.

Each catalog entry pairs a realistic UI element (for example a Download-for-Mac button, a GitHub star button, a Deploy App button, a Search field, Settings, Delete, Subscribe, Camera, Microphone, Lock, or a social-links focus effect) with a named interaction style such as slide, sparkle, morph, pulse, rotate, shake, ring, glare, magnetic, expand ring, text reveal, color morph, or focus blur, and a 'Copy interaction code' action to grab the implementation directly.

## GitHub repository
The project's source is at github.com/Subhan-code/Amicro--Micro-transitions-. GitHub API metadata checked on 2026-09-03 reports 2,293 stars, 98 forks, 6 open issues, TypeScript as the primary language, and MIT license. The repository was created 2026-07-11. The site's own displayed star count (1,160, shown in the top navigation at time of this capture) differs from the GitHub API's current stargazer count (2,293); this discrepancy likely reflects a cached or delayed count on the marketing site versus the live GitHub API value, and is noted rather than resolved.

## CLI and Skills
The site advertises dedicated CLI and Skills navigation sections (implying a companion command-line installer and an installable AI-agent skill package, consistent with the broader pattern of component libraries in this space offering shadcn-style CLI installation and agent-oriented skill files), though the specific CLI command syntax and skill installation instructions were not captured in this pass and would need a follow-up visit to those specific pages to document in full.

## Sponsorship model
The site displays a sponsor slot (at the time of this capture, occupied by 'Maple,' described as open-source observability tooling for AI built on OpenTelemetry and ClickHouse) alongside additional open $49/month sponsor slots, indicating the project is monetized in part through paid sponsorship placements on the gallery page itself rather than (or in addition to) selling the components.

## Creator and related project
The site is created by Syed Subhan, who is also credited as the creator of a separate, promoted product called Oxygen UI (a ready-to-use UI component library), which the Amicro site recommends in a sidebar callout as a complementary resource for developers who want complete, ready-to-use UI components rather than only micro-interaction effects.

## License
MIT, per the GitHub repository metadata. The site also links to its own 'Terms & License' page in its footer, which was not separately inspected in this capture.

## Evidence boundary
The live site's homepage and navigation were directly inspected via the accessibility tree, and the GitHub repository was checked via the GitHub API. The dedicated CLI and Skills pages were not opened in this pass. No component code was copied, no CLI was installed, and no sponsorship was purchased during this capture.

## Sources
- https://amicro.vercel.app/
- https://github.com/Subhan-code/Amicro--Micro-transitions-
