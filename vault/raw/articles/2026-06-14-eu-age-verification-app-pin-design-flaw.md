---
title: EU age verification app PIN design flaw
kind: paste
captured_at: 2026-04-17 15:32
tags: [security, privacy, react-native, cryptography, pin, vault]
source_url: 
status: inbox
---

# EU age verification app PIN design flaw

**The security issue, explained clearly and simply**

The EU Age Verification app (a reference/demo implementation) has a **fundamental design flaw** in how it protects the user's sensitive identity data ("vault" containing credentials) with a PIN.

Here's exactly what the app does (the broken part):

- During setup, the user creates a PIN.
- The app **encrypts** that PIN and saves two values (`PinEnc` + `PinIV`) in Android's **SharedPreferences** (a simple key-value XML file stored in the app's data folder).
- The actual identity vault is stored separately, but the encryption/protection of the vault is **not cryptographically tied** to the PIN in a strong way.

**The hack (takes < 2 minutes):**
1. Attacker gets access to the device (or roots it / uses ADB).
2. Opens the shared_prefs file and **deletes** the `PinEnc` and `PinIV` values.
3. Restarts the app.
4. The app now thinks "no PIN exists", so it prompts the user to **create any new PIN**.
5. The app happily loads and presents the **original identity credentials** as valid.

Other easy bypasses (same file):
- Rate-limiting counter → reset it to 0 → unlimited PIN guesses.
- `"UseBiometricAuth": true` → flip to `false` → skips biometrics entirely.

**Why this is catastrophically bad:**
- SharedPreferences is **not** designed for secrets. It's easily readable and editable (even without root in many cases).
- Storing an (encrypted) PIN separately creates a **single point of failure** that can be removed without invalidating the protected data.
- There is no strong cryptographic binding: the app doesn't *require* the correct PIN-derived key to decrypt the vault. It just checks a stored flag.
- This is the opposite of "highest privacy standards". Anyone with basic file access can impersonate the user.

The app developers called it a "reference implementation" (not production-ready), but the tweet rightly points out how dangerous it is when governments claim something is secure just because it's open-source.

**The right way to fix it in React Native (the approach you mentioned)**

**Golden rule:**  
**Never store the PIN** (encrypted or not).  
Instead, **derive the encryption key from the PIN on-the-fly** using a slow, brute-force-resistant algorithm. Store **only** the encrypted vault + a random salt.

This makes the exact hack impossible:
- There is nothing to delete.
- Decryption only succeeds with the **correct** PIN.
- "Setting a new PIN" without the old one would require wiping the vault (attacker loses the data).

**Recommended tech stack (2026 best practices)**

| Purpose              | Library (recommended)                  | Why |
|----------------------|----------------------------------------|-----|
| Crypto + PBKDF2     | `react-native-quick-crypto` (or `react-native-aes-gcm`) | Native performance, supports PBKDF2/scrypt/Argon2-like |
| Secure storage      | `react-native-encrypted-storage`      | Uses iOS Keychain + Android EncryptedSharedPreferences under the hood |
| Alternative storage | `react-native-mmkv` + manual encryption | Faster for larger data |
| Biometrics (optional) | `react-native-keychain`             | Hardware-backed master key fallback |

**High-level code example (production-ready pattern)**

```tsx
import * as Crypto from 'react-native-quick-crypto'; // npm i react-native-quick-crypto
import EncryptedStorage from 'react-native-encrypted-storage';

const SALT_BYTES = 16;
const KEY_BYTES = 32;        // 256-bit AES
const PBKDF2_ITERATIONS = 600_000; // Tune so it takes ~0.5–1 second on target devices
const ALGORITHM = 'sha512';   // or 'sha256'

// 1. Create / re-encrypt vault with PIN
async function createOrUpdateVault(pin: string, sensitiveData: any) {
  const salt = Crypto.randomBytes(SALT_BYTES);
  const iv = Crypto.randomBytes(12); // for AES-GCM

  // Derive key from PIN (this is the slow, brute-force-resistant step)
  const derivedKey = await Crypto.pbkdf2(
    pin,
    salt,
    PBKDF2_ITERATIONS,
    KEY_BYTES,
    ALGORITHM
  );

  // Encrypt the data (AES-GCM is recommended – provides confidentiality + integrity)
  const dataString = JSON.stringify(sensitiveData);
  const encryptedBuffer = await Crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    derivedKey,
    new TextEncoder().encode(dataString)
  );

  // Store ONLY encrypted data + salt + iv (salt/iv are NOT secrets)
  await EncryptedStorage.setItem('userVault', JSON.stringify({
    encrypted: Buffer.from(encryptedBuffer).toString('base64'),
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
  }));

  // IMPORTANT: NO PIN or derived key is ever stored
}

// 2. Unlock vault (called on app start / after PIN entry)
async function unlockVault(pin: string): Promise<any | null> {
  const stored = await EncryptedStorage.getItem('userVault');
  if (!stored) return null;

  const { encrypted, salt: saltB64, iv: ivB64 } = JSON.parse(stored);
  const salt = Buffer.from(saltB64, 'base64');
  const iv = Buffer.from(ivB64, 'base64');

  // Re-derive the key (expensive → prevents brute-force)
  const derivedKey = await Crypto.pbkdf2(
    pin,
    salt,
    PBKDF2_ITERATIONS,
    KEY_BYTES,
    ALGORITHM
  );

  try {
    const decryptedBuffer = await Crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      derivedKey,
      Buffer.from(encrypted, 'base64')
    );

    return JSON.parse(new TextDecoder().decode(decryptedBuffer));
  } catch (error) {
    // Wrong PIN or tampered data → fail closed
    return null;
  }
}
```

**Change PIN flow (secure):**
1. Call `unlockVault(oldPin)` → get data.
2. If successful, call `createOrUpdateVault(newPin, data)`.

**Extra hardening (highly recommended)**
- **Rate limiting**: Track failed attempts **in memory** only (reset on app close) or store an encrypted counter inside the same vault.
- **Biometrics fallback**: Use `react-native-keychain` with `ACCESS_CONTROL.BIOMETRIC` to optionally store a random strong master key (encrypted by the PIN-derived key).
- **Larger datasets**: Use Realm or SQLite with SQLCipher + the same derived key.
- **Testing**: Always test on a rooted Android / jailbroken iOS device.

This is exactly how secure password managers and crypto wallets are built. The vault can only be opened with the correct PIN; there is nothing an attacker can delete or flip to bypass it.

The EU app's mistake was treating the PIN like a simple config flag instead of using proper cryptographic key derivation. Implement the pattern above and you'll be doing it the right way.
