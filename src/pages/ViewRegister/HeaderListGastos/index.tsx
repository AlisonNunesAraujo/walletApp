import { View, Text, } from "react-native";
import * as Animatable from 'react-native-animatable'
export default function HeaderListGastos() {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Arial",
          fontWeight: "700",
          marginBottom: 10,
        }}
      >
        Gastos
      </Text>


    </View>
  );
}
