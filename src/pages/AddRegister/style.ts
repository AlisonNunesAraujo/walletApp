import { StyleSheet } from 'react-native';
import { type ThemeColors } from '../../contextApi/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
    },
    areaAdd: {
      width: "90%",
      marginTop: 20,
      backgroundColor: colors.primary,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      shadowColor: "#080808",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
    title: {
      fontFamily: "Arial",
      fontSize: 20,
      color: "white",
      marginBottom: 20,
    },
    inputAdd: {
      width: "90%",
      height: 40,
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
      backgroundColor: colors.inputBg,
      shadowColor: "#7a7777",
      shadowOffset: { width: 1, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 2,
    },
    areaBntAdd: {
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexDirection: "row",
      margin: 10,
    },
    bnt: {
      width: "30%",
      height: 30,
      backgroundColor: colors.card,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
    },
    textbntAdd: {
      fontSize: 14,
      fontFamily: "Arial",
      color: colors.text,
    },
    buttonVoltar: {
      width: "90%",
      height: 40,
      backgroundColor: colors.primary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    textButtonVoltar: {
      fontSize: 14,
      fontFamily: "Arial",
      color: "white",
      fontWeight: "bold",
    },
  });
