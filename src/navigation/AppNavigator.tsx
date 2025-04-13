import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TransactionDetailScreen from "../screens/TransactionDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CardScreen from "../screens/CardScreen";
import CardListingScreen from "../screens/CardsListingScreen";

export type CardType = {
  id: string;
  title: string;
  number: string;
  expiry: string;
  limit: string;
  type: string;
  bank: string;
  bgColor: string;
  bgImage: number;
};

export type TransactionDetailType = {
  id: string;
  name: string;
  amount: string;
  date: string;
  description: string;
  type: string;
};

export type CardStackParamList = {
  Card: CardType,
  TransactionDetail: TransactionDetailType;
};

export type RootTabParamList = {
  Home: NavigatorScreenParams<TransactionStackParamList>;
  Cards: NavigatorScreenParams<CardStackParamList>;
  Profile: undefined;
};

const CardStackNav = createNativeStackNavigator<CardStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const CardStack = () => (
  <CardStackNav.Navigator
    screenOptions={{
      headerTitleStyle: {
        fontFamily: "NewKansasBold",
        fontSize: 20,
      },
    }}
  >
    <CardStackNav.Screen
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
    <CardStackNav.Screen
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
    <CardStackNav.Screen
      name="TransactionDetail"
      component={TransactionDetailScreen}
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
    />
  </CardStackNav.Navigator>
);

const AppNavigator: React.FC = () => {
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
          component={ProfileScreen}
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
