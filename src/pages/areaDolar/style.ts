import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    conteiner: {
        width: "100%",
        backgroundColor: "#ffff",
        padding: 10,
        marginBottom: 20,
        flexDirection: "column",
        borderRadius: 5,
    },

    render: {
        width: "100%",
        height: 100,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
    },

    textTitile: {
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "bold",
    },

    textValor: {
        fontFamily: "Arial",
        fontSize: 13,
        fontWeight: "bold",
    },
});