---
title: pay-kit - Unified Paystack/Flutterwave TypeScript SDK
kind: paste
captured_at: 2026-07-25 19:58
tags: []
source_url: 
status: inbox
---

# pay-kit - Unified Paystack/Flutterwave TypeScript SDK

https://github.com/siyegs/pay-kit — pay-kit: unified TypeScript SDK over Paystack and Flutterwave. One typed API for charge, verify, refund, pay out, split, and verify webhooks. By Iyegere Success Karboloo (siyegs). MIT license. 83 commits, 8 stars.

Key features:
- Single API for both providers: swap `provider: "paystack"` for `"flutterwave"`
- Amounts always in subunits (kobo/cents)
- Signature-verified webhooks (HMAC-SHA512 Paystack, verif-hash Flutterwave)
- Full TypeScript types, unified PayKitError with machine-readable codes
- No middleman — library runs in your backend with your keys
- Tiny, dependency-free (native fetch + node:crypto), ESM + CJS
- Mock provider for testing with no keys/network

Methods: initialize, verify, chargeAuthorization (saved-card), refund, transfer, verifyTransfer, resolveAccount, listBanks, getBalances, listTransactions, createSubaccount, webhooks.construct

Provider fallback: auto-retry on network/5xx/429 errors, 4xx fails fast.
Splits: marketplace subaccount routing.
Payouts: async settlement, verifyTransfer for final status.

Status: beta (pre-1.0). Live-sandbox verified for core flows on both providers.

Install: @siyegs/pay-kit on npm. Runs on Bun, Node >= 18.
Topics: africa, fintech, flutterwave, nigeria, payments, paystack, typescript
