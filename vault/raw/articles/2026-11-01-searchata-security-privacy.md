# Searchata security documentation and privacy policy

Captured: 2026-11-01
Sources: https://searchata.com/docs/security and https://searchata.com/privacy
Publisher: Searchata

## Permissions and stored data

Searchata says it requests the Google scope `https://www.googleapis.com/auth/webmasters.readonly` and Bing scope `webmaster.read`. It says neither source connection grants write access through Searchata's tools.

The security page says Searchata stores account and workspace records, connected property metadata, encrypted Google and Bing OAuth credentials, MCP authorization records, plan and usage records, and short-lived encrypted source-response caches. It says it does not collect Claude conversations, agent memory, or uploaded files. It may process the parameters sent to a selected tool.

The privacy policy adds detail: Google performance caches may last 10 minutes or, for older final data, up to 24 hours. Bing caches may last 10 minutes, one hour, or six hours based on report type. MCP tool-call metadata is stored for up to 30 days; daily counts and timing summaries may be kept for up to 400 days.

The privacy policy says it uses X conversion measurement, Microsoft Clarity, and PostHog. It describes website analytics and session replay. It says it does not send Google Search Console or Bing data, or MCP tool results, to X or Microsoft Clarity. The policy says PostHog can receive account identifiers, name, and email after sign-in to link website activity and session replays to an account.

## Security and revocation

Searchata says the remote MCP connection uses OAuth 2.0 authorization code flow with PKCE, access-token expiry, refresh tokens, and protected-resource discovery. Users can disconnect an agent or a source connection. The docs direct account-data deletion requests to `privacy@searchata.com` and vulnerability reports to `security@searchata.com`.

## Evidence limits

These are vendor policy statements, not an independent security audit. The homepage phrase “We don't store your search data” should be read alongside the documented encrypted response caches and source credentials. See [src-2026-11-01-010].
