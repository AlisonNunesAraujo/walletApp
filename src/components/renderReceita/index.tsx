import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TypesReceita } from "../../contextApi";

import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import Feather from "@expo/vector-icons/Feather";
export default function RenderReceita({ data }: { data: TypesReceita }) {
  const { Deletar } = useContext(AuthContext);

  function Delete(uid: string) {
    Deletar({ uid });
  }

  return (
    <View style={s.areaRender}>
      <Text style={s.textValor}>R$ {data.receita}</Text>
      <TouchableOpacity onPress={() => Delete(data.uid)}>
        <Feather color="red" size={20} name="trash" />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  areaRender: {
    width: "100%",
    height: 100,
    backgroundColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    gap: 19,
    boxShadow: '0px 4px 4px rgba(8, 8, 8, 0.25)',
  },

  textValor: {
    fontSize: 16,
    fontFamily: "Arial,",
    fontWeight: '700'
  },
  textbnt: {
    fontFamily: "Arial",
    fontWeight: "700",
  },
});
