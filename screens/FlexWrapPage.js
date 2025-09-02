import { View, Text, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import Constants from "expo-constants";

import { CodeBox } from "../components/CodeBox";
import { Button } from "../components/Button";

import { SafeAreaContext } from "../context/SafeAreaContext";

export default function FlexWrapPage() {
  const flexWrapModes = ["nowrap", "wrap", "wrap-reverse"];
  const [wrapMode, setWrapMode] = useState(0);
  const [itemCount, setItemCount] = useState(8);

  const items = Array.from({ length: itemCount }, (_, i) => i);

  const { showSafeArea } = useContext(SafeAreaContext);

  return (
    <View
      style={[
        styles.container,
        { marginTop: showSafeArea ? 0 : Constants.statusBarHeight },
      ]}
    >
      <Text style={styles.title}>Flex Container</Text>
      <View style={styles.displayArea}>
        <View
          style={[styles.flexContainer, { flexWrap: flexWrapModes[wrapMode] }]}
        >
          {items.map((item) => (
            <View key={item} style={styles.flexItem}>
              <Text style={styles.itemText}>{item + 1}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.block}>
        <Text>Flex Wrap</Text>
        <Text style={styles.description}>
          ควบคุมว่า flex items
          จะถูกบังคับให้อยู่ในบรรทัดเดียวหรือสามารถขึ้นบรรทัดใหม่ได้
        </Text>
        <CodeBox>
          <Text>
            {`style={{\n\tflexWrap:`}
            <Text style={{ color: "#569CD6" }}>
              "{flexWrapModes[wrapMode]}"
            </Text>
            {`,\n}}`}
          </Text>
        </CodeBox>
        <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
          {flexWrapModes.map((mode, index) => (
            <Button
              key={index}
              text={<Text>{mode}</Text>}
              onPress={() => setWrapMode(index)}
              active={wrapMode === index}
            />
          ))}
        </View>
      </View>

      <View style={styles.block}>
        <Text>Items Control</Text>
        <Text style={styles.description}>
          เพิ่มหรือลบ item เพื่อดูการทำงานของ flexWrap
        </Text>
        <Text>Count: {itemCount}</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button
            text={<Text>Add Item</Text>}
            onPress={() => setItemCount((c) => c + 1)}
          />
          <Button
            text={<Text>Remove Item</Text>}
            onPress={() => setItemCount((c) => Math.max(0, c - 1))}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  displayArea: {
    height: 250,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginBottom: 20,
    padding: 5,
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  flexItem: {
    width: 80,
    height: 80,
    backgroundColor: "#3498db",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  itemText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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
