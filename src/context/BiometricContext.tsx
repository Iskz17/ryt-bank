import React, { createContext, useContext, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

type BiometricContextType = {
  isAuthenticated: boolean;
  triggerAuth: () => Promise<void>;
};

const BiometricContext = createContext<BiometricContextType>({
  isAuthenticated: false,
  triggerAuth: async () => {},
});

export const BiometricProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const triggerAuth = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        alert('Biometric authentication not set up');
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to view',
        fallbackLabel: 'Use Passcode',
      });

      if (result.success) {
        setIsAuthenticated(true);
      } else {
        alert('Authentication failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BiometricContext.Provider value={{ isAuthenticated, triggerAuth }}>
      {children}
    </BiometricContext.Provider>
  );
};

export const useBiometric = () => useContext(BiometricContext);
