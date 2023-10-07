import { View, Text, Alert, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon
        name='person-circle-outline'
        size={36}
        color='white'
        style={styles.icons}
        onPress={() => {
          Alert.alert("Go to profile");
        }}
      />
      <Text style={styles.text}>FINAL FANTASY TCG</Text>
      <Icon
        name='log-out-outline'
        size={36}
        color='white'
        style={styles.icons}
        onPress={() => {
          Alert.alert("Logout");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 48,
    fontFamily: "Final-Fantasy",
    color: "#d4d5d5",
  },
  icons: {
    paddingHorizontal: 12,
    paddingTop: 8,
    backgroundColor: "#1a1b1b",
    borderTopRightRadius: 8,
  },
});
