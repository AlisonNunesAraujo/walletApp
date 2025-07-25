import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigIn from "../pages/sigIn";
import SigOut from "../pages/sigOut";

export type RoutAuthProp = {
  SigIn: undefined;
  SigOut: undefined;
};

const Stack = createNativeStackNavigator<RoutAuthProp>();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SigIn"
        component={SigIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SigOut"
        component={SigOut}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
