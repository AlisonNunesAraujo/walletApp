import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AuthContext } from '../../contextApi'
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
export default function CardSaldo() {

    const { saldoReceita, saldoGastos } = useContext(AuthContext)



    return (
        <View style={s.container}>
            <View>
                <FlatList
                    data={saldoReceita}
                    renderItem={({ item }) => (
                        <View style={s.areaSaldo}>
                            <View>
                                <Text style={s.textType}> Receita</Text>
                                <Text style={s.textSaldo}> Saldo: R$ {item}</Text>
                            </View>
                            <View>
                                <Octicons name="thumbsup" size={24} color="black" />
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
                                <Text style={s.textSaldoGastos}> Saldo: R$ {item}</Text>
                            </View>
                            <View>
                                <AntDesign name="warning" size={24} color="black" />
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
        backgroundColor: '#f0f0f0',
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
        fontWeight: 'bold',
        color: '#333',
    },
    textSaldo: {
        fontSize: 16,
        color: 'green',
        fontFamily: 'Arial',
        fontWeight: "700"
    },
    textSaldoGastos: {
        fontSize: 16,
        color: 'red',
        fontFamily: 'Arial',
        fontWeight: "700"


    }
})