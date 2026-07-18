import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import { TextInputMask } from "react-native-masked-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from './style';
import { GoBack } from "../../components/goBack";
import { useTheme } from "../../contextApi/theme";

export default function AddRegister() {
  const { AddReceita, AddGastos, load, loading } = useContext(AuthContext);
  const [addValor, setAddValor] = useState("");
  const [addDesc, setAdddesc] = useState("");

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  const { colors } = useTheme();
  const s = getStyles(colors);

  async function AddvalorReceita() {
    if (addValor === "") {
      showMessage({ message: "Digite algo!", duration: 2000, type: "danger" });
      return;
    }
    AddReceita({ addValor, addDesc });
    setAddValor("");
    setAdddesc("");
  }

  async function AddvalorGastos() {
    if (addValor === "") {
      showMessage({ message: "Digite algo!", duration: 1000, type: "danger" });
      return;
    }
    AddGastos({ addValor, addDesc });
    setAddValor("");
    setAdddesc("");
  }

  return (
    <SafeAreaView style={s.conteiner} onTouchStart={Keyboard.dismiss}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <GoBack title="Adicionar registro" />

      <View style={s.areaAdd}>
        <Text style={s.title}>Adicionar um registro!</Text>

        <TextInputMask
          type={"money"}
          value={addValor}
          onChangeText={setAddValor}
          style={s.inputAdd}
          placeholder="Valor"
          placeholderTextColor={colors.textSecondary}
        />

        <TextInput
          placeholder="Descrição"
          value={addDesc}
          onChangeText={setAdddesc}
          style={s.inputAdd}
          placeholderTextColor={colors.textSecondary}
        />

        <View style={s.areaBntAdd}>
          <TouchableOpacity style={s.bnt} onPress={AddvalorReceita}>
            {load ? (
              <ActivityIndicator size={20} color={colors.text} />
            ) : (
              <Text style={s.textbntAdd}>Receita</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={s.bnt} onPress={AddvalorGastos}>
            {loading ? (
              <ActivityIndicator size={20} color={colors.text} />
            ) : (
              <Text style={s.textbntAdd}>Gastos</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ViewRegister")}
        style={s.buttonVoltar}
      >
        <Text style={s.textButtonVoltar}>Ver meus registros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[s.buttonVoltar, { marginTop: 10 }]}
      >
        <Text style={s.textButtonVoltar}>Voltar para Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
