import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal as RnModal,
  Image,
  TextInput
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext, useState } from "react";
import { ParamList } from "../../routs/authfree";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export default function HeaderComponent() {
  const { user, LogOut, AddName } = useContext(AuthContext);
  const [Modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();



  return (
    <SafeAreaView >
      <Animatable.View animation="fadeIn" style={s.header}>
        <View style={s.viewInfo}>
          <Text style={s.title}>Olá!</Text>

          <TouchableOpacity
            style={s.viewBntinfo}
            onPress={() => navigation.navigate("Profille")}
          >
            <Feather name="user" color={"black"} size={20} />
            <Text style={s.textviewInfo}>Perfil</Text>
          </TouchableOpacity>
        </View>


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
  areaNome: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    gap: 20
  },
  input: {
    width: "50%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,

  },
  bntAddName: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  textAddName: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 15
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
});
