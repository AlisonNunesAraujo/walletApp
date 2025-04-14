import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import * as Animatable from "react-native-animatable";



export default function AddRegister() {
  const { user, receita, gastos, AddReceita, AddGastos, load, loading } =
    useContext(AuthContext);
  const [addValor, setAddValor] = useState("");
  const [addDesc, setAdddesc] = useState("");
  const [valor, setValor] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  async function AddvalorReceita() {
    if (addValor === "") {
      showMessage({
        message: "Digite algo!",
        duration: 2000,
        type: "danger",
      });
      return;
    }
    AddReceita({ addValor, addDesc });
    setAddValor("");
    setAdddesc("");
  }

  async function AddvalorGastos() {
    if (addValor === "") {
      showMessage({
        message: "Digite algo!",
        duration: 1000,
        type: "danger",
      });
      return;
    }
    AddGastos({ addValor, addDesc });
    setAddValor("");
    setAdddesc("");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.conteiner}>
        <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />

        <Animatable.View animation="fadeInDown" style={s.areaAdd}>
          <Text style={s.title}>Adicionar um registro!</Text>
          <TextInput
            placeholder="Valor"
            keyboardType="numeric"
            value={addValor}
            onChangeText={setAddValor}
            style={s.inputAdd}
          />




          <TextInput
            placeholder="Descrição"
            value={addDesc}
            onChangeText={setAdddesc}
            style={s.inputAdd}
          />

          <View style={s.areaBntAdd}>
            <TouchableOpacity style={s.bnt} onPress={AddvalorReceita}>
              {load ? (
                <ActivityIndicator size={20} color="black" />
              ) : (
                <Text style={s.textbntAdd}>Receita</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={s.bnt} onPress={AddvalorGastos}>
              {loading ? (
                <ActivityIndicator size={20} color="black" />
              ) : (
                <Text style={s.textbntAdd}>Gastos</Text>
              )}
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
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
  title: {
    fontFamily: 'Arial',
    fontSize: 20,

  },
  inputAdd: {
    width: "90%",
    height: 50,
    padding: 13,
    borderRadius: 5,
    boxShadow: "1px 3px 3px 0px rgba(8, 8, 8, 0.25)",
  },

  areaBntAdd: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
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
  }
});
