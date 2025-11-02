import { View, Text, TouchableOpacity, Modal, TextInput, Alert, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext, useMemo, useState } from "react";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./style";

export default function Profille() {
    const { user, LogOut, AddName, nameUser } = useContext(AuthContext);

    const currentName = useMemo(() => (nameUser && nameUser.length > 0 ? nameUser[0].name : "Usuário"), [nameUser]);
    const [editVisible, setEditVisible] = useState(false);
    const [nameInput, setNameInput] = useState(currentName);

    function openEdit() {
        setNameInput(currentName);
        setEditVisible(true);
    }

    async function saveName() {
        const trimmed = (nameInput || "").trim();
        if (!trimmed) {
            showMessage({ message: "Digite um nome válido.", type: "warning" });
            return;
        }
        try {
            await AddName({ name: trimmed });
            showMessage({ message: "Nome salvo com sucesso!", type: "success" });
            setEditVisible(false);
        } catch (e) {
            showMessage({ message: "Não foi possível salvar o nome.", type: "danger" });
        }
    }

    async function Exit() {
        Alert.alert(
            "Deseja realmente sair?",
            "",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Sair",
                    style: "destructive",
                    onPress: () => LogOut(),
                },
            ],
            { cancelable: true }
        );
    }

    return (
        <SafeAreaView style={s.container}>
            <Animatable.View animation="fadeInDown" duration={500} style={s.header}>
                <View style={s.avatarContainer}>
                    <View style={s.avatar}>
                        <Feather name="user" size={40} color="#4b5563" />
                    </View>
                    <View style={s.nameBlock}>
                        <Text style={s.nameText}>{currentName}</Text>
                        <View style={s.emailRow}>
                            <Feather name="mail" size={16} color="#6b7280" />
                            <Text style={s.emailText}>{user?.email || "sem email"}</Text>
                        </View>
                    </View>
                </View>

                <View style={s.actionRow}>
                    <Pressable style={s.primaryBtn}>
                        {/* <Feather name="edit-2" size={18} color="#fff" /> */}
                        <Text style={s.primaryBtnText}>Seu perfil</Text>
                    </Pressable>
                    <TouchableOpacity style={s.dangerBtn} onPress={Exit}>
                        <Feather name="log-out" size={18} color="#fff" />
                        <Text style={s.dangerBtnText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={150} style={s.infoSobre}>
                <Text style={s.Title}>Sobre o aplicativo</Text>
                <Text style={s.modalText}>
                    Você pode registrar despesas e receitas ao criar uma conta no aplicativo. Também pode
                    conferir a cotação em tempo real e criar lembretes de contas fixas do mês.
                </Text>
            </Animatable.View>

            <Modal visible={editVisible} animationType="slide" transparent onRequestClose={() => setEditVisible(false)}>
                <View style={s.modalOverlay}>
                    <View style={s.modalCard}>
                        <Text style={s.modalTitle}>Editar nome</Text>
                        <TextInput
                            placeholder="Seu nome"
                            value={nameInput}
                            onChangeText={setNameInput}
                            style={s.input}
                            placeholderTextColor="#9ca3af"
                        />
                        <View style={s.modalActions}>
                            <TouchableOpacity style={s.secondaryBtn} onPress={() => setEditVisible(false)}>
                                <Text style={s.secondaryBtnText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={s.primaryBtn} onPress={saveName}>
                                <Feather name="save" size={18} color="#fff" />
                                <Text style={s.primaryBtnText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
