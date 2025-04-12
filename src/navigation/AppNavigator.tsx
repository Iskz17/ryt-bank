import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

import ProfileScreen from '../screens/ProfileScreen';
import CardScreen from '../screens/CardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TransactionStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Transactions" component={TransactionListScreen} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarStyle: { height: 75, paddingBottom: 8 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={TransactionStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="credit-card-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="card-multiple" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
