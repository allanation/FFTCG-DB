import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useDecksContext } from "../hooks/useDecksContext";
import axios from "axios";
import CardSelector from "../components/CardSelector";

export default function DeckBuilderScreen({ navigation, route }) {
  const { deckId } = route.params;
  const deckInfo = JSON.stringify(deckId).substring(1, deckId.length + 1);

  const { dispatch } = useDecksContext();
  const [deck, setDeck] = useState([]);
  const [cardsArray, setCardsArray] = useState([]);
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    const fetchDeck = async () => {
      await axios
        .get("http://localhost:4000/api/decks/" + deckInfo)
        .then((res) => {
          const json = res.data;
          setDeck(json);
        });
    };

    const fetchCards = async () => {
      await axios.get("http://localhost:4000/api/cards").then((res) => {
        const json = res.data;
        setCardList(json);
      });
    };

    fetchDeck();
    fetchCards();
  }, [dispatch]);

  const cards = JSON.stringify(deck.cards);
  const allCards = JSON.stringify(cardList);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DECK BUILDER</Text>
      <Text style={styles.text}>{deck.title}</Text>
      <Text>{cards}</Text>
      {/* <Text>{allCards}</Text> */}
      <View>
        {cardList.map((card) => (
          <Text key={card._id}>{card.Name}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
    justifyContent: "center",
    alignItems: "center",
    gap: "12%",
  },
  button: {
    width: "66%",
    height: "33%",
    backgroundColor: "#d4d5d5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#d4d5d5", fontFamily: "Final-Fantasy", fontSize: 48 },
});
