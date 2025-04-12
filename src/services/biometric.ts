import * as LocalAuthentication from "expo-local-authentication";

export async function authenticateWithBiometrics(): Promise<boolean> {
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  const isEnrolled = await LocalAuthentication.isEnrolledAsync();

  if (!hasHardware || !isEnrolled) return false;

  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Authenticate to reveal amount",
    fallbackLabel: "Use Passcode",
    disableDeviceFallback: false,
  });

  return result.success;
}
