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
    textReceita: {
        fontSize: 15,
        fontFamily: "Arial",
        fontWeight: "700",
    },
    textValorReceita: {
        color: "black",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    textDesc: {
        marginTop: 12,
        fontSize: 12,
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