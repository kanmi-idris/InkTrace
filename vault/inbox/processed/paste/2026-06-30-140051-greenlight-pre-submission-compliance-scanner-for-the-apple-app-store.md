---
title: Greenlight — Pre-submission compliance scanner for the Apple App Store
kind: paste
captured_at: 2026-06-30 14:00
tags: [app-store, compliance, apple, ios, review, go, code-scan, privacy]
source_url: https://github.com/RevylAI/greenlight
status: inbox
---

# Greenlight — Pre-submission compliance scanner for the Apple App Store

RevylAI/greenlight — Go-based pre-submission compliance scanner for Apple App Store. 1.9k stars, 123 forks. MIT license. Built by Revyl.

Install: brew install revylai/tap/greenlight, or go install, or build from source.

Commands:

greenlight preflight [path] — runs all scanners in parallel, no account needed, fully offline, under 1 second. Includes metadata (app.json/Info.plist checks), codescan (30+ rejection-risk code patterns), privacy (PrivacyInfo.xcprivacy completeness), ipa (binary inspection). Supports --format json, sarif, terminal, --output file.

greenlight codescan [path] — scans Swift, ObjC, React Native, Expo for: private APIs (§2.5.1), hardcoded secrets (§1.6), external payments (§3.1.1), dynamic code execution (§2.5.2), crypto mining (§3.1.5), UIWebView (hard rejection), missing Sign in with Apple when using social login (§4.8), missing Restore Purchases (§3.1.1), missing ATT for ad SDKs (§5.1.2), account creation without deletion (§5.1.1), placeholder content (§2.1), competing platform references (§2.3), hardcoded IPv4 (§2.5), insecure HTTP URLs (§1.6), vague Info.plist purpose strings (§5.1.1), missing encryption export compliance, Expo config issues.

greenlight privacy [path] — deep privacy compliance: PrivacyInfo.xcprivacy existence/config, Required Reason API cross-reference, tracking SDK vs ATT cross-reference.

greenlight ipa [path.ipa] — binary inspector: privacy manifest presence, Info.plist completeness, ATS config, app icon presence/sizes, launch storyboard, app size vs 200MB cellular limit, embedded framework privacy manifests.

greenlight scan --app-id <ID> — App Store Connect API checks: metadata completeness, screenshot verification, build processing status, age rating, encryption compliance, content analysis.

greenlight verify [path] — optional runtime flow validation via Revyl cloud device. Confirms account-deletion actually works (§5.1.1), restore-purchases isn't a no-op (§3.1.1), sign-in-apple sheet actually appears (§4.8). Separate opt-in tier.

greenlight guidelines — built-in Apple Review Guidelines database: list, show, search.

greenlight auth — App Store Connect authentication (login with Apple ID, setup API key, status, logout).

Configuration: .greenlight.yml — tune rule severity, disable rules, ignore paths.

Claude Code skill included (SKILL.md): Claude runs scan, reads output, fixes issues, re-runs until GREENLIT.

Codex skill package included at codex-skill/.

CI/CD integration: GitHub Actions with SARIF upload for inline PR findings.

Architecture: Go CLI with parallel preflight scanner, separate verify (runtime) and scan (ASC API) tiers. Outputs terminal, JSON, SARIF, JUnit.
