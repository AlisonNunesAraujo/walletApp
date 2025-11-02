import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { TypesReceita } from "../../../contextApi/types";
import * as Animateble from "react-native-animatable";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi";
import Feather from "@expo/vector-icons/Feather";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { useNavigation } from "@react-navigation/native";
// usando estilos locais para evitar problemas de resolução de módulos

export default function RenderReceita({ data }: { data: TypesReceita }) {
  const { Deletar } = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  // Função para deletar receita
  function Delete(uid: string) {
    Deletar({ uid });
  }

  return (
    <Animateble.View animation="fadeInDown">
      <TouchableOpacity
        style={s.card}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("AreaDescReceita", {
            receita: data.receita,
            desc: data.desc,
            date: data.date,
          })
        }
        accessibilityRole="button"
        accessibilityLabel="Ver detalhes da receita"
      >
        <View style={s.row}>
          <View style={s.left}>
            <Text style={s.valor}>R$ {data.receita}</Text>
            <Text style={s.date}>{data.date}</Text>
          </View>
          <View style={s.actions}>
            <TouchableOpacity
              onPress={() => Delete(data.uid)}
              style={s.deleteBtn}
              accessibilityRole="button"
              accessibilityLabel="Excluir receita"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Feather color="#EF4444" size={18} name="trash-2" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Animateble.View>
  );
}

const s = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    gap: 2,
  },
  valor: {
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: '700',
    color: '#10B981',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: '#6B7280',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  link: {
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#2563EB',
    fontWeight: '700',
  },
  deleteBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FECACA',
  },
});

