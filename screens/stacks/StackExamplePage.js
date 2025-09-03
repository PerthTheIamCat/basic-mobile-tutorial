import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { CodeBox } from "../../components/CodeBox";
export default function StackExamplePage({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20, gap: 20 }}>
        <Text>Stack Example Page</Text>
        <View style={{ padding: 5 }}>
          <Button
            text="navigate to S1"
            onPress={() => navigation.navigate("Stack1")}
          />
        </View>
        {/* Import */}
        <View style={styles.block}>
          <Text>Import container</Text>
          <Text style={styles.description}>สำหรับจัดเก็บการทางทั้งหมด</Text>
          <CodeBox>
            <Text>
              {`import { createStackNavigator } from "@react-navigation/stack";\n\n`}
            </Text>
            <Text>
              {
                'import { NavigationContainer } from "@react-navigation/native";'
              }
            </Text>
          </CodeBox>
        </View>
        {/* create stack */}
        <View style={styles.block}>
          <Text>สร้างระบบนำทางแบบ Stack</Text>
          <Text style={styles.description}>แบบ First in Last out</Text>
          <CodeBox>
            <Text>const Stack = createStackNavigator();</Text>
          </CodeBox>
        </View>
        {/* stack navigation */}
        <View style={styles.block}>
          <Text>Stack Navigation</Text>
          <Text style={styles.description}>กลับมายังโหนดก่อนหน้า</Text>
          <CodeBox>
            <Text>navigation.goBack();</Text>
          </CodeBox>

          <Text style={styles.description}>ระบุโหนดที่ต้องการจะไป</Text>
          <CodeBox>
            <Text>navigation.navigate("ชื่อโหนด");</Text>
          </CodeBox>

          <Text style={styles.description}>ไปยังโหนดแรกสุด</Text>
          <CodeBox>
            <Text>navigation.popToTop;</Text>
          </CodeBox>
        </View>
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
