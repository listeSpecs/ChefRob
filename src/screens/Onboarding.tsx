import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from "react-native";
import backgroundImg from '../../assets/A.jpg';
import projectIcon from "../../assets/B.png";
const Onboarding = () => {
  return (
    <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.largeTitle}>Vamos cozinhar</Text>
        <Text style={styles.title}>Receitas sem desperdícios criadas por IA</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comece a cozinhar  ➡</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "white", 
  },
  largeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "white", 
  },
  button: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Onboarding;
