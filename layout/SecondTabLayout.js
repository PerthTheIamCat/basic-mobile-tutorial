import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from "@expo/vector-icons/Entypo";

import StackLayout from "./StackLayout";
import drawer1 from "../screens/drawers/drawer1";
import Tab1 from "../screens/Tabs/Tab1";

export default function SecondTabLayout() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="Stack"
          screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 60 },
            tabBarStyle: {
              backgroundColor: "#2F2F2F",
              margin: 5,
              borderRadius: 20,
              height: 60,
              paddingTop: 6,
              paddingBottom: 6,
              paddingHorizontal: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              elevation: 5,
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "#9e9e9e",
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 4,
              fontWeight: "bold",
            },
          }}
        >
          <Tab.Screen
            name="Stack"
            component={StackLayout}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="menu" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Tabs"
            component={Tab1}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="menu" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="drawer"
            component={drawer1}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="menu" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
