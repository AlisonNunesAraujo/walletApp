import { View, Text, TouchableOpacity } from "react-native";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contextApi";
import { StackFree } from "./authfree";
import Auth from "./auth";
import { useNavigation } from "@react-navigation/native";

export function Private() {
    const { logado } = useContext(AuthContext);
    const navigation = useNavigation()




    return logado ? <StackFree /> : <Auth />;
}
