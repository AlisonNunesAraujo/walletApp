import { StyleSheet } from 'react-native';
import { type ThemeColors } from '../../contextApi/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      width: "100%",
      backgroundColor: colors.card,
      padding: 20,
    },
    Title: {
      fontSize: 17,
      fontFamily: "Arial",
      fontWeight: "bold",
      color: colors.text,
    },
    bntCreateAccount: {
      width: "50%",
      height: 30,
      backgroundColor: "#E53935",
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      borderRadius: 5,
    },
    textcreateAccount: {
      color: "white",
      fontFamily: "Arial",
      fontWeight: "800",
      fontSize: 12,
    },
    areaRender: {
      width: "100%",
    },
    flatList: {
      marginLeft: 10,
      width: "100%",
      height: 200,
    },
    grupoAccount: {
      width: 250,
      height: 130,
      gap: 5,
      backgroundColor: colors.card,
      marginTop: 30,
      borderRadius: 5,
      padding: 10,
      marginRight: 20,
      overflow: "hidden",
    },
    text: {
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: 12,
      color: colors.text,
    },
    bntFlat: {
      width: "100%",
      backgroundColor: "#E53935",
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
    },
    textBnt: {
      color: "white",
      fontWeight: "bold",
      fontFamily: "Arial",
      fontSize: 11,
    },
    ListVazia: {
      width: "100%",
      alignItems: "center",
      paddingTop: 20,
    },
    textListVazia: {
      fontFamily: "Arial",
      color: colors.textSecondary,
    },
    modal: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    titleModal: {
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 10,
      color: colors.text,
    },
    Inputs: {
      width: "90%",
      height: 35,
      padding: 10,
      backgroundColor: colors.inputBg,
      marginBottom: 20,
      borderRadius: 5,
      color: colors.text,
    },
    buttomModal: {
      width: "90%",
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary,
      marginBottom: 10,
      borderRadius: 5,
    },
    textButom: {
      fontFamily: "Arial",
      fontSize: 13,
      color: "white",
    },
  });
