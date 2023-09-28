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
  const elements = [
    { character: "\u706b", element: "fire" },
    { character: "\u6c37", element: "ice" },
    { character: "\u98a8", element: "wind" },
    { character: "\u571f", element: "earth" },
    { character: "\u96f7", element: "lightning" },
    { character: "\u6c34", element: "water" },
    { character: "\u5149", element: "light" },
    { character: "\u95c7", element: "dark" },
  ];
  const costs = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"];
  const types = ["Backup", "Forward", "Monster", "Summon"];
  const rarities = ["Common", "Rare", "Hero", "Legend", "Starter", "Promo"];
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
  const [selectedElements, setSelectedElements] = useState([]);
  const selectedStyle = { color: "red" };
  const unselectedStyle = { color: "white" };
  const cardPath =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/elements/";
  function handleSelectedElements(element) {
    const elementInArray = selectedElements.includes(element);

    // Alert.alert(elementCheck);
    if (elementInArray) {
      const newArray = selectedElements.filter((e) => e !== element);
      setSelectedElements(newArray);
      Alert.alert("element is removed from the array" + selectedElements);
    } else {
      setSelectedElements([...selectedElements, element]);
      Alert.alert("element is added to the array" + selectedElements);
    }
  }

  return (
    <Modal visible={isFilterVisible} style={styles.modal} transparent>
      <BlurView tint='light' intensity={10}>
        <Pressable
          style={styles.transparent}
          onPress={closeFilterModal}
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
                    style={styles.element}
                    onPress={() => {
                      handleSelectedElements(element.character);
                      //   Alert.alert(element.element);
                    }}
                  >
                    <Image
                      source={{
                        uri: cardPath + element.element + ".png",
                      }}
                      style={styles.image}
                    />
                    {/* <Text style={styles.text}>{element.character}</Text> */}
                  </TouchableOpacity>
                ))}
            </View>
            <Label text='COST' />
            <View style={styles.typeContainer}>
              {costs &&
                costs.map((cost) => (
                  <Pressable
                    key={cost}
                    style={styles.cost}
                    onPress={() => {
                      Alert.alert("cost selected");
                    }}
                  >
                    <Text style={styles.text}>{cost}</Text>
                  </Pressable>
                ))}
            </View>
            <Label text='TYPES' />
            <View style={styles.typeContainer}>
              {types &&
                types.map((type) => (
                  <Pressable
                    key={type}
                    style={styles.type}
                    onPress={() => {
                      Alert.alert("type selected");
                    }}
                  >
                    <Text style={styles.text}>{type}</Text>
                  </Pressable>
                ))}
            </View>
            <Label text='RARITY' />
            <View style={styles.typeContainer}>
              {rarities &&
                rarities.map((rarity) => (
                  <Pressable
                    key={rarity}
                    style={styles.rarity}
                    onPress={() => {
                      Alert.alert("rarity selected");
                    }}
                  >
                    <Text style={styles.text}>{rarity}</Text>
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
                cancelFilter();
                setSelectedElements([]);
              }}
            />
            <CustomButton
              text='Filter'
              onPress={() => {
                handleFilter(selectedElements);
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
  element: {
    width: "25%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  cost: {
    width: "20%",
    height: 36,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rarity: {
    width: "50%",
    paddingVertical: 8,
    borderWidth: 2,
    alignItems: "center",
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
