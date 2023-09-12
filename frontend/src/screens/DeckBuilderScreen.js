import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DeckBuilderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DECK BUILDER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
    justifyContent: "center",
    alignItems: "center",
    gap: "12%",
  },
  button: {
    width: "66%",
    height: "33%",
    backgroundColor: "#d4d5d5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#d4d5d5", fontFamily: "Final-Fantasy", fontSize: 48 },
});
