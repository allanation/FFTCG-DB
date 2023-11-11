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
import SearchAndFilters from "../components/SearchAndFilters";
import FilterModal from "../components/FilterModal";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DeckBuilderScreen({ navigation, route }) {
  const { deckId } = route.params;
  const deckInfo = JSON.stringify(deckId).substring(1, deckId.length + 1);

  const { dispatch } = useDecksContext();
  const [deck, setDeck] = useState([]);
  const [trunk, setTrunk] = useState([]);
  const [originalTrunk, setOriginalTrunk] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);
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
        setOriginalTrunk(json);
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

  const openFilterModal = () => {
    setFilterVisible(true);
  };

  const closeFilterModal = () => {
    setFilterVisible(false);
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

  const [filteredTrunk, setFilteredTrunk] = useState(originalTrunk);

  const handleFilter = (
    selectedElements,
    selectedCosts,
    selectedTypes,
    selectedRarities,
    selectedSets,
    selectedCategories,
    selectedIcons,
    selectedPowerMath,
    powerInteger
  ) => {
    setFilterVisible(false);

    const filterCriteria = [
      // { property: "element", value: selectedElements },
      { property: "cost", value: selectedCosts },
      { property: "type", value: selectedTypes },
      { property: "rarity", value: selectedRarities },
      { property: "set", value: selectedSets },
      // { property: "category", value: selectedCategories },
    ];

    // <3 COMBINING

    const filteredTrunk = originalTrunk.filter((card) => {
      return filterCriteria.every((criteria) => {
        const { property, value } = criteria;
        if (value === null || value === undefined) {
          return true; // If value is undefined or null, don't filter by this criterion
        }
        if (Array.isArray(value)) {
          return value.some(
            (val) =>
              Array.isArray(card[property]) && card[property].includes(val)
          );
        }
        return card[property] === value;
      });
    });

    // //ELEMENT
    // const filteredTrunk = originalTrunk.filter((card) =>
    //   selectedElements.some((e) => card.element.includes(e))
    // );

    // //COST
    // const filteredTrunk2 = filteredTrunk.filter((card) =>
    //   selectedCosts.includes(card.cost)
    // );

    // //TYPE
    // const filteredTrunk = originalTrunk.filter((card) =>
    //   selectedTypes.includes(card.type)
    // );

    //RARITY
    // const filteredTrunk = originalTrunk.filter((card) =>
    //   selectedRarities.includes(card.rarity)
    // );

    //SET
    // const filteredTrunk = originalTrunk.filter((card) =>
    //   selectedSets.includes(card.set)
    // );

    // const filteredTrunk = originalTrunk.filter((card) =>
    //   selectedCategories.includes(card.category_1)
    // );

    // const filteredTrunk = originalTrunk.filter((card) =>
    //   selectedCategories.includes(card.category_2)
    // );

    // if (selectedIcons.includes("EX")) {
    //   const filteredTrunk = originalTrunk.filter(
    //     (card) => card.ex_burst === true
    //   );
    //   setTrunk(filteredTrunk);
    // }
    // if (selectedIcons.includes("SPECIAL")) {
    //   const filteredTrunk = originalTrunk.filter((card) =>
    //     card.text.includes("[[s]]")
    //   );
    //   setTrunk(filteredTrunk);
    // }

    // if (selectedIcons.includes("MULTI")) {
    //   const filteredTrunk = originalTrunk.filter(
    //     (card) => card.multicard === true
    //   );
    //   setTrunk(filteredTrunk);
    // }

    // if (selectedPowerMath === "=") {
    //   filteredTrunk.filter((card) => card.power === powerInteger);
    // }
    // if (selectedPowerMath === "\u2264") {
    //   filteredTrunk.filter((card) => card.type === "Forward");

    //   filteredTrunk.filter((card) => card.power <= powerInteger);
    // }
    // if (selectedPowerMath === "\u2265") {
    //   filteredTrunk.filter((card) => card.type === "Forward");

    //   filteredTrunk.filter((card) => card.power >= powerInteger);
    // }

    setTrunk(filteredTrunk);
  };

  const cancelFilter = () => {
    setFilterVisible(false);
    setTrunk(originalTrunk);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1a1b1b" }}>
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

          <View
            // onPress={handleTitleChange}
            style={styles.titleContainer}
          >
            <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
              {title}
            </Text>
            <Icon
              name='create-outline'
              size={24}
              color='white'
              style={styles.icon}
              onPress={handleTitleChange}
            />
          </View>
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

        <SearchAndFilters openFilterModal={openFilterModal} />

        <FilterModal
          isFilterVisible={isFilterVisible}
          closeFilterModal={closeFilterModal}
          handleFilter={handleFilter}
          cancelFilter={cancelFilter}
        />

        <CardModal
          isVisible={isModalVisible}
          card={selectedCard}
          closeModal={closeModal}
        />
      </View>
    </SafeAreaView>
  );
}

DeckBuilderScreen.navigationOptions = {
  tabBarVisible: false, // Hide the bottom navigation bar on this screen
};

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
    fontSize: 48,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: scale(240),
  },
  icon: {
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: "#1a1b1b",
  },
  searchAndFilterContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
