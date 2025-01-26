import { View, Text } from "react-native";

export default function Render({ data }: { data: any }) {

    return (
        <View>
            <Text style={{ color: "blue", fontFamily: "Arial", fontSize: 20 }}>
                {data.item}
            </Text>
        </View>
    );
}
