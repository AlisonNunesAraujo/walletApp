import { View, Text, } from "react-native";
import * as Animatable from 'react-native-animatable'
export default function HeaderListReceita() {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "Arial",
          fontWeight: "700",
          marginBottom: 10,
        }}
      >
        Receita
      </Text>


    </View>
  );
}
