---
title: Driver.js — Product Tours & Highlights Library (Vanilla JS, 25.8k Stars)
kind: paste
captured_at: 2026-06-28 06:18
tags: [javascript, ui, onboarding, product-tours, open-source]
source_url: https://driverjs.com/
status: inbox
---

# Driver.js — Product Tours & Highlights Library (Vanilla JS, 25.8k Stars)

Driver.js — lightweight JavaScript library for product tours, highlights, and contextual help. Created by nilbuild.

Key stats: 25.8k GitHub stars, 4.3M monthly downloads, 286M CDN hits/month.

Features:
- Vanilla JS, no dependencies, ~5kb
- Written in TypeScript
- MIT licensed
- Works with all major frameworks: React, Vue, Angular, Svelte, Solid, Next.js
- Accessible, mobile-friendly
- Highly customizable (overlay colors, popover positioning, animations, hooks)

Use cases: onboarding users, interactive tutorials, feature adoption, contextual help, form guidance, removing distractions.

Companies using it: Red Hat, Alibaba, MIT, Ethereum, GitKraken, Apache, Intel, Fiverr.

Quick start:
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
const driverObj = driver({
  showProgress: true,
  steps: [{ element: "#search", popover: { title: "Search", description: "Find anything." } }]
});
driverObj.drive();

Also supports single highlight via driverObj.highlight() for spotlighting specific elements.

GitHub: https://github.com/nilbuild/driver.js
Documentation: https://driverjs.com/docs/installation
