import React, { useRef, useState, useMemo, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../../contextApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./style";

export default function SigIn() {
  const navigation = useNavigation();
  const { CreateUser, load } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef<TextInput>(null);
  const passRef = useRef<TextInput>(null);

  const isEmailValid = useMemo(() => /.+@.+\..+/.test(email.trim()), [email]);
  const isNameValid = useMemo(() => name.trim().length >= 2, [name]);
  const canSubmit = isNameValid && isEmailValid && senha.trim().length >= 6 && !load;

  async function Create() {
    if (!isNameValid) {
      showMessage({ message: "Informe um nome válido (mín. 2 letras).", type: "warning" });
      return;
    }
    if (!isEmailValid) {
      showMessage({ message: "Informe um e-mail válido.", type: "warning" });
      return;
    }
    if (senha.trim().length < 6) {
      showMessage({ message: "A senha deve ter ao menos 6 caracteres.", type: "warning" });
      return;
    }
    await CreateUser({ email: email.trim(), senha: senha.trim(), name: name.trim() });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.areaLogin}>
        <View style={s.form}>
          <Feather name="user-plus" size={36} color="#2563EB" />
          <Text style={s.Title}>Criar sua conta</Text>

          <View style={s.card}>
            <View style={s.areaInputs}>
              <Text style={s.label}>Nome</Text>
              <View style={s.inputRow}>
                <Feather name="user" size={18} color="#6B7280" style={s.inputIcon} />
                <TextInput
                  placeholder="Seu nome"
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#9CA3AF"
                  style={s.input}
                  autoCapitalize="words"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => emailRef.current?.focus()}
                />
              </View>

              <Text style={[s.label, { marginTop: 12 }]}>E-mail</Text>
              <View style={s.inputRow}>
                <Feather name="mail" size={18} color="#6B7280" style={s.inputIcon} />
                <TextInput
                  ref={emailRef}
                  placeholder="exemplo@dominio.com"
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#9CA3AF"
                  style={s.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => passRef.current?.focus()}
                />
              </View>

              <Text style={[s.label, { marginTop: 12 }]}>Senha</Text>
              <View style={s.inputRow}>
                <Feather name="lock" size={18} color="#6B7280" style={s.inputIcon} />
                <TextInput
                  ref={passRef}
                  placeholder="Crie uma senha"
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry={!showPass}
                  placeholderTextColor="#9CA3AF"
                  style={s.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="go"
                  onSubmitEditing={Create}
                />
                <TouchableOpacity onPress={() => setShowPass(v => !v)} style={s.eyeButton}>
                  <Feather name={showPass ? "eye" : "eye-off"} size={18} color="#6B7280" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={[s.primaryBtn, !canSubmit && s.btnDisabled]} onPress={Create} disabled={!canSubmit}>
              {load ? (
                <ActivityIndicator size={20} color="#FFFFFF" />
              ) : (
                <Text style={s.primaryBtnText}>Criar conta</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={s.secondaryBtn} onPress={() => navigation.goBack()}>
              <Text style={s.secondaryBtnText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}


