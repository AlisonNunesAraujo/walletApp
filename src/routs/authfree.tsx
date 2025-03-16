import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Dolar from "../pages/areaDolar";
import AreaDescReceita from "../pages/areaDescReceita";
import AreaDescGastos from "../pages/areaDescGastos";
import AccoutFixed from "../pages/accoutFixed";
export type ParamList = {
    Home: undefined;
    Dolar: undefined;
    AreaDescReceita: {
        receita: number,
        desc: string | number,
    };
    AreaDescGastos: {
        gastos: number,
        desc: string | number
    };
    FixedAccout: undefined;
    Extratos: undefined;
    AccountFixed: undefined;
};

const Nav = createNativeStackNavigator<ParamList>();

export function StackFree() {
    return (
        <Nav.Navigator>
            <Nav.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Nav.Screen
                name="Dolar"
                component={Dolar}
                options={{ title: "Voltar" }}
            />

            <Nav.Screen
                name="AreaDescReceita"
                component={AreaDescReceita}
                options={{ headerShown: false }}
            />

            <Nav.Screen
                name="AreaDescGastos"
                component={AreaDescGastos}
                options={{ headerShown: false }}
            />
            <Nav.Screen 
                name="AccountFixed"
                component={AccoutFixed}
                options={{title: "Contas fixas"}}
             />



        </Nav.Navigator>
    );
}
