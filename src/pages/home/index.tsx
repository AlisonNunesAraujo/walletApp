import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import HeaderComponent from "../../components/Header";
import * as Animatable from "react-native-animatable";
import ScrollHome from "../../components/scrollHome";
import CardSaldo from "../../components/cardSaldo";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleGenAI } from "@google/genai";
import { AuthContext } from "../../contextApi";
export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  const { account } = useContext(AuthContext);
  const [daysLeft, setDaysLeft] = useState();
  const [verifiquedVencimento, setVerifiquedVencimento] = useState(false);

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyCveaBX494NX4tYaWkwMjxC0lRpIVr9L6A",
  });

  async function main() {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Explain how AI works in a few words",
      });
      alert("deu certo");
      console.log(response.text);
    } catch (err) {
      console.log(err);
      alert("erro");
    }
  }

 

  useEffect(() => {
    const diasParaAviso = 3; 

    const verificarVencimentosProximos = () => {
      const hoje = new Date();
      const contasProximas: string[] = [];

      if (Array.isArray(account)) {
        account.forEach((item) => {
          // Supondo que item.vencimento está no formato "dd/mm/yyyy"
          const [dia, mes, ano] = item.vencimento.split("/");
          const dataVencimento = new Date(
            Number(ano),
            Number(mes) - 1,
            Number(dia)
          );

          // Calcula a diferença em dias
          const diffTime = dataVencimento.getTime() - hoje.getTime();
          const diffDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDias > 0 && diffDias <= diasParaAviso) {
            contasProximas.push(
              `${item.nameAccount} (vence em ${diffDias} dia${
                diffDias > 1 ? "s" : ""
              })`
            );
          }
        });
      }

      if (contasProximas.length > 0) {
        // alert(`Atenção! As seguintes contas estão próximas do vencimento:\n${contasProximas.join("\n")}`);
        setVerifiquedVencimento(true);
      }
      setDaysLeft(contasProximas);
    };

    verificarVencimentosProximos();
  }, [account]);

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
          <Text style={s.textTitle}>Criar uma conta fixa! 'lembrete'</Text>
          <Text style={s.textInfo}>
            Voçe pode criar uma conta fixa do mês, exp: Conta de luz!
          </Text>
        </TouchableOpacity>
      </Animatable.View>

      {verifiquedVencimento && (
        <TouchableOpacity
        onPress={() => navigation.navigate("AccountFixed")}
          style={{
            marginBottom: 100,
            marginTop: 20,
            paddingVertical: 14,
            paddingHorizontal: 16,
            width: "90%",
            alignSelf: "center",
            borderRadius: 12,
            backgroundColor: "#F5E9FB",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="time-outline" size={20} color="#820AD1" />

            <Text
              style={{
                marginLeft: 10,
                color: "#2D2D2D",
                fontSize: 14,
                fontWeight: "500",
                flex: 1,
              }}
            >
              Existem contas próximas do vencimento
            </Text>

            <Ionicons name="chevron-forward" size={18} color="#820AD1" />
          </View>

          <Text
            style={{
              marginTop: 8,
              color: "#6E6E6E",
              fontSize: 13,
              marginLeft: 30,
            }}
          >
            Sua conta: {daysLeft.join(", ")}
          </Text>
        </TouchableOpacity>
      )}

      {/* <TouchableOpacity
        style={s.buttonIA}
        onPress={() => navigation.navigate("ChatIA")}
      >
        <Text>IA</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
