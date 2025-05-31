import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal as RnModal,
  FlatList
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "../../contextApi";
import { useContext, useState } from "react";
import { ParamList } from "../../routs/authfree";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { s } from './style';

export default function HeaderComponent() {
  const { nameUser } = useContext(AuthContext);


  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();



  return (
    <SafeAreaView >
      <Animatable.View animation="fadeIn" style={s.header}>
        <View style={s.viewInfo}>

          {nameUser.length > 0 ? (
            <Text style={s.text}>Olá</Text>
          ) : (
            <Text style={s.text}>Bem Vindo!</Text>
          )}

          <FlatList

            data={nameUser}
            renderItem={({ item }) => (
              <Text style={s.textName}> {item.name}!</Text>

            )}
          />

          <TouchableOpacity
            style={s.viewBntinfo}
            onPress={() => navigation.navigate("Profille")}
          >
            <Feather name="user" color={"black"} size={16} />
            <Text style={s.textviewInfo}>Perfil</Text>
          </TouchableOpacity>
        </View>


      </Animatable.View>
    </SafeAreaView>
  );
}


