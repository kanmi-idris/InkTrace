# Bottom Sheet Stack | Reactix

Source ID: src-2026-04-12-055
Canonical URL: https://www.reacticx.com/docs/components/bottom-sheet-stack
Resource Type: documentation
Host: www.reacticx.com
Mention Count: 1
Original URLs: https://www.reacticx.com/docs/components/bottom-sheet-stack

## Mention Context
- 2/10/26, 6:26 PM: https://www.reacticx.com/docs/components/bottom-sheet-stack

## Page Description
A stack-based bottom sheet manager that lets multiple sheets layer smoothly, with automatic scaling and vertical offset to show depth, while keeping only the top sheet interactive.

## Captured Text Excerpt
Bottom Sheet Stack | Reactix
Reactix
Components
Beautiful, animated UI components built with React Native
Reactix has now Ready to use templates! Check-out now. Reactix templates are now available! + Templates available now!
Shaders
Apple Intelligence Aurora Chroma Ring Energy Orb Grainy Gradient Mesh Gradient Siri Orb Spectral Wave Skia Ripple Wave Scrawler Texts
Animated Text Circular Text Curved Marquee Dynamic Text Fade Text Gooey Text Staggered Text Micro Interactions
Animated Scroll Progresss Animated Theme Toggle Animated Countdown Elastic Slider Flexi Button Gooey Switch Hamburger Spin Button Stacked Chips Components
Accordion Animated Chip Group Animated Header ScrollView Animated Input Bar Animated Masked Text Avatar Avatar Group Badge Blur Carousel Bottom Sheet Bottom Sheet Stack Button CheckBox Cinematic Carousel Circle Loader Circular Carousel Circular List Circular Loader Curved Bottom Tabs Dialog Disclosure Group Dropdown Dynamic Island Empty State Flip Card Glow Infinite Menu Unstable Lanyard Liquid Metal Marquee Matched Geometry Material Carousel Morphing Tab Bar Orbitdot Loader Otp Input Pagination Parallax Carousel Parallax Header Picker Progress Circular Progress Pulsing Loader Qr Code Radial Intro Radiant Button Ripple Rolling Counter Rotate Carousel Rotating Square Ruler Scale Carousel Scrollable Search Search Bar Seekbar Segmented Control Shimmer Shimmer Wave Text Spinner Arc Split View Squiggly Slider Squircle View Stack Aware Tabs Stack Cards Stepper Switch Tabs Theme Switch Tilt Carousel Title Toast Vertical Flow Carousel Vertical Page Carousel
Reactix
Search ⌘ K
Reactix has now Ready to use templates! Check-out now. Reactix templates are now available! + Templates available now!
Bottom Sheet Stack
A stack-based bottom sheet manager that lets multiple sheets layer smoothly, with automatic scaling and vertical offset to show depth, while keeping only the top sheet interactive.
Last updated on
Edit on GitHub Copy Markdown Copy Open ~1.7 kB
npm bun pnpm
Copied to clipboard bunx --bun reacticx add bottom-sheet-stack
Copy Code
Manual
Install the following dependencies:
npm
pnpm
yarn
bun
npm install react-native-reanimated
Copy and paste the following code into your project.
component/templates/bottom-sheet-stack
import React, { createContext, useContext, useRef, useCallback, useState, useEffect, memo, } from "react"; import { StyleSheet, ViewStyle } from "react-native"; import Animated, { useSharedValue, useAnimatedStyle, withSpring, } from "react-native-reanimated"; import { BottomSheetMethods } from "../bottom-sheet/types"; import { SCALE_FACTOR, STACK_SPRING_CONFIG, TRANSLATE_Y_FACTOR } from "./conf"; import type { IBottomSheetOptions, IBottomSheetStackContextValue, IBottomSheetStackProvider, IStackedSheet, IStackedSheetWrapper, } from "./types"; const BottomSheetStackContext = createContext< IBottomSheetStackContextValue | undefined >(undefined); export const useBottomSheetStack = (): IBottomSheetStackContextValue => { const context = useContext(BottomSheetStackContext); if (!context) { throw new Error( "useBottomSheetStack must be used within BottomSheetStackProvider", ); } return context; }; const StackedSheetWrapper = memo<IStackedSheetWrapper>( ({ sheet, stackIndex, totalSheets, onClose, }: IStackedSheetWrapper): React.ReactElement & React.JSX.Element => { const isTopSheet = stackIndex === totalSheets - 1; const depth = totalSheets - 1 - stackIndex; const scale = useSharedValue<number>(1); const translateY = useSharedValue<number>(0); useEffect(() => { if (isTopSheet) { scale.value = withSpring<number>(1, STACK_SPRING_CONFIG); translateY.value = withSpring<number>(0, STACK_SPRING_CONFIG); } else { scale.value = withSpring<number>( Math.pow(SCALE_FACTOR, depth), STACK_SPRING_CONFIG, ); translateY.value = withSpring<number>( depth * TRANSLATE_Y_FACTOR, STACK_SPRING_CONFIG, ); } }, [isTopSheet, depth]); const animatedStyle = useAnimatedStyle<ViewStyle>(() => ({ transform: [{ scale: scale.value }, { translateY: -translateY.value }], })); const element = React.cloneElement(sheet.component, { ref: sheet.ref, onClose: () => { sheet.onDismiss?.(); onClose(); }, dismissOnBackdropPress: true, }); return ( <Animated.View style={[styles.stackLayer, animatedStyle]} pointerEvents={isTopSheet ? "auto" : "none"} > {element} </Animated.View> ); }, ); StackedSheetWrapper.displayName = "StackedSheetWrapper"; export const BottomSheetStackProvider: React.FC<IBottomSheetStackProvider> = memo<IBottomSheetStackProvider>( ({ children, }: IBottomSheetStackProvider): React.ReactElement & React.JSX.Element => { const [sheets, setSheets] = useState<IStackedSheet[]>([]); const idCounter = useRef(0); const pushSheet = useCallback<IBottomSheetStackContextValue["pushSheet"]>( (sheet) => { const id = `sheet-${idCounter.current++}`; const ref = React.createRef<BottomSheetMethods>(); setSheets((prev) => [ ...prev, { id, ref, component: sheet.component, onDismiss: sheet.onDismiss, }, ]); requestAnimationFrame(() =>
