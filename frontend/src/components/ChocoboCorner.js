import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Label from "./Label";

export default function ChocoboCorner() {
  const tipRandomizer = Math.floor(Math.random() * 12);
  const chocoboTips = [
    "Understand the Rules: Make sure you have a good understanding of the game's rules and mechanics. Knowing how to play the game is essential before you can build an effective deck.",
    "Choose a Theme or Strategy: Decide on the theme or strategy you want to build your deck around. There are various archetypes, such as Aggro (aggressive), Control (defensive), Combo (synergy-based), and Midrange (balanced). Select a strategy that suits your playstyle and the cards you have.",
    "Card Ratios: Consider the card ratios in your deck. A typical FFTCG deck is composed of 50 cards, with a maximum of three copies of any given card (except for unique cards). Aim for a balance between Forwards, Backups, Summons, and other card types that align with your strategy.",
    "Synergy: Look for cards that have good synergy with each other. Cards that work well together often lead to more powerful combos and efficient plays. For example, you might have a combination of Forwards, Summons, or abilities that complement each other's effects.",
    "Card Advantage: Prioritize cards that provide card advantage. These are cards that let you draw more cards, break your opponent's cards, or otherwise give you an advantage in resources. Card advantage can help you maintain control of the game.",
    "Curve: Pay attention to the cost curve of your deck. Make sure you have a variety of cards at different costs to ensure you have options available at all stages of the game.",
    "Backup and Forwards Selection: Ensure you have an appropriate mix of Backups and Forwards in your deck. Backups provide the resources you need to play Forwards, while Forwards are your primary attackers and defenders.",
    "Color Synergy: Be mindful of the element (color) of your cards. Try to build your deck around one or two elements to ensure you can generate the right CP (crystal points) to play your cards. Additionally, consider the color requirements of your Summons.",
    "Card Removal: Include cards that can remove or disrupt your opponent's cards. Removal cards like Summons or Forwards with abilities that break your opponent's cards can help you control the board.",
    "Test and Refine: Playtest your deck and make adjustments as needed. It may take several iterations to fine-tune your deck to fit your playstyle and the metagame.",
    "Keep Up with the Meta: Stay informed about the current metagame and adjust your deck accordingly. The meta can change as new sets and expansions are released.",
    "Sideboard: If your FFTCG events allow for sideboarding, consider building a sideboard with cards that can be swapped in to counter specific strategies you might encounter.",
  ];

  return (
    <View style={styles.container}>
      <Label text='CHOCOBO CORNER' />
      <ImageBackground
        source={require("./../../assets/chocoboBackground.gif")}
        style={styles.chocoboCorner}
      >
        <Text style={styles.chocoboText}>{chocoboTips[tipRandomizer]}</Text>
        {/* <ScrollView style={styles.chocoboTextBox}></ScrollView> */}
        <Image
          source={require("./../../assets/chocobo.gif")}
          style={styles.chocobo}
        ></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  chocoboCorner: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "white",
    padding: 16,
    marginTop: 8,
  },
  chocobo: {
    width: 120,
    height: 120,
    alignSelf: "flex-start",
    transform: [{ scaleX: -1 }],
  },
  chocoboText: { fontFamily: "MartelSans-Bold", alignItems: "center" },
});
