import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
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
        fontSize: 15,
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
        fontSize: 13,
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
        fontSize: 12,
    },
});