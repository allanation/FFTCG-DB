import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function DeckBox({ deck, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{deck.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "25%",
    height: "33%",
    backgroundColor: "blue",
  },
});
