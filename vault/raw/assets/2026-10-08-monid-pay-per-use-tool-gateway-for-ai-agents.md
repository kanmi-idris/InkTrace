---
title: "Monid: pay-per-use tool gateway for AI agents"
kind: "project capture"
author: "Monid Inc (as identified by the site)"
source_url: "https://monid.ai/"
origin_url: "https://t.co/t4vu5nYJhX"
related_urls: ["https://monid.ai/docs", "https://monid.ai/docs/guide/how-it-works", "https://monid.ai/docs/guide/pricing", "https://monid.ai/docs/guide/quickstart-skill", "https://monid.ai/docs/guide/quickstart-mcp", "https://api.monid.ai", "https://mcp.monid.ai/v1", "https://github.com/monid-ai/monid"]
tags: ["AI-agents", "tool-calling", "MCP", "API", "pay-as-you-go", "marketplace", "security", "privacy"]
---

# Monid

## Product description
Monid presents itself as a unified gateway to web data endpoints and other tools for AI agents. Its flow is `discover` an endpoint, `inspect` its schema and price, then `run` it. The site advertises 2,442 tools; the repository README says 2,000+ tools across 72+ providers. Treat these as changing vendor counts.

The repository says `discover` and `inspect` are free, while `run` is billed. It describes itself as the open-source connector layer for the hosted service, not the whole hosted service. The site identifies the operator as Monid Inc, a Delaware C-Corp in San Francisco.

## Setup and permissions
The docs describe an MCP server at `https://mcp.monid.ai/v1`, with account login and authorization. The skill setup uses `https://monid.ai/SKILL.md` and a Monid API key. The docs say the key is shown once and tell the user to provide it to the agent. The API uses Bearer authentication. I did not fetch or install the skill, create an account, or provide a key.

## Pricing and billing
The docs describe a prepaid wallet and per-call or per-result pricing. The homepage FAQ advertises $1 in free credit, a 10% Monid fee on top of provider prices, no subscription, and no minimum. The same FAQ claims that failed requests are not charged and that erroneous charges can be refunded. These are vendor claims; I did not test billing.

The FAQ says Monid holds provider keys and brokers calls for the agent. The hosted agent flow can discover and run endpoints at runtime. Calls may incur charges after the free credit is used.

## Data and safety notes
An agent's endpoint inputs are sent to upstream providers through Monid's brokered service. I did not find Monid.ai privacy, data-retention, or maximum-spend terms in the homepage, docs, or repository pages inspected. Use caution with sensitive inputs. Review the endpoint, input schema, price, and approval controls before enabling run access.

The repository is MIT-licensed. The hosted service and its provider operations are not established by the connector repository alone.

## Evidence limits
I inspected the homepage, FAQ, product docs, API overview, and GitHub README. I did not sign in, run an endpoint, test a provider, verify the advertised tool count, or test charges/refunds. I did not install or execute repository code or agent instructions.
