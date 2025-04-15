import { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { api } from "../../services";
import Render from "./render";
import { showMessage } from "react-native-flash-message";

type ApiDados = {
    ask: string;
    name: string;
};

export default function Dolar() {
    const [dadosapi, setDadosapi] = useState([]);

    useEffect(() => {
        async function BuscarApi() {
            try {
                const response = await api.get("USD-BRL,EUR-BRL,BTC-BRL");
                setDadosapi(Object.values(response.data));
            } catch (error) {
                alert("Algo deu errado!");
            }
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
            <FlatList
                data={dadosapi}
                renderItem={({ item }) => <Render data={item} />}
            />
        </View>
    );
}
