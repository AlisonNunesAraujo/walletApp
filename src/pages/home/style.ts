import { StyleSheet } from "react-native";
import { ThemeColors } from "../../contextApi/theme";

// Função que gera os estilos com base nas cores do tema atual.
// Chamada dentro do componente Home, sempre que colors mudar.
export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
    },
    areaView: {
      marginTop: 20,
      width: "100%",
      alignItems: "center",
    },
    areaBnts: {
      width: "90%",
      backgroundColor: colors.card,
      borderRadius: 8,
      padding: 14,
    },
    textTitle: {
      color: colors.text,
      fontFamily: "Arial",
      fontWeight: "600",
      fontSize: 14,
      marginBottom: 4,
    },
    textInfo: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: "Arial",
    },

    // últimas transações
    section: {
      width: "90%",
      alignSelf: "center",
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 8,
      fontFamily: "Arial",
    },
    transacaoRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    transacaoLeft: {
      flex: 1,
    },
    transacaoDesc: {
      fontSize: 13,
      color: colors.text,
      fontFamily: "Arial",
    },
    transacaoDate: {
      fontSize: 11,
      color: colors.textSecondary,
      marginTop: 2,
      fontFamily: "Arial",
    },
    transacaoValor: {
      fontSize: 13,
      fontWeight: "600",
      fontFamily: "Arial",
    },

    // aviso de vencimento próximo
    vencimentoAviso: {
      width: "90%",
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 20,
      padding: 12,
      borderLeftWidth: 3,
      borderLeftColor: "#f0a500",
      backgroundColor: colors.card,
      borderRadius: 6,
    },
    vencimentoTitulo: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
      fontFamily: "Arial",
      marginBottom: 4,
    },
    vencimentoTexto: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: "Arial",
    },

    // legenda do gráfico
    legendaRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    legendaDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 4,
    },
    legendaText: {
      fontSize: 12,
      color: colors.textSecondary,
      fontFamily: "Arial",
    },
  });
