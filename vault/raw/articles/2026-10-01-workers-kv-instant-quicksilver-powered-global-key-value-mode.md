---
title: "Workers KV Instant: Quicksilver-powered global key-value mode"
kind: "article"
captured_at: "2026-10-01 23:09"
tags: ["cloudflare", "workers", "workers-kv", "quicksilver", "key-value-store", "global-replication", "edge-computing", "pricing", "private-beta"]
source_url: "https://blog.cloudflare.com/workers-kv-instant/"
status: "inbox"
---

# Workers KV Instant: Quicksilver-powered global key-value mode

Author: Rob Sutter. Published October 1, 2026.

## Product summary
Cloudflare announced Workers KV Instant, a Workers KV mode powered by Quicksilver. It keeps the familiar KV API and targets infrequently updated, read-heavy global application configuration, such as feature flags and settings. The post says updates replicate globally without waiting for a TTL to expire.

## Published performance figures
Cloudflare reports 1.62 ms p99 reads for Instant and 287 ms p99 reads for classic KV in its table. The post reports Instant write replication at a 107 ms median, 181 ms p95, and 256 ms p99. The article describes these as Cloudflare measurements. I did not reproduce them.

## Constraints and pricing
The post says Instant reads cost $0.20 per million, compared with $0.50 per million for classic Workers KV. Writes, deletes, and list operations cost $0.10 per operation. Storage costs $100 per MB per month, versus $0.50 per GB per month for classic mode.

A namespace can hold up to 10,000 key-value pairs and one megabyte total. Keys can be up to 300 bytes. Writes are limited to one per namespace per second. List returns all matching keys on one page. Metadata is not supported.

## Availability and evidence limits
The post announced a private beta on October 1, 2026. Pricing, availability, feature constraints, and performance figures are Cloudflare-published claims from that announcement. No namespace was created and no code was tested.
