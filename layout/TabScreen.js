import { createStackNavigator } from "@react-navigation/stack";

import Tab1 from "../screens/Tabs/Tab1";

export default function TabScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Tabpage"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerStyle: { backgroundColor: "#F2F2F2" },
      }}
    >
      <Stack.Screen name="Tabpage" component={Tab1} />
      
    </Stack.Navigator>
  );
}
