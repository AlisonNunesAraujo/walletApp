import { View, Text } from "react-native";
import { useTheme } from "../../../contextApi/theme";

export default function HeaderListGastos() {
  const { colors } = useTheme();

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Text style={{ fontSize: 15, fontFamily: "Arial", fontWeight: "700", marginBottom: 10, color: colors.text }}>
        Gastos
      </Text>
    </View>
  );
}
