import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import FirstTabLayout from "./FirstTabLayout";
import SecondTabLayout from "./SecondTabLayout";

import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

export default function DrawerLayout() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="midterm"
          component={FirstTabLayout}
          options={{
            drawerIcon: ({ color }) => (
              <Entypo name="code" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="navigation"
          component={SecondTabLayout}
          options={{
            drawerIcon: ({ color }) => (
              <Feather name="navigation" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
