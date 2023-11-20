import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import projectIcon from "../../assets/B.png";

const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={projectIcon} style={styles.projectIcon} />
        </View>
        <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>⬅</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
            <TextInput placeholder="Nome de Usuário" style={styles.inputField} />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Senha"
                style={styles.inputField}
                secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  projectIcon: {
    width: 150,
    height: 150,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "orange",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    top: -15,
    fontSize: 45,
    fontWeight: "900",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "orange",
    marginHorizontal: 70,
    marginVertical: 20,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  loginButton: {
    backgroundColor: "orange",
    padding: 15,
    width: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginScreen;
