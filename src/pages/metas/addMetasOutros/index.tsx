import React, { useState, useContext } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Keyboard
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../../../contextApi";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConextion";
import { TextInputMask } from "react-native-masked-text";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
export default function AddMetasOutros() {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [valor, setValor] = useState("");
    const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();




    async function AddMeta() {
        if (title === "" || valor === "") {
            showMessage({
                message: "Preencha todos os campos",
                type: "danger",
            });
            return;
        }

        try {
            const data = await addDoc(collection(db, "metasCards"), {
                title: title,
                valor: valor,
                uid: user.uid,
            });


            showMessage({
                message: "Meta adicionada com sucesso!",
                type: "success",
            });
            setTitle("");
            setValor("");
        } catch (err) {
            showMessage({
                message: "Erro ao adicionar meta",
                type: "danger",
            });
        }
    }

    return (
        <View style={s.conteiner} onTouchStart={Keyboard.dismiss}>
            <Text style={s.title}>Adicionar a sua meta que tanto sonha!</Text>
            <TextInput
                style={s.input}
                placeholder="Descrição da Meta"
                value={title}
                maxLength={20}
                autoCapitalize="none"
                onChangeText={setTitle}
            />
            <TextInputMask
                type={"money"}
                style={s.input}
                placeholder="Valor desejado"
                value={valor}
                autoCapitalize="none"
                onChangeText={setValor}
            />
            <TouchableOpacity style={s.button} onPress={AddMeta}>
                <Text style={s.buttonText}>Adicionar Meta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.button} onPress={() => navigation.goBack()}>
                <Text style={s.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: "black",
        fontFamily: "Arial",
    },
    input: {
        width: "90%",
        height: 40,
        marginLeft: "5%",
        backgroundColor: "#f0f0f0",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
        fontFamily: "Arial",
        marginBottom: 15,
    },
    button: {
        width: "90%",
        height: 40,
        marginLeft: "5%",
        backgroundColor: "#4CAF50",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Arial",
    },
});
