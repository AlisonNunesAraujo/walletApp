import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

type dados = {
    data: {
        title: string;
        metas: React.ReactNode;
    };
};

type DadosProps = RouteProp<dados, "data">;

export default function Item() {
    const route = useRoute<DadosProps>();

    return (
        <View style={s.conteiner}>
            <View style={s.createMeta}>
                <View style={s.formInput}>
                    <TextInput placeholder="Qual valor que deseja adicionar a meta?" style={s.input} />
                    <TouchableOpacity style={s.button}>
                        <Text style={s.textButton}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
                <Text>{route.params?.title}</Text>
                <Text>{route.params?.metas}</Text>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "white",
    },
    createMeta: {
        width: "90%",
        height: 'auto',
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flexDirection: "column",
        marginLeft: "5%",
        justifyContent: "center",
    },
    formInput: {
        width: "100%",
        height: 'auto',
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "90%",
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        fontFamily: "Arial",
        fontSize: 13,
        marginBottom: 10,
    },
    button: {
        width: "30%",
        height: 40,
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontFamily: "Arial",
        fontWeight: "700",
        fontSize: 14,
        color: "white",
    }

})
