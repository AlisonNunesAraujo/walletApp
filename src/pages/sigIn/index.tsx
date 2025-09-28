import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutAuthProp } from "../../routs/auth";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { s } from "./style";

type FormData = {
  email: string;
  senha: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    senha: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("A senha é obrigatória"),
  })
  .required();

export default function SigIn() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutAuthProp>>();
  const { Login, load } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function Logar(data: FormData) {
    Login({ email: data.email, senha: data.senha });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.areaLogin}>
        <View style={s.header}>
          <Feather name="user" size={40} color="black" />
          <Text style={s.Title}>Entre na sua conta!</Text>
        </View>
        <View style={s.form}>
          <View style={s.areaInputs}>
            <Text style={s.label}>Email:</Text>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="E-Mail"
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor={"#ccc"}
                  style={s.formInput}
                />
              )}
            />
            {errors.email && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                  marginLeft: "5%",
                  fontWeight: "bold",
                }}
              >
                {errors.email.message}
              </Text>
            )}

            <Text style={s.label}>Senha:</Text>
            <Controller
              control={control}
              name="senha"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  placeholderTextColor={"#ccc"}
                  style={s.formInput}
                />
              )}
            />
            {errors.senha && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                  marginLeft: "5%",
                  fontWeight: "bold",
                  marginBottom: "5%",
                }}
              >
                {errors.senha.message}
              </Text>
            )}
          </View>
          <TouchableOpacity style={s.bnts} onPress={handleSubmit(Logar)}>
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
