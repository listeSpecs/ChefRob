import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import projectIcon from "../../assets/B.png";

const TelaAcesso = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.loginTitle}>Chef Rob</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.createAccountText}>
        Não tem uma conta? <Text style={styles.boldText}>Crie uma</Text>
      </Text>
      <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
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
  loginButton: {
    backgroundColor: "orange",
    padding: 10,
    width: 200, 
    borderRadius: 10, 
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold", 
    textAlign: "center",
  },
  createAccountText: {
    marginTop: 20,
    fontSize: 18, 
    textAlign: "center",
    color: "orange", 
  },
  boldText: {
    fontWeight: "bold",
  },
  forgotPasswordText: {
    position: "absolute",
    bottom: 20,
    fontSize: 18,
    color: "orange",
  },
});

export default TelaAcesso;
