import { StyleSheet } from 'react-native';
import { type ThemeColors } from '../../contextApi/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
    },
    areaInformacao: {
      width: "100%",
      padding: 20,
      overflow: "hidden",
    },
    textGastos: {
      fontSize: 15,
      fontFamily: "Arial",
      fontWeight: "700",
      color: colors.text,
    },
    textValorGastos: {
      color: colors.text,
      fontWeight: "bold",
      fontFamily: "Arial",
    },
    textDesc: {
      marginTop: 20,
      fontSize: 13,
      color: colors.textSecondary,
    },
    bntVoltar: {
      width: "40%",
      backgroundColor: "#1565C0",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 20,
      padding: 10,
      borderRadius: 5,
    },
    textbntvoltar: {
      color: "white",
      fontFamily: "Arial",
      fontSize: 12,
    },
  });
