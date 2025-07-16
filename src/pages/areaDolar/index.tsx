import { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { api } from "../../services";
import Render from "./render";
import { showMessage } from "react-native-flash-message";
import { ActivityIndicator } from "react-native";
import { se } from "date-fns/locale";

export default function Dolar() {
  const [dadosapi, setDadosapi] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function BuscarApi() {
        setLoading(true);
      try {
        const response = await api.get(
          "USD-BRL,EUR-BRL,BTC-BRL,CAD-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CHF-BRL,ILS-BRL,ETH-BRL"
        );
        if (response.status !== 200) {
          showMessage({
            message: "Erro ao buscar dados",
            type: "danger",
          });
          return;
          
        }
        setDadosapi(Object.values(response.data));
      } catch (error) {
        alert("Algo deu errado!");
        setLoading(false);
      }
      setLoading(false);
    }
    BuscarApi();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#ccc",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={dadosapi}
          renderItem={({ item }) => <Render data={item}/>}
          keyExtractor={(item: {code: string}) => item.code}
          style={s.conteiner}
        />
      )}
    </View>
  );
}

const s = StyleSheet.create({
  conteiner: {
    width: "90%",
    padding: 10,
    flexDirection: "column",
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20,
  },
});
