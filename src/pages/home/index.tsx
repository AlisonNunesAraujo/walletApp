import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { useContext } from "react";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { ActivityIndicator } from "react-native";
import RenderReceita from "../../components/renderReceita";
import RenderGastos from "../../components/renderGastos";
import HeaderListGastos from "../../components/HeaderListGastos";
import HeaderListReceita from "../../components/HeaderListReceita";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";

import HeaderComponent from "../../components/Header";
import * as Animatable from "react-native-animatable";

export default function Home() {
  const {
    user,
    receita,
    gastos,
    LogOut,
    AddReceita,
    AddGastos,
    load,
    loading,
  } = useContext(AuthContext);
  const [addValor, setAddValor] = useState("");
  const [addDesc, setAdddesc] = useState("");
  const [isFlat, setIsFlat] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();


  async function AddvalorReceita() {
    if (addValor === "") {
      showMessage({
        message: "Digite algo!",
        duration: 2000,
        type: "danger",
      });
      return;
    }
    AddReceita({ addValor, addDesc });
    setAddValor("");
    setAdddesc("");
  }

  async function AddvalorGastos() {
    if (addValor === "") {
      showMessage({
        message: "Digite algo!",
        duration: 2000,
        type: "danger",
      });
      return;
    }
    AddGastos({ addValor, addDesc });
    setAddValor("");
    setAdddesc("");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.conteiner}>
        <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />

        <HeaderComponent />

        <Animatable.View animation="fadeInDown" style={s.areaAdd}>
          <TextInput
            placeholder="Receita/Gastos"
            keyboardType="numeric"
            value={addValor}
            onChangeText={setAddValor}
            style={s.inputAdd}
          />
          <TextInput
            placeholder="Descrição"
            value={addDesc}
            onChangeText={setAdddesc}
            style={s.inputAdd}
            maxLength={20}
          />

          <View style={s.areaBntAdd}>
            <TouchableOpacity style={s.bnt} onPress={AddvalorReceita}>
              {load ? (
                <ActivityIndicator size={20} color="black" />
              ) : (
                <Text style={s.textbntAdd}>Receita</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={s.bnt} onPress={AddvalorGastos}>
              {loading ? (
                <ActivityIndicator size={20} color="black" />
              ) : (
                <Text style={s.textbntAdd}>Gastos</Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={s.areaDolar}
            onPress={() => navigation.navigate("Dolar")}
          >
            <Text style={s.textBntDolar}>Ver cotação</Text>
          </TouchableOpacity>
        </Animatable.View>

        {isFlat ? (
          <TouchableOpacity
            onPress={() => setIsFlat(!isFlat)}
            style={[
              s.bntisActive,
              { backgroundColor: isFlat ? "blue" : "blue" },
            ]}
          >
            <Text style={s.textbntocultarList}>Ocultar lista</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setIsFlat(!isFlat)}
            style={[
              s.bntisActive,
              { backgroundColor: isFlat ? "black" : "black" },
            ]}
          >
            <Text style={s.textbntocultarList}>Mostrar lista</Text>
          </TouchableOpacity>
        )}

        {isFlat ? (
          <View style={s.areaFlat}>
            <FlatList
              ListHeaderComponent={<HeaderListReceita />}
              showsVerticalScrollIndicator={false}
              data={receita}
              renderItem={({ item }) => <RenderReceita data={item} />}
            />

            <FlatList
              ListHeaderComponent={<HeaderListGastos />}
              showsVerticalScrollIndicator={false}
              data={gastos}
              renderItem={({ item }) => <RenderGastos data={item} />}
            />
          </View>
        ) : (
          <Text></Text>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
    alignItems: "center",
  },




  areaAdd: {
    width: "90%",
    marginTop: 20,
    backgroundColor: "#ccc",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },

  inputAdd: {
    width: "90%",
    height: 50,
    padding: 13,
    borderRadius: 5,
    boxShadow: "1px 3px 3px 0px rgba(8, 8, 8, 0.25)",
  },

  areaBntAdd: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  bnt: {
    width: "30%",
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  textbntAdd: {
    fontSize: 15,
    fontFamily: "Arial",
  },
  areaFlat: {
    flexDirection: "row",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    padding: 15,
    gap: 20,
  },
  areaDolar: {
    width: "80%",
    height: 45,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    marginBottom: 5,
  },
  textBntDolar: {
    fontFamily: "Arial",
    color: "white",
    fontSize: 17,
    fontWeight: "900",
  },
  bntisActive: {
    width: "40%",
    marginTop: 20,
    padding: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textbntOcultarActive: {
    fontFamily: "Arial",
    color: "white",
    fontWeight: "700",
  },
  textbntocultarList: {
    fontWeight: "700",
    fontFamily: "Arial",
    color: "white",
  },
});
