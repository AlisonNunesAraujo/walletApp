import { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { s } from "./style";
import Feather from "@expo/vector-icons/Feather";
import { GoogleGenAI } from "@google/genai";
import { AuthContext } from "../../contextApi";
import { db } from "../../services/firebase/firebaseConextion";
import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

type DadosChat = {
  message: string;
  resposta: string;
  createdAt: any;
};

export default function ChatIA() {
  const [message, setMessage] = useState("");
  const [resposta, setResposta] = useState("");
  const [chat, setChat] = useState<DadosChat[]>([]);
  const { nameUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getChat() {
      const data = collection(db, "chatIA");
      const dataQuery = query(
        collection(db, "chatIA"),
        orderBy("createdAt", "asc")
      );
      getDocs(dataQuery).then((snapshot) => {
        let chat: DadosChat[] = [];
        snapshot.forEach((doc) => {
          chat.push({
            message: doc.data().message,
            resposta: doc.data().resposta,
            createdAt: serverTimestamp(),
          });
        });
        setChat(chat);
      });
    }
    getChat();
  }, [message, resposta]);

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
      alert("Mensagem antes de ir pro banco!");

      const data = await addDoc(collection(db, "chatIA"), {
        message: message,
        resposta: response.text,
        createdAt: serverTimestamp(),
      })
        .then(() => {
          setResposta(response.text ?? "");
          setMessage("");
          alert("Mensagem enviada com sucesso!");
        })
        .catch(() => {
          alert("Algo deu errado!");
        });

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
        <FlatList
          data={chat}
          renderItem={({ item }) => (
            <View style={s.areaResposta}>
              <Text style={s.textSend}>
                <Feather name="circle" size={12} color="blue" />
                {item.message}
              </Text>

              <Text style={s.textResposta}>
                <Feather name="disc" size={12} color="blue" />
                {item.resposta}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={s.footer}>
        <TextInput
          placeholder="Mensagem"
          value={message}
          onChangeText={setMessage}
          style={s.input}
        />
        <TouchableOpacity style={s.bntSend} onPress={main}>
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <Feather name="send" size={25} color="white3" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
