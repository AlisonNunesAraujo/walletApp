import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contextApi";
import { Private } from "./src/routs/prive";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Private />
      </AuthProvider>
    </NavigationContainer>
    
  );
}


