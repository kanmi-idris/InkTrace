# yorkeccak/globalhackmap repository snapshot

Captured: 2026-11-04
Repository: https://github.com/yorkeccak/globalhackmap
Live site: https://globalhackmap.vercel.app/

## Project and architecture

The README describes Global Hack Map as a live incident map for publicly reported breaches, ransomware claims, exploited vulnerabilities, malicious packages, and connectivity drops. It advertises CVE lists, patch guidance, “Am I affected?” lookups, agent runbooks, and a read-only MCP server.

The repository says its source collectors normalize feeds; a pipeline geolocates, deduplicates, and scores incidents; and a snapshot is shared by the UI and MCP server. The README lists Next.js 16, Cache Components, Partial Prerendering, Mapbox GL, package-manifest checks against OSV, and runbooks at `/fix/<CVE>`.

## Inputs and provenance

The README lists CISA KEV, CVE.org, CIRCL Vulnerability-Lookup, NVD, FIRST EPSS, GitHub Advisory Database, OSV, RansomLook, SEC EDGAR, Georgia Tech IODA, Wikidata, GeoNames, Natural Earth, NASA GIBS, and Valyu. It gives data-use terms for each source and says the product is not endorsed or certified by NVD.

The status definitions distinguish organisation-confirmed events from press reports, attacker claims, precautionary shutdowns, and disputed reports. The site also warns that an absent result is not proof of safety.

## Self-hosting and cost dependencies

The README requires Node.js 20+ and pnpm. A Mapbox token is required for the globe. Public feeds work without a Valyu API key, but news extraction, daily briefs, generated answers, research reports, and explainers need Valyu. Production request protection uses Upstash Redis. GitHub, NVD, and CIRCL tokens or API keys affect rate limits.

The README says public snapshots normally revalidate after 10 minutes and public feeds after 15 minutes. It warns that these cache intervals do not guarantee publication-to-screen freshness. Upstream delays, timeouts, cached data, and fallback feeds can make results older or incomplete. Self-hosting across instances can require a compatible remote cache handler.

## License and repository state

The repository lists an MIT code license and SIL Open Font License for included fonts. At capture, GitHub showed 30 stars, 11 forks, 14 commits, and a successful latest commit `0d41af9` dated November 3, 2026. These repository statistics are point-in-time values.

No code was installed, built, or tested during this capture.
