import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contextApi";
import { s } from "./style";

export default function SigIn() {
  const navigation = useNavigation();
  const { CreateUser, load } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Create() {
    CreateUser({ email, senha, name });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={s.container}>
        <View style={s.content}>

          {/* HEADER */}
          <View style={s.header}>
            <View style={s.icon}>
              <Feather name="user-plus" size={28} color="#fff" />
            </View>
            <Text style={s.title}>Criar conta</Text>
            <Text style={s.subtitle}>
              Preencha os dados para continuar
            </Text>
          </View>

          {/* FORM */}
          <View style={s.card}>
            <TextInput
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#999"
              style={s.input}
            />

            <TextInput
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
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

            <TouchableOpacity style={s.primaryButton} onPress={Create}>
              {load ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={s.primaryText}>Criar conta</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={s.secondaryButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={s.secondaryText}>Voltar para login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
