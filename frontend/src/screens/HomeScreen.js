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

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <ScreenHeader header='HOME' /> */}
      <View style={styles.header}>
        <Icon
          name='cog-outline'
          size={36}
          color='white'
          style={styles.icons}
          onPress={() => {
            Alert.alert("Go to settings");
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
      <TextBox text='Welcome to the unofficial FFTCG Deckbuilder' />

      <CustomButton text='DECK' onPress={() => navigation.navigate("Decks")} />
      <CustomButton text='DECK' onPress={() => navigation.navigate("Decks")} />
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
