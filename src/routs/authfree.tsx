import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Dolar from "../pages/areaDolar";
import AreaDescReceita from "../pages/areaDescReceita";
import AreaDescGastos from "../pages/areaDescGastos";
import AccoutFixed from "../pages/accoutFixed";
import ViewRegister from "../pages/ViewRegister";
import AddRegister from "../pages/AddRegister";
import Profille from "../pages/Profille";
import Metas from "../pages/metas";
import Item from "../pages/metas/addMetas";
import AddMetasOutros from "../pages/metas/addMetasOutros";
import ViewMetas from "../pages/metas/viewMetas";
import InfoMetas from "../pages/metas/infoMetas";

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
  AccountFixed: undefined;
  ViewRegister: undefined;
  AddRegister: undefined;
  Chat: undefined;
  Profille: undefined;
  Metas: undefined;
  Item: {
    title: string;
    metas: React.ReactNode;
  };
  AddMetasOutros: undefined;
  ViewMetas: undefined;
  InfoMetas: {
    title: string;
    metas: React.ReactNode;
  };
};

const Nav = createNativeStackNavigator<ParamList>();

export function StackFree() {
  return (
    <Nav.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
        }

      }}
    >
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
        options={{ title: "Registros" }}
      />
      <Nav.Screen
        name="AddRegister"
        component={AddRegister}
        options={{ title: "Criar um novo registro" }}
      />
      <Nav.Screen
        name="Profille"
        component={Profille}
        options={{ title: "Perfil" }}
      />
      <Nav.Screen
        name="Metas"
        component={Metas}
        options={{ title: "Metas" }}
      />
      <Nav.Screen
        name="Item"
        component={Item}
      />
      <Nav.Screen
        name="AddMetasOutros"
        component={AddMetasOutros}
        options={{ title: "Adicionar Metas" }}
      />
      <Nav.Screen
        name="ViewMetas"
        component={ViewMetas}
        options={{ title: "Minhas Metas" }}
      />
      <Nav.Screen
        name="InfoMetas"
        component={InfoMetas}
        options={{ title: "Informações" }}
      />
    </Nav.Navigator>
  );
}
