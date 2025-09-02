import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Constants from "expo-constants";
import { useState, useContext } from "react";

import { Button } from "../components/Button";
import { CodeBox } from "../components/CodeBox";
import { SafeAreaContext } from "../context/SafeAreaContext";

export default function DimensionsPage() {
  const [isMarginTop, setIsMarginTop] = useState(true);
  const { showSafeArea, toggleShowSafeArea } = useContext(SafeAreaContext);

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          { marginTop: isMarginTop ? Constants.statusBarHeight : 0 },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
            backgroundColor: "#b8b8b8ff",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              width: 50,
              height: 50,
              borderRadius: 5,
            }}
          ></View>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 5,
              borderLeftWidth: 25,
              borderRightWidth: 25,
              borderBottomWidth: 50,
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "green",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "blue",
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          ></View>
        </View>
        <View style={styles.block}>
          <Text>Import before use</Text>
          <Text style={styles.description}>
            ในการเข้าถึงความสูงของ status bar เราต้อง import `Constants` จาก
            `expo-constants`
          </Text>
          <CodeBox>
            <Text>import Constants from 'expo-constants' </Text>
          </CodeBox>
        </View>
        <View style={styles.block}>
          <Text>Example</Text>
          <Text style={styles.description}>
            ใช้ `Constants.statusBarHeight` เพื่อกำหนด `marginTop` ให้กับ view
            หลักเพื่อไม่ให้ content ไปซ้อนทับกับ status bar
          </Text>
          <CodeBox>
            <Text>
              {`style={{\n\tmarginTop:`}
              <Text style={{ color: "#569CD6" }}>
                Constants.
                <Text style={{ color: "#9CDCFE" }}>statusBarHeight</Text>
              </Text>
              {`,\n}}`}
            </Text>
          </CodeBox>
        </View>
        <View style={styles.block}>
          <Text>Try marginTop:</Text>
          <Text style={styles.description}>
            ลองสลับค่า `marginTop` ระหว่าง `Constants.statusBarHeight` และ `0`
            เพื่อดูความแตกต่าง
          </Text>
          <Button
            text={<Text>{`Constants.statusBarHeight`}</Text>}
            onPress={() => {
              setIsMarginTop(true);
            }}
            active={isMarginTop}
          />
          <Button
            text={<Text>{`0`}</Text>}
            onPress={() => {
              setIsMarginTop(false);
            }}
            active={!isMarginTop}
          />
        </View>
        <View style={styles.block}>
          <Text>SafeAreaView</Text>
          <Text style={styles.description}>
            ใช้ SafeAreaView ครอบ view หลักเพื่อจัดการเรื่อง safe area
            ได้แบบง่าย ๆ
          </Text>
          <CodeBox>
            <Text>{`import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={{ flex: 1 }}>
  <View style={{ flex: 1, ... }}>
    ...
  </View>
</SafeAreaView>`}</Text>
          </CodeBox>
        </View>
        <View style={{ flexDirection: "row", gap: 8, marginBottom: 30 }}>
          <Button
            text={<Text>{`Visible`}</Text>}
            onPress={() => showSafeArea || toggleShowSafeArea()}
            active={showSafeArea}
          />
          <Button
            text={<Text>{`Hidden`}</Text>}
            onPress={() => !showSafeArea || toggleShowSafeArea()}
            active={!showSafeArea}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
