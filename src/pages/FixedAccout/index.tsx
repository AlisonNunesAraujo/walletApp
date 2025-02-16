import { useState } from "react";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

import { AuthContext } from "../../contextApi";
import { useContext } from "react";


export default function FixedAccout() {
    const { AddAccout } = useContext(AuthContext)

    const [accout, setAccout] = useState("");
    const [valor, setValor] = useState('');

    async function AddAccoutfixed() {
        AddAccout({ accout, valor })
        setAccout('')
        setValor('')
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={s.conteiner}>
                <View style={s.grupoForm}>
                    <TextInput
                        placeholder="Nome da conta!"
                        style={s.inputs}
                        value={accout}
                        onChangeText={setAccout}
                    />
                    <TextInput
                        placeholder="Valor da conta!"
                        style={s.inputs}
                        value={valor}
                        onChangeText={setValor}
                    />
                    <TouchableOpacity style={s.bntCadastrar} onPress={() => AddAccoutfixed()}>
                        <Text style={s.textBnt}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const s = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    grupoForm: {
        marginTop: 20,
        padding: 20,
    },
    inputs: {
        width: "100%",
        backgroundColor: "white",
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
    },

    bntCadastrar: {
        width: "50%",
        padding: 10,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
    },
    textBnt: {
        color: "white",
        fontFamily: "Arial",
    },
});
