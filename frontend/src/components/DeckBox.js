import {
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";

export default function DeckBox({ deck, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={require("./../../assets/blueDeckBox.png")}
        resizeMode='contain'
        style={styles.deckbox}
      ></Image>
      <Text numberOfLines={1} style={styles.text}>
        {deck.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    height: "100%",
    paddingBottom: 8,
  },
  deckbox: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "MartelSans-Bold",
    width: "75%",
    alignSelf: "center",
    color: "white",
    textAlign: "center",
  },
});
