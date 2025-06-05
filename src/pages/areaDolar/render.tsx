import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

import { s } from './style'

export default function Render({ data }: { data: any }) {
    return (
        <ScrollView>
            <StatusBar backgroundColor={"white"} />
            <View style={s.conteiner}>
                <View style={s.render}>
                    <Text style={s.textTitile}>{data.name}</Text>
                    <Text style={s.textValor}>R$ {data.ask}</Text>
                </View>
            </View>
        </ScrollView>
    );
}


