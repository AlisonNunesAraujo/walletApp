import { useState, useContext } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Keyboard,
    ActivityIndicator,
} from "react-native";
import { s } from "./style";
import Feather from "@expo/vector-icons/Feather";

import { GoogleGenAI } from "@google/genai";

import { AuthContext } from "../../contextApi";

export default function ChatIA() {
    const [message, setMessage] = useState("");
    const [resposta, setResposta] = useState("");
    const { nameUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const ai = new GoogleGenAI({
        apiKey: "AIzaSyCveaBX494NX4tYaWkwMjxC0lRpIVr9L6A",
    });

    async function main() {
        if (message === "") {
            alert("Digite uma mensagem");
            return;
        }
        setLoading(true);
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: message,
            });
            setMessage("");
            setResposta(response.text ?? "");
            setLoading(false);
        } catch (err) {
            setLoading(false);
            alert("erro");
            console.log(err);
        }
        setLoading(false);
    }

    return (
        <View style={s.container} onTouchStart={() => Keyboard.dismiss()}>
            <View>

                <Text style={s.textName}>Converse com a IA sobre finanças</Text>
                <ScrollView style={s.areaResposta}>
                    <Text style={s.textSend}>{message}</Text>

                    <Text style={s.textResposta}>{resposta}</Text>
                </ScrollView>
            </View>

            <View style={s.footer}>
                {loading && <ActivityIndicator size="large" color="#4CAF50" />}
                <TextInput
                    placeholder="Mensagem"
                    value={message}
                    onChangeText={setMessage}
                    style={s.input}
                />
                <TouchableOpacity style={s.bntSend} onPress={main}>
                    <Feather name="send" size={25} color="#4CAF50" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
