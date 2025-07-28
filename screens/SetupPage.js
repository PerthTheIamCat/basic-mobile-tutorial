import { View, Text, StyleSheet, StatusBar } from "react-native";
import { CodeBox } from "../components/CodeBox";

export default function SetupPage() {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text>Create Expo App</Text>
        <Text style={styles.description}>
          ใช้คำสั่งนี้เพื่อสร้างโปรเจกต์ Expo ใหม่
        </Text>
        <CodeBox>
          <Text>npx create-expo-app@latest --template</Text>
        </CodeBox>
      </View>
      <View style={styles.block}>
        <Text>Get inside project</Text>
        <Text style={styles.description}>
          เข้าไปในโฟลเดอร์ของโปรเจกต์ที่เพิ่งสร้าง
        </Text>
        <CodeBox>
          <Text>
            cd <Text style={{ color: "#569CD6" }}>app-name</Text>
          </Text>
        </CodeBox>
      </View>
      <View style={styles.block}>
        <Text>Run project [ios/android]</Text>
        <Text style={styles.description}>
          รันโปรเจกต์บน simulator หรืออุปกรณ์จริง
        </Text>
        <CodeBox>
          <Text>
            npm run <Text style={{ color: "#569CD6" }}>ios</Text>
          </Text>
        </CodeBox>
        <Text style={{ textAlign: "center" }}>or</Text>
        <CodeBox>
          <Text>npx expo start</Text>
        </CodeBox>
      </View>
      <StatusBar style="auto" />
    </View>
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
