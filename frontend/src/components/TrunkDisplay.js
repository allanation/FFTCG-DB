import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

export default function TrunkDisplay({ trunk, handleAddingCard, openModal }) {
  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    //just for now until drawer is figured out
    borderTopWidth: 18,
    width: "100%",
  },
  trunk: { flexDirection: "row" },
  card: { marginTop: 8 },
  image: { width: 115, height: 160 },
});
