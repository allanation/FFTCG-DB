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
import CardModal from "../components/CardModal";

export default function DeckBuilderScreen({ navigation, route }) {
  const { deckId } = route.params;
  const deckInfo = JSON.stringify(deckId).substring(1, deckId.length + 1);

  const { dispatch } = useDecksContext();
  const [deck, setDeck] = useState([]);
  const [deck2, setDeck2] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [stringDeck2, setStringDeck2] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ _id: "xxx" });

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

  const openModal = () => {
    // setSelectedCard(card);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  const handleAddingCard = (e) => {
    const cardId = e._id;
    const isCardInDeck = deck2.some((e) => e._id === cardId);
    const existingCard = deck2.find((e) => e._id === cardId);

    if (isCardInDeck) {
      const updatedDeck = deck2.map((e) =>
        e._id === cardId ? { ...e, ["quantity"]: e["quantity"] + 1 } : e
      );

      if (existingCard.quantity >= 3) {
        Alert.alert("Cannot have more than 3 copies of a card");
      } else {
        setDeck2(updatedDeck);
      }
    } else {
      const card = { _id: cardId, quantity: 1 };
      setDeck2([card, ...deck2]);
    }
  };

  const handleRemovingCard = (e) => {
    const cardId = e._id;
    const isCardInDeck = deck2.some((e) => e._id === cardId);
    const cardToBeRemoved = deck2.find((e) => e._id === cardId);

    if (isCardInDeck && cardToBeRemoved.quantity > 1) {
      const updatedDeck = deck2.map((e) =>
        e._id === cardId ? { ...e, ["quantity"]: e["quantity"] - 1 } : e
      );
      setDeck2(updatedDeck);
    } else {
      const updatedDeck = deck2.filter((e) => e._id !== cardId);
      setDeck2(updatedDeck);
    }
  };

  async function submitUpdatedDeck() {
    Alert.alert("Updated deck");
    try {
      await axios.patch("http://localhost:4000/api/decks/" + deckInfo, {
        // Include the data you want to send in the request body
        cards: deck2,
        // Add any other data you need to send
      });

      navigation.navigate("Decks");
      // Handle the response data or update your component's state as needed
    } catch (error) {
      Alert.alert("Error:", error);
      // Handle the error, show an error message, etc.
    }
  }

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
        <TouchableOpacity onPress={submitUpdatedDeck}>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardDisplay}>
        {deck2 &&
          deck2.map((card) => (
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
            onLongPress={() => {
              handleAddingCard(card);
            }}
            onPress={() => {
              openModal();
              setSelectedCard(card);
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
      <CardModal
        isVisible={isModalVisible}
        card={selectedCard}
        closeModal={closeModal}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1b1b",
    gap: "12%",
    flex: 1,
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
