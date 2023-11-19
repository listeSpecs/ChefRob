import { Box, Button, Center, Image, Link, Text } from "native-base";
import Logotipo from "../../../assets/images/logotipo.png";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

const LoginScreen = ({ navigation }: any) => {
  const [loginStep, setLoginStep] = useState("");

  const clearStep = () => {
    setLoginStep("");
  };

  return (
    <Box py={10} justifyContent="space-around" height="100%">
      <Center mt={loginStep === "login" ? 0 : 5}>
        <Image
          source={Logotipo}
          alt="Logo do aplicativo Chef Rob"
          width={loginStep === "login" ? 200 : 240}
          resizeMode="contain"
        />
      </Center>
      {!loginStep && (
        <Box>
          <Box alignItems="center" pb={8}>
            <Button
              bgColor="primary.100"
              size="lg"
              borderRadius={10}
              width="60%"
              onPress={() => setLoginStep("login")}
            >
              Login
            </Button>
          </Box>
          <Box
            pb={12}
            flexDirection="row"
            justifyContent="center"
            _text={{ textAlign: "center", fontSize: "md" }}
          >
            Não tem uma conta?{" "}
            <Link onPress={() => console.log("oi")}>
              <Text color="primary.100" bold fontSize="md">
                Crie uma
              </Text>
            </Link>
          </Box>
          <Center>
            <Link onPress={() => setLoginStep("forgot")}>
              <Text color="primary.100">Esqueceu a senha?</Text>
            </Link>
          </Center>
        </Box>
      )}
      {loginStep === "login" && <LoginForm clearStep={clearStep} />}
      {loginStep === "forgot" && <ForgotPasswordForm clearStep={clearStep} />}
    </Box>
  );
};

export default LoginScreen;
