import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

export function GoBack({ title }: { title?: string }) {
  const navigation = useNavigation();

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.button} onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={26} color="#111" />
        {title && <Text style={s.title}>{title}</Text>}
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 4,
    color: "#111",
  },
});
