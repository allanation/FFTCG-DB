import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const CardModal = ({ isVisible, card, closeModal }) => {
  const cardPath1 =
    "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/cards/opus20/";
  const cardPath2 = "_eg.jpg";

  return (
    <Modal
      visible={isVisible}
      animationType='slide'
      transparent
      style={styles.container}
    >
      <BlurView tint='light' intensity={10} style={styles.innerContainer}>
        <Image
          source={{ uri: cardPath1 + card._id + cardPath2 }}
          style={styles.image}
          resizeMode='contain'
        />
        {/* <TextBox text={card.text} /> */}
        {/* <LinearGradient
          colors={["#0053ad", "#001b85", "#000223"]}
          style={styles.effectBox}
        >
          <ScrollView>
            <Text style={styles.text}>{card.text}</Text>
          </ScrollView>
        </LinearGradient> */}
        <Button title='Close' onPress={closeModal} />
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "space-around",
  },
  effectBox: {
    width: "80%",
    height: "20%",
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#424542",
  },
  image: { width: "90%", height: "60%", marginVertical: "10%" },
  text: {
    fontFamily: "MartelSans-Bold",
    fontSize: 12,
    color: "white",
  },
});

export default CardModal;
