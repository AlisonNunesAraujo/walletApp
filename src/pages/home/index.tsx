import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import HeaderComponent from "../../components/Header";
import * as Animatable from "react-native-animatable";
import ScrollHome from "../../components/scrollHome";
import CardSaldo from "../../components/cardSaldo";
import NetInfo from "@react-native-community/netinfo";
import VerifiquedRede from "../../components/verifiquedRede";
import { AuthContext } from "../../contextApi";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  const { nameUser } = useContext(AuthContext);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const verifiquedRede = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? true);

      if (!state.isConnected) {
        Alert.alert("Sem internet", "Você está offline.");
      }
    });
    return () => verifiquedRede();
  }, []);

  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#f0f0f0" barStyle={"dark-content"} />
      <HeaderComponent />
      <CardSaldo />
      <ScrollHome />

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

      
      <View style={s.ViewRede}>{isConnected ? null : <VerifiquedRede />}</View>

     
    </SafeAreaView>
  );
}
