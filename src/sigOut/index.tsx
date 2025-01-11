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
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";

import { AuthContext } from "../contextApi";

export default function SigIn() {
  const navigation = useNavigation();
  const { CreateUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Create() {
    CreateUser({email, senha });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.areaLogin}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
        <View style={s.form}>
          <Text style={s.Title}>Criar sua conta!</Text>

          <TextInput
            placeholder="E-Mail"
            value={email}
            onChangeText={setEmail}
            style={s.formInput}
          />
          <TextInput
            placeholder="Password"
            value={senha}
            onChangeText={setSenha}
            style={s.formInput}
          />
          <TouchableOpacity style={s.bnts} onPress={Create}>
            <Text style={s.textBnts}>Criar</Text>
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

const s = StyleSheet.create({
  areaLogin: {
    flex: 1,
    backgroundColor: "white",
  },

  form: {
    width: "100%",
    backgroundColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    borderEndEndRadius: 20,
    borderStartEndRadius: 20,
  },
  Title: {
    fontSize: 20,
    fontFamily: "Arial",
    margin: 20,
  },

  formInput: {
    width: "90%",
    height: 50,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
    padding: 10,
    marginBottom: 20,
  },

  bnts: {
    width: "40%",
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
  },

  textBnts: {
    fontFamily: "Arial",
  },
});
