import { StyleSheet } from 'react-native';
import { type ThemeColors } from '../../contextApi/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    scroll: {
      width: "100%",
      height: 100,
      marginTop: 15,
      marginLeft: 10,
    },
    conteudoScroll: {
      width: 90,
      height: 80,
      backgroundColor: colors.card,
      borderRadius: 10,
      margin: 8,
      alignItems: "center",
      justifyContent: "space-evenly",
      marginRight: 20,
    },
    text: {
      fontSize: 12,
      fontFamily: "Arial",
      color: colors.text,
      textAlign: "center",
    },
  });
