import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal as RnModal,
  FlatList,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contextApi";
import { useContext, useState } from "react";
import { ParamList } from "../../routs/authfree";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function HeaderComponent() {
  const { user, LogOut, saldo } = useContext(AuthContext);
  const [Modal, setModal] = useState(false);
  const naviagation = useNavigation<NativeStackNavigationProp<ParamList>>();

  async function Sair() {
    LogOut();
  }

  return (
    <SafeAreaView>
      <Animatable.View animation="fadeInDown" style={s.header}>
        <View style={s.viewInfo}>
          <Text style={s.title}>Bem vindo!</Text>

          <TouchableOpacity
            style={s.viewBntinfo}
            onPress={() => setModal(true)}
          >
            <Feather name="info" color={"black"} size={20} />
            <Text style={s.textviewInfo}>Info</Text>
          </TouchableOpacity>
        </View>

        <View style={s.areaLogOut}>
          <View>
            
            <FlatList
              data={[saldo]}
              renderItem={({ item }) => 
              <Text style={s.textSaldo}>Saldo: R$ {item}</Text>}
            />
          </View>
          <TouchableOpacity style={s.areaSair} onPress={Sair}>
            <Feather color="black" name="log-out" size={22} />
          </TouchableOpacity>
        </View>

        <RnModal visible={Modal} animationType="slide">
          <View style={s.modal}>
            <Text style={s.modalTitle}>Sobre o Aplicativo</Text>
            <Text style={s.modalText}>
              Voçe pode registrar despesas e receitas ao criar uma conta no
              Aplicaivo, caso deseje! Voçe pode conferir a cotação em tempo real
              também para se manter atualizado(a)!{" "}
            </Text>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={s.bntFechar}
            >
              <Text style={s.textbntfechar}>Fechar</Text>
            </TouchableOpacity>
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
  textSaldo:{
    fontFamily: 'Arial',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.6
  },
  areaLogOut: {
    width: "100%",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: "Arial",
    marginLeft: 20,
  },

  textEmail: {
    fontSize: 15,
    fontFamily: "Arial",
    marginLeft: 20,
    fontWeight: "500",
    opacity: 0.6,
  },

  areaSair: {
    width: "10%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
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
  },
  textbntfechar: {
    fontFamily: "Arial",
  },
});
