import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={s.content}>

              <View style={s.header}>
                <View style={s.icon}>
                  <Feather name="user-plus" size={28} color="#fff" />
                </View>
                <Text style={s.title}>Criar conta</Text>
                <Text style={s.subtitle}>Preencha os dados para continuar</Text>
              </View>

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
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
