import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
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

  return (
    <View style={s.container}>
      <View style={s.metas}>
        <Text style={s.textTitle}>{route.params?.title}</Text>
        <Text style={s.textSaldo}>{route.params?.metas}</Text>
      </View>
      <View style={s.info}>
        <Text style={s.textInfo}>
          As informações da meta são com base nos seus registros de receitas
          obtidas que são mostradas no card na tela inicial! Quando uma meta for
          atingida, ela será exibida na tela!
        </Text>
      </View>
      <TouchableOpacity
        style={s.buttonVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={s.textButtonVoltar}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
  },
  metas: {
    width: "90%",
    height: 120,
    backgroundColor: "#00cc73",
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
    height: 120,
    backgroundColor: "#f0f0f0",
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
  },
  buttonVoltar: {
    width: "90%",
    height: 40,
    backgroundColor: "green",
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
