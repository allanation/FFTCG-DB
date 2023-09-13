import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TitleScreen from "./src/screens/TitleScreen";
import DeckBuilderScreen from "./src/screens/DeckBuilderScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import DecksScreen from "./src/screens/DecksScreen";
import { DecksContextProvider } from "./src/context/DecksContext";
const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Final-Fantasy": require("./assets/fonts/finalf.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <DecksContextProvider>
          <StatusBar style='light' />
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Title'>
              <Stack.Screen
                name='Title'
                component={TitleScreen}
                options={{ headerShown: false }}
              />
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
            </Stack.Navigator>
          </NavigationContainer>
        </DecksContextProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
  },
});
