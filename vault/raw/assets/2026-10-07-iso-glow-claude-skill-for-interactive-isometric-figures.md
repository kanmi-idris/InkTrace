---
title: "ISO-GLOW: Claude skill for interactive isometric figures"
kind: "project capture"
author: "April Zhu"
source_url: "https://isoglow.dev/"
origin_url: "https://t.co/ncC0vK8B3h"
related_urls: ["https://isoglow.dev/iso-glow.zip", "https://github.com/MrBongoC/ai-iso-skill"]
tags: ["Claude-skill", "isometric-art", "interactive-HTML", "SVG", "generative-design", "MIT", "static-inspection"]
---

# ISO-GLOW

## Project description
The site presents ISO-GLOW as a Claude skill that turns plain-language descriptions into single-file interactive isometric illustrations. Examples include a typewriter, office tower, lighthouse, city, and system diagram. The generated page is intended to run in a browser.

The page offers Claude Code, Claude.ai, and manual ZIP installation paths. Its skill file contains instructions for generating JavaScript figure code, inserting it into a self-contained HTML template, and opening the resulting file. I did not install or follow those instructions.

## Bundle inspection
The linked ZIP contains five files: `SKILL.md`, `LICENSE`, `assets/gallery.html`, and two example JavaScript figures. The license is MIT and credits April Zhu and Tolga Cohce. The skill says it builds on Tolga Cohce's `iso-figure` project.

Static inspection of the HTML and examples found inline JavaScript, no external script imports, and no `fetch`, XHR, WebSocket, `eval`, or `new Function` calls. The HTML requests one external Google Fonts stylesheet. It stores the selected accent colour in `localStorage`. The footer links to the ISO-GLOW site.

## Evidence limits
I inspected the homepage, downloaded ZIP listing, `SKILL.md`, `LICENSE`, HTML template, and two example JavaScript files as text. I did not run or install anything, open a generated figure, or perform a full security audit. The site's no-tracking and browser-sandbox statements are not independently verified beyond this static inspection.
