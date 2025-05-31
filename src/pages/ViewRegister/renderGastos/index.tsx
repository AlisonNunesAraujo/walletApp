import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TypesGastos } from "../../../contextApi/types";
import { useContext } from "react";
import * as Animatebale from "react-native-animatable";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { AuthContext } from "../../../contextApi";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function RenderGastos({ data }: { data: TypesGastos }) {
  const { DeletarGastos } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  function Deletar(uid: string) {
    DeletarGastos({ uid });
  }

  return (
    <Animatebale.View animation="fadeInDown">
      <TouchableOpacity
        style={s.areaRender}
        onPress={() =>
          navigation.navigate("AreaDescGastos", {
            gastos: data.gastos,
            desc: data.desc,
            date: data.date,
          })
        }
      >
        <Text style={s.textValor}>{data.gastos}</Text>
        <Text style={s.textValor}>{data.date}</Text>
        <Text style={s.textVerMais}>Ver mais</Text>
        <TouchableOpacity onPress={() => Deletar(data.uid)}>
          <Feather color="red" size={20} name="trash" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Animatebale.View>
  );
}

const s = StyleSheet.create({
  areaRender: {
    width: "100%",
    height: 'auto',
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    gap: 10,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },
  textValor: {
    fontFamily: "Arial",
    fontSize: 14,
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
