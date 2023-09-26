import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SearchBar from "./SearchAndFilters";

export default function Label({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    marginTop: 8,
    marginLeft: 12,
    borderTopWidth: 4,
    borderColor: "white",
  },
  text: {
    fontFamily: "Final-Fantasy",
    fontSize: 32,
    color: "white",
  },
});
