import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    areaInformacao: {
        width: "92%",
        padding: 16,
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
    },
    textGastos: {
        fontSize: 16,
        fontFamily: "Arial",
        fontWeight: "700",
        color: '#111827',
    },
    textValorGastos: {
        color: "#EF4444",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    textDesc: {
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'Arial',
        color: '#374151',
        fontWeight: '700',
    },
    textDescValue: {
        fontFamily: 'Arial',
        color: '#111827',
        fontWeight: '400',
    },
    bntVoltar: {
        width: "92%",
        height: 44,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    textbntvoltar: {
        color: "#2563EB",
        fontFamily: "Arial",
        fontSize: 14,
        fontWeight: '700',
    },
});