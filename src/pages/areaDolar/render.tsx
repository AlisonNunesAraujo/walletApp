import { View, Text } from "react-native";

export default function Render({ data }: { data: any }) {

    return (
        <View style={{ backgroundColor: "white", padding: 10 }}>
            <Text style={{ color: "blue", fontFamily: "Arial", fontSize: 20 }}>
                {data.name}: {data.ask}
            </Text>
        </View>
    );
}
