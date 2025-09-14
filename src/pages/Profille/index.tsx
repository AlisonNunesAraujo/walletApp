import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image,
    TextInput,
    Keyboard,
    FlatList,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext, useState } from "react";
import showMessage from "react-native-flash-message";

import { s } from "./style";

export default function Profille() {
    const { user, LogOut, AddName, nameUser } = useContext(AuthContext);

    const [name, setName] = useState("");

 
    async function Exit() {
        Alert.alert(
            "Deseja realmente sair?",
            "",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Sair",
                    style: "destructive",
                    onPress: () => {
                        LogOut();
                    },
                },
            ],
            { cancelable: true }
        );
    }

    return (
        <SafeAreaView>
            <Animatable.View animation="fadeIn" style={s.header}>
                <View style={s.Profile}>
                    <View style={s.areaEmail}>
                        {nameUser.map((item, index) => (
                            <View key={index}>
                                <Text style={s.textInfo}>Seu nome:</Text>
                                <Text style={s.textEmail}>{item.name}</Text>
                            </View>
                        ))}

                        <Text style={s.textInfo}>Seu E-mail:</Text>
                        <Text style={s.textEmail}>{user.email}</Text>
                    </View>

                    <TouchableOpacity onPress={Exit} style={s.bntSair}>
                        <Feather name="log-out" size={20} color="black" />
                    </TouchableOpacity>

                    <View style={s.infoSobre}>
                        <Text style={s.Title}>Sobre o Aplicativo</Text>
                        <Text style={s.modalText}>
                            Voçe pode registrar despesas e receitas ao criar uma conta no
                            Aplicaivo, caso deseje! Também pode conferir a cotação em tempo
                            real, criar um lembrete de uma conta fixa do mês!
                        </Text>
                    </View>
                </View>
            </Animatable.View>
        </SafeAreaView>
    );
}
