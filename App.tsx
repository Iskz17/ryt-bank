import React from "react";
import { PaperProvider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { AppTheme } from "./src/theme";

export default function App() {
  return (
    <PaperProvider theme={AppTheme}>
      <AppNavigator />
    </PaperProvider>
  );
}
