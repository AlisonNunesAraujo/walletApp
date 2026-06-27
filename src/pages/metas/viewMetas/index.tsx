import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { collection, getDocs, deleteDoc, doc, where, query } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConextion";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { AuthContext } from "../../../contextApi";
import { GoBack } from "../../../components/goBack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, type ThemeColors } from "../../../contextApi/theme";

type ListMetas = { title: string; valor: string; uid: string };

export default function ViewMetas() {
  const [metas, setMetas] = useState<ListMetas[]>([]);
  const { user } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  const { colors } = useTheme();
  const s = getStyles(colors);

  useEffect(() => {
    async function GetMetas() {
      try {
        const q = query(collection(db, "metasCards"), where("uid", "==", user.uid));
        getDocs(q).then((snapshot) => {
          const lista: ListMetas[] = [];
          snapshot.forEach((d) => {
            lista.push({ title: d.data().title, valor: d.data().valor, uid: d.id });
          });
          setMetas(lista);
        });
      } catch {
        showMessage({ message: "Erro ao carregar metas", type: "danger" });
      }
    }
    GetMetas();
  }, []);

  function Delete(uid: string) {
    Alert.alert("Deseja realmente deletar essa meta?", "", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Deletar",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteDoc(doc(db, "metasCards", uid));
            showMessage({ message: "Meta deletada com sucesso!", type: "success" });
            setMetas((prev) => prev.filter((m) => m.uid !== uid));
          } catch {
            showMessage({ message: "Erro ao deletar meta", type: "danger" });
          }
        },
      },
    ]);
  }

  return (
    <SafeAreaView style={s.conteiner}>
      <GoBack title="Minhas Metas" />
      <View style={s.createMeta}>
        <View style={s.viewIcone}>
          <Feather name="dollar-sign" size={24} color="#4CAF50" />
        </View>
        <Text style={s.textTitle}>Minhas Metas</Text>
        <Text style={s.textDescription}>O seu esforço de hoje reflete no seu amanhã!</Text>

        {metas.length === 0 ? (
          <View>
            <Text style={s.textDescription}>Nenhuma meta cadastrada</Text>
            <TouchableOpacity
              style={s.buttonCreateMeta}
              onPress={() => navigation.navigate("Metas")}
            >
              <Text style={s.textButtonCreateMeta}>Criar uma meta</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={metas}
            keyExtractor={(item) => item.uid}
            style={s.flatList}
            ListHeaderComponent={<Text style={s.titleFlat}>Suas metas a atingir!</Text>}
            renderItem={({ item }) => (
              <View style={s.metas}>
                <Text style={s.textNome}>Nome: {item.title}</Text>
                <Text style={s.textValor}>{item.valor}</Text>
                <TouchableOpacity
                  style={s.buttonInfo}
                  onPress={() => navigation.navigate("InfoMetas", { title: item.title, metas: item.valor })}
                >
                  <Text style={s.textButtonInfo}>Mais informações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.buttonExcluir} onPress={() => Delete(item.uid)}>
                  <Text style={s.textbuttonExcluir}>Excluir sua meta</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
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
    viewIcone: {
      width: 40,
      height: 40,
      backgroundColor: colors.primary,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
      marginBottom: 25,
    },
    textTitle: {
      fontSize: 19,
      color: colors.text,
      fontFamily: "Arial",
      marginBottom: 10,
      marginLeft: 10,
    },
    textDescription: {
      fontSize: 14,
      color: colors.textSecondary,
      fontFamily: "Arial",
      fontWeight: "bold",
      marginBottom: 10,
      marginLeft: 10,
    },
    buttonCreateMeta: {
      width: "100%",
      height: 30,
      backgroundColor: colors.primary,
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      borderRadius: 5,
    },
    textButtonCreateMeta: {
      fontSize: 15,
      color: "white",
      fontFamily: "Arial",
      fontWeight: "700",
    },
    flatList: {
      width: "100%",
      height: 500,
      borderRadius: 10,
    },
    titleFlat: {
      fontSize: 17,
      color: colors.text,
      fontFamily: "Arial",
      marginBottom: 5,
      marginLeft: 10,
      fontWeight: "bold",
      marginTop: 20,
    },
    metas: {
      width: "90%",
      backgroundColor: colors.primary,
      marginLeft: "5%",
      borderRadius: 8,
      marginTop: 20,
      padding: 10,
    },
    textNome: {
      fontSize: 14,
      color: "white",
      fontFamily: "Arial",
      marginLeft: 10,
      fontWeight: "bold",
    },
    textValor: {
      fontSize: 14,
      color: "white",
      fontFamily: "Arial",
      marginLeft: 10,
      fontWeight: "bold",
    },
    buttonExcluir: {
      width: "50%",
      height: 30,
      backgroundColor: "#ff4d4d",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginLeft: 10,
    },
    textbuttonExcluir: {
      fontSize: 14,
      color: "white",
      fontFamily: "Arial",
      textAlign: "center",
    },
    buttonInfo: {
      width: "50%",
      height: 30,
      backgroundColor: "#1565C0",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      marginLeft: 10,
    },
    textButtonInfo: {
      fontSize: 14,
      color: "white",
      fontFamily: "Arial",
      textAlign: "center",
    },
  });
