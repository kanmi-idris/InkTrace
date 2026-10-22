# React Navigation 8.x Bottom Tab Navigator documentation snapshot

Captured: 2026-10-15
Source URL: https://reactnavigation.org/docs/8.x/bottom-tab-navigator/

## Native implementation and tab roles

The docs say native Bottom Tabs use platform primitives on iOS and Android. `tabBarRole` is supported only by the native implementation on iOS. Its roles are:

- `prominent`: the system can give the tab prominent styling on iOS 27 and later. Only one tab can use this role.
- `search`: the tab is the system search tab.

On iOS 26, the search role can receive prominent styling. On iOS 27 and later, search-role prominence requires `tabBarSearchAutoFocus` and no other prominent tab. `tabBarSearchAutoFocus` requires a nested native stack with `headerSearchBarOptions`.

The docs say that on iOS 26.1 and later, at most one tab can have the search role. They do not support adding or removing that role after the tab renders.

## Other platform limits

The docs list `tabBarSidebarPreferredPlacement` for the native implementation on iOS 27 and later. It requires `tabBarControllerMode: 'tabSidebar'`.

The docs list `tabBarVisibilityAnimationEnabled` for native iOS 18 and later.

## Evidence notes

This is a public documentation snapshot. The docs describe platform-specific behavior. I did not run an app or test these options.
