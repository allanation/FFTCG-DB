import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.container}>
      <Icon name='search' size={20} color='gray' style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "40%",
    marginLeft: 8,
  },
  searchIcon: {
    paddingRight: 4,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
});
