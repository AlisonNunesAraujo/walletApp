import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamList } from '../../routs/authfree';
import { getStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contextApi/theme';

export default function ScrollHome() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  const { colors } = useTheme();
  const s = getStyles(colors);

  return (
    <View>
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
          <Text style={s.text}>Adicionar{"\n"}Gastos/Receitas</Text>
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
          <Feather name="credit-card" size={25} color={"#4CAF50"} />
          <Text style={s.text}>Contas fixas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Metas")}
          style={s.conteudoScroll}
        >
          <Feather name="check-circle" size={25} color={"#4CAF50"} />
          <Text style={s.text}>Metas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
