import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Dolar from "../pages/areaDolar";
import AreaDescReceita from "../pages/areaDescReceita";
import AreaDescGastos from "../pages/areaDescGastos";
import AccoutFixed from "../pages/accoutFixed";
import ViewRegister from "../pages/ViewRegister";
import AddRegister from "../pages/AddRegister";
import Chat from "../pages/chat";
import Profille from "../pages/Profille";

export type ParamList = {
  Home: undefined;
  Dolar: undefined;
  AreaDescReceita: {
    receita: number;
    desc: string | number;
    date: string;
  };
  AreaDescGastos: {
    gastos: number;
    desc: string | number;
    date: string;
  };
  FixedAccout: undefined;
  Extratos: undefined;
  AccountFixed: undefined;
  ViewRegister: undefined;
  AddRegister: undefined;
  Chat: undefined;
  Profille: undefined
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
        options={{ title: "Contas fixas" }}
      />

      <Nav.Screen
        name="ViewRegister"
        component={ViewRegister}
        options={{ title: "Voltar" }}
      />
      <Nav.Screen
        name="AddRegister"
        component={AddRegister}
        options={{ title: "Criar um novo registro" }}
      />
      <Nav.Screen
        name="Chat"
        component={Chat}
      />
      <Nav.Screen
        name="Profille"
        component={Profille}
      />
    </Nav.Navigator>
  );
}
