import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardSelector() {
  const [cardList, setCardList] = useState();

  useEffect(() => {
    const fetchCards = async () => {
      await axios.get("http://localhost:4000/api/cards").then((res) => {
        const json = res.data;
        setCardList(json);
      });
    };

    fetchCards();
  }, []);

  const stringsss = JSON.stringify(cardList);
  const obnj = JSON.parse(stringsss, (key, value) => {
    return value;
  });

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
      <Text>{obnj}</Text>
    </View>
  );
}
