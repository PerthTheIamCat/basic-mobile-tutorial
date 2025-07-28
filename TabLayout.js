import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import SetupPage from "./screens/SetupPage";
import DimensionsPage from "./screens/DimensionsPage";
import FlexPage from "./screens/FlexPage";
import FlexWrapPage from "./screens/FlexWrapPage";
import ComponentsPage from "./screens/ComponentsPage";
import JavaScriptPage from "./screens/JavaScriptPage";

const Tab = createBottomTabNavigator();

export default function TapLayout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Setup"
          component={SetupPage}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Dimensions"
          component={DimensionsPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="ruler-square"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Flex"
          component={FlexPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Flex Wrap"
          component={FlexWrapPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="format-wrap-tight"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Components"
          component={ComponentsPage}
          options={{
            headerShown: true,
            title: "Basic Components",
            headerTitleAlign: "center",
            tabBarLabel: "Components",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="puzzle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="JavaScript"
          component={JavaScriptPage}
          options={{
            headerShown: true,
            title: "JavaScript for React Native",
            headerTitleAlign: "center",
            tabBarLabel: "JavaScript",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="code-json"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
