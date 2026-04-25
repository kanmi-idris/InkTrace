# Introduction - Voltra

Source ID: src-2026-04-12-049
Canonical URL: https://www.use-voltra.dev/getting-started/introduction
Resource Type: article
Host: www.use-voltra.dev
Mention Count: 1
Original URLs: https://www.use-voltra.dev/getting-started

## Mention Context
- 1/14/26, 7:58 AM: https://www.use-voltra.dev/getting-started Adding live activities to your iOS app has traditionally been a time-consuming and complex process. JavaScript developers need to learn Xcode, master SwiftUI, understand how to start live activities, and figure out ho

## Page Description
Build Live Activities with JSX in React Native.

## Captured Text Excerpt
Introduction - Voltra
Search
Getting started
iOS
Android
Theme
Menu Contents
Getting Started
Introduction
Installation
Prior Art
iOS
Introduction
Setup
Components
Overview
Layout & Containers
Visual Elements
Status & Progress
Interactivity
Charts
Development
Managing Live Activities locally
Developing Live Activities
Developing Widgets
Querying Active Widgets
Widget pre-rendering
Images
Image preloading
Performance
Styling
Flexbox Layout
Interactions
Events
Server-side updates
Server-driven widgets
API Reference
Plugin Configuration
Configuration
Android
Introduction
Setup
Components
Layout & Containers
Visual Elements
Status & Progress
Interactivity
Charts
Development
Developing Widgets
Querying Active Widgets
Styling
Images
Image Preloading
Widget Pre-rendering
Server-driven widgets
Custom Fonts
API Reference
Plugin Configuration (Android)
# Introduction
Voltra is a library that brings new "platforms" to React Native. Up until now, creating features like iOS Live Activities, Dynamic Island layouts, or Android Home Screen Widgets required writing native code in Swift or Kotlin.
Voltra changes this by providing a JavaScript-based API and JSX components that get automatically converted to native primitives (SwiftUI on iOS, Jetpack Compose Glance on Android).
# Why Voltra?
React Native Everywhere: Extend your React Native app with native platform features using the same JSX syntax you already know.
No Native Code Required: Build complex widget layouts and live activities without touching Xcode or Android Studio for UI code.
Unified Components: Use a shared set of components that render idiomatically on both iOS and Android.
Real-time Updates: Stream updates to your activities and widgets via push notifications (APNS/FCM) from any JavaScript runtime.
# How it works
Voltra works by serializing your JSX components into a lightweight JSON format that the native platform extensions can interpret. This enables features like hot reloading during development and server-side rendering for push updates.
Here's how simple it is to create a live activity:
import { startLiveActivity } from 'voltra/client'
import { Voltra } from 'voltra'
const activityUI = (
< Voltra.VStack style = {{ padding : 16 , borderRadius : 18 , backgroundColor : '#101828' }}>
< Voltra.Symbol name = "car.fill" type = "hierarchical" scale = "large" tintColor = "#38BDF8" />
< Voltra.Text style = {{ color : '#F8FAFC' , fontSize : 18 , fontWeight : '600' }}>Driver en route</ Voltra.Text >
< Voltra.Text style = {{ color : '#94A3B8' , fontSize : 12 , marginTop : 8 }}>Building A · Lobby pickup</ Voltra.Text >
< Voltra.Button id = "contact-driver" style = {{ marginTop : 12 }}>
< Voltra.Text >Contact driver</ Voltra.Text >
</ Voltra.Button >
</ Voltra.VStack >
// Start the live activity
await startLiveActivity ({
lockScreen : activityUI ,
})
If you prefer using the hook API ( useLiveActivity ), you'll get live reloads for live activities, with changes appearing in milliseconds without manual restarts.
# Server-side updates via push notifications
Voltra also supports server-side updates through push notifications. You can use Voltra's server-side rendering to convert JSX into JSON payloads that you send to devices via Apple's Push Notification Service (APNS) or Firebase Cloud Messaging (FCM). This enables real-time updates without keeping your app running.
The same components you use in your app work on the server:
import { renderLiveActivityToString } from 'voltra/server'
import { Voltra } from 'voltra'
// Render JSX to JSON payload on your server
const payload = renderLiveActivityToString ({
lockScreen : (
< Voltra.VStack style = {{ padding : 16 , borderRadius : 18 , backgroundColor : '#101828' }}>
< Voltra.Symbol name = "car.fill" type = "hierarchical" scale = "large" tintColor = "#38BDF8" />
< Voltra.Text style = {{ color : '#F8FAFC' , fontSize : 18 , fontWeight : '600' }}>Driver arrived</ Voltra.Text >
< Voltra.Text style = {{ color : '#94A3B8' , fontSize : 12 , marginTop : 8 }}>Ready for pickup</ Voltra.Text >
</ Voltra.VStack >
) ,
})
Ready to get started? Head over to the Installation guide, or explore platform-specific guides for iOS and Android .
Need React or React Native
expertise you can count on?
Let's talk
Edit this page on GitHub
Next page Installation
Need help with React or React Native projects?
We support teams building scalable apps with React and React Native.
Let's talk
