import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { s } from "./style";

type FormData = {
  name: string;
  email: string;
  password: string;
};


export const schema = yup.object({
  name: yup.string().required("O nome é obrigatória"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(5, "A senha deve ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export default function SigIn() {
  const navigation = useNavigation();
  const { CreateUser, load } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 async  function Create(data: FormData) {
   CreateUser({ email: data.email, senha: data.password, name: data.name });
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
            <Text style={s.label}>Nome:</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Name"
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor={"#ccc"}
                  style={s.formInput}
                />
              )}
            />
            {errors.name && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                  marginLeft: "5%",
                  fontWeight: "bold",
                }}
              >
                {errors.name.message}
              </Text>
            )}
            <Text style={s.label}>Email:</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Email"
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
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor={"#ccc"}
                  style={s.formInput}
                />
              )}
            />
            {errors.password && (
              <Text
                style={{
                  color: "red",
                  fontSize: 12,
                  marginLeft: "5%",
                  fontWeight: "bold",
                }}
              >
                {errors.password.message}
              </Text>
            )}
          </View>
          <TouchableOpacity style={s.bnts} onPress={handleSubmit(Create)}>
            {load ? (
              <ActivityIndicator size={20} color="black" />
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
