import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardSelector() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      await axios.get("http://localhost:4000/api/cards").then((res) => {
        const json = res.data;
        setCardList(json);
      });
    };

    fetchCards();
  }, []);

  //ALLANS NOTE: THIS SEEMS TO WORK NOW I NEED TO CLEAN DATASET!!!

  // const stringCL = JSON.stringify(cardList);
  // const parsedCL = JSON.parse(stringCL);
  // const array = Object.entries(cardList);
  return (
    <View>
      {/* <View>
        {array.map((card) => (
          <View>
            {array.map((card) => (
              <Text>{card[0]}</Text>
            ))}
          </View>
        ))}
      </View> */}
      {cardList &&
        cardList.map((card) => {
          <Text style={styles.text}>{card._id}</Text>;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  text: { color: "#d4d5d5" },
});
