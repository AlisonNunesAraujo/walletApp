import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from "./style";
import { GoBack } from "../../components/goBack";
import { useTheme } from "../../contextApi/theme";

export default function Profile() {
  const { user, LogOut, nameUser } = useContext(AuthContext);

  // isDark: estado atual do tema | toggleTheme: função que alterna claro/escuro
  // colors: objeto com todas as cores do tema ativo
  const { isDark, toggleTheme, colors } = useTheme();

  // estilos recalculados com as cores do tema atual
  const s = getStyles(colors);

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
      <View style={s.content}>

        <View style={s.header}>
          <Text style={s.headerTitle}>Meu Perfil</Text>
        </View>

        {/* dados do usuário */}
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

        {/* toggle de tema — Switch nativo do React Native */}
        <View style={s.card}>
          <View style={s.themeRow}>
            <Text style={s.themeLabel}>Tema escuro</Text>
            {/* value reflete isDark; onValueChange chama toggleTheme ao pressionar */}
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: "#ccc", true: colors.primary }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* sobre o app */}
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

      </View>
    </SafeAreaView>
  );
}
