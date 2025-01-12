import React, { useState } from "react";
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
import { showMessage } from "react-native-flash-message";
import { useContext } from "react";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../contextApi";
import { ActivityIndicator } from "react-native";
import RenderReceita from "../components/renderReceita";
import RenderGastos from "../components/renderGastos";
import HeaderListGastos from "../components/HeaderListGastos";
import HeaderListReceita from "../components/HeaderListReceita";

export default function Home() {
  const { user, receita, gastos, LogOut, AddReceita, AddGastos,load,loading } =
    useContext(AuthContext);
  const [addValor, setAddValor] = useState("");

  async function Sair() {
    LogOut();
  }

  async function Add() {
    if(addValor === ''){
      showMessage({
        message: 'Digite algo!',
        duration: 2000,
        type: 'danger'
      })
      return;
    }
    AddReceita({ addValor });
    setAddValor("");
  }

  async function AddvalorGastos() {
    if(addValor === ''){
      showMessage({
        message: 'Digite algo!',
        duration: 2000,
        type: 'danger'
      })
      return;
    }
    AddGastos({ addValor });
    setAddValor("");
  }

  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
      <View style={s.header}>
        <Text style={s.title}>Bem vindo!</Text>

        <View style={s.areaLogOut}>
          <View>
            <Text style={s.textEmail}>Email: {user.email}</Text>
          </View>
          <TouchableOpacity style={s.areaSair} onPress={Sair}>
            <Feather color="black" name="log-out" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.areaAdd}>
        <TextInput
          placeholder="Receita/Gastos"
          keyboardType="numeric"
          value={addValor}
          onChangeText={setAddValor}
          style={s.inputAdd}
        />

        <View style={s.areaBntAdd}>
          <TouchableOpacity style={s.bnt} onPress={Add}>
            {load ? (
              <ActivityIndicator size={20} color='black'/>
            ): (
              <Text style={s.textbntAdd}>Receita</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={s.bnt} onPress={AddvalorGastos}>
           {loading ? (
            <ActivityIndicator size={20} color='black'/>
           ): (
            <Text style={s.textbntAdd}>Gastos</Text>
           )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.areaFlat}>
        <FlatList
        ListHeaderComponent={<HeaderListReceita/>}
        showsVerticalScrollIndicator={false}
          data={receita}
          renderItem={({ item }) => <RenderReceita data={item} />}
        />

        <FlatList
        ListHeaderComponent={<HeaderListGastos/>}
        showsVerticalScrollIndicator={false}
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
    backgroundColor: "#fff4ff",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },
  areaLogOut: {
    width: "100%",
    marginTop: 25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: "Arial",
    marginLeft: 20,
  },

  textEmail: {
    fontSize: 15,
    fontFamily: "Arial",
    marginLeft: 20,
    fontWeight: "500",
    opacity: 0.6
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
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },

  inputAdd: {
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 5,
    boxShadow: "1px 3px 3px 2px rgba(8, 8, 8, 0.25)",
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
    height: "50%",
    justifyContent: "center",
    padding: 15,
    marginTop: 20,
    gap: 20,
  },
});
