import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { collection, getDocs, deleteDoc, doc, where, query } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConextion";
import { showMessage } from "react-native-flash-message";

import { AuthContext } from "../../../contextApi";
type ListMetas = {
    title: string;
    valor: string;
    uid: string
};

export default function ViewMetas() {
    const [metas, setMetas] = useState<ListMetas[]>([]);
    const { user } = useContext(AuthContext);



    useEffect(() => {
        // Função para buscar as metas do usuário
        async function GetMetas() {
            try {
                const data = collection(db, "metasCards");
                const queryMetas = query(data, where("uid", "==", user.uid));

                getDocs(queryMetas).then((snapshot) => {
                    let lista: ListMetas[] = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            title: doc.data().title,
                            valor: doc.data().valor,
                            uid: doc.id,
                        });
                    });
                    setMetas(lista);
                });
            } catch (err) {
                showMessage({
                    message: "Erro ao carregar metas",
                    type: "danger",
                });

            }
        }

        GetMetas();
    }, [Delete]);

    // Função para deletar a meta
    // Utiliza o uid para identificar qual meta deletar
    function Delete(uid: string) {
        try {
            const data = doc(db, "metasCards", uid);
            deleteDoc(data)
                .then(() => {
                    showMessage({
                        message: "Meta deletada com sucesso!",
                        type: "success",
                    });
                }).catch((err) => {
                    showMessage({
                        message: "Erro ao deletar meta",
                        type: "danger",
                    });
                })
        } catch (err) {
            showMessage({
                message: "Erro ao deletar meta",
                type: "danger",
            });
        }
    }

    return (
        <View style={s.conteiner}>
            <View style={s.createMeta}>
                <View style={s.viewIcone}>
                    <Feather name="dollar-sign" size={24} color="#4CAF50" />

                </View>
                <Text style={s.textTitle}>Minhas Metas <Feather name="dollar-sign" size={24} color="#4CAF50" /></Text>
                <Text style={s.textDescription}>
                    O seu esforço reflete no seu amanhã
                </Text>

                <View>

                    {metas.length === 0 ? (
                        <Text style={s.textDescription}>Nenhuma meta cadastrada</Text>
                    ) : (
                        <FlatList
                            data={metas}

                            keyExtractor={(item) => item.uid}
                            style={s.flatList}
                            ListHeaderComponent={<Text style={s.titleFlat}>Suas metas a atingir!</Text>}
                            renderItem={({ item }) => (
                                <View style={s.metas}>
                                    <Text style={s.textNome}>
                                        Nome: {item.title}
                                    </Text>
                                    <Text style={s.textValor}>
                                        {item.valor}
                                    </Text>
                                    <TouchableOpacity style={s.buttonExcluir} onPress={() => Delete(item.uid)}>
                                        <Text style={s.textbuttonExcluir}>Excluir sua meta</Text>
                                    </TouchableOpacity>

                                </View>
                            )}
                        />
                    )}
                </View>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "white",
    },
    createMeta: {
        width: "90%",
        height: 'auto',
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flexDirection: "column",
        marginLeft: "5%",
    },
    viewIcone: {
        width: "10%",
        height: 40,
        backgroundColor: "green",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginBottom: 25,
    },
    textTitle: {
        fontSize: 19,
        color: "black",
        fontFamily: "Arial",
        marginBottom: 10,
        marginLeft: 10,
    },
    textDescription: {
        fontSize: 18,
        color: "black",
        fontFamily: "Arial",
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 10,
    },
    flatList: {
        width: "100%",
        height: 500,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
    },
    titleFlat: {
        fontSize: 17,
        color: "black",
        fontFamily: "Arial",
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: "bold",
        marginTop: 20,
    },
    metas: {
        width: "90%",
        height: 90,
        backgroundColor: "#4CAF50",
        marginLeft: "5%",
        borderRadius: 8,
        marginTop: 20,

    },
    textNome: {
        fontSize: 14,
        color: "white",
        fontFamily: "Arial",
        marginLeft: 10,
        fontWeight: "bold",
    },
    textValor: {
        fontSize: 14,
        color: "white",
        fontFamily: "Arial",
        marginLeft: 10,
        fontWeight: "bold",
    },
    buttonExcluir: {
        width: "50%",
        height: 30,
        backgroundColor: "#ff4d4d",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 10,
    },
    textbuttonExcluir: {
        fontSize: 14,
        color: "white",
        fontFamily: "Arial",
        textAlign: "center",
    },

});
