import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../contextApi'
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function CardSaldo() {
    const { saldoReceita, saldoGastos } = useContext(AuthContext);

    const receita = Array.isArray(saldoReceita) && saldoReceita.length > 0 ? saldoReceita[0] : 0;
    const gastos = Array.isArray(saldoGastos) && saldoGastos.length > 0 ? saldoGastos[0] : 0;

    const formatarValor = (numero: number) =>
        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);

    return (
        <View style={s.container}>
            <View style={[s.itemRow, s.itemRowReceita]}>
                <View style={s.textBlock}>
                    <Text style={s.textType}>Receita</Text>
                    <Text style={s.textSaldo}>Saldo: {formatarValor(receita)}</Text>
                </View>
                <View style={[s.iconWrap, s.iconWrapReceita]}>
                    <Fontisto name="checkbox-active" size={18} color="#10B981" />
                </View>
            </View>

            <View style={[s.itemRow, s.itemRowGastos]}>
                <View style={s.textBlock}>
                    <Text style={s.textType}>Gastos</Text>
                    <Text style={s.textSaldoGastos}>Saldo: - {formatarValor(gastos)}</Text>
                </View>
                <View style={[s.iconWrap, s.iconWrapGastos]}>
                    <AntDesign name="warning" size={18} color="#EF4444" />
                </View>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        width: '90%',
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginLeft: '5%',
        marginTop: 20,
        // sombra
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginBottom: 12,
    },
    itemRowReceita: {
        backgroundColor: '#ECFDF5',
    },
    itemRowGastos: {
        backgroundColor: '#FEF2F2',
        marginBottom: 0,
    },
    textBlock: {
        flex: 1,
    },
    textType: {
        fontSize: 14,
        color: '#111827',
        fontFamily: 'Arial',
        fontWeight: '700',
        marginBottom: 2,
    },
    textSaldo: {
        fontSize: 15,
        color: '#065F46',
        fontFamily: 'Arial',
        letterSpacing: 0.5,
    },
    textSaldoGastos: {
        fontSize: 15,
        color: '#991B1B',
        fontFamily: 'Arial',
        letterSpacing: 0.5,
    },
    iconWrap: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    iconWrapReceita: {
        borderWidth: 1,
        borderColor: '#D1FAE5',
    },
    iconWrapGastos: {
        borderWidth: 1,
        borderColor: '#FEE2E2',
    },
})