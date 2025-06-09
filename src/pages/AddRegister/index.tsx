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
import { TextInputMask } from "react-native-masked-text";

import { s } from './style'

export default function AddRegister() {
  const { user, receita, gastos, AddReceita, AddGastos, load, loading } =
    useContext(AuthContext);
  const [addValor, setAddValor] = useState("");
  const [addDesc, setAdddesc] = useState("")

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  // Função para adicionar receita
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

  // Função para adicionar gastos
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

    <SafeAreaView style={s.conteiner} onTouchStart={Keyboard.dismiss}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />

      <View style={s.areaAdd}>
        <Text style={s.title}>Adicionar um registro!</Text>

        <TextInputMask
          type={"money"}
          value={addValor}
          onChangeText={setAddValor}
          style={s.inputAdd}
          placeholder="Valor"
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

      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ViewRegister")}
        style={s.buttonVoltar}
      >
        <Text style={s.textButtonVoltar}>Ver meus registros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={s.buttonVoltar}
      >
        <Text style={s.textButtonVoltar}>Voltar para Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


