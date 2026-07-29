---
title: How to protect audit logs in production (append-only, immutable, signed)
kind: paste
captured_at: 2026-07-20 13:08
tags: [security, audit-logs, immutability, cryptography, logging]
source_url: https://x.com/aos_tsx/status/2079105114044780830?s=20
status: inbox
---

# How to protect audit logs in production (append-only, immutable, signed)

X post — xinfra (@aos_tsx), Jul 20 2026, 11.4K views, replying to @Akintola_steve

"iykyk In production systems, you often protect audit logs by:
- Making them append-only (no updates/deletes).
- Sending them to immutable storage.
- Cryptographically signing or hashing log entries.
- Restricting who has direct database access.
- Shipping logs to external logging systems."

A concise checklist for tamper-resistant audit logging:
1. **Append-only** — no update/delete operations on log records.
2. **Immutable storage** — store outside mutable DB volumes (WORM / object-lock buckets).
3. **Cryptographic chaining/signing** — hash or sign each entry (e.g. hash chain / Merkle) so retroactive edits are detectable.
4. **Access restriction** — limit who can touch the underlying database directly.
5. **External shipping** — forward logs to a separate logging system so compromise of the primary app doesn't erase the trail.

Directly relevant to InkTrace's own provenance rules (raw/ is immutable, no silent mutation of evidence).
