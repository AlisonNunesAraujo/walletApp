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
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";

import { AuthContext } from "../../contextApi";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutAuthProp } from "../../routs/auth";
import { useState } from "react";

import { s } from "./style";

export default function SigIn() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutAuthProp>>();
  const { Login, load } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //  chama a função de login
  async function Logar() {
    Login({ email, senha });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.areaLogin}>
        <View style={s.form}>
          <Feather name="user" size={30} color="white" />
          <Text style={s.Title}>Entre na sua conta!</Text>

          <View style={s.areaInputs}>
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
          <TouchableOpacity style={s.bnts} onPress={Logar}>
            {load ? (
              <ActivityIndicator size={20} color="black" />
            ) : (
              <Text style={s.textBnts}>Acessar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={s.bnts}
            onPress={() => navigation.navigate("SigOut")}
          >
            <Text style={s.textBnts}>Criar conta!</Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
