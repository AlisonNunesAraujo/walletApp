import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";

import { AuthContext } from "../../contextApi";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutAuthProp } from "../../routs/auth";

import { s } from "./style";

export default function SigIn() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RoutAuthProp>>();

  const { Login, load } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Logar() {
    Login({ email, senha });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={s.container}>
        <View style={s.content}>

          {/* HEADER */}
          <View style={s.header}>
            <View style={s.icon}>
              <Feather name="user" size={28} color="#fff" />
            </View>
            <Text style={s.title}>Bem-vindo!</Text>
            <Text style={s.subtitle}>
              Faça login para continuar
            </Text>
          </View>

          {/* FORM */}
          <View style={s.card}>
            <TextInput
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#999"
              style={s.input}
            />

            <TextInput
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholderTextColor="#999"
              style={s.input}
            />

            <TouchableOpacity style={s.primaryButton} onPress={Logar}>
              {load ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={s.primaryText}>Entrar</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SigOut")}
              style={s.secondaryButton}
            >
              <Text style={s.secondaryText}>
                Criar uma conta
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
