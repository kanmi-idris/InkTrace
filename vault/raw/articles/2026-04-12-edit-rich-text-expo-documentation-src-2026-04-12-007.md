# Edit rich text - Expo Documentation

Source ID: src-2026-04-12-007
Canonical URL: https://docs.expo.dev/guides/editing-richtext
Resource Type: documentation
Host: docs.expo.dev
Mention Count: 2
Original URLs: https://docs.expo.dev/guides/editing-richtext/

## Mention Context
- 12/25/24, 9:05 PM: Richtext editor resources. https://www.youtube.com/watch?v=CxORa1tXMjw https://docs.expo.dev/guides/editing-richtext/ https://lexical.dev/gallery
- 6/23/25, 2:47 AM: Richtext editor resources. https://www.youtube.com/watch?v=CxORa1tXMjw https://docs.expo.dev/guides/editing-richtext/ https://lexical.dev/gallery

## Page Description
Learn about current approaches to preview and edit rich text in React Native.

## Captured Text Excerpt
Edit rich text - Expo Documentation
Docs
Blog Changelog Star Us on GitHub
Hide navigation
Search or Ask AI
Home Guides EAS Reference Learn
Overview
Development process
Develop an app with Expo
Configure with app config
Continuous Native Generation
Using libraries
Privacy manifests
Permissions
Environment variables
Linking
Write native code
Build locally
Web
Bundling
Existing React Native apps
Existing native apps
Reference
Expo Router
Introduction
Manual installation
Router 101
Navigation patterns
Advanced
Web
Reference
Migration
Expo Modules API
Overview
Get started
Tutorials
Reference
Push notifications
Overview
About notification types
Expo push notifications setup
Send notifications with the Expo Push Service
Handle incoming notifications
Reference
Integrations
Analytics and error reports
Authentication
CMS
Database and SDKs
Emails
Feature flags
In-app purchases
Push notifications
Tools
TV apps
Web apps
More
Upgrade Expo SDK
Assorted
Authentication with OAuth or OpenID providers
Using Hermes
iOS Developer Mode
Expo Vector Icons
Localization
Configure JS engines
Using Bun
Edit rich text
App store assets
Local-first
Keyboard handling
Expo UI
Troubleshooting
Regulatory compliance
Data and Privacy protection
GDPR compliance
HIPAA compliance
Archive Expo Snack Discord and Forums Newsletter
Edit rich text
Edit page
Copy page
Learn about current approaches to preview and edit rich text in React Native.
Edit page
Copy page
A lot of applications need to allow users to type in text. For example, if you want to build a messaging or social media app, you will probably rely heavily on text inputs. React Native has a built-in <TextInput> component to implement this without much effort for many simple cases.
However, sometimes you need to be more flexible. Think of long social media posts, note apps, or document editors. Ideally, you need to allow different text styles, lists, headings, embedded images, and more. This is called a rich text editor, and it's a difficult problem to solve everywhere, including in React Native.
There is currently no default solution for that in the React Native ecosystem. However, this guide explores some options and promising approaches, each with its own tradeoffs.
Watch: How to implement a Rich Text Editor using DOM components Build a rich text editor in React Native using Expo DOM components to render a web-based editor inside a native app.
Render rich text
There are a lot of good options to display rich text:
For markdown content, you can use a markdown renderer such as react-native-enriched-markdown or another.
For HTML content, you can use @expo/html-elements or a webview ( react-native-webview ).
To have a custom format and more control, you can take advantage of nesting <Text> components to render styles and layouts.
< TextInput >
< Text >
< Text style = { { fontWeight : 900 } } > Some bold text </ Text > Some regular text
</ Text >
</ TextInput >
You can also use Expo Modules API to write a custom renderer component with native platform primitives using third-party libraries such as Markwon on Android and AttributedString on iOS.
Approaches to edit rich text
There are a few approaches to get rich text rendering to work. However, all have different limitations.
Webview-based editors
While most React Native UI components wrap native platform primitives and are fast, performant, and native feeling as a result, the webview-based rich text editors use a different approach.
They wrap an existing rich text editor built for web with JavaScript inside a react-native-webview . It works on all platforms (Android, iOS, Web) and can take advantage of popular rich text editors available for the Web platform, but it has a performance and UX penalty.
You will not be able to use native UI components inside the editor. Any implementation of features like mentions or image embedding will duplicate features and require significant effort to implement.
Existing webview-based React Native libraries
There are a couple of existing React Native libraries to allow rich-text editing. These are the easiest options to get started if you need a basic rich text editor with limited configuration and don't have strict performance or UX requirements:
react-native-rich-editor
react-native-cn-quill
@10play/tentap-editor
Custom webview-based editor
If you need more configurability, you can build a similar library with an existing web-only editor. However, you have to handle the message passing and web implementation yourself. This gives you all the options that the underlying editor offers and lets you implement more features.
Quill
lexical
slate
You will need to use message passing to pass text and onChange events to and from the webview. Since rich texts often end up long, it's better to model it as an uncontrolled component to prevent lag on each keystroke. Also, if you can avoid serializing and sending the entire state on each keystroke that also improves performance.
Building on top of React Native TextInput
In
