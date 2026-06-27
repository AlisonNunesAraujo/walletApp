import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import RenderReceita from "./renderReceita";
import RenderGastos from "./renderGastos";
import HeaderListGastos from "./HeaderListGastos";
import HeaderListReceita from "./HeaderListReceita";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoBack } from "../../components/goBack";
import { useTheme, type ThemeColors } from "../../contextApi/theme";

export default function ViewRegister() {
  const { receita, gastos } = useContext(AuthContext);

  // cores do tema atual para aplicar no fundo e nos textos
  const { colors } = useTheme();
  const s = getStyles(colors);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={s.conteiner}>
        <StatusBar backgroundColor={"white"} />
        <GoBack title="Registros"/>

        <View style={s.areaFlat}>
          <FlatList
            ListHeaderComponent={<HeaderListReceita />}
            showsVerticalScrollIndicator={false}
            data={receita}
            renderItem={({ item }) => <RenderReceita data={item} />}
            ListEmptyComponent={() => (
              <View style={s.infoListaVazia}>
                <Text style={s.textListVazia}>
                  Suas receitas apareceram aqui
                </Text>
              </View>
            )}
            style={{ height: "100%" }}
          />

          <FlatList
            ListHeaderComponent={<HeaderListGastos />}
            showsVerticalScrollIndicator={false}
            data={gastos}
            renderItem={({ item }) => <RenderGastos data={item} />}
            ListEmptyComponent={() => (
              <View style={s.infoListaVazia}>
                <Text style={s.textListVazia}>
                  Seus gastos apareceram aqui!
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// função em vez de objeto estático para suportar o tema dinâmico
const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
    },
    areaFlat: {
      flexDirection: "row",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      padding: 15,
      gap: 20,
    },
    infoListaVazia: {
      alignItems: "center",
    },
    textListVazia: {
      fontFamily: "Arial",
      color: colors.textSecondary,
    },
  });
