import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import projectIcon from "../../assets/B.png";

const CadastroScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={projectIcon} style={styles.projectIcon} />
      <Text style={styles.loginTitle}>Bem-vindo ao Chef Rob!</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Seu Nome"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Seu Email"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Confirme a Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.cadastroButton}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  projectIcon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "orange",
  },
  inputField: {
    width: 300, 
    height: 40, 
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15, 
    padding: 10,
    fontSize: 16, 
  },
  cadastroButton: {
    backgroundColor: "orange",
    padding: 12, 
    width: 200, 
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CadastroScreen;
