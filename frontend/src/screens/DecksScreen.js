import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useDecksContext } from "../hooks/useDecksContext";
import axios from "axios";

//components
import DeckBox from "../components/DeckBox";

export default function DecksScreen({ navigation }) {
  const { dispatch } = useDecksContext();
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    const fetchDecks = async () => {
      await axios.get("http://localhost:4000/api/decks").then((res) => {
        const json = res.data;
        setDecks(json);
      });
    };

    fetchDecks();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DECKS</Text>
      <View style={styles.decks}>
        {decks &&
          decks.map((deck) => (
            <DeckBox
              key={deck._id}
              deck={deck}
              onPress={() =>
                navigation.navigate("DeckBuilder", { deckId: deck._id })
              }
            />
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
    gap: "12%",
  },
  text: { color: "#d4d5d5", fontFamily: "Final-Fantasy", fontSize: 48 },
  decks: { backgroundColor: "pink", width: "100%", height: "50%" },
});
