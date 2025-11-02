import { View, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext } from "react";
import { ParamList } from "../../routs/authfree";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./style";

export default function HeaderComponent() {
  const { nameUser } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    
      <View style={s.header}>
        <View style={s.row}>
          <View style={s.greetingBlock}>
            <Text style={s.greetingPrefix}>Olá</Text>
            {nameUser && nameUser.length > 0 ? (
              <Text style={s.greetingName}>, {nameUser[0].name}</Text>
            ) : null}
          </View>

          <TouchableOpacity style={s.profileBtn} onPress={() => navigation.navigate("Profille")}>
            <View style={s.avatar}>
              <Feather name="user" color="#2563EB" size={16} />
            </View>
            <Text style={s.profileText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
   
  );
}
