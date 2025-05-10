import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
export default function Render({ data }: { data: any }) {
    return (
        <ScrollView>
            <StatusBar backgroundColor={"white"} />
            <Animatable.View animation="fadeIn" style={s.conteiner}>
                <View style={s.render}>
                    <Text style={s.textTitile}>{data.name}</Text>
                    <Text style={s.textValor}>R$ {data.ask}</Text>
                </View>
            </Animatable.View>
        </ScrollView>
    );
}

const s = StyleSheet.create({
    conteiner: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 20,
        flexDirection: "column",
        borderRadius: 5,
        marginTop: 30,
    },

    render: {
        width: "100%",
        height: 100,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    textTitile: {
        fontFamily: "Arial",
        fontSize: 20,
    },

    textValor: {
        fontFamily: "Arial",
        fontSize: 16,
    },
});
