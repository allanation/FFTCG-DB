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
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#424542",
  },
  text: {
    fontFamily: "MartelSans-Bold",
    fontSize: 12,
    opacity: 1,
    color: "white",
  },
});
