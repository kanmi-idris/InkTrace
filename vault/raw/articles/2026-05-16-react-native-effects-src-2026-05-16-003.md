# react-native-effects

Captured from a user-supplied GitHub repository page transcription on 2026-05-16.

Canonical URL:
https://github.com/blazejkustra/react-native-effects

---

Repository positioning captured from the supplied page:

- Repository: `blazejkustra/react-native-effects`
- Public repository
- README marks the project as `Experimental`
- The main positioning line is:
  - `WebGPU-powered effects running on background thread in React Native.`

Core technical framing captured from the supplied page:

- The library is described as using:
  - `react-native-wgpu` for WebGPU rendering
  - `react-native-worklets` bundle mode for off-thread rendering
- The README says the GPU render loop runs on a separate JavaScript runtime, leaving the main thread free.
- The project also requires peer dependencies including:
  - `react-native-wgpu`
  - `react-native-worklets`
  - `react-native-reanimated`
  - `react-native-gesture-handler`

Main product shape captured from the supplied page:

- The library provides drop-in effect components that are used like ordinary React Native views.
- Visible built-in components include:
  - `Iridescence`
  - `LiquidChrome`
  - `Silk`
  - `Campfire`
  - `CalicoSwirl`
  - `Aurora`
  - `LinearGradient`
  - `CircularGradient`

ShaderView notes captured from the supplied page:

- `ShaderView` is described as the core building block behind every built-in effect.
- It accepts a WGSL fragment shader and handles:
  - the render loop
  - the uniform buffer
  - React Native view integration
- The README documents props such as:
  - `fragmentShader`
  - `colors`
  - `params`
  - `speed`
  - `isStatic`
- The page says all built-in effects are thin wrappers around `ShaderView`.

Setup and experimental-boundary notes captured from the supplied page:

- The library depends on `react-native-worklets` Bundle Mode.
- The README says bundle mode is not enabled by default and requires configuration in:
  - `package.json`
  - Metro
  - Babel
- The repository includes an Expo-based example app and recommends:
  - `yarn install`
  - `yarn prebuild`
  - `yarn ios`
  - `yarn android`

Interpretive note:

- This source is best understood as experimental graphics-and-effects infrastructure for React Native rather than as a simple visual preset pack. The durable architectural point is the combination of WebGPU, WGSL shader authoring, and off-thread worklet runtime execution, with `ShaderView` acting as the reusable primitive that the higher-level effects are built on top of.
