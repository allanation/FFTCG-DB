// TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import CardCatalogScreen from "../screens/CardCatalogScreen";
import HomeScreen from "../screens/HomeScreen";
import DecksScreen from "../screens/DecksScreen";
import AllDeckScreen from "../screens/AllDeckScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const getTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === "ViewDeck") {
    // Hide the bottom navigation bar on the 'Profile' screen
    return false;
  }
  return true;
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='CardCatalog' component={CardCatalogScreen} />
      <Tab.Screen name='Home' component={StackNavigator} />
      <Tab.Screen name='ViewDeck' component={DecksScreen} />
      <Tab.Screen name='AllDecks' component={AllDeckScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
