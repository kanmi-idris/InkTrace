---
title: Old Software Was Fast Because It Had No Choice — Yusuf Aytas
kind: paste
captured_at: 2026-06-23 08:27
tags: [software-engineering, performance, capacity-planning, engineering-culture, bloat, frugality]
source_url: 
status: inbox
---

# Old Software Was Fast Because It Had No Choice — Yusuf Aytas

# Old Software Was Fast Because It Had No Choice — Yusuf Aytas

## Source
https://yusufaytas.com/old-software-was-fast-because-it-had-no-choice

## Overview
Essay (June 19, 2026, 8 min read) on how modern infrastructure's forgiveness has made software bloated. Core argument: older software was efficient because the machine enforced constraints, not because engineers were morally superior.

## Key Thesis
Modern infrastructure has removed friction from resource decisions. Adding memory, CPU, or containers is a config change, not a purchase order. Waste survives through decoupled cost: the person making the decision rarely pays the full cost.

## Wirth's Law
"Software is getting slower more rapidly than hardware becomes faster" (Niklaus Wirth, 1995). JVM/GC/hardware gains get spent on larger runtimes, deeper deps, heavier containers, more telemetry, wider safety margins.

## Bloat Mechanisms
- **"Just in case" engineering**: temporary fixes (bump memory, add CPU) harden into permanent requirements
- **JVM ergonomics**: inflated container memory limits → GC gets lazier → runtime settles into larger footprint
- **Standard platform defaults**: a tiny coordinator inherits the appetite of a much larger service
- **10% utilization is "green"**: monitoring masks optimization failure as operational safety
- **Broken feedback loops**: sluggishness never triggers incident response, becomes background tax

## The Solution: Resource Budgets
Simple, explicit, tedious budgets per component (memory, startup time, container size). Cross a limit → explain what changed and what the extra cost buys. Goal is intention, not poverty. "If nobody can answer those questions, that allocation isn't engineering. It's a superstition."

## Tags
software-engineering, performance, capacity-planning, engineering-culture, bloat, frugality
