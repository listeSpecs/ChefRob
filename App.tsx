import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import Routes from './src/navigation';

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={isDarkMode ? "light-content" : "dark-content"}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Routes />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
