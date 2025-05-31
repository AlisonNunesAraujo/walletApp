import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { TypesReceita } from "../../../contextApi/types";
import * as Animateble from "react-native-animatable";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi";
import Feather from "@expo/vector-icons/Feather";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { useNavigation } from "@react-navigation/native";

export default function RenderReceita({ data }: { data: TypesReceita }) {
  const { Deletar } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  function Delete(uid: string) {
    Deletar({ uid });
  }

  return (
    <Animateble.View animation="fadeInDown">
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
        <Text style={s.textValor}>{data.receita}</Text>
        <Text style={s.textValor}>{data.date}</Text>
        <Text style={s.textVerMais}>Ver mais</Text>
        <TouchableOpacity onPress={() => Delete(data.uid)}>
          <Feather color="red" size={20} name="trash" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Animateble.View>
  );
}

const s = StyleSheet.create({
  areaRender: {
    width: "100%",
    height: "auto",
    backgroundColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    gap: 10,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },

  textValor: {
    fontSize: 14,
    fontFamily: "Arial,",
    padding: 2,
  },
  textbnt: {
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: 14,
  },
  textVerMais: {
    fontSize: 14,
    fontFamily: "Arial",
    color: "red",
    fontWeight: "bold",
  },
});
