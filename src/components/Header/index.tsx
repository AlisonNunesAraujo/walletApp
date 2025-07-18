import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext } from "react";
import { ParamList } from "../../routs/authfree";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { s } from "./style";

export default function HeaderComponent() {
  const { nameUser } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <StatusBar backgroundColor="#f0f0f0" barStyle={"dark-content"} />
      <View style={s.header}>
        <View style={s.viewInfo}>
          {nameUser.length > 0 ? (
            nameUser.map((item, index) => (
              <Text style={s.text} key={index}>
                Olá {item.name}
              </Text>
            ))
          ) : (
            <Text style={s.text}>Olá</Text>
          )}

          <TouchableOpacity
            style={s.viewBntinfo}
            onPress={() => navigation.navigate("Profille")}
          >
            <Feather name="user" color={"black"} size={16} />
            <Text style={s.textviewInfo}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
