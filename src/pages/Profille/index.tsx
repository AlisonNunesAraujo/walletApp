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
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext, useState } from "react";

export default function Profille() {
    const { user, LogOut, AddName, nameUser } = useContext(AuthContext);

    const [name, setName] = useState("");

    async function Sair() {
        LogOut();
    }

    async function NameSave() {
        if (name === "") {
            alert("Digite um nome");
            return;
        }
        Keyboard.dismiss();
        AddName({ name });
        setName("");
    }

    return (
        <SafeAreaView>
            <Animatable.View animation="fadeIn" style={s.header}>
                <View style={s.modal}>
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

                    <TouchableOpacity onPress={Sair} style={s.bntFechar}>
                        <Feather name="log-out" size={20} color="black" />
                    </TouchableOpacity>

                    <View style={s.infoSobre}>
                        <Text style={s.modalTitle}>Sobre o Aplicativo</Text>
                        <Text style={s.modalText}>
                            Voçe pode registrar despesas e receitas ao criar uma conta no
                            Aplicaivo, caso deseje! Também pode conferir a cotação em tempo
                            real, criar um lembrete de uma conta fixa do mês!
                        </Text>

                        <View style={s.areaApresentar}>
                            <Text style={s.textCargo}>Desenvolvedor</Text>
                            <Text style={s.nome}>Alison Araújo</Text>
                            <Image
                                style={s.image}
                                source={{
                                    uri: "https://avatars.githubusercontent.com/u/166415022?v=4",
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Animatable.View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    header: {
        width: "100%",
        height: "auto",
        backgroundColor: "#ccc",
        boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
    },
    viewInfo: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
    },
    areaNome: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
        gap: 20,
    },
    input: {
        width: "50%",
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 5,
    },
    bntAddName: {
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 5,
    },
    textAddName: {
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 15,
    },
    areaEmail: {
        width: "100%",
        padding: 10,
        backgroundColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,

    },
    textInfo: {
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },

    textEmail: {
        fontFamily: "Arial",
        fontSize: 18,
        color: "black",
    },
    viewBntinfo: {
        marginRight: 25,
        alignItems: "center",
    },
    textviewInfo: {
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "700",
    },

    title: {
        marginTop: 10,
        fontSize: 25,
        fontFamily: "Arial",
        marginLeft: 20,
        fontWeight: "bold",
        opacity: 0.8,
    },

    modal: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
    },
    modalTitle: {
        fontFamily: "Arial",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    },
    modalText: {
        fontFamily: "Arial",
        letterSpacing: 2,
        marginBottom: 20,
        color: "black",
    },
    bntFechar: {
        width: "50%",
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    textbntfechar: {
        fontFamily: "Arial",
    },
    infoSobre: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        bottom: 50,
        position: "absolute",
        padding: 20,
    },
    areaApresentar: {
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    textCargo: {
        textAlign: "center",
        fontFamily: "Arial",
        fontSize: 17,
    },
    nome: {
        textAlign: "center",
        fontSize: 15,
        fontFamily: "Arial",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 15,
    },
});
