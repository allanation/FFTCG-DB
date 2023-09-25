import { View, Text, Image, Pressable, ImageBackground } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function TitleScreen({ navigation }) {
  const opus = Math.floor(Math.random() * 20) + 1;
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Home")}
    >
      <ImageBackground
        source={{
          uri:
            "/Users/allan/Documents/GitHub/FFTCG-DB/frontend/assets/titlescreens/opus" +
            opus +
            ".jpg",
        }}
        resizeMode='cover'
        style={styles.opus}
      >
        <View style={styles.textbox}>
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              width: "100%",
              alignItems: "center",
              paddingVertical: "8%",
            }}
          >
            <Text style={styles.text}>FINAL FANTASY TCG</Text>
            <Text style={styles.text}>- DECKBUILDER -</Text>
            <Text style={styles.calltoactionText}>
              Tap anywhere to start...
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1b1b",
    justifyContent: "center",
    alignItems: "center",
    color: "#d4d5d5",
  },
  text: {
    color: "#F5F5F0",
    fontFamily: "Final-Fantasy",
    fontSize: 48,
    opacity: 1,
  },
  calltoactionText: {
    color: "#F5F5F0",
    fontSize: 24,
    fontFamily: "MartelSans-Regular",
    paddingTop: "4%",
  },
  textbox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    paddingVertical: "8%",
  },
  opus: {
    width: "100%",
    height: "100%",
  },
});
