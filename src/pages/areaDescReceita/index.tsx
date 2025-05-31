import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";

import { AreaDescricao } from "./types";

import { s } from './style'

type DadosProps = RouteProp<AreaDescricao, "dados">;

export default function AreaDescReceita() {
    const route = useRoute<DadosProps>();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={s.conteiner}>
            <View style={s.areaInformacao}>
                <Text style={s.textReceita}>
                    Valor adicionado:{" "}
                    <Text style={s.textValorReceita}>{route.params?.receita}</Text>
                </Text>
                <Text style={s.textDesc}>
                    Sua descrição adicionada: <Text>{route.params?.desc}</Text>
                </Text>
                <Text style={s.textDesc}>
                    Data do registro: <Text>{route.params?.date}</Text>
                </Text>
            </View>
            <TouchableOpacity style={s.bntVoltar} onPress={() => navigation.goBack()}>
                <Text style={s.textbntvoltar}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


