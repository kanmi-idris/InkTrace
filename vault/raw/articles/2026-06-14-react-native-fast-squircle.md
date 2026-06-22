---
title: react-native-fast-squircle
kind: paste
captured_at: 2026-04-17 15:25
tags: [react-native, design, performance, ui, squircle]
source_url: https://github.com/fbeccaceci/react-native-fast-squircle
status: inbox
---

# react-native-fast-squircle

This shape is called a SQUIRCLE and i just made it 10 times faster to render it in React-Native. Let me explain how i did it.

This shape is commonly used in modern designs, it kinda looks like a rounded square but as you can the corners are smooth and organic

In 2025 if you want to implement peak designs you need this shape

In react-native up to today there were a couple of ways to do it

1. react-native-figma-squircle: this is an SVG based solution, which is a deal breaker due to performance (it's good enough but svg has some overhead and can be too slow when many are rendered together) and due to developer ergonomics, hard to add children to it and to clip them. 

2. react-native-skia-squircle: same thing as before, this time implemented with skia with doesn't suffer from the SVG overhead but still has some overhead to initialize the skia view. Also all the ergonomics problems said before are valid once again

The solution to all problems:

https://github.com/fbeccaceci/react-native-fast-squircle

I just created react-native-fast-squircle, and the good thing is that the render method i use to create squircles is the normal react-native View

My component hooks into the RN native rendering code and changes the shape of a View so you can have all the ergonomics and performance of the native View component

If you like this or needed this go star it on github
