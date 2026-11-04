# API Anything live feasibility probes

Captured: 2026-11-02
Source URL: https://github.com/goodnight000/api-anything/blob/main/docs/research/live-probes.md
Probe date in document: 2026-09-27
Publisher: API Anything maintainers

## Scope

The document reports a small read-only probe set on four websites: X, Instagram, Hacker News, Google Flights, and Reddit. It used a logged-out Chrome profile and a US IP. It is a dated project research note, not a broad or independent benchmark.

## Findings relevant to HTML and JSON

- X and Instagram hard loads exposed important data in server-rendered HTML or embedded page payloads, not in a straightforward XHR with the input value.
- Hacker News returned an HTML document and had no JSON API call during the tested page load. The project used an HTML extractor.
- Google Flights used both HTML and a form-encoded XHR with nested data encoding.
- Reddit showed a reCAPTCHA human-verification wall. Plain Node fetch received a JavaScript challenge; `search.json` returned 403. Search results were not verified.

The probe authors say the source payload can be HTML, JSON, embedded serialized data, or a site's own query response. They note that a page can return HTTP 200 with a challenge or error payload, so status alone is not enough to verify useful data.

## Bot-handling limits

The Reddit test remained blocked after attempts with headless and headed browsers. A warmed or logged-in profile was not tried. The research note says a BotGuard token on Google Flights was sometimes required and its lifetime was unknown. It also says the X timeline endpoint failed to replay because a per-request signature may be needed; only the browser-triggered page route returned the timeline in those probes.

## Evidence limits

These are limited, dated maintainer experiments. Some mechanisms are explicitly unverified. Results can change as sites change. They do not prove that API Anything can defeat CAPTCHAs or reliably access protected sites.
