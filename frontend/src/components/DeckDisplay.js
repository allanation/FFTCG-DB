import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";

export default function DeckDisplay({ deck, handleRemovingCard, openModal }) {
  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  return (
    <ScrollView style={styles.container} horizontal={true}>
      {deck &&
        deck.map((card) => (
          <TouchableOpacity
            key={card._id}
            onPress={() => {
              openModal(card);
            }}
            onLongPress={() => {
              handleRemovingCard(card);
            }}
          >
            <ImageBackground
              source={{ uri: cardPath1 + card._id + cardPath2 }}
              style={styles.image}
            >
              <Text style={styles.cardInfoContainer}>x{card.quantity}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    //just for now until drawer is figured out
    borderTopWidth: 5,
    borderTopColor: "pink",
    width: "100%",
  },
  cardInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  image: { width: 75, height: 105, marginHorizontal: 4 },
});
