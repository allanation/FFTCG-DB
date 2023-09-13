import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function CardSelector() {
  const [cardList, setCardList] = useState(null);
  useEffect(() => {}, []);
  return (
    <View>
      <Text>CardSelector</Text>
    </View>
  );
}
