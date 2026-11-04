# `@conitepay/react` npm package page and registry metadata

Captured: 2026-10-28
Sources: https://www.npmjs.com/package/@conitepay/react and https://registry.npmjs.org/@conitepay%2Freact

## Registry facts at capture time

- Latest dist-tag: `0.1.5`
- Published: `2026-10-16T08:22:40.512Z`
- Package repository: `YhoungBrown/payment-gateway`, directory `packages/react`
- Dependency: `@conitepay/core` `^0.1.6`
- Peer dependencies: `react >=18.0.0` and `react-dom >=18.0.0`
- The registry version metadata has no `license` property.

The npm package page showed version `0.1.5`, five versions, and the repository link. Its sidebar displayed license `none`, while the README section on the same package page says `MIT`.

## Package README facts

The README describes React bindings that open checkout in a popup and abstract Paystack, Flutterwave, and Interswitch behind one `pay()` API. It documents `initialize` and `verify` callbacks that call the merchant's backend.

The README says the SDK requires a `verify` callback. It says that if the callback returns `{ verified: true }`, the SDK reports success; otherwise it reports failure. It also documents `debug: true` as verbose development logging and an initialization timeout of 20 seconds by default.

The README says a default processor can open automatically. Without a default processor, the SDK shows a selector. It allows custom selector rows. It says the web selector does not expose props to restyle or resize its modal shell; a developer must render a fully custom selector for a full-screen or branded shell.

For web, the README says the checkout opens in a popup. It requires the callback URL to use the same origin as the web app so the popup flow can detect completion.

The README's amount table says Paystack and Interswitch use minor units, while Flutterwave expects major units. The backend must convert the amount for Flutterwave.

## Evidence limits

This records publisher documentation and package metadata. I did not install or test the package. The shared repository README is [src-2026-10-28-004].
