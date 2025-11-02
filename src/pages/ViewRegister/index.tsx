import React, { useState } from "react";
import {
  View,
  Text,

  StatusBar,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import RenderReceita from "./renderReceita";
import RenderGastos from "./renderGastos";
import HeaderListGastos from "./HeaderListGastos";
import HeaderListReceita from "./HeaderListReceita";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from './style'
export default function ViewRegister() {
  const { user, receita, gastos, load, loading } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.conteiner}>
        <StatusBar backgroundColor={"white"} />

        <Animatable.View animation="fadeIn" style={s.areaFlat}>
          <FlatList
            ListHeaderComponent={<HeaderListReceita />}
            showsVerticalScrollIndicator={false}
            data={receita}
            renderItem={({ item }) => <RenderReceita data={item} />}
            ListEmptyComponent={() => {
              return (
                <View style={s.infoListaVazia}>
                  <Text style={s.textListVazia}>
                    Suas receitas apareceram aqui
                  </Text>
                </View>
              );
            }}
          />

          <FlatList
            ListHeaderComponent={<HeaderListGastos />}
            showsVerticalScrollIndicator={false}
            data={gastos}
            renderItem={({ item }) => <RenderGastos data={item} />}
            ListEmptyComponent={() => {
              return (
                <View style={s.infoListaVazia}>
                  <Text style={s.textListVazia}>
                    Seus gastos apareceram aqui!
                  </Text>
                </View>
              );
            }}
          />
        </Animatable.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}


