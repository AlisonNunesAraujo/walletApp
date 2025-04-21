import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import Feather from "@expo/vector-icons/Feather";
import HeaderComponent from "../../components/Header";
import * as Animatable from "react-native-animatable";
export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
      <HeaderComponent />

      <Animatable.View>
        <ScrollView
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={s.scroll}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("AddRegister")}
            style={s.conteudoScroll}
          >
            <Feather name="plus" size={25} />
            <Text style={s.text}>Adicionar Gastos ou Receitas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewRegister")}
            style={s.conteudoScroll}
          >
            <Feather name="eye" size={25} />
            <Text style={s.text}>Ver meus registros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Dolar")}
            style={s.conteudoScroll}
          >
            <Feather name="dollar-sign" size={25} />
            <Text style={s.text}>Cotaçao</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AccountFixed")}
            style={s.conteudoScroll}
          >
            <Feather name="plus" size={25} />
            <Text style={s.text}>Adiconar conta fixa</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>

      <Animatable.View animation="fadeIn" style={s.areaView}>
        <TouchableOpacity
          style={s.areaBnts}
          onPress={() => navigation.navigate("Dolar")}
        >
          <Text style={s.textTitle}>Verificar a cotaçao atual</Text>
          <Text style={s.textInfo}>
            Aqui voçe pode se informar sobre cotação em tempo real!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.areaBnts}
          onPress={() => navigation.navigate("AccountFixed")}
        >
          <Text style={s.textTitle}>Criar uma conta fixa! 'lembrete'</Text>
          <Text style={s.textInfo}>
            Voçe pode criar uma conta fixa do mês, exp: Conta de luz!
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
  },
  areaView: {
    gap: 20,
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
  areaBnts: {
    width: "90%",
    height: "auto",
    backgroundColor: "#ccc",
    borderRadius: 8,
    flexDirection: "column",
    padding: 15,
  },
  textTitle: {
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    fontWeight: "semibold",
    fontSize: 17,
    textAlign: "center",
  },
  textInfo: {
    fontSize: 15,
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    alignItems: "center",
    textAlign: "center",
  },

  areaScrool: {
    width: "100%",
    height: "14%",
    backgroundColor: "#ccc",
    marginTop: 10,
  },
  scroll: {
    width: "100%",
    height: "10%",
    marginTop: 20,
  },
  conteudoScroll: {
    width: "20%",
    height: "90%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontFamily: "Arial",
    color: "black",
    textAlign: "center",
  },
});
