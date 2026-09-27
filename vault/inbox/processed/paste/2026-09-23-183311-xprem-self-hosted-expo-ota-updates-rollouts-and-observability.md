---
title: "Xprem: Self-Hosted Expo OTA Updates, Rollouts, and Observability"
kind: "paste"
captured_at: "2026-09-23 18:33"
tags: ["expo", "react-native", "ota-updates", "expo-updates", "self-hosted", "release-management", "progressive-rollout", "observability", "mcp", "go", "mit", "open-core"]
source_url: "https://www.xprem.dev/"
status: "inbox"
---

# Xprem: Self-Hosted Expo OTA Updates, Rollouts, and Observability

## What it is
Xprem is an open-source, self-hosted OTA update server for Expo and React Native apps. It was formerly called Expo Open OTA or expo-open-ota. The repository says it implements the official Expo Updates protocol, so apps already using expo-updates can communicate with it without a proprietary client runtime. The project is an independent alternative to hosted EAS Update, not an Expo product.

GitHub API metadata checked at capture time reports 578 stars, 91 forks, Go as the primary language, repository creation on 2025-01-22, and an updated repository description identifying the project as the former expo-open-ota. The GitHub API reports NOASSERTION for the top-level license field because the repository is open core; the repository README states that the core is MIT and the ee/ enterprise directories use a commercial license.

## Release-management features
Xprem's server manages OTA publishing through the eoas CLI, CI, or its web dashboard. Documented operations include publishing, rolling back, and republishing updates; mapping build channels to server branches; hosting multiple applications; and progressively serving an update to a percentage of a device fleet. Devices are assigned deterministically during progressive rollouts, so a device remains on the same side of the rollout between checks.

The README also documents A/B testing: one channel can serve two branches while devices are split deterministically between them. This is separate from progressive rollout percentage control. The dashboard is described as supporting branch and channel management, update browsing, rollback, republishing, invitations, and health views.

## Health and observability
Xprem can integrate with expo-observe. With that layer enabled, device-side crashes, metrics, events, and logs are associated with the OTA update that produced them and stored in the operator's own ClickHouse instance. The dashboard and MCP server can expose per-update health and telemetry. Without expo-observe, the OTA release engine, branches, channels, and rollouts still operate, but the event, metric, and log collection layer is absent.

The project also ships an MCP server. Agents can list and manage updates, inspect update health, operate branches and channels, control rollouts, and query telemetry through the server's MCP endpoint. The website says each self-hosted Xprem deployment exposes its own endpoint, rather than using xprem.dev as a shared control plane.

## Storage and delivery
Update bundles and assets remain in infrastructure controlled by the operator. Documented storage choices include Amazon S3, Google Cloud Storage, Azure Blob Storage, Cloudflare R2, MinIO, DigitalOcean Spaces, Supabase Storage, other S3-compatible providers, and a local filesystem. Delivery can use CloudFront, a custom CDN domain, provider-signed URLs, or direct serving. Redis or in-memory caching is supported. Key storage can use AWS Secrets Manager, environment variables, local key files, or sealed database storage.

The app receives update URLs through the standard Expo Updates protocol. The website says the server can sit behind an existing CDN or private network and that the app configuration mainly changes the Expo Updates server URL and publishing workflow.

## Code signing
The project documents end-to-end manifest signing. The server signs every manifest with a private key controlled by the operator, and the matching certificate is embedded in the app. expo-updates then rejects manifests that do not verify against that certificate. The stated security benefit is that a compromised object bucket or CDN cannot publish an accepted update by itself. This protocol and implementation claim was read from the project's own documentation and was not independently tested in this capture.

## Deployment
Xprem is implemented as a Go server and can run as one process, a set of replicas, or a stateless deployment without a database. The project ships a Docker image, a Helm chart, a static Go binary, and an eoas server-init utility. A typical deployment requires one Go process, PostgreSQL, and an object-storage bucket. ClickHouse is optional for the full Observe layer.

## Benchmark claim
The repository includes a benchmark against a simulated fleet of one million monthly active users. The documented setup used an EC2 c6g.medium instance with one vCPU and 2 GiB RAM, an RDS PostgreSQL db.t4g.small instance, Google Cloud Storage, code signing, and device telemetry. The README reports 230 requests per second for real-fleet traffic, 650 requests per second for a capacity probe, and 938 requests per second during a full-fleet rollout, with zero errors in each listed phase. Reported p95 latency was 1.58 ms, 1.39 ms, and 20.5 ms respectively.

These are project-authored benchmark results, not an independent reproduction. The repository links the load-test method and raw results, but I did not run the test or inspect the raw data during this capture.

## Pricing and open-core boundary
The website says the MIT portion has no per-user metering. Infrastructure costs remain the operator's responsibility. The site lists publishing, branch and channel management, rollbacks, progressive rollouts, storage backends, CDN integrations, dashboard access, and Prometheus metrics as MIT features. It describes Observe as free to run but located in the ee/ source tree outside the MIT core. Enterprise features include SSO, RBAC, audit logs, scoped API tokens, branch protection, and custom device attributes under a commercial license.

## Migration and compatibility
Xprem requires expo-updates in the app. It does not require an Expo account in control-plane mode; publishing uses an app API key. The stateless mode is documented as the exception because it uses Expo as the source of truth and requires an Expo access token. The project does not support arbitrary React Native release clients that do not use expo-updates.

## Evidence boundary
The official xprem.dev site, official GitHub repository, README, and repository metadata were inspected. I did not install Xprem, configure an Expo app, publish an update, connect a bucket, run the benchmark, or test code-signing rejection. Production-serving, one-million-device capacity, and health metrics remain project-authored claims.

## Sources
- https://www.xprem.dev/
- https://github.com/mercuretechnologies/xprem
- https://mercure-technologies.gitbook.io/xprem
