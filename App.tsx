import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contextApi";
import { Private } from "./src/routs/prive";
import FlashMessage from 'react-native-flash-message'
import { StatusBar } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor= "#f0f0f0" barStyle={"dark-content"} />
        <Private />
        {/* Evitar overlay central bloqueando toques: usar posição 'top' e floating */}
        <FlashMessage position="top" floating={true} />
      </AuthProvider>
    </NavigationContainer>

  );
}


