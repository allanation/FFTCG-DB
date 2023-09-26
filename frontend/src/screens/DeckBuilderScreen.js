import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDecksContext } from "../hooks/useDecksContext";
import axios from "axios";
import CardModal from "../components/CardModal";
import DeckDisplay from "../components/DeckDisplay";
import TrunkDisplay from "../components/TrunkDisplay";
import Label from "../components/Label";
import Icon from "react-native-vector-icons/Ionicons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function DeckBuilderScreen({ navigation, route }) {
  const { deckId } = route.params;
  const deckInfo = JSON.stringify(deckId).substring(1, deckId.length + 1);

  const { dispatch } = useDecksContext();
  const [deck, setDeck] = useState([]);
  const [trunk, setTrunk] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ _id: "xxx" });
  const [title, setTitle] = useState("");
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const fetchDeck = async () => {
      await axios
        .get("http://localhost:4000/api/decks/" + deckInfo)
        .then((res) => {
          const json = res.data;
          setDeck(json.cards);
          setTitle(json.title);
        });
    };

    const fetchCards = async () => {
      await axios.get("http://localhost:4000/api/cards").then((res) => {
        const json = res.data;
        setTrunk(json);
      });
    };

    fetchDeck();
    fetchCards();
  }, [dispatch]);

  const openModal = (card) => {
    setModalVisible(true);
    setSelectedCard(card);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  const handleAddingCard = (e) => {
    const cardId = e._id;
    const isCardInDeck = deck.some((e) => e._id === cardId);
    const existingCard = deck.find((e) => e._id === cardId);

    if (isCardInDeck) {
      const updatedDeck = deck.map((e) =>
        e._id === cardId ? { ...e, ["quantity"]: e["quantity"] + 1 } : e
      );

      if (existingCard.quantity >= 3) {
        Alert.alert("Cannot have more than 3 copies of a card");
      } else {
        setDeck(updatedDeck);
        const cardAmount = existingCard.quantity + 1;
        Alert.alert(cardId + " added!\n" + cardAmount + "/3");
      }
    } else {
      const card = { _id: cardId, quantity: 1 };
      setDeck([card, ...deck]);
      Alert.alert(card._id + " added!\n" + card.quantity + "/3");
    }
  };

  const handleRemovingCard = (e) => {
    const cardId = e._id;
    const isCardInDeck = deck.some((e) => e._id === cardId);
    const cardToBeRemoved = deck.find((e) => e._id === cardId);

    if (isCardInDeck && cardToBeRemoved.quantity > 1) {
      const updatedDeck = deck.map((e) =>
        e._id === cardId ? { ...e, ["quantity"]: e["quantity"] - 1 } : e
      );
      setDeck(updatedDeck);
    } else {
      const updatedDeck = deck.filter((e) => e._id !== cardId);
      setDeck(updatedDeck);
    }
  };

  const handleTitleChange = () => {
    Alert.prompt("Enter a new deck title:", null, (text) => {
      if (text !== null) {
        setTitle(text);
      }
    });
  };

  async function submitUpdatedDeck() {
    Alert.alert("Updated deck");
    try {
      await axios.patch("http://localhost:4000/api/decks/" + deckInfo, {
        // Include the data you want to send in the request body
        title: title,
        cards: deck,
        // Add any other data you need to send
      });

      navigation.navigate("Home");
      // Handle the response data or update your component's state as needed
    } catch (error) {
      Alert.alert("Error:", error);
      // Handle the error, show an error message, etc.
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='chevron-back-circle-outline'
          size={32}
          color='white'
          style={styles.icon}
          onPress={() => {
            navigation.navigate("Decks");
          }}
        />

        <TouchableOpacity
          onPress={handleTitleChange}
          style={styles.titleContainer}
        >
          <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
            {title}
          </Text>

          {/* <Icon
            name='create-outline'
            size={28}
            color='white'
            style={styles.icon}
            onPress={handleTitleChange}
          /> */}
        </TouchableOpacity>
        <Icon
          name='save-outline'
          size={28}
          color='white'
          style={styles.icon}
          onPress={submitUpdatedDeck}
        />
      </View>

      <Label text='DECK' />

      <DeckDisplay
        deck={deck}
        handleRemovingCard={handleRemovingCard}
        openModal={openModal}
      />

      <Label text='CARDS' />

      <TrunkDisplay
        trunk={trunk}
        openModal={openModal}
        handleAddingCard={handleAddingCard}
      />

      <CardModal
        isVisible={isModalVisible}
        card={selectedCard}
        closeModal={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1b1b",
    flex: 1,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "6%",
  },
  text: {
    color: "#d4d5d5",
    fontFamily: "MartelSans-Regular",
    fontSize: 28,
  },
  titleContainer: {
    // width: "70%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: scale(240),
  },
  icon: {
    marginHorizontal: 8,
  },
});
