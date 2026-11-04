# ConitePay payment-gateway repository README

Captured: 2026-10-28
Source URL: https://github.com/YhoungBrown/payment-gateway
Repository branch shown: `master`
Repository page showed: public, 83 commits, 0 stars, 0 forks

## Architecture and integrations

The README describes a TypeScript monorepo with `@conitepay/core`, `@conitepay/react`, and `@conitepay/react-native`. It says the packages abstract Paystack, Flutterwave, and Interswitch behind one `pay()` API. React checkout uses a popup; React Native checkout uses a WebView.

The README says processor API calls go through the merchant's own backend using `initialize` and `verify` callbacks, so secret keys do not ship in the client. It says the `verify` callback is required. The README explains that the SDK reports success only when verification returns `{ verified: true }`.

## Features and setup claims

The README documents a default processor, a selector when no default is set, debug logging behind a provider flag, automatic fallback after a processor fails to initialize, and a default 20-second initialization timeout. The selector allows a custom UI. For React web, the built-in selector can customize rows, but not the modal shell; a fully custom shell needs a separately rendered selector.

The README says the web popup callback URL must share the web app's origin. It says React Native's WebView can intercept callback navigation and does not need the same-origin setup.

## Processor-specific integration details

The README says all amounts start in minor units. It says the backend must convert Flutterwave amounts to major units. Paystack uses minor units. Interswitch uses a client-side POST form and requires merchant-specific endpoint and account values.

## Licensing difference

The README states `MIT`. The two npm package sidebars displayed `none`, and the corresponding registry version metadata omitted `license`. See [src-2026-10-28-002] and [src-2026-10-28-003]. This is an unresolved metadata difference.

## Evidence limits

This is maintainer documentation. It does not establish independent security or reliability. I did not install, build, or test the SDK.
