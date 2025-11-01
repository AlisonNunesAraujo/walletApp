import React from "react";
import { View, Text, Dimensions } from "react-native";
import { s } from "./style";
import { LineChart } from "react-native-chart-kit";

export default function Graficos() {
    const screenWidth = Dimensions.get("window").width;
    
    const data = {
        labels: Array.from({ length: 7 }, (_, i) => `${i + 1}`), // Últimos 7 dias
        datasets: [
            {
                data: Array.from({ length: 7 }, () => 40 + 30 * Math.random()),
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // linha vermelha
                strokeWidth: 3,
            },
        ],
    };

    const chartConfig = {
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#f0f0f0",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ff0000",
        },
    };

    return (
        <View style={s.container}>
            <LineChart
                data={data}
                width={screenWidth - 40}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
}
