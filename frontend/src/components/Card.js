import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Card({ navigation, ...props }) {
  return (
    <View>
      <View>
        <Text>
          {card.element[0]}
          {card.cost}
          {card.rarity}
        </Text>
      </View>
      <Image source={{ uri: card.images.thumbs[0] }} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {},
//   header: {},
//   card: {},
// });
