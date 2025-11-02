import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import { TextInputMask } from "react-native-masked-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from './style'
import { Feather } from "@expo/vector-icons";

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
      <View style={s.areaAdd}>
        <Text style={s.title}>Adicionar um registro!</Text>

        <View style={s.inputRow}>
          <View style={s.inputIcon}>
            <Feather name="dollar-sign" size={20} color="#2563EB" />
          </View>
          <TextInputMask
            type={"money"}
            value={addValor}
            onChangeText={setAddValor}
            style={s.input}
            placeholder="Valor"
            keyboardType="numeric"
          />
        </View>

        <View style={s.inputRow}>
          <View style={s.inputIcon}>
            <Feather name="type" size={20} color="#2563EB" />
          </View>
          <TextInput
            placeholder="Descrição"
            value={addDesc}
            onChangeText={setAdddesc}
            style={s.input}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={s.areaBntAdd}>
          <TouchableOpacity
            style={s.primaryBtn}
            onPress={AddvalorReceita}
            accessibilityRole="button"
            accessibilityLabel="Adicionar como receita"
          >
            {load ? (
              <ActivityIndicator size={20} color="#FFFFFF" />
            ) : (
              <Text style={s.textbntAdd}>Receita</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={s.dangerBtn}
            onPress={AddvalorGastos}
            accessibilityRole="button"
            accessibilityLabel="Adicionar como gasto"
          >
            {loading ? (
              <ActivityIndicator size={20} color="#FFFFFF" />
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

      <TouchableOpacity onPress={() => navigation.goBack()} style={s.buttonVoltar}>
        <Text style={s.textButtonVoltar}>Voltar para Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


