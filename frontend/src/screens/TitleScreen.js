import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function TitleScreen({ navigation }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Home")}
    >
      <View style={styles.text}>
        <Text style={styles.text}>FINAL FANTASY TCG DECKBUILDER</Text>
        <Text style={styles.text}>TAP TO CONTINUE...</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
    justifyContent: "center",
    alignItems: "center",
    color: "#d4d5d5",
  },
  text: { color: "#d4d5d5", fontFamily: "Final-Fantasy", fontSize: 32 },
});
