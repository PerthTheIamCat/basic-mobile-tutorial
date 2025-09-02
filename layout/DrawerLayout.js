import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import FirstTabLayout from "./FirstTabLayout";
import SecondTabLayout from "./SecondTabLayout";

export default function DrawerLayout() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="midterm" component={FirstTabLayout} />
        <Drawer.Screen name="navigation" component={SecondTabLayout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
