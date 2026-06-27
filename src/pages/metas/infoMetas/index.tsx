import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, type ThemeColors } from "../../../contextApi/theme";

type Props = {
  dados: {
    title: string;
    metas: string | ReactNode;
  };
};

type Route = RouteProp<Props, "dados">;

export default function InfoMetas() {
  const route = useRoute<Route>();
  const navigation = useNavigation();

  const { colors } = useTheme();
  const s = getStyles(colors);

  return (
    <SafeAreaView style={s.container}>
      <View style={s.metas}>
        <Text style={s.textTitle}>{route.params?.title}</Text>
        <Text style={s.textSaldo}>{route.params?.metas}</Text>
      </View>
      <View style={s.info}>
        <Text style={s.textInfo}>
          As informações da meta são com base nos seus registros de receitas
          obtidas que são mostradas no card na tela inicial!
          Quando uma meta for atingida, ela será exibida na tela!
        </Text>
      </View>
      <TouchableOpacity style={s.buttonVoltar} onPress={() => navigation.goBack()}>
        <Text style={s.textButtonVoltar}>Fechar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
    },
    metas: {
      width: "90%",
      height: 120,
      backgroundColor: colors.primary,
      borderRadius: 15,
      padding: 10,
      margin: 8,
    },
    textTitle: {
      fontSize: 18,
      fontFamily: "Arial",
      fontWeight: "bold",
      color: "white",
      marginBottom: 10,
    },
    textSaldo: {
      fontSize: 17,
      fontFamily: "Arial",
      fontWeight: "bold",
      letterSpacing: 1.5,
      color: "white",
    },
    info: {
      width: "90%",
      backgroundColor: colors.card,
      borderRadius: 15,
      padding: 10,
      margin: 8,
      overflow: "hidden",
      marginTop: 30,
    },
    textInfo: {
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: "bold",
      textAlign: "center",
      color: colors.text,
    },
    buttonVoltar: {
      width: "90%",
      height: 40,
      backgroundColor: colors.primary,
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      borderRadius: 5,
    },
    textButtonVoltar: {
      fontSize: 15,
      fontFamily: "Arial",
      fontWeight: "bold",
      color: "white",
    },
  });
