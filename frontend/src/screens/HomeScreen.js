import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import TextBox from "../components/TextBox";
import { LinearGradient } from "expo-linear-gradient";
import FilterModal from "../components/FilterModal";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <ScreenHeader header='HOME' /> */}
      <View style={styles.header}>
        <Button title='Settings' />
        <Text style={styles.text}>FFTCG</Text>
        <Button title='Logout' />
      </View>
      <TextBox text='Welcome to the unofficial FFTCG Deckbuilder' />
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Decks")}
      >
        <LinearGradient
          colors={["rgba(0,27,133,0.8)", "transparent"]}
          style={styles.outer}
        >
          <LinearGradient
            colors={["rgba(0,83,173,0.8)", "transparent"]}
            style={styles.inner}
          >
            <Text style={styles.text}>DECK</Text>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity> */}
      {/* <FilterModal /> */}
      <CustomButton text='DECK' onPress={() => navigation.navigate("Decks")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: { fontFamily: "MartelSans-Regular", fontSize: 48 },
  button: {
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 4,
  },
  text: {
    fontSize: 48,
    fontFamily: "MartelSans-Bold",
    color: "#d4d5d5",
  },
});
