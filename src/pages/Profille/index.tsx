import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./style";
import { GoBack } from "../../components/goBack";

export default function Profile() {
  const { user, LogOut, nameUser } = useContext(AuthContext);

  function Exit() {
    Alert.alert(
      "Sair da conta",
      "Deseja realmente sair?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", style: "destructive", onPress: LogOut },
      ]
    );
  }

  return (
    <SafeAreaView style={s.container}>
        <GoBack title="Perfil" />
      <Animatable.View animation="fadeInUp" style={s.content}>
        
      
        <View style={s.header}>
          <Text style={s.headerTitle}>Meu Perfil</Text>
        </View>

      
        <View style={s.card}>
          {nameUser.map((item, index) => (
            <View key={index} style={s.infoBlock}>
              <Text style={s.label}>Nome</Text>
              <Text style={s.value}>{item.name}</Text>
            </View>
          ))}

          <View style={s.infoBlock}>
            <Text style={s.label}>E-mail</Text>
            <Text style={s.value}>{user.email}</Text>
          </View>
        </View>

       
        <View style={s.card}>
          <Text style={s.title}>Sobre o aplicativo</Text>
          <Text style={s.description}>
            Você pode registrar despesas e receitas ao criar uma conta no
            aplicativo. Também é possível conferir cotações em tempo real
            e criar lembretes mensais.
          </Text>
        </View>

        
        <TouchableOpacity style={s.logoutButton} onPress={Exit}>
          <Feather name="log-out" size={18} color="#fff" />
          <Text style={s.logoutText}>Sair</Text>
        </TouchableOpacity>

      </Animatable.View>
    </SafeAreaView>
  );
}
