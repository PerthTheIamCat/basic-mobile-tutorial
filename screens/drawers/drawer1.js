import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { CodeBox } from "../../components/CodeBox";
export default function Drawer1({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        {/* <Text>Tab Page</Text> */}
        {/* install */}
        <View style={styles.block}>
          <Text>ต้องมีการติดตั้ง</Text>

          <CodeBox>
            <Text>{"npm install @react-navigation/bottom-tabs \n"}</Text>
            <Text>
              {
                "expo install react-native-gesture-handler react-native-reanimated "
              }
            </Text>
          </CodeBox>
        </View>
        {/* Function ในการเปลี่ยน */}
        <View style={styles.block}>
          <Text>Function</Text>
          <Text style={styles.description}>ช่วยในการเปลี่ยนหน้าจอ</Text>
          <CodeBox>
            <Text>{"navigation.navigate() \n"}</Text>
            <Text>{"navigation.openDrawer() \n"}</Text>
            <Text>{"navigation.closeDrawer() \n"}</Text>
            <Text>{"navigation."}</Text>
          </CodeBox>
        </View>
        {/* Options */}
        <View style={styles.block}>
          <Text>Options</Text>
          <Text style={styles.description}>
         A generic title that can be used as a fallback for headerTitle and drawerLabel.
          </Text>
          <CodeBox>
            <Text>title</Text>
            </CodeBox>

             <Text style={styles.description}>
        Whether this screen should render the first time it's accessed. Defaults to true. Set it to false if you want to render the screen on initial render.
         </Text>
          <CodeBox>
            <Text>lazy</Text>
            </CodeBox>

            {/*  */}

                  <Text style={styles.description}>
       {" String or a function that given { focused: boolean, color: string } returns a React.Node, to display in drawer sidebar. When undefined, scene title is used."}
          </Text>
          <CodeBox>
            <Text>drawerLabel</Text>
            </CodeBox>

             <Text style={styles.description}>
              {"Function, that given { focused: boolean, color: string, size: number } returns a React.Node to display in drawer sidebar."}
       </Text>
          <CodeBox>
            <Text>{"drawerIcon"}</Text>
            </CodeBox>

            
             <Text style={styles.description}>
              {"Color for the icon and label in the active item in the drawer."}
       </Text>
          <CodeBox>
            <Text>{"drawerActiveTintColor"}</Text>
            </CodeBox>
        </View>

        {/* stack navigation */}
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
