# API Anything repository README snapshot

Captured: 2026-11-02
Source URL: https://github.com/goodnight000/api-anything
Repository branch: `main`

## Product and architecture claims

The README describes API Anything as a tool that learns a website's own requests, turns them into parameterized operations, and calls them over MCP, CLI, or TypeScript. It returns JSON. It says the learner uses two example inputs to distinguish variable values from fixed request details, without using an LLM to build the request template.

The README says the runtime tries a plain Node HTTP request first. If the site blocks that, it can fetch from a real browser page. As a last read fallback, it can run the page's own trigger and read the response. When requests drift, the tool tries a shared repair or relearns and validates the request. If repair fails, it returns an error rather than data from a different request.

The shared catalog stores operation specs and health reports, not proxied site requests. Calls run on the user's own machine, browser, and network. The README says credentials are kept locally; shared specs use references such as `cookie:name`, not cookie values. It says operations learned with authentication are shared only after matching learning across three installs on three networks, and new operations need confirmations from two other networks before going live.

## Important qualification

The result is JSON, but the source response is not always JSON. The tool can extract from JSON responses, HTML documents, or embedded page data. The reference and live probes document these cases in [src-2026-11-02-002] and [src-2026-11-02-003].

## Evidence limits

These are repository claims. I did not install, run, or audit the tool.
