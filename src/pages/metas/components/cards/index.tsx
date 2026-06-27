import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../../routs/authfree";
import { useTheme, type ThemeColors } from "../../../../contextApi/theme";

type CardsProps = {
  title: string;
  metas: React.ReactNode;
};

export default function Cards({ title, metas }: CardsProps) {
  const navigate = useNavigation<NativeStackNavigationProp<ParamList>>();
  const { colors } = useTheme();
  const s = getStyles(colors);

  return (
    <View style={s.conteiner}>
      <View style={s.areaCard}>
        <TouchableOpacity
          style={s.cards}
          onPress={() => navigate.navigate("Item", { title, metas })}
        >
          <Text style={s.title}>{title}</Text>
          <Text>{metas}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    conteiner: {
      width: "100%",
      backgroundColor: colors.background,
    },
    areaCard: {
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
    },
    cards: {
      width: "95%",
      height: 100,
      backgroundColor: colors.card,
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      marginLeft: "2.5%",
      justifyContent: "space-between",
    },
    title: {
      color: colors.text,
      fontFamily: "Arial",
      fontSize: 14,
      fontWeight: "600",
    },
  });
