import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Dolar from "../pages/areaDolar";

export type ParamList = {
    Home: undefined;
    Dolar: undefined;
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
            <Nav.Screen name="Dolar" component={Dolar} options={{ headerShown: false }} />
        </Nav.Navigator>
    );
}
