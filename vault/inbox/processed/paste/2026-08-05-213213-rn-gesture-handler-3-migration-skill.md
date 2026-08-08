---
title: RN Gesture Handler 3 Migration Skill
kind: paste
captured_at: 2026-08-05 21:32
tags: []
source_url: https://github.com/software-mansion-labs/skills/blob/main/skills/react-native-best-practices/references/gestures/v2-to-v3-migration.md
status: inbox
---

# RN Gesture Handler 3 Migration Skill

Just a quick reminder that with RN Gesture Handler 3, you can easily attach gestures to Text components and inline fragments.

Wrap the fragment in a VirtualGestureDetector, put an InterceptingGestureDetector around the parent Text, and you get gestures on a single word or phrase, without touching the rest of the sentence.

Source: https://github.com/software-mansion-labs/skills/blob/main/skills/react-native-best-practices/references/gestures/v2-to-v3-migration.md

---

Migrate to Gesture Handler 3: Scans React Native components that use the Gesture Handler builder-based API and updates them to use the new hook-based API.

Migrating gestures: All hook gestures have counterparts in the builder API. Gesture.X() becomes useXGesture(config). Exception: Gesture.ForceTouch has no hook counterpart.

Callback changes:
- onStart -> onActivate
- onEnd -> onDeactivate
- onTouchesCancelled -> onTouchesCancel
- onDeactivate/onFinalize no longer receive didSucceed boolean. Event now has canceled property (inverted logic).
- onChange no longer available in hooks API; *change* properties moved to event available inside onUpdate.
- All callbacks of a gesture now use the same type: usePanGesture() -> PanGestureEvent, etc. Touch events (onTouchesDown etc.) receive GestureTouchEvent regardless of hook.

StateManager: no longer passed to TouchEvent callbacks. Use global GestureStateManager with methods .activate(handlerTag), .deactivate(handlerTag) (was .end()), .fail(handlerTag). Remove GestureStateManager.begin().

Migrating relations:
- Gesture.Simultaneous() -> useSimultaneousGestures()
- Gesture.Race() -> useCompetingGestures()
- Gesture.Exclusive() -> useExclusiveGestures()
- .simultaneousWithExternalGesture -> simultaneousWith
- .requireExternalGestureToFail -> requireToFail
- .blocksExternalGesture -> block

GestureDetector: supports gestures created with hooks API or builder pattern, but cannot mix.

Reanimated integration: callbacks passed in configuration chain are auto-workletized. Callbacks defined outside or wrapped in HOC are not.

runOnJS: dynamically control whether callbacks execute on JS thread (true) or UI thread (false). Default false.

InterceptingGestureDetector: functions like GestureDetector but acts as proxy for VirtualGestureDetector in its subtree; gesture property optional. Needed for SVG.

VirtualGestureDetector: similar to RNGH2 GestureDetector; does not interfere with host view hierarchy. Must be a descendant of InterceptingGestureDetector.

Legacy components: components relying on removed APIs (waitFor, simultaneousWith, onHandlerStateChange) cannot be migrated in isolation - use Legacy prefix versions.
- Buttons internally rewritten to new hook API. Legacy versions prefixed (e.g. LegacyRectButton).
- PureNativeButton removed.
- ReanimatedSwipeable prop dragOffsetFromRight now accepts negative values.
- Rename createNativeWrapper to legacy_createNativeWrapper.

Migrating to Touchable:
Touchable replaces old buttons (BaseButton, RectButton, BorderlessButton) and legacy touchables (TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback).
Props: onPress(event) - signature changed (receives gesture event instead of pointerInside boolean); onPressIn/out; onLongPress(); disabled (inverted from enabled); cancelOnLeave replaces shouldCancelWhenOutside; activeOpacity; underlayColor + activeUnderlayOpacity; androidRipple; animationDuration; hitSlop; testID; style; children.

Key replacements:
- BaseButton -> Touchable (default props)
- RectButton -> Touchable underlayColor="black" animationDuration={0}
- BorderlessButton -> Touchable activeOpacity={0.3} animationDuration={0}
- Android: RectButton -> androidRipple={{}}; BorderlessButton -> androidRipple={{ borderless: true }}
- TouchableOpacity -> Touchable activeOpacity={0.2} animationDuration={{ in: 0, out: 150 }}
- TouchableHighlight -> Touchable underlayColor={...} activeUnderlayOpacity={1}
- TouchableWithoutFeedback -> Touchable
- TouchableNativeFeedback -> Touchable androidRipple={{ foreground: true }}

Replaced types: builder API types now have Legacy prefix (e.g. TapGesture becomes LegacyTapGesture).
