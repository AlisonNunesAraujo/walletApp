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
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  const { saldo, despesa } = useContext(AuthContext);
  const [ocultarSaldo, setOcultarSaldo] = useState(false);
  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
      <HeaderComponent />



      <View>
        <ScrollView
          scrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={s.scroll}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewRegister")}
            style={s.conteudoScroll}
          >
            <Feather name="eye" size={25} />
            <Text style={s.text}>Ver meus registros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddRegister")}
            style={s.conteudoScroll}
          >
            <Feather name="plus" size={25} />
            <Text style={s.text}>Adicionar Gastos ou Receitas</Text>
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
      </View>

      <TouchableOpacity
        style={s.areaSaldo}
        onPress={() => navigation.navigate("Dolar")}
      >
        <Text style={s.textTitle}>Verificar a cotaçao atual</Text>
        <Text style={s.textInfo}>Aqui voçe pode se informar sobrea cotação em tempo real!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.areaSaldo}
        onPress={() => navigation.navigate("AccountFixed")}
      >
        <Text style={s.textTitle}>Criar uma conta fixa!</Text>
        <Text style={s.textInfo}>Voçe pode criar uma conta fixa do
          mês, exp: Conta de luz!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
  },
  areaSaldo: {
    width: "90%",
    height: 100,
    backgroundColor: "#ccc",
    marginTop: 40,
    marginLeft: "5%",
    borderRadius: 8,
    flexDirection: "column",
  },
  textTitle: {
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    fontWeight: "700",
    fontSize: 17,
  },
  textInfo: {
    fontSize: 15,
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    alignItems: 'center',
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
