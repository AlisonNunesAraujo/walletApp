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
} from "react-native";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import Feather from '@expo/vector-icons/Feather';
import { AuthContext } from "../../contextApi";

import { s } from './style'



export default function SigIn() {
  const navigation = useNavigation();
  const { CreateUser, load } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");

 
  function Create() {
    CreateUser({ email, senha, name });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.areaLogin}>
        <View style={s.form}>
          <Feather name="user" size={30} color="white" />
          <Text style={s.Title}>Criar sua conta!</Text>

          <View style={s.areaInputs}>
            <Text style={s.label}>Nome:</Text>
            <TextInput
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              placeholderTextColor={"#ccc"}
              style={s.formInput}
            />
            <Text style={s.label}>
              Email:
            </Text>
            <TextInput
              placeholder="E-Mail"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={"#ccc"}
              style={s.formInput}
            />
            <Text style={s.label}>
              Senha:
            </Text>
            <TextInput
              placeholder="Password"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholderTextColor={"#ccc"}
              style={s.formInput}
            />
          </View>
          <TouchableOpacity style={s.bnts} onPress={Create}>
            {load ? (
              <ActivityIndicator size={20} color='black' />
            ) : (
              <Text style={s.textBnts}>Criar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={s.bnts} onPress={() => navigation.goBack()}>
            <Text style={s.textBnts}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}


