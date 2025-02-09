import { View, Text } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../contextApi";
import { StackFree } from "./authfree";

import Auth from "./auth";

export function Private() {
    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "white", fontFamily: "Arial" }}>
                    Carregando...
                </Text>
            </View>
        );
    }
    return logado ? <StackFree /> : <Auth />;
}
