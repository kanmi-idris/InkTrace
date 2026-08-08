---
title: The Memory Hermes Cannot See: Stale Shadow Nodes in React Native
kind: paste
captured_at: 2026-08-05 21:33
tags: []
source_url: https://x.com/swmansion/status/2085034243932000487?s=20
status: inbox
---

# The Memory Hermes Cannot See: Stale Shadow Nodes in React Native

Software Mansion
@swmansion
The Memory Hermes Can't See: Stale Shadow Nodes in React Native
Author: @tjzeldev

I spent the last few weeks measuring different apps and configurations to find out exactly how Bundle Mode impacts the performance of React Native apps. In the previous article I explained how react-native-worklets Bundle Mode accidentally fixed a Hermes V1 memory regression - but I didn't stop there.

It was quite a journey - I discovered a memory leak in Hermes, stumbled upon unnecessary copies of the JS bundle in react-native-worklets and learned that AI is great at gathering data but terrible at analyzing it.

I originally planned for this article to cover those performance differences, but during my experiments I stumbled upon a fascinating finding regarding the Shadow Tree and thought it deserved its own place in the sun.

While I have data for both Hermes V1 and Legacy Hermes (V0), the results don't really differ between the two when it comes to the Shadow Tree finding.

The finding

While measuring an app that continuously mounts and unmounts animated views, I noticed that sporadic garbage collector (GC) runs could free a lot of memory, up to tens of megabytes.

A Bokeh animation used for the measurements - the animated circles are mounted and unmounted every so often.

The experiment had the animation running for 30 minutes - Hermes V0 collected once during this time; the Hermes V1 GC didn't fire once.

To understand what was happening, I had to look into exactly what was deallocated when the GC fired. It turned out to be React Native's Fabric Shadow Nodes - old Nodes left over from previous Shadow Tree revisions.

Shadow Tree revisions

The Shadow Tree is the source of truth when it comes to what should be rendered on the screen and how. The Shadow Nodes are immutable - if you want to modify a view, you have to clone its respective Node.

To drive animations, Reanimated (as well as other libraries that alter the Shadow Tree directly) produces a new candidate Shadow Tree revision on every animation frame - it copies Nodes that will be altered by the animation and re-uses the non-animated part of the tree.

Normally, once the tree moves on and nothing references the old revision's Nodes, they are freed. So why did the stale Nodes accumulate in such large numbers, and why weren't they disposed of?

I added a forced, periodic GC call every 60 seconds in the React Native Runtime - and with it, the stale Shadow Nodes stopped accumulating. Something inside JavaScript was keeping the Shadow Nodes alive: Shadow Node Wrappers.

Forced periodic GC runs made the memory consumption virtually flat.

Shadow Node Wrappers

Shadow Node Wrappers are JavaScript objects that hold a shared_ptr to a Shadow Node through a shared memory. They are embedded in React components in React Native. Thanks to that, you can access the underlying Shadow Node through JS to use it in a native module.

When Reanimated clones a Shadow Node for an animation update, there's no need to re-render the component and create another Wrapper. In this situation, React Native just changes the underlying shared_ptr kept by the Wrapper. The old Node is cleanly deallocated in C++, since there are no more strong references to it.

However, it's a bit different when the view is unmounted. The React component and the objects attached to it still exist in memory. In particular, the Wrapper still points to its branch of a long-dead revision. From that moment on, the only thing that can release that memory is the GC deciding to clean up the component and the Wrapper.

The issue here is that the GC doesn't know that an opaque JS object has that much memory attached to it. The retained Shadow Nodes sit outside of the JS heap.

In Hermes, there's a partial fix - JSI exposes the setExternalMemoryPressure method on jsi::Object to do exactly what we need: imperatively tell the GC that there's extra data attached to that object.

I wasn't sure if the mechanism fit this situation well. The re-pointing of the Wrapper happens entirely inside C++, on every clone, with no opportunity to update the memory pressure on the Wrapper. Any pressure value we set is silently stale after the next animation frame.

Even if we had exclusive access to the runtime to update the pressure, the shared structure of the Shadow Tree makes it hard to estimate how much memory would be freed if a given Shadow Node Wrapper were released.

Nevertheless, I patched React Native to set the memory pressure for each Shadow Node Wrapper. Setting it to 2 KB - the average amount of memory that was released per Wrapper - stopped the stale Shadow Nodes from accumulating. Memory hits flat, but too flat - the GC was firing constantly and taking a toll on the CPU.

So both experiments confirm the same diagnosis - stale Shadow Nodes kept alive by their Wrappers - but neither a forced periodic GC nor a hardcoded memory pressure value is a fix.

Afterword

I don't yet know how to address this quirk of the New Architecture. I find it somewhat ironic that smaller applications - ones that use JS sparingly, don't generate a lot of garbage to collect, and in turn don't trigger the GC - are potentially more vulnerable.

From an experimentation standpoint, this can skew results: in a bigger app, a single GC run that releases all the stale Shadow Nodes can hide in the graphs and still distort the numbers.

Teaser for the next article in this series: how different react-native-worklets modes and Hermes versions impact Expensify app memory consumption on Android.
