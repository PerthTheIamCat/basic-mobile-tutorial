import { createStackNavigator } from "@react-navigation/stack";

import StackExamplePage from "../screens/stacks/StackExamplePage";
import Stack1 from "../screens/stacks/Stack1";
import Stack2 from "../screens/stacks/Stack2";

export default function StackLayout() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="StackExample"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerStyle: { backgroundColor: "#F2F2F2" },
        headerShown: true,
      }}
    >
      <Stack.Screen name="StackExample" component={StackExamplePage} />
      <Stack.Screen name="Stack1" component={Stack1} />
      <Stack.Screen name="Stack2" component={Stack2} />
    </Stack.Navigator>
  );
}
