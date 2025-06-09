import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Modal as RnModal,
    Image,
    TextInput,
    Keyboard,
    FlatList,
    Alert
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext, useState } from "react";
import showMessage from "react-native-flash-message";

import { s } from './style'

export default function Profille() {
    const { user, LogOut, AddName, nameUser } = useContext(AuthContext);

    const [name, setName] = useState("");

    // chamar a função de logout
    // e limpar os dados do usuário
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
        )
    }

    // Função para adicionar o nome do usuário
    // Verifica se o nome está vazio, se sim, exibe uma mensagem de aviso
    async function NameSave() {
        if (name === "") {
            new showMessage({
                message: "Preencha o Nome",
                type: "warning",
            });
            return;
        }
        Keyboard.dismiss();
        AddName({ name });
        setName("");
    }

    return (
        <SafeAreaView>
            <Animatable.View animation="fadeIn" style={s.header}>
                <View style={s.Profile}>
                    <View style={s.areaEmail}>
                        {nameUser.length > 0 ? (
                            <Text style={s.textInfo}>Seu Nome:</Text>
                        ) : (
                            <View style={s.areaNome}>
                                <TextInput
                                    placeholder="Seu nome"
                                    value={name}
                                    onChangeText={setName}
                                    style={s.input}
                                />
                                <TouchableOpacity style={s.bntAddName} onPress={NameSave}>
                                    <Text style={s.textAddName}>Adicionar Nome</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        <FlatList
                            data={nameUser}
                            renderItem={({ item }) => (
                                <View>
                                    <Text style={s.textEmail}>{item.name}</Text>
                                </View>
                            )}
                        />

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


