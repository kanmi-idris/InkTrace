---
title: Bruno - Git-Native API Client (Postman Alternative)
kind: paste
captured_at: 2026-06-14 20:59
tags: [api, postman, bruno, collaboration, git, developer-tools]
source_url: 
status: inbox
---

# Bruno - Git-Native API Client (Postman Alternative)

Bruno - Git-Native API Collaboration (Postman Alternative)

## Overview
Bruno is a Git-native API collaboration tool that stores API collections as plain text files in your Git repo. No cloud sync. No proprietary formats. Collaboration is driven by Git, not a SaaS server.

## Why Bruno Exists
Postman removed free team collaboration. If you're on a free plan with 3+ collaborators, team access gets revoked. Bruno's pitch: collaboration should not be revocable by a vendor.

## How It Works
- Collections are YAML files built on OpenCollection (open standard for API collections)
- Store them in any Git repo (GitHub, GitLab, Bitbucket, self-hosted) or locally
- Access = repo access. Permissions = Git permissions.
- No Bruno server to revoke access from

## Migration from Postman
1. Export from Postman: Collections -> Export -> JSON
2. Import into Bruno: File -> Import Collection -> drag & drop
3. Done. Collections become portable, versionable, and truly yours.

## Key Properties
- No account required
- No proprietary formats
- No cloud sync
- Git-native workflow
- Open standard (OpenCollection YAML format)
- Support: support@usebruno.com (< 4hr response)

## Context
Bruno positioned itself as the response to Postman's SaaS rug-pull pattern. The core argument: cloud-based collaboration = collaboration at the vendor's discretion. Git-based collaboration = collaboration that's yours.
