import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal as RnModal,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contextApi";
import { useContext, useState } from "react";
export default function HeaderComponent() {
  const { user, LogOut, saldo, despesa } = useContext(AuthContext);
  const [Modal, setModal] = useState(false);

  async function Sair() {
    LogOut();
  }

  return (
    <SafeAreaView>
      <Animatable.View animation="fadeIn" style={s.header}>
        <View style={s.viewInfo}>
          <Text style={s.title}>Olá!</Text>

          <TouchableOpacity
            style={s.viewBntinfo}
            onPress={() => setModal(true)}
          >
            <Feather name="user" color={"black"} size={20} />
            <Text style={s.textviewInfo}>Perfil</Text>
          </TouchableOpacity>
        </View>

        <RnModal visible={Modal} animationType="slide">
          <View style={s.modal}>
            <View style={s.areaEmail}>
              <Text style={s.textInfoEmail}>Seu E-mail</Text>
              <Text style={s.textEmail}>{user.email}</Text>
            </View>

            <TouchableOpacity
              onPress={() => setModal(false)}
              style={s.bntFechar}
            >
              <Text style={s.textbntfechar}>Fechar</Text>
            </TouchableOpacity>
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
        </RnModal>
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
  areaEmail: {
    width: "100%",
    padding: 5,
  },
  textInfoEmail: {
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "bold",
  },

  textEmail: {
    fontFamily: "Arial",
    marginBottom: 40,
    fontSize: 15,
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
    marginBottom: 10,
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
