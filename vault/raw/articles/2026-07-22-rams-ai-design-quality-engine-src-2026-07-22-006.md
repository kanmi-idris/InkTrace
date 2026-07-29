Source: https://www.rams.ai
Title: Rams · A senior design review on every PR
Retrieved: 2026-07-22
Source ID: src-2026-07-22-006

---

Rams is a design quality engine for software teams. It reviews every UI change against your design system and the standards your users rely on, then scores it, before it ships.

## Product

- **Skill** — Free in any coding agent (77,938 installs). A free taste of the engine. Surface-level checks, no score.
- **MCP** — Full 258-rule engine. Your agent calls it before you commit. A real score, same as every PR. Not automated.
- **GitHub App** — Automated on every pull request. Includes full engine, one-click fixes posted inline, score history and merge gating. Zero setup, whole team.

## Rules & Reviewers

258 review judgments across 9 categories, publicly documented. New rules ship every week. Reviewed against: accessibility, hierarchy, color, typography, spacing, components, motion, UX, craft.

Eight specialist reviewers, one per discipline: accessibility, color, type, spacing, motion, components, UX, and craft.

## Review Process

1. Rams reads the changed files in a PR
2. Posts inline comments + top-level summary (usually within ~1 minute)
3. Two-pass: fast triage, then deep line-level review of highest-risk files
4. Every finding severity-rated with inline suggestion that can be committed straight from PR
5. Re-reviews verify fixes; score climbs as work lands

## Scoring

- Same 258 rules on every review
- Any critical issue caps the score at 59
- 60+ always means zero critical issues
- Score history tracked across PRs, repos, and releases

## Pricing

- **Free**: 1 public repo, 30 reviews/month (PRs + MCP), full engine
- **Solo ($39/mo)**: 1 private repo, 50 reviews/month
- **Basic ($179/mo)**: Unlimited repos, unlimited team, 300 reviews/month
- **Pro ($499/mo)**: Unlimited repos, 750 reviews/month, priority support
- **Enterprise**: Custom, SSO, dedicated SLA

## Prevention Categories

- Competing CTAs (no visual hierarchy)
- Low contrast and missing labels (sub-4.5:1 body text, missing alt, sub-44px targets, no focus rings)
- Hardcoded hex and one-off spacing (inline colors bypass tokens, !important overrides)
- Generic gradients and templated layouts (purple-to-pink gradients, glow shadows, unedited prompts)
- Broken states and duplicate handlers (no disabled state, double-fired handlers, non-keyboard spans)
- Unguarded motion (transition:all without prefers-reduced-motion, violating WCAG)

## Metrics

- 6,270 UI issues caught before merge across 1,164 reviews (as of landing page)
- ~77,938 Skill installs

## Stack

- Supports: React, Next.js, SwiftUI, Vue.js, Svelte, Angular, Tailwind CSS
- Runs on GitHub App, MCP protocol, and coding agent Skills
