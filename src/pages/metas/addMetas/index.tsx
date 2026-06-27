import { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConextion";
import { AuthContext } from "../../../contextApi";
import { TextInputMask } from 'react-native-masked-text';
import { GoBack } from "../../../components/goBack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, type ThemeColors } from "../../../contextApi/theme";

type dados = {
  data: {
    title: string;
    metas: React.ReactNode | string;
  };
};

type DadosProps = RouteProp<dados, "data">;

export default function Item() {
  const { user } = useContext(AuthContext);
  const route = useRoute<DadosProps>();
  const [valor, setValor] = useState("");

  const { colors } = useTheme();
  const s = getStyles(colors);

  async function PostMeta() {
    if (valor === "") {
      showMessage({ message: "Preencha todos os campos", type: "danger" });
      return;
    }
    try {
      await addDoc(collection(db, "metasCards"), {
        title: route.params?.title,
        valor,
        uid: user.uid,
      });
      showMessage({ message: "Meta adicionada com sucesso!", type: "success" });
      setValor("");
    } catch {
      showMessage({ message: "Erro ao adicionar meta", type: "danger" });
    }
  }

  return (
    <SafeAreaView onTouchStart={Keyboard.dismiss} style={s.conteiner}>
      <GoBack title="Adicionar Meta" />
      <View style={s.createMeta}>
        <View style={s.formInput}>
          <Text style={s.title}>Adicione um valor para sua meta!</Text>
          <TextInputMask
            placeholder="Qual valor que deseja adicionar a meta?"
            value={valor}
            onChangeText={setValor}
            style={s.input}
            type={"money"}
          />
          <TouchableOpacity style={s.button} onPress={PostMeta}>
            <Text style={s.textButton}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <View style={s.areaIcone}>
          <Text style={s.textTypeCaixa}>{route.params?.title}</Text>
          <Text>{route.params?.metas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
    },
    createMeta: {
      width: "90%",
      backgroundColor: colors.card,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      marginLeft: "5%",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.primary,
      fontFamily: "Arial",
      marginBottom: 10,
    },
    formInput: {
      width: "100%",
      backgroundColor: colors.card,
      borderRadius: 10,
      marginVertical: 10,
      alignItems: "center",
      paddingBottom: 10,
    },
    input: {
      width: "90%",
      height: 40,
      backgroundColor: colors.inputBg,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontFamily: "Arial",
      fontSize: 13,
      marginBottom: 10,
      color: colors.text,
    },
    button: {
      width: "30%",
      height: 40,
      backgroundColor: colors.primary,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    textButton: {
      fontFamily: "Arial",
      fontWeight: "700",
      fontSize: 14,
      color: "white",
    },
    areaIcone: {
      width: "100%",
      backgroundColor: colors.card,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 12,
      gap: 20,
    },
    textTypeCaixa: {
      fontFamily: "Arial",
      fontSize: 15,
      color: colors.text,
      fontWeight: "bold",
    },
  });
