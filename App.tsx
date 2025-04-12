import React from "react";
import { PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { useColorScheme } from "react-native";
import { createAppTheme } from "./src/theme";

export default function App() {
  const isDark = useColorScheme() === "dark";
  const theme = createAppTheme(isDark);

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
