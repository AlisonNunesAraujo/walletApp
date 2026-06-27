import { createContext, useContext, useState } from "react";

// ─── Tokens de cor ────────────────────────────────────────────────────────────
// Cada propriedade representa um papel semântico (ex: "background", "text"),
// não um valor específico de cor. Assim trocamos o tema sem mudar os componentes.

export type ThemeColors = {
  background: string;   // fundo geral das telas
  card: string;         // fundo de cards e seções
  text: string;         // texto principal
  textSecondary: string;// texto auxiliar / labels
  border: string;       // linhas divisórias
  primary: string;      // cor de destaque do app (verde)
  inputBg: string;      // fundo de inputs
};

const light: ThemeColors = {
  background: "#ffffff",
  card: "#f5f5f5",
  text: "#1a1a1a",
  textSecondary: "#666666",
  border: "#eeeeee",
  primary: "#00cc73",
  inputBg: "#f0f0f0",
};

const dark: ThemeColors = {
  background: "#121212",
  card: "#1e1e1e",
  text: "#f0f0f0",
  textSecondary: "#aaaaaa",
  border: "#2a2a2a",
  primary: "#00cc73",  // verde mantido em ambos os temas
  inputBg: "#2a2a2a",
};

// ─── Tipos do contexto ────────────────────────────────────────────────────────

type ThemeContextType = {
  isDark: boolean;          // true = tema escuro ativo
  colors: ThemeColors;      // objeto de cores do tema atual
  toggleTheme: () => void;  // alterna entre claro e escuro
};

// ─── Criação do contexto ──────────────────────────────────────────────────────

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  colors: light,
  toggleTheme: () => {},
});

// ─── Provider ─────────────────────────────────────────────────────────────────
// Envolve o app inteiro e distribui o tema para todos os filhos via contexto.

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Estado que controla qual tema está ativo
  const [isDark, setIsDark] = useState(false);

  // Alterna entre claro e escuro
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  // Seleciona o objeto de cores conforme o tema ativo
  const colors = isDark ? dark : light;

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Hook utilitário ──────────────────────────────────────────────────────────
// Uso: const { colors, isDark, toggleTheme } = useTheme();
// Evita importar ThemeContext diretamente em cada componente.

export function useTheme() {
  return useContext(ThemeContext);
}
