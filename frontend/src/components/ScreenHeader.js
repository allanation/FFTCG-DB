import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ScreenHeader({ header }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  text: {
    fontFamily: "Final-Fantasy",
    fontSize: 54,
  },
});
