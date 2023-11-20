import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import "react-native-gesture-handler";
import Routes from "./src/navigation";
import { StatusBar } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "dark-content" : "light-content"} />
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
