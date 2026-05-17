# Reverse OTP in Nigeria with React Native

Captured from a user-supplied chat-style exchange on 2026-05-03.

Source type:

- User-supplied conversational guidance covering reverse OTP, Nigerian SMS billing constraints, backend implementation, and React Native SMS initiation patterns.

---

Core framing captured from the supplied text:

- The conversation explores whether SMS OTP costs can be shifted from the app operator to the user.
- It argues that the most practical route is not true reverse-billed SMS delivery, but a “reverse OTP” pattern where the user sends an SMS containing a challenge or code back to the service.
- It frames this as especially relevant for Nigeria, where standard outbound OTP sends are paid by the sender.

Architecture ideas captured from the supplied text:

- Backend generates a challenge and code.
- Frontend initiates the verification flow and opens the device SMS app with a prefilled body.
- User sends the SMS to a shortcode or virtual number.
- An SMS gateway receives the message and forwards it to a server webhook.
- The server validates the challenge and code, then marks the verification as successful.

Backend implementation guidance captured from the supplied text:

- Use a challenge store keyed by challenge ID.
- Store code, expiry time, and user association.
- Validate challenge expiry and code match when the SMS webhook fires.
- Use retry-safe verification and periodic cleanup of expired challenges.
- Prefer typed data structures and explicit expiry handling.

Nigeria-specific operational claims captured from the supplied text:

- The conversation claims reverse OTP is the most feasible way to shift costs in Nigeria.
- It mentions possible use of local aggregators, shortcodes, virtual numbers, and NCC-related approvals.
- It also mentions local providers such as AfricasTalking, Termii, MSG91 Nigeria, IPL SMS, and shortcode specialists.

Important evidence note:

- Those regulatory, shortcode, and carrier feasibility claims were presented conversationally and not backed by direct official NCC or provider documentation in the supplied text.
- Downstream synthesis should therefore treat them as plausible but unverified operational guidance rather than settled fact.

React Native implementation guidance captured from the supplied text:

- The conversation proposes using React Native’s built-in `Linking` API to open the SMS app with a prefilled destination and body.
- It also mentions `expo-sms` as an Expo-specific alternative for composing SMS messages.
- It explicitly treats `Linking` as the simplest and most reliable baseline.

React Native `Linking` example captured from the supplied text:

```tsx
import React from 'react';
import { Linking, Alert, Platform, Button } from 'react-native';

interface ReverseOTPProps {
  shortcode: string;
  challengeId: string;
  code: string;
  onSMSOpened?: () => void;
}

export const ReverseOTPButton: React.FC<ReverseOTPProps> = ({
  shortcode,
  challengeId,
  code,
  onSMSOpened,
}) => {
  const sendReverseOTP = async () => {
    const messageBody = `${challengeId} ${code}`;
    const separator = Platform.OS === 'ios' ? '&' : '?';
    const smsUrl = `sms:${shortcode}${separator}body=${encodeURIComponent(messageBody)}`;

    try {
      const canOpen = await Linking.canOpenURL(smsUrl);

      if (canOpen) {
        await Linking.openURL(smsUrl);
        onSMSOpened?.();
      } else {
        Alert.alert(
          "Send Manually",
          `Please send this message to ${shortcode}:\n\n${messageBody}`
        );
      }
    } catch (error) {
      Alert.alert("Error", "Could not open SMS app");
    }
  };

  return (
    <Button title="Verify via SMS (You pay standard rate)" onPress={sendReverseOTP} />
  );
};
```

Interpretive note:

- The durable idea here is less “there is a simple reverse-billing feature” and more “you can redesign OTP verification so the user-originated SMS becomes the billable action.”
- The RN-specific piece is the UX helper around opening the SMS composer rather than silently sending SMS in the background.
