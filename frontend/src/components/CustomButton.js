import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomButton({ onPress, text }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* outer */}
      <LinearGradient
        colors={["rgba(0,27,133,0.8)", "transparent"]}
        style={styles.outer}
      >
        {/* inner */}
        <LinearGradient
          colors={["rgba(0,83,173,0.8)", "transparent"]}
          style={styles.inner}
        >
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#424542",
    borderRadius: 4,
  },
  outer: { width: "100%", padding: 4, borderRadius: 10, alignItems: "center" },
  inner: { alignItems: "center", width: "100%" },
  text: {
    fontSize: 28,
    fontFamily: "MartelSans-Bold",
    color: "#F5F5F0",
  },
});
