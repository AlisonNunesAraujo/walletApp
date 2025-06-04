import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from "react-native-animatable";
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamList } from '../../routs/authfree';
import { s } from './style';
import { useNavigation } from '@react-navigation/native';
export default function ScrollHome() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

    return (
        <View>
            <Animatable.View>
                <ScrollView
                    scrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={s.scroll}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddRegister")}
                        style={s.conteudoScroll}
                    >
                        <Feather name="plus" size={25} color={"#4CAF50"} />
                        <Text style={s.text}>Adicionar Gastos ou Receitas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ViewRegister")}
                        style={s.conteudoScroll}
                    >
                        <Feather name="eye" size={25} color={"#4CAF50"} />
                        <Text style={s.text}>Ver meus registros</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("AccountFixed")}
                        style={s.conteudoScroll}
                    >
                        <Feather name="plus" size={25} color={"#4CAF50"} />
                        <Text style={s.text}>Adicionar conta fixa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Metas")}
                        style={s.conteudoScroll}
                    >
                        <Feather name="check-circle" size={25} color={"#4CAF50"} />
                        <Text style={s.text}>Adicionar metas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Dolar")}
                        style={s.conteudoScroll}
                    >
                        <Feather name="dollar-sign" size={25} color={"#4CAF50"} />
                        <Text style={s.text}>Cotaçao</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </View>
    );
}