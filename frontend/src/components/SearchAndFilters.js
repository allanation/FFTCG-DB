import { View, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function SearchAndFilters({ openFilterModal, handleFilter }) {
  return (
    <View style={styles.searchAndFilterContainer}>
      <Icon
        name='pie-chart-outline'
        size={36}
        color='white'
        style={{
          paddingHorizontal: 12,
          paddingTop: 8,
          backgroundColor: "#1a1b1b",
          borderTopRightRadius: 8,
        }}
        onPress={() => {
          Alert.alert("DISPLAY STATS");
        }}
      />
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Icon
            name='search'
            size={20}
            color='gray'
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder='Search...'
            // value={searchText}
            // onChangeText={text => setSearchText(text)}
          />
        </View>
      </View>
      <Pressable onPress={openFilterModal}>
        <Icon
          name='funnel-outline'
          size={36}
          color='white'
          style={{
            paddingHorizontal: 12,
            paddingTop: 8,
            backgroundColor: "#1a1b1b",
            borderTopLeftRadius: 8,
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    width: "70%",
    backgroundColor: "#1a1b1b",
    paddingVertical: 3,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "lightgray",
    borderRadius: 8,
    width: "80%",
  },
  searchIcon: {
    paddingHorizontal: 8,
  },
  input: {
    fontSize: 16,
  },
  searchAndFilterContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
