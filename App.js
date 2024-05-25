import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import WelcomeScreen from "./screens/WelcomeScreen";
import StackNavigator from "./navigation/stackNavigator";

export default function App() {
  return (
      // <WelcomeScreen/>

    <StackNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
