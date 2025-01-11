import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";

import { useContext } from "react";

import { AuthContext } from "../contextApi";

import RenderReceita from "../components/renderReceita";
import RenderGastos from "../components/renderGastos";

export default function Home() {
  const { user, receita, gastos } = useContext(AuthContext);

  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
      <View style={s.header}>
        <Text style={s.title}>Bem vindo!</Text>

        <View style={s.areaLogOut}>
          <View>
            <Text style={s.textEmail}>Email: {user.email}</Text>
          </View>
          <View style={s.areaSair}>
            <Text>Sair</Text>
          </View>
        </View>
      </View>

      <View style={s.areaAdd}>
        <TextInput placeholder="Receita/Gastos" style={s.inputAdd} />

        <View style={s.areaBntAdd}>
          <TouchableOpacity style={s.bnt}>
            <Text style={s.textbntAdd}>Receita</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.bnt}>
            <Text style={s.textbntAdd}>Gastos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.areaFlat}>
        <FlatList
          data={receita}
          renderItem={({ item }) => <RenderReceita data={item} />}
        />

        <FlatList
          data={gastos}
          renderItem={({ item }) => <RenderGastos data={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
  },

  header: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
  },
  areaLogOut: {
    width: "100%",
    marginTop: 25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    fontFamily: "Arial",
    marginLeft: 20,
  },

  textEmail: {
    fontSize: 15,
    fontFamily: "Arial",
    marginLeft: 20,
  },

  areaSair: {
    width: "10%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  areaAdd: {
    width: "90%",
    marginTop: 20,
    backgroundColor: "#ccc",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  inputAdd: {
    width: "90%",
    padding: 20,
    borderRadius: 5,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },

  areaBntAdd: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
  },
  bnt: {
    width: "30%",
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  textbntAdd: {
    fontSize: 15,
    fontFamily: "Arial",
  },
  areaFlat: {
    flexDirection: "row",
    width: "100%",
    height: 500,
    justifyContent: "center",
    padding: 15,
    marginTop: 20,
    gap: 20,
  },
});
