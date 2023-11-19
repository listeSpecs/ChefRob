import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Box, Button } from "native-base";

const IntroScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/intro-background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <Box />
      <Box>
        <Box
          _text={{
            textAlign: "center",
            fontSize: "6xl",
            fontWeight: "bold",
            color: "white",
            lineHeight: 60,
          }}
        >
          Vamos Cozinhar
        </Box>
        <Box
          _text={{ textAlign: "center", fontWeight: "bold", fontSize: "xl" }}
          pb={5}
        >
          Receitas sem desperdícios criadas por IA
        </Box>
        <Box alignItems="center" mb={5}>
          <Button
            bgColor="white"
            _text={{ color: "primary.100", fontWeight: "bold" }}
            p={4}
            size="lg"
            borderRadius={10}
            onPress={() => navigation.navigate("Login")}
          >
            Comece a cozinhar ➔
          </Button>
        </Box>
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default IntroScreen;
