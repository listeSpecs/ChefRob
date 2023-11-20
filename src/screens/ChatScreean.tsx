import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Keyboard,
} from "react-native";

const ChatScreen = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [buttonOptionsDisabled, setButtonOptionsDisabled] = useState(false);
  const chatScrollViewRef = useRef();

  const handleUserMessage = (text) => {
    text = text.trim(); // Remove espaços em branco no início e no final.
    const newUserMessage = { text, sender: "Usuário Fictício" };
    setChatHistory((prevHistory) => [...prevHistory, newUserMessage]);
    scrollToBottom();

    if (text.toLowerCase() === "receitas") {
      const chefMessage = {
        text: "Como você prefere a receita? Escolha uma opção ou 'Não tem preferência':",
        sender: "Chef Rob",
      };
      setChatHistory((prevHistory) => [...prevHistory, chefMessage]);
      const optionsMessage = {
        text: "Frita | Cozida | Assada | Grelhada | Não tem preferência",
        sender: "Chef Rob",
        isButtonOptions: true,
      };
      setChatHistory((prevHistory) => [...prevHistory, optionsMessage]);
      setButtonOptionsDisabled(false); // Habilita os botões quando "receitas" é digitado.
      Keyboard.dismiss(); // Fecha o teclado após o carregamento dos botões.
    }
  };

  const handleButtonOption = (option) => {
    if (buttonOptionsDisabled) return;
    setButtonOptionsDisabled(true);
    const chefMessage = {
      text: `Você escolheu ${option}. Aqui está a receita: ...`,
      sender: "Chef Rob",
    };
    setChatHistory((prevHistory) => [...prevHistory, chefMessage]);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (chatScrollViewRef.current) {
      chatScrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    const welcomeMessage = {
      text: "Bem-vindo ao Chef Rob!",
      sender: "Chef Rob",
    };
    const instructions = {
      text: "Digite 'receitas' para obter uma receita saudável.",
      sender: "Chef Rob",
    };
    setChatHistory([welcomeMessage, instructions]);
    scrollToBottom();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={chatScrollViewRef}
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContent}
      >
        {chatHistory.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              {
                alignSelf:
                  message.sender === "Usuário Fictício"
                    ? "flex-end"
                    : "flex-start",
                backgroundColor:
                  message.sender === "Chef Rob" ? "#F3F3F3" : "#FFA500",
                marginLeft: 5,
                marginRight: 5,
                marginBottom: 10, // Adiciona espaçamento entre os balões de resposta.
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              },
            ]}
          >
            {message.isButtonOptions ? (
              <View style={styles.buttonOptions}>
                {message.text.split(" | ").map((option, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.buttonOption,
                      {
                        backgroundColor: buttonOptionsDisabled
                          ? "#CCCCCC"
                          : "#FFA500",
                        width: "100%", // Manter o tamanho da largura dos botões igual.
                      },
                    ]}
                    onPress={() => handleButtonOption(option)}
                    disabled={buttonOptionsDisabled}
                  >
                    <Text style={styles.buttonText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View>
                <Text style={styles.senderText}>{message.sender}:</Text>
                <Text
                  style={[
                    styles.messageText,
                    {
                      color:
                        message.sender === "Chef Rob" ? "#000000" : "#FFFFFF",
                    },
                  ]}
                >
                  {message.text}
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Digite sua mensagem..."
          value={userMessage}
          onChangeText={(text) => setUserMessage(text)}
          onSubmitEditing={() => {
            handleUserMessage(userMessage);
            setUserMessage("");
          }}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            handleUserMessage(userMessage);
            setUserMessage("");
          }}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatContent: {
    justifyContent: "flex-end",
  },
  message: {
    padding: 10,
    maxWidth: "70%",
  },
  senderText: {
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  inputField: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#FFA500",
    borderRadius: 10,
    padding: 10,
    color: "black",
  },
  sendButton: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonOptions: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonOption: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    width: "100%",
  },
});

export default ChatScreen;
