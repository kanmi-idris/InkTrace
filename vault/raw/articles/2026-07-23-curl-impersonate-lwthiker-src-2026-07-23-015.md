---
source_id: src-2026-07-23-015
captured_at: 2026-07-23T06:55:00Z
url: "https://github.com/lwthiker/curl-impersonate"
status: complete
---

# curl-impersonate — Special build of curl that impersonates Chrome, Edge, Safari & Firefox

**Author:** lwthiker
**License:** MIT
**Stars:** 6,600 | **Forks:** 528 | **Watchers:** 66
**Latest release:** v0.6.1 (Mar 2, 2024)
**Commits:** 270
**Languages:** Python (50%), Shell (20.6%), Makefile (11.8%), Dockerfile (10.2%), C (5.1%), M4 (2.3%)

## Problem Statement

HTTP clients and libraries produce TLS Client Hello messages and HTTP/2 handshake settings that differ drastically from real browsers. Web services use these differences for TLS fingerprinting and HTTP/2 fingerprinting to identify non-browser clients, restricting access or presenting different content.

curl-impersonate patches curl to produce TLS and HTTP handshakes identical to real browsers, bypassing fingerprinting-based blocking.

## Architecture

Two builds:
- **Chrome version** — compiled with BoringSSL (Google's TLS library) to impersonate Chrome, Edge, Safari
- **Firefox version** — compiled with nss (Mozilla's TLS library) to impersonate Firefox

Both builds modify:
- TLS extensions and SSL options
- Supported signature algorithms, curves, cipher suites
- HTTP/2 settings (PRIORITY frames, SETTINGS frame order, pseudo-header order)
- Certificate compression, ALPS, permuted extension order

## Supported Browser Profiles (20+)

Chrome 99, 100, 101, 104, 107, 110, 116 (Windows 10), Chrome 99 Android, Edge 99/101, Firefox 91ESR/95/98/100/102/109/117, Safari 15.3/15.5

## Usage

### CLI (wrapper scripts)
```bash
curl_chrome116 https://www.wikipedia.org
curl_ff109 https://www.wikipedia.org
```

### Library (libcurl-impersonate)
```c
CURLcode curl_easy_impersonate(CURL *handle, "chrome116", 1);
```

### LD_PRELOAD (replace libcurl at runtime)
```bash
LD_PRELOAD=/path/to/libcurl-impersonate.so CURL_IMPERSONATE=chrome116 my_app
```

### Docker
```bash
docker pull lwthiker/curl-impersonate:0.6-ff
docker run --rm lwthiker/curl-impersonate:0.6-ff curl_ff109 https://www.wikipedia.org
```

## Relevance to Scraping Toolchain

curl-impersonate is a critical component for bypassing TLS-fingerprinting-based anti-bot measures. It operates at the transport layer, making it complementary to higher-level scraping tools:
- Can be used as the HTTP backend for Scrapling, Crawl4AI, or Crawlee
- The LD_PRELOAD approach means any tool using libcurl can gain impersonation without code changes
- Docker images make it easy to integrate into CI/CD scraping pipelines

## Notes

- The actual patches to curl are maintained in a [separate forked repo](https://github.com/lwthiker/curl) (branches: impersonate-firefox, impersonate-chrome).
- Project appears semi-active (v0.6.1 from Mar 2024, 270 commits).
- Latest browser profiles go up to Chrome 116, Firefox 117 — may lag behind latest browser versions.
- Pre-compiled binaries for Linux and macOS (Intel) available in releases.
- AUR packages for Arch, unofficial Homebrew for macOS.
