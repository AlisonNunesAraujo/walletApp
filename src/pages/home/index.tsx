import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import HeaderComponent from "../../components/Header";
import * as Animatable from "react-native-animatable";
import ScrollHome from "../../components/scrollHome";
import CardSaldo from "../../components/cardSaldo";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <SafeAreaView style={s.conteiner}>
      <HeaderComponent />
      <CardSaldo />
      <ScrollHome />

      <Animatable.View animation="fadeIn" style={s.areaView}>
        {/* <TouchableOpacity
          style={s.areaBnts}
          onPress={() => navigation.navigate("Dolar")}
        >
          <Text style={s.textTitle}>Verificar a cotaçao atual</Text>
          <Text style={s.textInfo}>
            Aqui voçe pode se informar sobre cotação em tempo real!
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={s.areaBnts}
          onPress={() => navigation.navigate("AccountFixed")}
        >
          <View style={s.cardRow}>
            <View style={s.cardIcon}>
              <Feather name="bookmark" size={20} color="#2563EB" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.textTitle}>Criar uma conta fixa (lembrete)</Text>
              <Text style={s.textInfo}>
                Você pode criar uma conta fixa do mês, ex: conta de luz.
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#6B7280" />
          </View>
        </TouchableOpacity>
      </Animatable.View>

      {/* <TouchableOpacity
        style={s.buttonIA}
        onPress={() => navigation.navigate("ChatIA")}
      >
        <Text>IA</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
