import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
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

export default function ViewRegister() {
  const { user, receita, gastos, load, loading } = useContext(AuthContext);
  const [isFlat, setIsFlat] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.conteiner}>
        <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />

        <View style={s.areaFlat}>
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
        </View>
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
  infoListaVazia: {
    alignItems: "center",
  },
  textListVazia: {
    fontFamily: "Arial",
  },
});
