# API Anything technical reference snapshot

Captured: 2026-11-02
Source URL: https://github.com/goodnight000/api-anything/blob/main/docs/REFERENCE.md
Publisher: API Anything maintainers

## Learning and extraction

The reference describes capturing requests made by a website for example inputs, then defining an operation with a URL trigger, request template, parameter slots, and response extraction. It shows JSON extraction, CSS-based HTML extraction, and extraction of embedded JSON. The source request can be an HTML document, a JSON endpoint, or another response type.

## Replay tiers

The reference lists three read transports, ordered from cheaper to more browser-dependent:

1. Node `fetch` with a domain- and path-scoped cookie jar.
2. `fetch()` from a real Chrome page on the site origin when tier 1 is blocked.
3. Run the learned page trigger in Chrome and read the site's own matched response. It can be used for operations that require per-request signatures or after a read repair fails.

The lowest successful tier is remembered for an operation. The docs say failed calls should return structured errors and not substitute another query's data. They classify a bot challenge that remains after browser escalation as `blocked` and instruct the caller to ask the user to log in and clear the challenge.

## Bot and access limits

The reference describes using the user's own browser/session and site-origin fetches as fallbacks. It does not describe a universal CAPTCHA solver or a method that guarantees access through bot defenses. A challenge can still block a request. Session values are local references rather than values stored in shared operation specs.

## Evidence limits

This is maintainer documentation, not independent security or bot-protection testing. See the small, dated probe set in [src-2026-11-02-003]. I did not run the tool.
