import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function TextBox({ text }) {
  return (
    <LinearGradient
      colors={["#0053ad", "#001b85", "#000223"]}
      style={styles.container}
    >
      <Text style={styles.text}>{text}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 16,
    backgroundColor: "",
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#d4d5d5",
  },
  text: {
    fontFamily: "MartelSans-Bold",
    fontSize: 16,
    opacity: 1,
    color: "white",
  },
});
