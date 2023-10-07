import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React from "react";
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-vector-icons/Ionicons";
import ChocoboCorner from "../components/ChocoboCorner";
import Header from "../components/Header";
import Label from "../components/Label";
import BottomNavigator from "../components/BottomNavigator";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ChocoboCorner />
      <CustomButton text='DECK' onPress={() => navigation.navigate("Decks")} />
      {/* <BottomNavigator /> */}
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
});
