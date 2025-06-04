import { View, Text, StyleSheet } from "react-native";
import Cards from "./components/cards";
import { Feather } from "@expo/vector-icons";



export default function Metas() {
    return (
        <View style={s.conteiner}>
            <Text style={s.title}>Qual é o seu objetivo de criar uma meta?</Text>
            <Cards title="Investir" metas={<Feather name="trending-up" size={25} color="#4CAF50" />} />
            <Cards title="Viagem" metas={<Feather name="globe" size={25} color="#4CAF50" />} />
            <Cards title="Celular" metas={<Feather name="smartphone" size={25} color="#4CAF50" />} />

        </View>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: "black",
        fontFamily: "Arial",

    },

});
