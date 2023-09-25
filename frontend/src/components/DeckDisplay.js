import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import React from "react";

export default function DeckDisplay({ deck, handleRemovingCard }) {
  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  return (
    <View style={styles.container}>
      {deck &&
        deck.map((card) => (
          <TouchableOpacity
            key={card._id}
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
  cardInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  image: { width: 62, height: 88 },
});
