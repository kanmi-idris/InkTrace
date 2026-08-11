# Livestreaming Trilemma: HLS, WebRTC, MOQ

**Source:** Blog article by Karol Konkol at Software Mansion  
**Date:** 2026-06-10  
**URL:** https://swmansion.com/blog/livestreaming-trilemma-hls-webrtc-moq/  
**Reading Time:** 12 minutes

## Core Claim

Live video has always been a trilemma: pick two of scale, latency, and cost. Media over QUIC (MoQ), a new IETF protocol, attempts to dissolve this constraint by combining the best properties of HLS and WebRTC.

## Historical Context

**RTMP Era (late 2000s)**
- Flash-era protocol, didn't scale well past certain point
- Industry searched for alternatives

**HLS (Apple) and DASH (open standard)**
- Simple idea: chop live stream into tiny files, serve over HTTP
- Leverages existing CDN infrastructure for free
- Enables massive scale (millions of viewers simultaneously)
- Trade-off: high latency (10-30 seconds end-to-end)
- Low-Latency HLS (LL-HLS) with CMAF chunking reduced to ~3-5 seconds in practice

**WebRTC (video conferencing standard)**
- Designed for real-time video calls, sub-200ms latency
- Enables synchronization that HLS cannot provide
- Trade-off: poor scalability for one-to-many livestreaming
  - No central CDN infrastructure like HLS
  - Requires Selective Forwarding Units (SFUs) per viewer
  - SFUs hold encrypted stateful peer connections with every viewer
  - Parses RTP packets per viewer, reacts to bandwidth in real time
  - CPU- and memory-heavy, scales by adding more custom SFUs (not commodity CDN)
  - Cost increases linearly with viewer count

## The Trilemma Defined

Three axes in livestreaming architecture:
1. **Scale** - How many concurrent viewers can be supported cost-effectively?
2. **Latency** - How soon do viewers see the stream relative to capture (sub-second vs seconds)?
3. **Cost** - What is the operational cost of delivery infrastructure?

Traditional constraint: pick two of the three.

| Protocol | Scale | Latency | Cost |
|----------|-------|---------|------|
| HLS      | High  | Poor (10-30s) | Low (CDN-based) |
| WebRTC   | Poor  | Excellent (<200ms) | High (SFU overhead) |
| LL-HLS   | High  | Moderate (3-5s) | Low (CDN-based) |

## Use Cases Requiring All Three

- Online betting (5-second lag means line already moved)
- Live shopping (bidders see items at different times)
- Watch parties (requires sync for real-time group reaction)
- Concerts and live sports (audience should feel synchronized)

## Media over QUIC (MoQ)

**Status:** IETF working group draft, multiple running implementations available  
**Foundation:** Built on QUIC transport protocol (HTTP/3 foundation)  
**Standardization:** Same process as HTTP and TLS, includes Meta, Google, Cisco, Akamai

**Design Model:**
- Publish/subscribe architecture
- Publishers expose a stream
- Subscribers request what they need
- Relays in the middle make the exchange scale

**How it differs:**
- NOT a codec or player replacement
- NOT a faster HLS or more scalable WebRTC
- Bridges what those two cannot do together
- Plumbing for live media systems requiring both sub-second responsiveness AND large audiences

## Key Technical Insight

MoQ learns from both HLS and WebRTC:
- Combines HLS's CDN scalability model
- With WebRTC's real-time latency characteristics
- Creates path for streams on networks without requiring direct peer connections
- Subscribers can ask networks for named paths they want

## Strategic Significance

Companies racing to production: Streaming startups actively deploying  
Attention from: Meta, Cisco, Google, Akamai engineers attending IETF meetings  
Mindset shift: Genuine industry excitement (not just "another protocol")
