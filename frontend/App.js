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
import TabNavigator from "./src/components/TabNavigator";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Final-Fantasy": require("./assets/fonts/finalf.ttf"),
    "MartelSans-Regular": require("./assets/fonts/MartelSans-Regular.ttf"),
    "MartelSans-Bold": require("./assets/fonts/MartelSans-Bold.ttf"),
    "MartelSans-Light": require("./assets/fonts/MartelSans-Light.ttf"),
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
    <SafeAreaProvider
      style={styles.container}
      onLayout={onLayoutRootView}
      forceInset={{ bottom: "never" }}
    >
      {/* <SafeAreaView > */}
      <DecksContextProvider>
        <NavigationContainer
          style={styles.container}
          onLayout={onLayoutRootView}
          forceInset={{ bottom: "never" }}
        >
          <StatusBar style='light' />
          <Stack.Navigator
            initialRouteName='Title'
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='Title' component={TitleScreen} />
            <Stack.Screen name='MainTabs' component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </DecksContextProvider>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
  },
});
