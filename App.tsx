import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contextApi";
import { Private } from "./src/routs/prive";
import Toast from "react-native-toast-message";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
        <Private />
        <Toast position="bottom" />
      </AuthProvider>
    </NavigationContainer>
  );
}
