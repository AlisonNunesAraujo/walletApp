import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { ActivityIndicator } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useContext, useMemo, useRef, useState } from "react";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../contextApi";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutAuthProp } from "../../routs/auth";

import { s } from "./style";

export default function SigIn() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutAuthProp>>();
  const { Login, load } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPass, setShowPass] = useState(false);
  const passRef = useRef<TextInput>(null);

  const isEmailValid = useMemo(() => /.+@.+\..+/.test(email.trim()), [email]);
  const canSubmit = isEmailValid && senha.trim().length >= 6 && !load;

  async function Logar() {
    if (!isEmailValid) {
      showMessage({ message: "Informe um e-mail válido.", type: "warning" });
      return;
    }
    if (senha.trim().length < 6) {
      showMessage({ message: "A senha deve ter ao menos 6 caracteres.", type: "warning" });
      return;
    }
    await Login({ email: email.trim(), senha: senha.trim() });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.areaLogin}>
        <View style={s.form}>
          <Feather name="user" size={36} color="#2563EB" />
          <Text style={s.Title}>Entre na sua conta</Text>

          <View style={s.card}>
            <View style={s.areaInputs}>
              <Text style={s.label}>E-mail</Text>
              <View style={s.inputRow}>
                <Feather name="mail" size={18} color="#6B7280" style={s.inputIcon} />
                <TextInput
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
                  placeholder="Sua senha"
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry={!showPass}
                  placeholderTextColor="#9CA3AF"
                  style={s.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="go"
                  onSubmitEditing={Logar}
                />
                <TouchableOpacity onPress={() => setShowPass(v => !v)} style={s.eyeButton}>
                  <Feather name={showPass ? "eye" : "eye-off"} size={18} color="#6B7280" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={[s.primaryBtn, !canSubmit && s.btnDisabled]} onPress={Logar} disabled={!canSubmit}>
              {load ? (
                <ActivityIndicator size={20} color="#FFFFFF" />
              ) : (
                <Text style={s.primaryBtnText}>Acessar</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={s.secondaryBtn} onPress={() => navigation.navigate("SigOut")}>
              <Text style={s.secondaryBtnText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
