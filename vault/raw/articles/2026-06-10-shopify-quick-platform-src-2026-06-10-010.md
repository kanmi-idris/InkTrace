# Quick: An internal hosting platform for the AI era

Captured from Shopify Engineering on 2026-06-10.

Canonical URL:
https://shopify.engineering/quick

Article metadata captured:
- Title: Quick: An internal hosting platform for the AI era (2026)
- Publisher: Shopify
- Authors captured: Daniel Beauchamp, Alex Pilon
- Description: Quick lets anyone at Shopify ship a site in seconds. It has changed the culture of how we build and share.

Core framing captured from the article:

- Quick is an internal Shopify platform where a user uploads a folder of HTML and assets and gets back a secure internal URL.
- There are no frameworks, deploy pipelines, or config files required.
- If a site needs backend-like features, Quick exposes a zero-config client-side API for services such as database access, file uploads, AI, data warehouse access, websockets, and identity.
- Quick launched internally in July 2025 and now hosts more than 50,000 sites, with more than half of Shopify employees having created at least one.

Architecture captured from the article:

- Each site is stored as a folder of assets in a Google Cloud Storage bucket.
- A lightweight NGINX server with wildcard subdomain routing maps hostnames to folder paths.
- `gcsfuse` mounts the bucket into the local filesystem so NGINX can serve files as if they were local.
- The entire server sits behind Google Identity-Aware Proxy, so access is limited to authenticated Shopify employees.
- The `quick deploy` command is a thin wrapper around `gcloud rsync` that pushes a local directory to the bucket.

Backend-services model captured from the article:

- Shopify added a shared backend server so Quick sites could use lightweight backend capabilities without spinning up per-site infrastructure.
- The article describes database access with a simple client API, including create and subscribe operations for realtime updates.
- Firebase is named as an inspiration for the simple client-side data model and sync behavior.
- The team initially considered per-site sqlite databases but instead chose a single CloudSQL database with a server layer in front.
- AI support was added so Quick sites can call LLMs and image-generation models from the client without handling API keys directly.
- The article also says Quick added file uploads, data warehouse access via BigQuery, websocket support, and an identity API that exposes employee context such as name, title, team, and Slack handle.

Agent and workflow angle captured from the article:

- Quick includes built-in agent-facing skills so users can run `quick init`, launch an agent, and have it build working internal sites quickly.
- The article positions Quick as especially well-suited to prompt-built or AI-generated HTML because it removes the deployment and backend friction that usually blocks lightweight internal tools.

Adoption and culture captured from the article:

- Quick initially enabled simple personal or novelty pages, then expanded into dashboards, prototypes, dev tools, presentations, design tools, internal replacements for missing tools, multiplayer games, and reusable internal libraries.
- The article argues that the internal-only trust boundary removes many open-web concerns such as public abuse, spam, and some security hardening overhead, which makes experimentation easier.
- Shopify frames this as a cultural shift in how internal ideas are shared: instead of screenshots or static mockups, people increasingly share working Quick sites.

Constraint philosophy and maintenance captured from the article:

- Quick intentionally keeps a small fixed set of capabilities and resists expanding into a general platform with arbitrary custom backends or cron jobs.
- All Quick sites are open to all employees, there is no formal ownership model, and sites can simply be overwritten.
- As of the article’s publication, the system is still running on a single VM costing about `$200` per month.
- The article says the server load stays manageable because most work is client-side and the user population is bounded internally.
- Shopify notes some operational hiccups around abusive batch processing and large data writes, which led to rate limiting.
- The backend stack also migrated over time from Node.js to Go to improve memory management and parallelism.

Interpretive note:

- This source is strongest as a reference for low-friction internal tooling platforms, especially those designed to combine static-site simplicity with a bounded set of shared backend primitives.
- The durable idea is not just “host HTML easily,” but “treat internal trust boundaries plus fixed shared primitives as a way to radically compress time from idea to usable internal software.”