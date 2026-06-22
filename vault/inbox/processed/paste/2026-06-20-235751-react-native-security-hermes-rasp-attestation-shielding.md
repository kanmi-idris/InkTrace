---
title: React Native Security: Hermes, RASP, Attestation & Shielding
kind: paste
captured_at: 2026-06-20 23:57
tags: [react-native, security, hermes, rasp, attestation, app-shielding]
source_url: 
status: inbox
---

# React Native Security: Hermes, RASP, Attestation & Shielding

Comprehensive React Native Security Guide

## Sources
This is a compiled research document from an AI-powered search session covering Hermes bytecode reverse engineering, RASP, application shielding, and hardware-backed attestation for React Native apps.

## 1. Hermes Bytecode Reverse Engineering

### Background
React Native made Hermes its default JavaScript engine to solve performance bottlenecks. Hermes uses Ahead-of-Time (AOT) compilation: at build time, JS is compiled into .hbc bytecode; at runtime, the device executes pre-compiled bytecode directly (bypassing parsing).

### Security Misconception
Shipping binary bytecode (not raw .js) leads many developers to assume source code is encrypted. In reality, compiling to bytecode is a performance optimization, not a security feature. Hermes bytecode has an open-source specification, and tools exist to reverse it:

- hermes-dec: Disassembling and decompiling Hermes bytecode on mobile apps (P1 Security)
- SymbioticSec/hermes-decomp: Decompiler that turns .hbc into readable pseudo-JS
- hasmer: CLI utility to disassemble Hermes bytecode into assembly

### Constraints of HBC Reverse Engineering
- No original source map (variable names, comments stripped)
- Optimization/inlining can restructure code flow
- Still decompilable to understandable logic

### Key Advice
Never store API keys, cryptographic secrets, or sensitive business logic in client-side JS/TS.

## 2. Making React Native Non-Decryptable

### Impossible to fully prevent, but possible to harden:
1. Shift Sensitive Logic to Backend/Cloud - proprietary algorithms, business rules, data processing on server
2. Obfuscate JavaScript Before Hermes Compilation - tools like JSCrambler or javascript-obfuscator
3. Runtime Security (RASP/Shielding) - Guardsquare (DexGuard), Approov

### Obfuscation Techniques
- Control Flow Flattening: scrambles execution order into unreadable maze
- String Encryption: encrypts hardcoded strings, decrypts in-memory at millisecond needed
- Dead Code Injection: fake logic paths that waste attacker's time

## 3. Application Shielding (Build-Time)

Shielding modifies native binary structure before signing:

### Control Flow Flattening
Breaks clean code structures into a massive switch statement with state variable. Decompilers see a flat, unreadable maze.

### String Encryption and Anti-Analysis
Scans binary, extracts plaintext strings, replaces with encrypted byte arrays. Decryption runs inline in volatile RAM at exact moment needed, then memory is wiped.

### Native Symbol Stripping
Renames native classes/methods/fields into random non-human-readable characters.

## 4. RASP - Runtime Application Self-Protection

RASP operates as continuous background monitoring while app runs.

### Integrity Checking (Anti-Tampering)
Generates cryptographic hashes of core assets at build. Continuously recalculates at runtime. If a single byte is altered, terminates the app.

### Environment Verification (Root/Jailbreak & Emulator Detection)
- File system checks: looks for su, magisk, Cydia directories
- Instruction profiling: executes low-level CPU instructions to detect emulators
- Blocks rooted devices and simulators

### Dynamic Hook Detection (Anti-Frida)
- Scans device memory for signature strings (e.g., frida-agent.so)
- Monitors local network ports (default 27042) used by debugging servers
- Tracks /proc/self/maps for third-party dynamic libraries

## 5. Implementing RASP and Shielding

### Option A: Enterprise (Guardsquare DexGuard/IxGuard, Promon SHIELD)
Process .apk/.ipa files post-build via Gradle plugin or Xcode build phase.

### Option B: Open-Source/Hybrid

#### Step 1: JS Obfuscation
npm install --save-dev javascript-obfuscator react-native-obfuscating-transformer
Configure metro.config.js to obfuscate before Hermes compiles.

#### Step 2: Environment & Root Detection
Use FreeRASP by Talsec (open source):

const config = {
  androidConfig: { packageName: '...', signingCertHashes: [...] },
  iosConfig: { bundleIdentifier: '...', teamId: '...' }
};
freeRasp.start(config, callbacks);

Callbacks: onRootDetected, onEmulatorDetected, onHookDetected, onTamperDetected

#### Step 3: Hardware-Backed Integrity (Attestation)
- Android: Play Integrity API
- iOS: App Attest

Architecture: App -> Backend generates nonce -> App sends nonce to Google/Apple hardware -> Hardware returns signed token -> Backend verifies with Google/Apple -> Issues access token.

## 6. Hardware-Backed Attestation Architecture

### Flow
1. Backend generates random single-use nonce
2. App passes nonce to native hardware OS API
3. Google/Apple hardware creates signed payload with nonce + app health + device profile
4. Backend decodes/verifies via Google/Apple APIs
5. If valid, backend releases data

### Android (Play Integrity API)
- Use react-native-google-play-integrity
- Backend uses googleapis library to decode
- Check deviceRecognitionVerdict: MEETS_STRONG_INTEGRITY, MEETS_DEVICE_INTEGRITY, MEETS_BASIC_INTEGRITY
- Check appLicensingVerdict: must be LICENSED

### iOS (App Attest)
- Creates unique key pair in Secure Enclave bound to app
- Use react-native-device-check
- Server must decode CBOR-encoded payload locally
- Verify certificate chain from Apple root CA
- Verify AppID matches TeamID + Bundle ID

## 7. Token Architecture: Nonce in Access Token

### Two-Token System
1. Handshake Token (short-lived JWT with nonce, expires 3-5 min)
2. Final Access Token (issued after hardware attestation + passkey verification)

### Token Upgrade Pipeline
- Step 1: Backend issues handshake JWT containing nonce
- Step 2: App passes nonce to hardware attestation APIs
- Step 3: Backend verifies hardware payload, extracts nonce, issues Final Access Token with verified_hardware: true

### Protecting API Routes
Backend middleware checks token claims:
if (!payload.hardware_verified) return 403

### Critical Rules
- Short token expiry (120 seconds recommended)
- Use Axios interceptor for silent background re-attestation
- Never trust client-side validation

## 8. Passkeys + Hardware Integrity Combined

### Architecture
1. Server creates single cryptographic challenge string
2. Challenge acts as both Passkey WebAuthn challenge AND hardware integrity nonce
3. User authenticates with biometrics (Passkey signature)
4. App simultaneously requests Play Integrity / App Attest token with same challenge
5. App sends both to server:
   { passkeySignature, hardwareIntegrityToken }
6. Server validates both: Passkey proves user presence, attestation proves device integrity

## 9. Full Zero-Trust Architecture

### Components
- React Native (Hermes) client
- Node.js backend
- Google/Apple attestation cloud

### Sequence
1. POST /auth/challenge -> Backend returns handshakeToken + nonce
2. App executes Passkey assertion using nonce as challenge
3. App collects hardware attestation token (Google/Apple)
4. POST /auth/finalize with handshakeToken + passkeyResult + hardwareToken
5. Backend validates nonce continuity, Passkey signature, hardware attestation
6. Backend issues 2-minute Access Token

### Token Claims
{ sub, hw_profile, verified_hardware: true, audit_nonce }

### Route Guard Middleware
if (!claims.verified_hardware || claims.hw_profile === 'UNKNOWN') -> 403

## 10. Open-Source Shielding Pipeline

### Layer 1: JS Obfuscation (before Hermes)
- Tool: javascript-obfuscator + react-native-obfuscating-transformer
- Options: controlFlowFlattening (0.75), deadCodeInjection (0.4), stringArray (base64+rc4), splitStrings, unicodeEscapeSequence
- Filter: only obfuscate src/, exclude node_modules

### Layer 2: Native Android ProGuard
- minifyEnabled true, shrinkResources true
- ProGuard rules: optimizationpasses 5, allowaccessmodification, repackageclasses, flatten packages
- Keep React Native infrastructure signatures, obfuscate everything else

### Layer 3: FreeRASP (Open Source RASP)
- Detects: debugger, root/jailbreak, tampering, emulator, hooks (Frida)
- On detection: emergency lockdown - wipe credentials, show alert, crash app
- Combined with hardware attestation for defense-in-depth

### Defense-in-Depth Summary
- Static code extraction: blocked by javascript-obfuscator + Hermes
- Native engineering: blocked by ProGuard repackaging
- Live memory injections: blocked by FreeRASP hook watchers
- API cloning/modification: blocked by hardware attestation

## Tools Referenced
- hermes-dec: GitHub P1sec/hermes-dec
- SymbioticSec/hermes-decomp: GitHub
- hasmer: CLI disassembler
- JSCrambler: commercial obfuscation
- javascript-obfuscator: OSS obfuscation
- react-native-obfuscating-transformer: Metro transformer
- FreeRASP by Talsec: OSS RASP
- Guardsquare DexGuard/IxGuard: enterprise shielding
- Approov: enterprise RASP
- Google Play Integrity API
- Apple App Attest / DeviceCheck
- react-native-google-play-integrity
- react-native-device-check
- @feathersjs/react-native-passkey
