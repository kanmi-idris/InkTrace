---
title: Akintola Steve thread — encrypting sensitive data & risk-matched security
kind: paste
captured_at: 2026-07-20 13:54
tags: [security, encryption, hashing, data-protection, privacy, auth, thread]
source_url: https://x.com/Akintola_steve/status/2078854327800905919
status: inbox
---

# Akintola Steve thread — encrypting sensitive data & risk-matched security

# Thread: Why you should care about encrypting sensitive data (Akintola Steve, @Akintola_steve)

Source thread (15 tweets, Jul 19 2026): https://x.com/Akintola_steve/status/2078854327800905919
Author: Akintola Steve (@Akintola_steve) — software engineering educator.

A thread on field-level data protection, encryption vs hashing, and risk-matched security. Reconstructed from the 15 posts in posting order (earliest first).

## 1. Plain text isn't automatically illegal
Storing data in plain text isn't automatically illegal. The problem starts when you collect sensitive personal data and fail to protect it appropriately. If a breach happens and regulators conclude reasonable security measures weren't in place, that's when the questions begin.

## 2. What's in your users table
Think about what usually lives inside your `users` table: full name, email, phone number, date of birth, home address, device information, IP addresses, payment information, national IDs (sometimes). Most of these are classified as personal data under modern privacy laws.

## 3. Plain text breach scenario
Imagine a SQL injection vulnerability leaks your database. Every email, phone number, address — immediately readable. No cracking, no special tools. Just open the dump and read. That's what plain text means.

## 4. Encrypted data scenario
Compare with encrypted data: attacker still steals the DB, but instead of `stephen@example.com` / `+2348012345678` they see `F1D93A...` / `8A9C2E...`. Without keys, data is significantly harder to interpret. Encryption doesn't stop breaches — it reduces the damage when breaches happen.

## 5. What to protect vs not
Examples worth protecting: phone numbers, email addresses (threat-model dependent), home addresses, bank account numbers, API keys, access tokens, government-issued IDs, payment credentials. Usually hashed not encrypted: passwords. Usually fine without field-level encryption: feature flags, theme preference, UI settings, public usernames (context matters).

## 6. Encryption vs hashing
Encryption: reversible, you can decrypt later — perfect for phone numbers and emails. Hashing: one-way, cannot recover original — perfect for passwords. Mixing them up is one of the most common mistakes newer engineers make.

## 7. Searching encrypted emails
"How do I search users by email?" Store an encrypted email for retrieval + a deterministic lookup value (often a normalized cryptographic hash) for exact searches. Search efficiently without exposing the original email.

## 8. Don't encrypt everything
"Should I encrypt everything?" No. Every column doesn't need encryption. Good engineering is knowing what deserves extra protection.

## 9. Overengineering?
"Isn't all this overengineering?" Sometimes. Weekend side project with 20 users — probably. Fintech / healthcare / HR / SaaS with thousands of users — probably not. Security should match risk.

## 10. Equifax (2017)
One of the largest breaches in history: ~147 million people's sensitive PII exposed after attackers exploited an unpatched vulnerability. Settlements worth hundreds of millions, years of legal scrutiny and reputational damage. Multiple causes (not just lack of encryption) but illustrates the cost of failing to protect personal data.

## 11. British Airways (GDPR)
Fined £20M by the UK ICO after a web skimming attack compromised customer data. Regulator concluded the airline failed to implement appropriate security measures under GDPR. Encryption alone wouldn't have prevented it, but regulators assess overall security posture.

## 12. The pattern
These companies weren't fined simply because data existed. They were investigated because personal data wasn't adequately protected in the context of the breaches. Important distinction.

## 13. Security is layers
Modern software engineering is also about protecting people trusting you with their info. Sometimes encrypting sensitive fields, sometimes stronger authentication, better monitoring, better access controls. Security is layers, not one feature.

## 14. What to learn
If you build apps that collect user data, learn: authentication, authorization, encryption, hashing, key management, audit logging, secrets management, rate limiting, secure backups. No longer "nice to have" — part of being a well-rounded engineer.

## 15. Takeaway
Don't leave thinking "I need to encrypt every column." Understand your data, understand your risks, protect what matters. That's what good engineering looks like.

## Cross-links
- Relates to audit-log protection checklist (xinfra/@aos_tsx, src-2026-07-20-005): append-only, immutable, signed/hashed, restricted DB access, external shipping.
- Relates to general security-engineering theme already in vault.
