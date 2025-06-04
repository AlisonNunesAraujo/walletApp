import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../../../routs/authfree";

type CardsProps = {
    title: string;
    metas: React.ReactNode;
};

export default function Cards({ title, metas }: CardsProps) {
    const navigate = useNavigation<NativeStackNavigationProp<ParamList>>();

    return (
        <View style={s.conteiner}>

            <View style={s.areaCard}>
                <TouchableOpacity style={s.cards} onPress={() => navigate.navigate("Item", { title, metas })}>
                    <Text>{title}</Text>
                    <Text>{metas}</Text>
                </TouchableOpacity>


            </View>
        </View>


    );
}

const s = StyleSheet.create({
    conteiner: {
        width: "100%",
        height: "auto",
        backgroundColor: "white",
    },

    areaCard: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    cards: {
        width: "95%",
        height: 100,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        marginLeft: '2.5%',
        justifyContent: "space-between",

    }

})

