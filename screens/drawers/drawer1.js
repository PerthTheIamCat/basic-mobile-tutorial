import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { CodeBox } from "../../components/CodeBox";
export default function drawer1({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        {/* <Text>Tab Page</Text> */}

        //Install
        <View style={styles.block}>
          <Text>ต้องมีการติดตั้ง</Text>

          <CodeBox>
            <Text>{"npm install @react-navigation/bottom-tabs \n"}</Text>
            <Text>{"expo install react-native-gesture-handler react-native-reanimated "}</Text>

          </CodeBox>
        </View>

        //Function ในการเปลี่ยน
                <View style={styles.block}>
          <Text>Function</Text>
          <Text style={styles.description}>
          ช่วยในการเปลี่ยนหน้าจอ
          </Text>
          <CodeBox>
            <Text>{"navigation.navigate() \n"}</Text>
            <Text>{"navigation.openDrawer() \n"}</Text>
            <Text>{"navigation.closeDrawer() \n"}</Text>
            <Text>{"navigation."}</Text>
            </CodeBox>
        </View>

        //ประกาศตัวแปร
        {/* <View style={styles.block}>
          <Text>ประกาศตัวแปร</Text>
          <Text style={styles.description}>
          ต้องมีการประกาศตัวแปร
          </Text>
          <CodeBox>
            <Text>const Tab = createBottomTabNavigator();</Text>

            </CodeBox>
        </View> */}
        //stack navigation

                {/* <View style={styles.block}>
          <Text>Example</Text>
          <Text style={styles.description}>

          </Text> 
          <CodeBox>
            <Text>{"<Tab.Navigator>\n "}</Text>
             <Text>{"  <Tab.Screen name=\"Stack\" component={StackScreen}/>\n"}</Text>
             <Text>{"  <Tab.Screen name=\"Tab\" component={TabScreen}/>\n"}</Text>
             <Text>{"  <Tab.Screen name=\"Drawer\" component={DrawerScreen}/>\n"}</Text>
              <Text>{"</Tab.Navigator>\n "}</Text>
            </CodeBox>
        </View> */}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  block: {
    marginVertical: 10,
    gap: 10,
  },
  description: {
    color: "#555",
    fontStyle: "italic",
  },
});
