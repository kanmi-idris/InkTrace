# Mouse Unlock click-pattern note

Captured from user-supplied text on 2026-05-30.

Source type:
- direct user-supplied social-style note

Core idea captured from the note:

- The author had an old laptop without biometric hardware and wanted to avoid repeatedly typing a long password after locking the screen.
- The proposed workaround is a mouse-click pattern that unlocks the Linux session.
- Example pattern:
  - two left clicks
  - two right clicks
  - one left click

Implementation details captured from the note:

- Platform:
  - Linux
  - Fedora
  - KDE Plasma
- The implementation is described as a Python daemon.
- It uses `evdev` to read raw mouse events directly from `/dev/input/`.
- This direct input-event approach is said to work even on the Wayland lock screen.
- It checks whether the session is locked through `loginctl`.
- When the registered click pattern matches, it runs:

```bash
loginctl unlock-sessions
```

- It runs as a `systemd` service at boot.
- The whole implementation is described as around 150 lines of Python.
- The note explicitly says there are no PAM hacks and no special hardware.

Security caveat captured from the note:

- The author explicitly says this is not secure.
- The value is convenience and a fun local automation pattern for old hardware, not a serious authentication mechanism.

Interpretive note:

- This source is strongest as Linux desktop automation and input-event plumbing material. It should not be treated as authentication best practice. Its durable technical value is the combination of `evdev`, `loginctl`, Wayland lock-screen input behavior, and `systemd` service packaging for a personal local workflow.
