import React from "react";
import { Box, Button } from "native-base";

const IntroScreen = ({ navigation }: any) => {
  return (
    <Box
      py={10}
      width="100%"
      height="100%"
      bgColor="black"
      justifyContent="space-between"
    >
      <Box />
      <Box>
        <Box
          _text={{
            textAlign: "center",
            fontSize: "5xl",
            fontWeight: "bold",
            color: "white",
          }}
          pb={5}
        >
          Vamos Cozinhar
        </Box>
        <Box _text={{ textAlign: "center", color: "white" }} pb={10}>
          Receitas sem desperdícios criadas por IA
        </Box>
        <Box alignItems="center">
          <Button
            bgColor="primary.100"
            p={4}
            size="lg"
            borderRadius={10}
            onPress={() => navigation.navigate("Login")}
          >
            Comece a cozinhar ➔
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroScreen;
