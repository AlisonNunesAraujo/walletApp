import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Cards from "./components/cards";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
export default function Metas() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

    return (
        <View style={s.conteiner}>
            <Text style={s.title}>Qual é o seu objetivo de criar uma meta?</Text>
            <Cards
                title="Investir"
                metas={<Feather name="trending-up" size={25} color="#4CAF50" />}
            />
            <Cards
                title="Viagem"
                metas={<Feather name="globe" size={25} color="#4CAF50" />}
            />
            <Cards
                title="Celular"
                metas={<Feather name="smartphone" size={25} color="#4CAF50" />}
            />
            <TouchableOpacity
                style={s.bntAdicionar}
                onPress={() => navigation.navigate("ViewMetas")}
            >
                <Text style={s.textBntAdicionar}>Ver todas as metas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={s.bntAdicionar}
                onPress={() => navigation.navigate("AddMetasOutros")}
            >
                <Text style={s.textBntAdicionar}>Adicionar outro!</Text>
            </TouchableOpacity>
        </View>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: "black",
        fontFamily: "Arial",

    },
    bntAdicionar: {
        width: "90%",
        height: 30,
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5%",
        marginTop: 20,
    },
    textBntAdicionar: {
        fontSize: 15,
        color: "white",
        fontFamily: "Arial",
    },
});
