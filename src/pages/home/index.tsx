import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import Feather from "@expo/vector-icons/Feather";
import HeaderComponent from "../../components/Header";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  return (
   
      <View style={s.conteiner}>
       <StatusBar backgroundColor="#ccc" barStyle={"dark-content"} />
        <HeaderComponent /> 

        
          <ScrollView scrollEnabled={true}
          horizontal={true}
          style={s.scroll}>
            <TouchableOpacity onPress={()=> navigation.navigate('ViewRegister')} style={s.conteudoScroll}>
              <Feather name="folder-plus" size={25}/>
              <Text style={s.text}>Ver meus registros</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('AddRegister')} style={s.conteudoScroll}>
            <Feather name="plus" size={25}/>
              <Text style={s.text}>Adicionar Gastos ou Receitas</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=> navigation.navigate('Dolar')} style={s.conteudoScroll}>
            <Feather name="folder-plus" size={25}/>
              <Text style={s.text}>Cotaçao</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=> navigation.navigate('AccountFixed')} style={s.conteudoScroll}>
            <Feather name="folder-plus" size={25}/>
              <Text style={s.text}>Adiconar conta fixa</Text>
            </TouchableOpacity >
          </ScrollView>
      
        </View>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
  },
  areaScrool:{
    width: '100%',
    height: '14%',
    backgroundColor: '#ccc',
    marginTop: 10,
  },
  scroll:{
    width: '100%',
    height:  170,
    marginTop: 20,
    
    
  },
  conteudoScroll:{
    width: '20%',
    height:  '10%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontFamily: 'Arial',
    color: 'black',
    textAlign: 'center'
  }
});
