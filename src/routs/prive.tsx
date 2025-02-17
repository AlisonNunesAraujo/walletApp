import { View, Text } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../contextApi";
import { StackFree } from "./authfree";
import Auth from "./auth";


export function Private() {
    const { logado } = useContext(AuthContext);

    return logado ? <StackFree /> : <Auth />;
}
