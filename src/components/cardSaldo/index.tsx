import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AuthContext } from '../../contextApi'
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function CardSaldo() {

    const { saldoReceita, saldoGastos } = useContext(AuthContext)

    const formatarValor = (numero: number) => {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(numero);
    };

    return (
        <View style={s.container}>
            <View>
                <FlatList
                    data={saldoReceita}
                    renderItem={({ item }) => (
                        <View style={s.areaSaldo}>
                            <View>
                                <Text style={s.textType}> Receita</Text>
                                <Text style={s.textSaldo}> Saldo: {formatarValor(item)}</Text>
                            </View>
                            <View>
                                <Fontisto name="checkbox-active" size={24} color="white" />
                            </View>
                        </View>
                    )}
                />
            </View>
            <View>
                <FlatList
                    data={saldoGastos}
                    renderItem={({ item }) => (
                        <View style={s.areaSaldo}>
                            <View>
                                <Text style={s.textType}> Gastos</Text>
                                <Text style={s.textSaldoGastos}> Saldo: - {formatarValor(item)}</Text>
                            </View>
                            <View>
                                <AntDesign name="warning" size={24} color="white" />
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        width: '90%',
        height: 200,
        padding: 20,
        backgroundColor: '#00cc73',
        borderRadius: 10,
        marginLeft: '5%',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    areaSaldo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    textType: {
        fontSize: 17,
        color: 'white',

    },
    textSaldo: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arial',
        letterSpacing: 1.5
    },
    textSaldoGastos: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arial',
        letterSpacing: 1.5


    }
})