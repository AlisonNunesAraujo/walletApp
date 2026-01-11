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
import ChatIA from "../pages/chatIA";

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
  ChatIA: undefined;
};

const Nav = createNativeStackNavigator<ParamList>();

export function StackFree() {
  return (
    <Nav.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
        },
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
        options={{ title: "Contas fixas", headerShown: false }}
      />

      <Nav.Screen
        name="ViewRegister"
        component={ViewRegister}
        options={{ title: "Registros", headerShown: false }}
      />
      <Nav.Screen
        name="AddRegister"
        component={AddRegister}
        options={{ title: "Criar um novo registro", headerShown: false }}
      />
      <Nav.Screen
        name="Profille"
        component={Profille}
        options={{ title: "Perfil", headerShown: false }}
      />
      <Nav.Screen name="Metas" component={Metas} options={{ title: "Metas", headerShown: false }} />
      <Nav.Screen name="Item" component={Item} options={{headerShown: false}} />
      <Nav.Screen
        name="AddMetasOutros"
        component={AddMetasOutros}
        options={{ title: "Adicionar Metas", headerShown: false }}
      />
      <Nav.Screen
        name="ViewMetas"
        component={ViewMetas}
        options={{ title: "Minhas Metas", headerShown: false }}
      />
      <Nav.Screen
        name="InfoMetas"
        component={InfoMetas}
        options={{ title: "Informações" }}
      />

      <Nav.Screen
        name="ChatIA"
        component={ChatIA}
        options={{ title: "Converse com a IA" }}
      />
    </Nav.Navigator>
  );
}
