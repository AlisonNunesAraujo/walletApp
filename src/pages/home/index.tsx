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
  const { saldo } = useContext(AuthContext);
  const [ocultarSaldo, setOcultarSaldo] = useState(false);
  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
      <HeaderComponent />

      <View style={s.areaSaldo}>
        <View>
          <Text style={s.textTitle}>Saldo</Text>
        </View>
        <View style={s.renderSaldo}>
          <FlatList
            data={[saldo]}
            renderItem={({ item }) => (
              <View>
                {ocultarSaldo ? (
                  <Text style={s.textSaldo}>Saldo: R$ {item}</Text>
                ) : (
                  <Text style={s.textSaldo}>
                    Saldo: <View style={s.ocultarSaldo}></View>
                  </Text>
                )}
              </View>
            )}

          />
          <TouchableOpacity
            style={s.bntOcultar}
            onPress={() => setOcultarSaldo(!ocultarSaldo)}
          >
            {ocultarSaldo ? (
              <Feather name="eye-off" size={25} color="black" />
            ) : (
              <Feather name="eye" size={25} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>

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
    height: 150,
    backgroundColor: "#ccc",
    marginTop: 40,
    marginLeft: "5%",
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textTitle: {
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  textSaldo: {
    fontSize: 17,
    color: "black",
    fontFamily: "Arial",
    margin: 5,
  },
  renderSaldo: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
  },
  bntOcultar: {
    marginRight: 15,
    margin: 5,
  },
  ocultarSaldo: {
    width: 70,
    height: 10,
    backgroundColor: "white",
    borderRadius: 5,
    opacity: 0.7,
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
