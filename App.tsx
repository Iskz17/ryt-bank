import React from "react";
import * as Font from "expo-font";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { BiometricProvider } from "./src/context/BiometricContext";
import { useColorScheme } from "react-native";
import { createAppTheme } from "./src/theme";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const isDark = useColorScheme() === "dark";
  const theme = createAppTheme(isDark);

  const [fontsLoaded] = Font.useFonts({
    GilroyMedium: require("./src/fonts/gilroy-medium.otf"),
    NewKansasRegular: require("./src/fonts/New-Kansas-Regular.otf"),
    NewKansasBold: require("./src/fonts/New-Kansas-Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <BiometricProvider>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </BiometricProvider>
  );
}
