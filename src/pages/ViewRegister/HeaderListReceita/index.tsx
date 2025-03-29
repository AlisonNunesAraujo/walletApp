import { View, Text, } from "react-native";
import * as Animatable from 'react-native-animatable'
export default function HeaderListReceita() {
  return (
    <Animatable.View animation='fadeInDown' style={{ width: "100%", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Arial",
          fontWeight: "700",
          marginBottom: 10,
        }}
      >
        Receita
      </Text>


    </Animatable.View>
  );
}
