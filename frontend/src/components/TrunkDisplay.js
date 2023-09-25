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
            <View style={styles.cardInfoContainer}>
              <Text style={styles.cardInfoText}>
                {card.element[0]}
                {card.cost}
              </Text>
              <Text style={styles.cardInfoRarity}>{card.rarity}</Text>
            </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    //just for now until drawer is figured out
    borderTopWidth: 5,
    borderTopColor: "pink",
    width: "100%",
  },
  card: { marginTop: 8 },
  cardInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  cardInfoRarity: {
    color: "white",
    backgroundColor: "grey",
    width: 24,
    alignContent: "center",
  },
  image: { width: 62, height: 88 },
});
