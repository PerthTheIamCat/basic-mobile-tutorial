import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { useState } from "react";

import { SafeAreaContext } from "../context/SafeAreaContext";

import SetupPage from "../screens/SetupPage";
import DimensionsPage from "../screens/DimensionsPage";
import FlexPage from "../screens/FlexPage";
import FlexWrapPage from "../screens/FlexWrapPage";
import ComponentsPage from "../screens/ComponentsPage";
import JavaScriptPage from "../screens/JavaScriptPage";

const Tab = createBottomTabNavigator();

export default function TapLayout() {
  const [showSafeArea, setShowSafeArea] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaContext.Provider
        value={{
          showSafeArea,
          toggleShowSafeArea: () => setShowSafeArea(!showSafeArea),
        }}
      >
        {showSafeArea ? (
          <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: "#F2F2F2" },
                headerStatusBarHeight: 0,
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
              initialRouteName="Setup"
            >
              <Tab.Screen
                name="Setup"
                component={SetupPage}
                options={{
                  headerShown: true,
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={[
                        styles.tabIconContainer,
                        focused && styles.tabIconContainerFocused,
                      ]}
                    >
                      <Ionicons
                        name="settings-outline"
                        size={focused ? 30 : 22}
                        color={color}
                      />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Dimensions"
                component={DimensionsPage}
                options={{
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={[
                        styles.tabIconContainer,
                        focused && styles.tabIconContainerFocused,
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="ruler-square"
                        size={focused ? 30 : 22}
                        color={color}
                      />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Flex"
                component={FlexPage}
                options={{
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={[
                        styles.tabIconContainer,
                        focused && styles.tabIconContainerFocused,
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="view-dashboard-outline"
                        size={focused ? 30 : 22}
                        color={color}
                      />
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Flex Wrap"
                component={FlexWrapPage}
                options={{
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={[
                        styles.tabIconContainer,
                        focused && styles.tabIconContainerFocused,
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="format-wrap-tight"
                        size={focused ? 30 : 22}
                        color={color}
                      />
                    </View>
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
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={[
                        styles.tabIconContainer,
                        focused && styles.tabIconContainerFocused,
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="puzzle-outline"
                        size={focused ? 30 : 22}
                        color={color}
                      />
                    </View>
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
                  tabBarIcon: ({ color, size, focused }) => (
                    <View
                      style={[
                        styles.tabIconContainer,
                        focused && styles.tabIconContainerFocused,
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="code-json"
                        size={focused ? 30 : 22}
                        color={color}
                      />
                    </View>
                  ),
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        ) : (
          // if SafeAreaView is hidden, render the navigator directly so the layout fills the screen
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              headerStyle: { backgroundColor: "#F2F2F2" },
              headerStatusBarHeight: 0,
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
              tabBarShowLabel: true,
              tabBarLabelStyle: { fontSize: 12 },
            }}
            initialRouteName="Setup"
          >
            <Tab.Screen
              name="Setup"
              component={SetupPage}
              options={{
                headerShown: true,
                tabBarIcon: ({ color, size, focused }) => (
                  <View
                    style={[
                      styles.tabIconContainer,
                      focused && styles.tabIconContainerFocused,
                    ]}
                  >
                    <Ionicons
                      name="settings-outline"
                      size={focused ? 30 : 22}
                      color={color}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Dimensions"
              component={DimensionsPage}
              options={{
                tabBarIcon: ({ color, size, focused }) => (
                  <View
                    style={[
                      styles.tabIconContainer,
                      focused && styles.tabIconContainerFocused,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="ruler-square"
                      size={focused ? 30 : 22}
                      color={color}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Flex"
              component={FlexPage}
              options={{
                tabBarIcon: ({ color, size, focused }) => (
                  <View
                    style={[
                      styles.tabIconContainer,
                      focused && styles.tabIconContainerFocused,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="view-dashboard-outline"
                      size={focused ? 30 : 22}
                      color={color}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Flex Wrap"
              component={FlexWrapPage}
              options={{
                tabBarIcon: ({ color, size, focused }) => (
                  <View
                    style={[
                      styles.tabIconContainer,
                      focused && styles.tabIconContainerFocused,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="format-wrap-tight"
                      size={focused ? 30 : 22}
                      color={color}
                    />
                  </View>
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
                tabBarIcon: ({ color, size, focused }) => (
                  <View
                    style={[
                      styles.tabIconContainer,
                      focused && styles.tabIconContainerFocused,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="puzzle-outline"
                      size={focused ? 30 : 22}
                      color={color}
                    />
                  </View>
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
                tabBarIcon: ({ color, size, focused }) => (
                  <View
                    style={[
                      styles.tabIconContainer,
                      focused && styles.tabIconContainerFocused,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="code-json"
                      size={focused ? 30 : 22}
                      color={color}
                    />
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </SafeAreaContext.Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIconContainerFocused: {
    width: 72,
    // subtle lift for focused icon
    transform: [{ translateY: -2 }],
  },
});
