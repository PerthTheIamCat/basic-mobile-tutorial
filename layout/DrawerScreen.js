import { createStackNavigator } from "@react-navigation/stack";

import drawer1 from "../screens/drawers/drawer1";

export default function DrawerScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="drawer"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerStyle: { backgroundColor: "#F2F2F2" },
      }}
    >
      <Stack.Screen name="drawer" component={drawer1} />

    </Stack.Navigator>
  );
}
