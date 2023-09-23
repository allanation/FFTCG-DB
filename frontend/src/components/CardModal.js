import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import Modal from "react-native-modal";

const CardModal = ({ isVisible, card, closeModal }) => {
  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  return (
    <Modal visible={isVisible} style={styles.container}>
      <View>
        <Text>{card._id}</Text>
        <Text>{card.name}</Text>
        <Text>{card.text}</Text>
        <Text>{card.set}</Text>
        <Text>Image:</Text>
        <Image
          source={{ uri: cardPath1 + card._id + cardPath2 }}
          style={styles.image}
        />
        <Button title='Close' onPress={closeModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { height: 100, backgroundColor: "pink" },
  image: { width: 50, height: 50 },
});

export default CardModal;
