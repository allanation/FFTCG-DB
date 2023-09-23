import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Modal from "react-native-modal";

const CardModal = ({ isVisible, card, closeModal }) => {
  return (
    <Modal visible={isVisible} style={styles.container}>
      <View>
        <Text>{card._id}</Text>
        <Text>{card.name}</Text>
        <Text>{card.text}</Text>
        <Text>{card.set}</Text>
        <Text>{card._id}</Text>
        <Button title='Close' onPress={closeModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { height: 100, backgroundColor: "pink" },
});

export default CardModal;
