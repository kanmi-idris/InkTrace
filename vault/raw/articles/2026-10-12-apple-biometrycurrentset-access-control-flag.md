---
title: Apple biometryCurrentSet access-control flag
kind: article
captured_at: 2026-10-11 15:18
tags: [Apple, iOS, Keychain, biometrics, access-control]
source_url: https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/biometrycurrentset
status: raw
---

# Apple biometryCurrentSet access-control flag

## Source scope
This is Apple's Security framework reference for `biometryCurrentSet`, inspected on 2026-10-11.

## Documented behavior
Apple describes `biometryCurrentSet` as an access constraint for currently enrolled Touch ID fingers or the currently enrolled Face ID user. Apple says the protected item is invalidated if Touch ID fingers are added or removed, or if the user re-enrolls for Face ID.

## Limit
This is local Keychain access control. It supports the article's claim that a key or item can be bound to the current biometric enrollment set. It does not by itself provide a remote server with the biometric result or a person's identity.
