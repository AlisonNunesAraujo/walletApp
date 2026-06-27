import { View, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext } from "react";
import { ParamList } from "../../routs/authfree";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { getStyles } from "./style";
import { useTheme } from "../../contextApi/theme";

export default function HeaderComponent() {
  const { nameUser } = useContext(AuthContext);

  // useTheme retorna { colors, isDark, toggleTheme } do ThemeContext
  const { colors } = useTheme();

  // styles são recriados sempre que o tema muda (colors é um novo objeto)
  const s = getStyles(colors);

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <View style={s.header}>
      <View style={s.viewInfo}>
        {nameUser.length > 0 ? (
          nameUser.map((item, index) => (
            <Text style={s.text} key={index}>
              Olá {item.name}
            </Text>
          ))
        ) : (
          <Text style={s.text}>Olá</Text>
        )}

        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TouchableOpacity
            style={s.viewBntinfo}
            onPress={() => navigation.navigate("Profille")}
          >
            {/* cor do ícone via colors.text para acompanhar o tema */}
            <Feather name="user" color={colors.text} size={16} />
            <Text style={s.textviewInfo}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
