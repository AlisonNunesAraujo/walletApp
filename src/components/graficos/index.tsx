import { View, Text } from "react-native";
import { s } from "./style";

import { CartesianChart, Line } from "victory-native";

export default function Graficos() {
    const DATA = Array.from({ length: 31 }, (_, i) => ({
        day: i,
        highTmp: 40 + 30 * Math.random(),
    }));

    return (
        <View style={s.container}>

            <CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]}>
                {({ points }) => (
                    <Line points={points.highTmp} color="red" strokeWidth={3} />
                )}
            </CartesianChart>

        </View>
    );
}
