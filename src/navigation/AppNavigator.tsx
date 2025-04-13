import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TransactionListScreen from "../screens/TransactionListScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen";

import ProfileScreen from "../screens/ProfileScreen";
import CardScreen from "../screens/CardScreen";
import CardListingScreen from "../screens/CardsListingScreen";

const Stack = createNativeStackNavigator();
const CardStackNav = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const TransactionStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "NewKansasBold",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen name="Transactions" component={TransactionListScreen} />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  );

  const CardStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "NewKansasBold",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="CardListing"
        component={CardListingScreen}
        options={{
          title: "Cards",
          headerTransparent: true,
          headerTintColor: "#fff",
          headerBackTitle: "",
          headerTitleStyle: {
            fontFamily: "NewKansasBold",
            fontSize: 20,
            color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="Card"
        component={CardScreen}
        options={{
          title: "Card Detail",
          headerTransparent: true,
          headerTintColor: "#fff",
          headerBackTitle: "",
          headerTitleStyle: {
            fontFamily: "NewKansasBold",
            fontSize: 20,
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="TransactionDetail"
        options={{
          title: "Transaction",
          headerTransparent: true,
          headerTintColor: "black",
          headerBackTitle: "",
          headerTitleStyle: {
            fontFamily: "NewKansasBold",
            fontSize: 20,
            color: "black",
          },
        }}
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarStyle: { height: 75, paddingBottom: 8 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={TransactionStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cards"
          component={CardStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
