import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../../../contextApi";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConextion";
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { GoBack } from "../../../components/goBack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, type ThemeColors } from "../../../contextApi/theme";

export default function AddMetasOutros() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [valor, setValor] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  const { colors } = useTheme();
  const s = getStyles(colors);

  async function AddMeta() {
    if (title === "" || valor === "") {
      showMessage({ message: "Preencha todos os campos", type: "danger" });
      return;
    }
    try {
      await addDoc(collection(db, "metasCards"), {
        title,
        valor,
        uid: user.uid,
      });
      showMessage({ message: "Meta adicionada com sucesso!", type: "success" });
      setTitle("");
      setValor("");
    } catch {
      showMessage({ message: "Erro ao adicionar meta", type: "danger" });
    }
  }

  return (
    <SafeAreaView style={s.conteiner} onTouchStart={Keyboard.dismiss}>
      <GoBack title="Adicionar Meta" />
      <Text style={s.title}>Adicionar a sua meta que tanto sonha!</Text>
      <TextInput
        style={s.input}
        placeholder="Descrição da Meta"
        value={title}
        maxLength={20}
        autoCapitalize="none"
        onChangeText={setTitle}
        placeholderTextColor={colors.textSecondary}
      />
      <TextInputMask
        type={"money"}
        style={s.input}
        placeholder="Valor desejado"
        value={valor}
        autoCapitalize="none"
        onChangeText={setValor}
      />
      <TouchableOpacity style={s.button} onPress={AddMeta}>
        <Text style={s.buttonText}>Adicionar Meta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button} onPress={() => navigation.goBack()}>
        <Text style={s.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
      color: colors.text,
      fontFamily: "Arial",
    },
    input: {
      width: "90%",
      height: 40,
      marginLeft: "5%",
      backgroundColor: colors.inputBg,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 5,
      padding: 10,
      fontSize: 14,
      fontFamily: "Arial",
      marginBottom: 15,
      color: colors.text,
    },
    button: {
      width: "90%",
      height: 40,
      marginLeft: "5%",
      backgroundColor: colors.primary,
      borderRadius: 5,
      padding: 10,
      alignItems: "center",
      marginBottom: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontFamily: "Arial",
    },
  });
