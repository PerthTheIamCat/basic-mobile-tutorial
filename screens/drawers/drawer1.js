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
            <Text>{"npm install @react-navigation/drawer \n\n"}</Text>
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
            ชื่อทั่วไปที่สามารถใช้เป็นค่าสำรองแทน headerTitle และ drawerLabel
          </Text>
          <CodeBox>
            <Text>title</Text>
          </CodeBox>

          <Text style={styles.description}>
            กำหนดว่าหน้าจอนี้จะถูกเรนเดอร์เมื่อเข้าถึงครั้งแรกหรือไม่
            ค่าเริ่มต้นเป็น true — ตั้งค่าเป็น false
            หากต้องการให้หน้าจอถูกเรนเดอร์ตั้งแต่การเรนเดอร์เริ่มต้น
          </Text>
          <CodeBox>
            <Text>lazy</Text>
          </CodeBox>

          {/*  */}

          <Text style={styles.description}>
            สตริงหรือฟังก์ชันที่รับ {"{ focused: boolean, color: string }"}{" "}
            และคืนค่า React.Node เพื่อแสดงในแถบด้านข้างของ Drawer — หากไม่กำหนด
            จะใช้ชื่อฉากเป็นค่าเริ่มต้น
          </Text>
          <CodeBox>
            <Text>drawerLabel</Text>
          </CodeBox>

          <Text style={styles.description}>
            ฟังก์ชันที่รับ {"{ focused: boolean, color: string, size: number }"}{" "}
            แล้วคืนค่า React.Node เพื่อแสดงไอคอนในแถบด้านข้างของ Drawer
          </Text>
          <CodeBox>
            <Text>{"drawerIcon"}</Text>
          </CodeBox>

          <Text style={styles.description}>
            สีของไอคอนและป้ายสำหรับรายการที่กำลังใช้งานใน Drawer
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
