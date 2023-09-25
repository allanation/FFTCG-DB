import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import ScreenHeader from "../components/ScreenHeader";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScreenHeader header='HOME' />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Decks")}
      >
        <Text style={styles.text}>DECKS</Text>
      </Pressable>
      <View style={styles.button}>
        <Text style={styles.text}>DUEL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "66%",
    height: "33%",
    backgroundColor: "#8E8E93",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 48,
    fontFamily: "Final-Fantasy",
    color: "#d4d5d5",
  },
});
