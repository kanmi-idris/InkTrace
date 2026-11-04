# `@conitepay/react-native` npm package page and registry metadata

Captured: 2026-10-28
Sources: https://www.npmjs.com/package/@conitepay/react-native and https://registry.npmjs.org/@conitepay%2Freact-native

## Registry facts at capture time

- Latest dist-tag: `0.1.5`
- Published: `2026-10-16T08:22:32.494Z`
- Package repository: `YhoungBrown/payment-gateway`, directory `packages/react-native`
- Dependency: `@conitepay/core` `^0.1.6`
- Peer dependencies: `react >=18.0.0`, `react-native >=0.72.0`, and `react-native-webview >=13.0.0`
- The registry version metadata has no `license` property.

The npm page showed version `0.1.5`, five versions, and the repository link. Its sidebar displayed license `none`, while the README section says `MIT`.

## Package README facts

The README describes React Native bindings that open checkout in a WebView and abstract Paystack, Flutterwave, and Interswitch behind one `pay()` API. It documents backend `initialize` and `verify` callbacks.

The README says a `verify` callback is required. It documents a default selector UI when there is no default processor, and custom selector rows or a fully custom selector. It supports class components through `withPaymentGateway`.

The README says React Native uses `react-native-webview`; it recommends `npx pod-install` for iOS. The Interswitch adapter builds a client-side POST form and submits it in the WebView.

The README's amount table says Paystack and Interswitch use minor units, while Flutterwave expects major units. The backend must convert the amount for Flutterwave.

## Evidence limits

This records publisher documentation and package metadata. I did not install or test the package. The shared repository README is [src-2026-10-28-004].
