import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState, useReducer } from "react";
import { useDecksContext } from "../hooks/useDecksContext";
import axios from "axios";

export default function DeckBuilderScreen({ navigation, route }) {
  const { deckId } = route.params;
  const deckInfo = JSON.stringify(deckId).substring(1, deckId.length + 1);

  const { dispatch } = useDecksContext();
  const [deck, setDeck] = useState([]);
  const [deck2, setDeck2] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [stringDeck2, setStringDeck2] = useState("");

  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  const handleAddingCard = (e) => {
    const card = { _id: e._id, quantity: 1 };
    deck2.push(card);
    setDeck2([card, ...deck2]);
    setStringDeck2(JSON.stringify(deck2));
  };

  useEffect(() => {
    const fetchDeck = async () => {
      await axios
        .get("http://localhost:4000/api/decks/" + deckInfo)
        .then((res) => {
          const json = res.data;
          setDeck(json);
          setDeck2(json.cards);
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
    setStringDeck2(JSON.stringify(deck2));
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>DECK BUILDER</Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(stringDeck2);
          }}
        >
          <Text style={styles.text}>{deck.title}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardDisplay}>
        {deck2 &&
          deck2.map((card) => (
            <TouchableOpacity>
              <ImageBackground
                source={{ uri: cardPath1 + card._id + cardPath2 }}
                style={styles.image}
                key={card._id}
              >
                <Text>{card.quantity}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
      </View>

      {/* THE IMAGE BELOW CAN BE A COMPONENT */}
      <View style={styles.cardDisplay}>
        {cardList.map((card) => (
          <TouchableOpacity
            key={card._id}
            onPress={() => {
              Alert.alert(card._id + " ADDED!");
              handleAddingCard(card);
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
              // source={{ uri: card.images.full[0] }}
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
  container: {
    backgroundColor: "#1a1b1b",
    gap: "12%",
  },
  header: { alignItems: "center", flexDirection: "column" },
  button: {
    width: "66%",
    height: "33%",
    backgroundColor: "#d4d5d5",
    justifyContent: "center",
    alignItems: "center",
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
  text: { color: "#d4d5d5", fontFamily: "Final-Fantasy", fontSize: 48 },
  image: { width: 62, height: 88 },
  cardDisplay: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    //just for now until drawer is figured out
    borderTopWidth: 5,
    borderTopColor: "pink",
  },
});
