import { useContext} from "react";
import { AuthContext } from "../contextApi";
import { StackFree } from "./authfree";
import Auth from "./auth";
import { useNavigation } from "@react-navigation/native";

export function Private() {
    const { logado } = useContext(AuthContext);
    return logado ? <StackFree /> : <Auth />;
}
