import { useState, useContext } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConextion";
import { AuthContext } from "../../../contextApi";
import { TextInputMask } from 'react-native-masked-text'
type dados = {
    data: {
        title: string;
        metas: React.ReactNode | string;
    };
};

type DadosProps = RouteProp<dados, "data">;

export default function Item() {
    const { user } = useContext(AuthContext);
    const route = useRoute<DadosProps>();
    const [valor, setValor] = useState("");

    // Função para adicionar a meta
    async function PostMeta() {
        if (valor === "") {
            showMessage({
                message: "Preencha todos os campos",
                type: "danger",
            });
            return;
        }

        try {
            const data = addDoc(collection(db, "metasCards"), {
                title: route.params?.title,
                valor: valor,
                uid: user.uid
            });
            showMessage({
                message: "Meta adicionada com sucesso!",
                type: "success",
            });
            setValor("");
        } catch (err) {
            showMessage({
                message: "Erro ao adicionar meta",
                type: "danger",
            });
        }
    }



    return (
        <View onTouchStart={Keyboard.dismiss} style={s.conteiner}>
            <View style={s.createMeta}>
                <View style={s.formInput}>
                    <Text style={s.title}>Adicione um valor para sua meta!</Text>
                    <TextInputMask
                        placeholder="Qual valor que deseja adicionar a meta?"
                        value={valor}
                        onChangeText={setValor}
                        style={s.input}
                        type={"money"}
                    />
                    <TouchableOpacity style={s.button} onPress={PostMeta}>
                        <Text style={s.textButton}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
                <View style={s.areaIcone}>
                    <Text style={s.textTypeCaixa}>{route.params?.title}</Text>
                    <Text>{route.params?.metas}</Text>
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
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "green",
        fontFamily: "Arial",
        marginBottom: 10,
    },
    formInput: {
        width: "100%",
        height: "auto",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "90%",
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        fontFamily: "Arial",
        fontSize: 13,
        marginBottom: 10,
    },
    button: {
        width: "30%",
        height: 40,
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontFamily: "Arial",
        fontWeight: "700",
        fontSize: 14,
        color: "white",
    },
    areaIcone: {
        width: "100%",
        height: "auto",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 20,
    },
    textTypeCaixa: {
        fontFamily: "Arial",
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    },
});
