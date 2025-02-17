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
  const [isAddactive, setIsaddactive] = useState(false);
  const [isFlat, setIsFlat] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  async function Sair() {
    LogOut();
  }

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
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
      <Animatable.View animation="fadeInDown" style={s.header}>
        <Text style={s.title}>Bem vindo!</Text>

        <View style={s.areaLogOut}>
          <View>
            <Text style={s.textEmail}>Email: {user.email}</Text>
          </View>
          <TouchableOpacity style={s.areaSair} onPress={Sair}>
            <Feather color="black" name="log-out" size={22} />
          </TouchableOpacity>
        </View>


      </Animatable.View>

      {isAddactive ? (
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
            maxLength={100}
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

          <TouchableOpacity
            onPress={() => setIsaddactive(false)}
            style={s.bntOcultarActive}
          >
            <Text style={s.textbntOcultarActive}>Ocultar</Text>
          </TouchableOpacity>
        </Animatable.View>
      ) : (
        <View>
          <TouchableOpacity
            style={s.bntisActive}
            onPress={() => setIsaddactive(!isAddactive)}
          >
            <Text style={s.textbntIsActive}>Adicionar Receita/Gastos</Text>
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity onPress={() => setIsFlat(!isFlat)} style={s.bntisActive}>
          <Text style={s.textbntocultarList}>Mostrar lista</Text>
        </TouchableOpacity>
      )}
      {isFlat ? (
        <TouchableOpacity onPress={() => setIsFlat(!isFlat)} style={s.bntisActive}>
          <Text style={s.textbntocultarList}>Ocultar lista</Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: "auto",
    backgroundColor: "#ccc",
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },
  areaLogOut: {
    width: "100%",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: "Arial",
    marginLeft: 20,
  },

  textEmail: {
    fontSize: 15,
    fontFamily: "Arial",
    marginLeft: 20,
    fontWeight: "500",
    opacity: 0.6,
  },



  areaSair: {
    width: "10%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
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
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textbntIsActive: {
    fontFamily: "Arial",
    color: "white",
  },
  bntOcultarActive: {
    width: "80%",
    height: 45,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  textbntOcultarActive: {
    fontFamily: "Arial",
    color: "white",
    fontWeight: "700",
  },
  textbntocultarList: {
    fontWeight: '700',
    fontFamily: 'Arial',
    color: 'white'
  }
});
