import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TransactionListScreen from "../screens/TransactionListScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Transactions">
      <Stack.Screen name="Transactions" component={TransactionListScreen} />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
