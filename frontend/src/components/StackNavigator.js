// StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TitleScreen from "../screens/TitleScreen";
import HomeScreen from "../screens/HomeScreen";
import DecksScreen from "../screens/DecksScreen";
import DeckBuilderScreen from "../screens/DeckBuilderScreen";
import AllDeckScreen from "../screens/AllDeckScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";
import CardCatalogScreen from "../screens/CardCatalogScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Decks'
        component={DecksScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='DeckBuilder'
        component={DeckBuilderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AllDecks'
        component={AllDeckScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name='Setting'
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CardCatalog'
        component={CardCatalogScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
