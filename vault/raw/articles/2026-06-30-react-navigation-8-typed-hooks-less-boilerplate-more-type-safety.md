---
title: React Navigation 8 Typed Hooks — Less Boilerplate, More Type Safety
kind: paste
captured_at: 2026-06-30 13:58
tags: [react-navigation, typescript, react-native, callstack, type-safety]
source_url: https://www.callstack.com/blog/less-boilerplate-more-type-safety-react-navigation-8s-typed-hooks
status: inbox
---

# React Navigation 8 Typed Hooks — Less Boilerplate, More Type Safety

Callstack blog post by Satyajit Sahoo (Jun 29, 2026) — React Navigation 8 (alpha) typed hooks improvements.

Three hooks upgraded:

1. useRoute:
- RN 7: route.params is generic object, needed unsafe as casts or generics.
- RN 8: returns a union of all routes in the project with strong param types out of the box. Check route.name to narrow the type.
- Can pass screen name: useRoute('Profile') — returns proper types AND validates at runtime that the hook is used inside that screen (types and runtime can't drift).
- Can access parent screen's route params without manual context/prop drilling.

2. useNavigation:
- RN 7: returns navigation object typed to root navigator. setOptions, addListener don't know which navigator's options/events they can update. CompositeNavigationProp boilerplate needed.
- RN 8: pass screen name to useNavigation (useNavigation('Latest')). Navigation object type matches the specific navigator — addListener('tabPress') works for bottom tabs, setOptions has navigator-specific options. Nested navigator aware (e.g. openDrawer available if nested under drawer).
- Static API: inferred automatically. Dynamic API: no more CompositeNavigationProp boilerplate.

3. useNavigationState:
- RN 7: state is generic navigation state without navigator-specific properties.
- RN 8: accepts screen name, state type matches navigator's state. Can get state from parent navigator.

How to enable: No separate step. Just set up types per official docs (static or dynamic API). TypeScript guide overhauled.
For Dynamic API: provide navigator type to NavigatorScreenParams instead of param list.
