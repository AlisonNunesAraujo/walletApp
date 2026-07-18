import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@themeAppWallet";

export type ThemeColors = {
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  primary: string;
  inputBg: string;
  primarySurface: string; // fundo de blocos com destaque: verde vivo no claro, verde escuro no dark
};

const light: ThemeColors = {
  background: "#ffffff",
  card: "#f5f5f5",
  text: "#1a1a1a",
  textSecondary: "#666666",
  border: "#eeeeee",
  primary: "#00cc73",
  inputBg: "#f0f0f0",
  primarySurface: "#00cc73",
};

const dark: ThemeColors = {
  background: "#121212",
  card: "#1e1e1e",
  text: "#f0f0f0",
  textSecondary: "#aaaaaa",
  border: "#2a2a2a",
  primary: "#00cc73",
  inputBg: "#2a2a2a",
  primarySurface: "#0d3322", // verde escuro e suave, sem agredir os olhos
};

type ThemeContextType = {
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  colors: light,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  // Carrega a preferência salva quando o app abre
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value === "dark") setIsDark(true);
    });
  }, []);

  // Alterna o tema e persiste a escolha para a próxima abertura do app
  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      AsyncStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      return next;
    });
  }

  const colors = isDark ? dark : light;

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
