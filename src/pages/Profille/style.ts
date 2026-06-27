import { StyleSheet } from "react-native";
import { ThemeColors } from "../../contextApi/theme";

// Mesma estratégia dos outros arquivos: função em vez de objeto estático.
// O Profile é a tela onde o usuário alterna o tema, então é crítico que
// os estilos atualizem imediatamente após o toggle.
export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      padding: 20,
    },
    header: {
      marginBottom: 20,
    },
    headerTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.text,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    infoBlock: {
      marginBottom: 12,
    },
    label: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    value: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 8,
      color: colors.text,
    },
    description: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 20,
    },
    // linha de toggle de tema dentro do card de configurações
    themeRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    themeLabel: {
      fontSize: 14,
      color: colors.text,
      fontFamily: "Arial",
    },
    logoutButton: {
      marginTop: 20,
      backgroundColor: "#E53935",
      paddingVertical: 14,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
    logoutText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
