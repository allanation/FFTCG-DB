import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function BottomNavigator({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name='cog-outline'
          size={36}
          color='white'
          style={styles.icons}
          onPress={() => {
            Alert.alert("Go to settings");
          }}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name='book-outline'
          size={36}
          color='white'
          style={styles.icons}
          onPress={() => {
            Alert.alert("Go to card catalog");
          }}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name='home-outline'
          size={36}
          color='white'
          style={styles.icons}
          onPress={() => {
            Alert.alert("Go to home");
          }}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name='folder-open-outline'
          size={36}
          color='white'
          style={styles.icons}
          onPress={() => {
            Alert.alert("Go to decks");
          }}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name='planet-outline'
          size={36}
          color='white'
          style={styles.icons}
          onPress={() => {
            Alert.alert("Go to all decks");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "pink",
    height: "12%",
  },
  iconContainer: { width: "20%", alignItems: "center" },
});
