import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Label from "./Label";
import SearchBar from "./SearchBar";

export default function TrunkDisplay({ trunk, handleAddingCard, openModal }) {
  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  return (
    <ScrollView style={styles.container}>
      <View style={styles.trunk}>
        {trunk &&
          trunk.map((card) => (
            <TouchableOpacity
              key={card._id}
              onLongPress={() => {
                handleAddingCard(card);
              }}
              onPress={() => {
                openModal(card);
              }}
              style={styles.card}
            >
              <Image
                source={{ uri: cardPath1 + card._id + cardPath2 }}
                style={styles.image}
                resizeMode='contain'
              />
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 8 },
  trunk: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  card: {
    marginTop: 12,
    elevation: 5,
    shadowColor: "#F5F5F0",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  image: { width: 86, height: 120 },
});
