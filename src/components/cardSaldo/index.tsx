import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';

import { AuthContext } from '../../contextApi'

export default function CardSaldo() {

    const { saldoReceita, saldoGastos } = useContext(AuthContext)

    return (
        <View>
            <Text>ola</Text>
            <FlatList
                data={saldoGastos}
                renderItem={({ item }) => (
                    <Text> Saldo: {item}</Text>
                )}
            />
        </View>
    );
}