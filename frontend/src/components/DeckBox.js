import { Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import React from "react";

export default function DeckBox({ deck, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ImageBackground
        source={require("../../assets/deckbox/red_deckbox.svg")}
        resizeMode='cover'
        style={styles.deckbox}
      >
        <Text>{deck.title}</Text>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "25%",
    height: "33%",
  },
  deckbox: {
    width: 100,
    height: 100,
  },
});
