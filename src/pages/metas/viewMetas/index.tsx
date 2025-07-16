import React, { useEffect, useState, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    where,
    query,
} from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConextion";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { AuthContext } from "../../../contextApi";

type ListMetas = {
    title: string;
    valor: string;
    uid: string;
};

export default function ViewMetas() {
    const [metas, setMetas] = useState<ListMetas[]>([]);
    const { user } = useContext(AuthContext);
    const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

    useEffect(() => {
    
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
    function Delete(uid: string) {
        Alert.alert(
            "Deseja realmente deletar essa meta?",
            "",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Deletar",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            const data = doc(db, "metasCards", uid);
                            await deleteDoc(data);
                            showMessage({
                                message: "Meta deletada com sucesso!",
                                type: "success",
                            });
                        } catch (err) {
                            showMessage({
                                message: "Erro ao deletar meta",
                                type: "danger",
                            });
                        }
                    },
                },
            ],

        );
    }

    return (
        <View style={s.conteiner}>
            <View style={s.createMeta}>
                <View style={s.viewIcone}>
                    <Feather name="dollar-sign" size={24} color="#4CAF50" />
                </View>
                <Text style={s.textTitle}>
                    Minhas Metas <Feather name="dollar-sign" size={24} color="#4CAF50" />
                </Text>
                <Text style={s.textDescription}>
                    O seu esforço de hoje reflete no seu amanhã!
                </Text>

                <View>
                    {metas.length === 0 ? (
                        <View>
                            <Text style={s.textDescription}>Nenhuma meta cadastrada</Text>
                            <TouchableOpacity
                                style={s.buttonCreateMeta}
                                onPress={() => navigation.navigate("Metas")}
                            >
                                <Text style={s.textButtonCreateMeta}>Criar uma meta</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <FlatList
                            data={metas}
                            keyExtractor={(item) => item.uid}
                            style={s.flatList}
                            ListHeaderComponent={
                                <Text style={s.titleFlat}>Suas metas a atingir!</Text>
                            }
                            renderItem={({ item }) => (
                                <View style={s.metas}>
                                    <Text style={s.textNome}>Nome: {item.title}</Text>
                                    <Text style={s.textValor}>{item.valor}</Text>
                                    <TouchableOpacity
                                        style={s.buttonInfo}
                                        onPress={() =>
                                            navigation.navigate("InfoMetas", { title: item.title, metas: item.valor })
                                        }
                                    >
                                        <Text style={s.textButtonInfo}>Mais informações</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={s.buttonExcluir}
                                        onPress={() => Delete(item.uid)}
                                    >
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
        height: "auto",
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
        fontSize: 14,
        color: "black",
        fontFamily: "Arial",
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 10,
    },
    buttonCreateMeta: {
        width: "100%",
        height: 30,
        backgroundColor: "#4CAF50",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 5,
    },
    textButtonCreateMeta: {
        fontSize: 15,
        color: "white",
        fontFamily: "Arial",
        fontWeight: "700",
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
        height: "auto",
        backgroundColor: "#4CAF50",
        marginLeft: "5%",
        borderRadius: 8,
        marginTop: 20,
        padding: 10,
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
    buttonInfo: {
        width: "50%",
        height: 30,
        backgroundColor: "blue",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 10,
    },
    textButtonInfo: {
        fontSize: 14,
        color: "white",
        fontFamily: "Arial",
        textAlign: "center",
    },
});
