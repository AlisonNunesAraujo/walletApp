
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contextApi";
import { Private } from "./src/routs/prive";
import FlashMessage from 'react-native-flash-message'
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/contextApi/theme";

export default function App() {
  return (
    // SafeAreaProvider calcula os insets de segurança (notch, barra de status)
    // ThemeProvider distribui o tema atual para toda a árvore de componentes
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <AuthProvider>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <Private />
            <FlashMessage position={"center"} />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


