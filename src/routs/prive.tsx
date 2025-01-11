import { useContext } from "react";
import { AuthContext } from "../contextApi";

import Home from "../home";
import Auth from "./auth";


export function Private(){
    const {logado} = useContext(AuthContext)

    return logado ? <Home/> : <Auth/>
}