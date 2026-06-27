import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { TypesReceita } from "../../../contextApi/types";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi";
import Feather from "@expo/vector-icons/Feather";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { useNavigation } from "@react-navigation/native";
import { useTheme, type ThemeColors } from "../../../contextApi/theme";

export default function RenderReceita({ data }: { data: TypesReceita }) {
  const { Deletar } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  // cores do tema para o fundo do card e textos
  const { colors } = useTheme();
  const s = getStyles(colors);

  function Delete(uid: string) {
    Deletar({ uid });
  }

  return (
    <View>
      <TouchableOpacity
        style={s.areaRender}
        onPress={() =>
          navigation.navigate("AreaDescReceita", {
            receita: data.receita,
            desc: data.desc,
            date: data.date,
          })
        }
      >
        <Text style={s.textValor}>R$ {data.receita}</Text>
        <Text style={s.textValor}>{data.date}</Text>
        <Text style={s.textVerMais}>Ver mais</Text>
        <TouchableOpacity onPress={() => Delete(data.uid)}>
          <Feather color="red" size={20} name="trash" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    areaRender: {
      width: "100%",
      backgroundColor: colors.card,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 5,
      gap: 10,
      paddingVertical: 8,
      shadowColor: "#080808",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 2,
    },
    textValor: {
      fontSize: 14,
      fontFamily: "Arial",
      padding: 2,
      color: colors.text,
    },
    textbnt: {
      fontFamily: "Arial",
      fontWeight: "700",
      fontSize: 14,
      color: colors.text,
    },
    textVerMais: {
      fontSize: 14,
      fontFamily: "Arial",
      color: "red",
      fontWeight: "bold",
    },
  });
