import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Pressable,
  TextInput,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Label from "./Label";
import CustomButton from "./CustomButton";
import { BlurView } from "expo-blur";

export default function FilterModal({
  isFilterVisible,
  closeFilterModal,
  handleFilter,
  cancelFilter,
}) {
  const elementsArray = [
    { character: "\u706b", element: "fire", selected: false },
    { character: "\u6c37", element: "ice", selected: false },
    { character: "\u98a8", element: "wind", selected: false },
    { character: "\u571f", element: "earth", selected: false },
    { character: "\u96f7", element: "lightning", selected: false },
    { character: "\u6c34", element: "water", selected: false },
    { character: "\u5149", element: "light", selected: false },
    { character: "\u95c7", element: "dark", selected: false },
  ];

  const costsArray = [
    {
      cost: 1,
      selected: false,
    },
    {
      cost: 2,
      selected: false,
    },
    {
      cost: 3,
      selected: false,
    },
    {
      cost: 4,
      selected: false,
    },
    {
      cost: 5,
      selected: false,
    },
    {
      cost: 6,
      selected: false,
    },
    {
      cost: 7,
      selected: false,
    },
    {
      cost: 8,
      selected: false,
    },
    {
      cost: 9,
      selected: false,
    },
    {
      cost: "10+",
      selected: false,
    },
  ];
  const typesArray = [
    { type: "Backup", selected: false },
    { type: "Forward", selected: false },
    { type: "Monster", selected: false },
    { type: "Summon", selected: false },
  ];
  const raritiesArray = [
    { rarity: "Common", symbol: "C", selected: false },
    { rarity: "Rare", symbol: "R", selected: false },
    { rarity: "Hero", symbol: "H", selected: false },
    { rarity: "Legend", symbol: "L", selected: false },
    { rarity: "Starter", symbol: "S", selected: false },
    { rarity: "Promo", symbol: "PR", selected: false },
  ];
  const sets = [
    "OPUS I",
    "OPUS II",
    "OPUS III",
    "OPUS IV",
    "OPUS V",
    "OPUS VI",
    "OPUS VII",
    "OPUS VIII",
    "OPUS IX",
    "OPUS X",
    "OPUS XI",
    "OPUS XII",
    "OPUS XIII",
    "OPUS XIV",
    "Crystal Dominion",
    "Emissaries of Light",
    "Rebellion's Call",
    "Resurgence of Power",
    "From Nightmares",
    "Dawn of Heroes",
  ];
  const categories = [
    {
      value: "I",
      title: "Final Fantasy I",
    },
    {
      value: "II",
      title: "Final Fantasy II",
    },
    {
      value: "III",
      title: "Final Fantasy III",
    },
    {
      value: "IV",
      title: "Final Fantasy IV",
    },
    {
      value: "V",
      title: "Final Fantasy V",
    },
    {
      value: "VI",
      title: "Final Fantasy VI",
    },
    {
      value: "VII",
      title: "Final Fantasy VII",
    },
    {
      value: "VIII",
      title: "Final Fantasy VIII",
    },
    {
      value: "IX",
      title: "Final Fantasy IX",
    },
    {
      value: "X",
      title: "Final Fantasy X",
    },
    {
      value: "XI",
      title: "Final Fantasy XI",
    },
    {
      value: "XII",
      title: "Final Fantasy XI",
    },
    {
      value: "XIII",
      title: "Final Fantasy XI",
    },
    {
      value: "XIV",
      title: "Final Fantasy XIV",
    },
    {
      value: "XV",
      title: "Final Fantasy XV",
    },
    {
      value: "DFF",
      title: "Dissidia Final Fantasy",
    },
    {
      value: "FFL",
      title: "Final Fantasy Legends",
    },
    {
      value: "FFT",
      title: "Final Fantasy Tactics",
    },
    {
      value: "FFEX",
      title: "Final Fantasy Explorer",
    },
    {
      value: "LOV",
      title: "Lord of Vermillion",
    },
    {
      value: "TYPE-0",
      title: "Final Fantasy Type-0",
    },
    {
      value: "WOFF",
      title: "World of Final Fantasy",
    },
    {
      value: "FFCC",
      title: "FF Crystal Chronicles",
    },
    {
      value: "Crystal Hunt",
      title: "FF Crystal Hunt",
    },
    {
      value: "FFTA",
      title: "FF Tactics Advance",
    },
    {
      value: "FFTA2",
      title: "FF Tactics A2",
    },
    {
      value: "MOBIUS",
      title: "Mobius Final Fantasy",
    },
    {
      value: "THEATRHYTHM",
      title: "Theatrhythm Final Fantasy",
    },
    {
      value: "PICTLOGICA",
      title: "Pictlogica Final Fantasy",
    },
    {
      value: "Special",
      title: "Special",
    },
    {
      value: "FFBE",
      title: "Final Fantasy Brave Exvius",
    },
    {
      value: "FFRK",
      title: "Final Fantasy Record Keeper",
    },
  ];
  const icons = ["EX", "SPECIAL", "MULTI"];
  const powers = ["\u2264", "=", "\u2265"];

  const [elements, setElements] = useState(elementsArray);
  const [selectedElements, setSelectedElements] = useState([]);

  const [costs, setCosts] = useState(costsArray);
  const [selectedCosts, setSelectedCosts] = useState([]);

  const [types, setTypes] = useState(typesArray);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [rarities, setRarities] = useState(raritiesArray);
  const [selectedRarities, setSelectedRarities] = useState([]);

  const cardPath =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/elements/";

  function handleSelectedElements(element) {
    const elementInArray = selectedElements.includes(element);

    if (elementInArray) {
      const newArray = selectedElements.filter((e) => e !== element);
      setSelectedElements(newArray);
      const updatedArray = elements.map((item) => {
        if (item.character === element) {
          // Update the object with the matching ID
          return { ...item, selected: false };
        }
        return item; // Keep other objects unchanged
      });
      setElements(updatedArray);
    } else {
      setSelectedElements([...selectedElements, element]);
      const updatedArray = elements.map((item) => {
        if (item.character === element) {
          // Update the object with the matching ID
          return { ...item, selected: true };
        }
        return item; // Keep other objects unchanged
      });
      setElements(updatedArray);
    }
  }

  function handleSelectedCosts(cost) {
    const costInArray = selectedCosts.includes(cost);

    if (costInArray) {
      const newArray = selectedCosts.filter((e) => e !== cost);
      setSelectedCosts(newArray);
      const updatedArray = costs.map((item) => {
        if (item.cost === cost) {
          // Update the object with the matching ID
          return { ...item, selected: false };
        }
        return item; // Keep other objects unchanged
      });
      setCosts(updatedArray);
    } else {
      if (cost === "10+") {
        setSelectedCosts([...selectedCosts, 10, 11]);
      } else {
        setSelectedCosts([...selectedCosts, cost]);
      }
      const updatedArray = costs.map((item) => {
        if (item.cost === cost) {
          // Update the object with the matching ID
          return { ...item, selected: true };
        }
        return item; // Keep other objects unchanged
      });
      setCosts(updatedArray);
    }
  }

  function handleSelectedTypes(type) {
    const typeInArray = selectedTypes.includes(type);

    if (typeInArray) {
      const newArray = selectedTypes.filter((e) => e !== type);
      setSelectedTypes(newArray);
      const updatedArray = types.map((item) => {
        if (item.type === type) {
          // Update the object with the matching ID
          return { ...item, selected: false };
        }
        return item; // Keep other objects unchanged
      });
      setTypes(updatedArray);
    } else {
      setSelectedTypes([...selectedTypes, type]);
      const updatedArray = types.map((item) => {
        if (item.type === type) {
          // Update the object with the matching ID
          return { ...item, selected: true };
        }
        return item; // Keep other objects unchanged
      });
      setTypes(updatedArray);
    }
  }

  function handleSelectedRarities(rarity) {
    const rarityInArray = selectedRarities.includes(rarity);

    if (rarityInArray) {
      const newArray = selectedRarities.filter((e) => e !== rarity);
      setSelectedRarities(newArray);
      const updatedArray = rarities.map((item) => {
        if (item.symbol === rarity) {
          // Update the object with the matching ID
          return { ...item, selected: false };
        }
        return item; // Keep other objects unchanged
      });
      setRarities(updatedArray);
    } else {
      setSelectedRarities([...selectedRarities, rarity]);
      const updatedArray = rarities.map((item) => {
        if (item.symbol === rarity) {
          // Update the object with the matching ID
          return { ...item, selected: true };
        }
        return item; // Keep other objects unchanged
      });
      setRarities(updatedArray);
    }
  }

  const submitFilter = () => {
    handleFilter(
      selectedElements,
      selectedCosts,
      selectedTypes,
      selectedRarities
    );
  };

  const resetFilter = () => {
    cancelFilter();
    setElements(elementsArray);
    setSelectedElements([]);
    setCosts(costsArray);
    setSelectedCosts([]);
    setTypes(typesArray);
    setSelectedTypes([]);
    setRarities(raritiesArray);
    setSelectedRarities([]);
  };

  const pressedOutsideModal = () => {
    closeFilterModal;
    submitFilter();
    if (
      selectedElements.length === 0 ||
      selectedCosts.length === 0 ||
      selectedTypes.length === 0 ||
      selectedRarities.length === 0
    ) {
      cancelFilter();
    }
  };

  return (
    <Modal visible={isFilterVisible} style={styles.modal} transparent>
      <BlurView tint='light' intensity={10}>
        <Pressable
          style={styles.transparent}
          onPress={pressedOutsideModal}
        ></Pressable>
        <LinearGradient
          colors={["#0053ad", "#001b85", "#000223"]}
          style={styles.container}
        >
          <Text style={styles.header}>FILTERS</Text>
          <ScrollView>
            <Label text='ELEMENT' />
            <View style={styles.typeContainer}>
              {elements &&
                elements.map((element) => (
                  <TouchableOpacity
                    key={element.element}
                    style={
                      element.selected ? styles.elementSelected : styles.element
                    }
                    onPress={() => {
                      handleSelectedElements(element.character);
                    }}
                  >
                    <Image
                      source={{
                        uri: cardPath + element.element + ".png",
                      }}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                ))}
            </View>
            <Label text='COST' />
            <View style={styles.typeContainer}>
              {costs &&
                costs.map((cost) => (
                  <TouchableOpacity
                    key={cost.cost}
                    style={cost.selected ? styles.costSelected : styles.cost}
                    onPress={() => {
                      handleSelectedCosts(cost.cost);
                    }}
                  >
                    <Text style={styles.text}>{cost.cost}</Text>
                  </TouchableOpacity>
                ))}
            </View>
            <Label text='TYPES' />
            <View style={styles.typeContainer}>
              {types &&
                types.map((type) => (
                  <Pressable
                    key={type.type}
                    style={type.selected ? styles.typeSelected : styles.type}
                    onPress={() => {
                      handleSelectedTypes(type.type);
                    }}
                  >
                    <Text style={styles.text}>{type.type}</Text>
                  </Pressable>
                ))}
            </View>
            <Label text='RARITY' />
            <View style={styles.typeContainer}>
              {rarities &&
                rarities.map((rarity) => (
                  <Pressable
                    key={rarity.rarity}
                    style={
                      rarity.selected ? styles.raritySelected : styles.rarity
                    }
                    onPress={() => {
                      handleSelectedRarities(rarity.symbol);
                    }}
                  >
                    <Text style={styles.text}>{rarity.rarity}</Text>
                  </Pressable>
                ))}
            </View>
            <Label text='SET' />
            <ScrollView style={styles.setsContainer}>
              {sets &&
                sets.map((set) => (
                  <Pressable
                    key={set}
                    style={styles.set}
                    onPress={() => {
                      Alert.alert("set selected");
                    }}
                  >
                    <Text style={styles.text}>{set}</Text>
                  </Pressable>
                ))}
            </ScrollView>
            <Label text='CATEGORY' />
            <ScrollView style={styles.setsContainer}>
              {categories &&
                categories.map((category) => (
                  <Pressable
                    key={category.value}
                    style={styles.set}
                    onPress={() => {
                      Alert.alert("category selected");
                    }}
                  >
                    <Text style={styles.text}>{category.title}</Text>
                  </Pressable>
                ))}
            </ScrollView>
            <Label text='ICON' />
            <View style={styles.typeContainer}>
              {icons &&
                icons.map((icon) => (
                  <Pressable
                    key={icon}
                    style={styles.icon}
                    onPress={() => {
                      Alert.alert("icon selected");
                    }}
                  >
                    <Text style={styles.text}>{icon}</Text>
                  </Pressable>
                ))}
            </View>
            <Label text='POWER' />
            <View style={styles.powerContainer}>
              <View style={styles.equivalenceContainer}>
                {powers &&
                  powers.map((power) => (
                    <Pressable
                      style={styles.power}
                      onPress={() => {
                        Alert.alert("power selected");
                      }}
                    >
                      <Text style={styles.text}>{power}</Text>
                    </Pressable>
                  ))}
              </View>
              <TextInput
                style={styles.powerTextInput}
                keyboardType='number-pad'
                maxLength={5}
              />
            </View>
          </ScrollView>
          {/* FILTER SUBMIT */}
          <View style={styles.buttonContainer}>
            <CustomButton
              text='Clear'
              onPress={() => {
                resetFilter();
              }}
            />
            <CustomButton
              text='Filter'
              onPress={() => {
                submitFilter();
              }}
            />
          </View>
        </LinearGradient>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: "100%",
    position: "absolute",
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 48,
  },
  header: {
    fontFamily: "Final-Fantasy",
    fontSize: 48,
    alignSelf: "center",
  },
  typeContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 2,
  },
  type: {
    width: "50%",
    paddingVertical: 8,
    alignItems: "center",
    borderWidth: 2,
  },
  typeSelected: {
    width: "50%",
    paddingVertical: 8,
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "black",
  },
  element: {
    width: "25%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  elementSelected: {
    width: "25%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    backgroundColor: "black",
  },
  cost: {
    width: "20%",
    height: 36,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  costSelected: {
    width: "20%",
    height: 36,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  rarity: {
    width: "50%",
    paddingVertical: 8,
    borderWidth: 2,
    alignItems: "center",
  },
  raritySelected: {
    width: "50%",
    paddingVertical: 8,
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: "black",
  },
  setsContainer: {
    width: "100%",
    height: 140,
    marginTop: 16,
    borderWidth: 2,
  },
  set: {
    width: "100%",
    padding: 4,
    borderBottomWidth: 2,
    alignItems: "center",
  },
  icon: {
    width: "33.33%",
    paddingVertical: 8,
    borderWidth: 2,
    alignItems: "center",
  },
  powerContainer: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 16,
  },
  equivalenceContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  power: {
    width: "33%",
    borderWidth: 2,
    alignItems: "center",
    paddingVertical: 8,
  },
  powerTextInput: {
    width: "100%",
    height: 50,
    backgroundColor: "lightgrey",
    fontSize: 28,
    fontFamily: "MartelSans-Bold",
    paddingHorizontal: 8,
    borderWidth: 2,
  },
  buttonContainer: { width: "100%", flexDirection: "row" },
  text: {
    color: "white",
    fontFamily: "MartelSans-Regular",
    fontSize: 16,
  },
  image: { width: 24, height: 24 },
  transparent: { width: "40%", height: "100%" },
});
