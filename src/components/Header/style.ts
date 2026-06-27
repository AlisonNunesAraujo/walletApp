import { StyleSheet } from "react-native";
import { ThemeColors } from "../../contextApi/theme";

// Recebe as cores do tema ativo e devolve um StyleSheet com essas cores aplicadas.
// É uma função (não objeto estático) porque o tema pode mudar em tempo de execução.
export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    header: {
      width: "100%",
      height: 50,
      backgroundColor: colors.card,
      justifyContent: "center",
      shadowColor: "#090909",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
    viewInfo: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      height: "100%",
    },
    text: {
      fontFamily: "Arial",
      fontSize: 18,
      marginLeft: 20,
      color: colors.text,
    },
    textName: {
      fontFamily: "Arial",
      fontSize: 18,
      fontWeight: "700",
      marginLeft: 5,
      color: colors.text,
    },
    viewBntinfo: {
      marginRight: 25,
      alignItems: "center",
    },
    textviewInfo: {
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "700",
      color: colors.text,
    },
  });
