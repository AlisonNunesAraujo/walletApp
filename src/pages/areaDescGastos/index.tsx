import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

import { AreaDescricao } from "./types";

type DadosProps = RouteProp<AreaDescricao, "dados">;

export default function AreaDescReceita() {
    const route = useRoute<DadosProps>();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={s.conteiner}>
            <View style={s.areaInformacao}>
                <Text style={s.textGastos}>
                    Valor adicionado:{" "}
                    <Text style={s.textValorGastos}> {route.params?.gastos}</Text>
                </Text>
                <Text style={s.textDesc}>
                    Sua descrição adicionada: <Text>{route.params?.desc}</Text>
                </Text>
                <Text style={s.textDesc}>
                    Data do registro: <Text>{route.params?.date}</Text>
                </Text>
            </View>

            <TouchableOpacity style={s.bntVoltar} onPress={() => navigation.goBack()}>
                <Text style={s.textbntvoltar}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    areaInformacao: {
        width: "100%",
        height: "auto",
        padding: 20,
        overflow: "hidden",
    },
    textGastos: {
        fontSize: 23,
        fontFamily: "Arial",
        fontWeight: "700",
    },
    textValorGastos: {
        color: "black",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    textDesc: {
        marginTop: 20,
        fontSize: 15,
    },
    bntVoltar: {
        width: "40%",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        padding: 10,
        borderRadius: 5,
    },
    textbntvoltar: {
        color: "white",
        fontFamily: "Arial",
    },
});
