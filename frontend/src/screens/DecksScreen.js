import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useDecksContext } from "../hooks/useDecksContext";
import axios from "axios";

//components
import DeckBox from "../components/DeckBox";
import ScreenHeader from "../components/ScreenHeader";
import Header from "../components/Header";
import Label from "../components/Label";

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
      <Header />
      <Label text='DECKS' />
      <ScrollView style={styles.deckContainer}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1b1b",
    gap: "12%",
  },
  text: { color: "#d4d5d5", fontFamily: "Final-Fantasy", fontSize: 48 },
  decks: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  deckContainer: {
    margin: 16,
  },
});
