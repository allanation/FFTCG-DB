import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("DeckBuilder")}
      >
        <Text>DECK BUILDER</Text>
      </Pressable>
      <View style={styles.button}>
        <Text>DUEL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    gap: "12%",
  },
  button: {
    width: "66%",
    height: "33%",
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
});
