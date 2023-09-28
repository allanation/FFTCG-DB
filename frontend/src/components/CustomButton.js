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
    // height: 74,
    width: "50%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 4,
  },
  outer: { width: "100%", padding: 4, borderRadius: 10, alignItems: "center" },
  inner: { alignItems: "center" },
  text: {
    fontSize: 28,
    fontFamily: "MartelSans-Bold",
    color: "#d4d5d5",
  },
});
