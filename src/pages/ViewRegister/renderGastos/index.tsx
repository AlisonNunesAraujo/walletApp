import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TypesGastos } from "../../../contextApi/types";
import { useContext } from "react";
import * as Animatebale from "react-native-animatable";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../routs/authfree";
import { AuthContext } from "../../../contextApi";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function RenderGastos({ data }: { data: TypesGastos }) {
  const { DeletarGastos } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  // Função para deletar gastos
  function Deletar(uid: string) {
    DeletarGastos({ uid });
  }

  return (
    <Animatebale.View animation="fadeInDown">
      <TouchableOpacity
        style={s.card}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("AreaDescGastos", {
            gastos: data.gastos,
            desc: data.desc,
            date: data.date,
          })
        }
        accessibilityRole="button"
        accessibilityLabel="Ver detalhes do gasto"
      >
        <View style={s.row}>
          <View style={s.left}>
            <Text style={s.valor}>R$ {data.gastos}</Text>
            <Text style={s.date}>{data.date}</Text>
          </View>
          <View style={s.actions}>
            <TouchableOpacity
              onPress={() => Deletar(data.uid)}
              style={s.deleteBtn}
              accessibilityRole="button"
              accessibilityLabel="Excluir gasto"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Feather color="#EF4444" size={18} name="trash-2" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Animatebale.View>
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
    color: '#EF4444',
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
