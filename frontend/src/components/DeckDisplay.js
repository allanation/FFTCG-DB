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
              <Text style={styles.text}>{card.quantity}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    elevation: 5,
    shadowColor: "white", // Shadow color
    shadowOffset: { width: 2, height: 4 }, // Shadow offset
    shadowOpacity: 0.6, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    height: "28%",
    paddingTop: 8,
  },
  image: {
    width: 75,
    height: 105,
    marginHorizontal: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    fontFamily: "MartelSans-Bold",
    fontSize: 24,
    color: "white",
    textShadowColor: "black", // Set shadow color to black
    textShadowOffset: { width: -1, height: 3 }, // Offset for a black outline
    textShadowRadius: 3,
    marginTop: 75,
  },
});
