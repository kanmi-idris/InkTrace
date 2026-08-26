---
title: "Apple Foundation Models on Private Cloud Compute for Small Developers"
kind: "paste"
captured_at: "2026-08-26 05:48"
tags: ["apple", "foundation-models", "private-cloud-compute", "pcc", "apple-intelligence", "swift", "ios", "macos", "watchos", "small-business-program", "ai-infrastructure"]
source_url: "https://developer.apple.com/private-cloud-compute"
status: "inbox"
---

# Apple Foundation Models on Private Cloud Compute for Small Developers

## Source overview
Apple provides eligible developers access to Apple Foundation Models running on Private Cloud Compute (PCC) with no cloud API cost. The official Apple page describes this as a way for small developers to build intelligent app features without upfront cloud infrastructure costs.

## Eligibility
Apple's official requirements are:
- The developer is enrolled in the App Store Small Business Program.
- The developer has fewer than 2 million first-time App Store downloads across all of the developer's apps.
- Apple has assigned the Private Cloud Compute entitlement to the developer account.

The 2 million threshold is first-time downloads, not a generic total-download counter. TestFlight and ad hoc testing installs do not count as first-time App Store downloads.

Where Apple Intelligence is available, eligible developers can use PCC in App Store apps and test PCC features through TestFlight or ad hoc distribution. If any app later exceeds the threshold, or the developer leaves the Small Business Program, Apple says the developer will be notified and must migrate to an alternative solution within six months.

The Small Business Program has separate proceeds requirements. Apple states that a developer and associated developer accounts must have no more than 1 million USD in total proceeds for the relevant prior and current-year eligibility rules. PCC access also requires the entitlement, so Small Business Program enrollment alone does not grant access.

## Access flow
The documented flow is:
1. Enroll in the App Store Small Business Program.
2. Confirm the first-time App Store download count.
3. Request the Private Cloud Compute entitlement through Apple Developer capabilities.
4. Wait for Apple to assign the managed entitlement to the account.
5. Use the Foundation Models framework with PCC in an eligible app or test build.

The official entitlement is com.apple.developer.private-cloud-compute.

## PCC model capabilities
Apple's Foundation Models documentation describes PCC as the server-based model option for cases that need more context and stronger reasoning than the on-device model.

The documented comparison is:
- On-device model: 4K context in the current framework documentation, works offline, and has no PCC daily request limit.
- PCC model: 32K-token context, multiple reasoning levels, requires a network connection, and has a per-user daily usage limit.

PCC uses the Foundation Models framework's unified API. Apple documents switching to the server-based model by changing the model used when creating a LanguageModelSession.

Reasoning consumes context because the model generates reasoning text before the final response. The context budget therefore includes the prompt, instructions, tools, schemas, responses, and reasoning content.

## Privacy and infrastructure
Apple describes PCC as providing frontier-level intelligence with privacy protections. The user post describes this as privacy-focused Apple infrastructure and as infrastructure developers do not manage.

The official Apple security research describes PCC as a hardened cloud intelligence system with stateless computation, signed code and model assets, and no privileged runtime access. Those are Apple design claims and security documentation statements, not an independent audit performed during this capture.

## User-provided post
Apple is providing developers with free AI infrastructure.

If you are in the App Store Small Business Program and your total downloads are less than 2 million, you can use and integrate Apple's Foundation Models running on Private Cloud Compute into your app.

The post's suggested steps are:
1. Join the Small Business Program.
2. Check the 2 million first-download limit.
3. Open Apple's Private Cloud Compute page in Apple Developer.
4. Submit an access request through the Get the entitlement button.
5. Start using PCC in Xcode after Apple assigns the entitlement.

The post lists these benefits:
- Access to Apple's Foundation Models.
- Execution on Private Cloud Compute.
- No cloud API usage fee.
- No need to manage Apple's infrastructure.
- Privacy-focused Apple infrastructure.
- 32K context and reasoning support.

## Claim qualifications
The official sources support the no-cloud-API-cost claim, the eligibility path, the 32K context, and reasoning support. The post's phrase “total downloads” should be read as Apple's narrower “first-time App Store downloads from any of the developer's apps.” PCC is not unlimited free infrastructure: it has eligibility requirements, a managed entitlement, availability restrictions, connectivity requirements, and a daily per-user limit. Apple may require migration within six months after eligibility ends.

## Sources
- https://developer.apple.com/private-cloud-compute
- https://developer.apple.com/documentation/foundationmodels/adding-server-side-intelligence-with-private-cloud-compute
- https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.private-cloud-compute
- https://developer.apple.com/app-store/small-business-program
- https://developer.apple.com/videos/play/wwdc2026/319
- https://security.apple.com/blog/private-cloud-compute
