import { View, Text, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function TitleScreen({ navigation }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Home")}
    >
      <View>
        <Text>Title Screen</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
