---
title: react-native-nitro-fetch
kind: paste
captured_at: 2026-04-17 15:28
tags: [react-native, networking, performance, prefetching, fetch]
source_url: 
status: inbox
---

# react-native-nitro-fetch

We plugged our 𝚛𝚎𝚊𝚌𝚝-𝚗𝚊𝚝𝚒𝚟𝚎-𝚗𝚒𝚝𝚛𝚘-𝚏𝚎𝚝𝚌𝚑 library into 
@bluesky
's app and configured prefetching - it took us a whole 3 minutes and made the app load 500000000000000000000 zeptoseconds faster! 🤯
Try Nitro Fetch today! 📲

itro Fetch can be used as a drop-in-replacement for 𝚏𝚎𝚝𝚌𝚑 using the same API ✨
Margelo
@margelo_com
·
Apr 13
In many of our clients' apps we noticed CPU-intensive processing, often blocking the JS Thread! 🥶
To fix this, we implemented off-JS-Thread-parsing in Nitro Fetch to prepare data fully in parallel, allowing for a smoother app experience! 🧵
Margelo
@margelo_com
·
Apr 13
Additionally, Nitro Fetch supports prefetching, which natively submits a request to the given URL on the next app start, ensuring subsequent calls to the same URL are hot in cache already! 🔥
Margelo
@margelo_com
·
Apr 13
On Android, Nitro Fetch is powered by Cronet - which is ~28% faster than the default implementation of fetch! 🏎️
We're experimenting with upstreaming the switch to Cronet to react-native core as well - free improvements for everyone!
