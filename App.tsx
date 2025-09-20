import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contextApi";
import { Private } from "./src/routs/prive";
import FlashMessage from "react-native-flash-message";
import { StatusBar } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={"#ccc"} />
        <Private />
        <FlashMessage position={"top"} />
      </AuthProvider>
    </NavigationContainer>
  );
}
