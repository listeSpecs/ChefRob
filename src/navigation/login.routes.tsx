import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const LoginRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginRoutes;
