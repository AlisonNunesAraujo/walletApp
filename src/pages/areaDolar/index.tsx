import { useEffect, useState } from "react";

import { View, Text, FlatList } from "react-native";
import { api } from "../../services";
import Render from "./render";

type ApiDados = {
    ask: string;
    name: string;
};

export default function Dolar() {
    const [dadosapi, setDadosapi] = useState([]);

    useEffect(() => {
        async function BuscarApi() {
            try {
                const response = await api.get("USD-BRL");
                setDadosapi(Object.values(response.data));

                console.log(response.data)
            } catch (error) {
                console.error("Error fetching API data:", error);
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
            <FlatList data={dadosapi} renderItem={({ item }) => <Render data={item} />} />
        </View>
    );
}
