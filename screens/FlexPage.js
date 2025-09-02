import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useContext } from "react";
import Constants from "expo-constants";

import { CodeBox } from "../components/CodeBox";
import { Button } from "../components/Button";
import { FlexItemControl } from "../components/FlexItemControl";

import { SafeAreaContext } from "../context/SafeAreaContext";

export default function FlexPage() {
  const { showSafeArea } = useContext(SafeAreaContext);

  const flexDirectionModes = ["row", "row-reverse", "column", "column-reverse"];
  const flexJustifyModes = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];
  const flexAlignModes = [
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ];
  const flexAlignSelfModes = [
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ];
  const [directionMode, setDirectionModeMode] = useState(0);
  const [justifyMode, setJustifyMode] = useState(0);
  const [alignMode, setAlignMode] = useState(3);
  const [redAlignSelf, setRedAlignSelf] = useState(0);
  const [greenAlignSelf, setGreenAlignSelf] = useState(0);
  const [blueAlignSelf, setBlueAlignSelf] = useState(0);
  const [redFLexSize, setRedFlexSize] = useState(0);
  const [greenFlexSize, setGreenFlexSize] = useState(0);
  const [blueFlexSize, setBlueFlexSize] = useState(0);

  return (
    <View
      style={[
        styles.container,
        { marginTop: showSafeArea ? 0 : Constants.statusBarHeight },
      ]}
    >
      <View
        style={{
          flexDirection: flexDirectionModes[directionMode],
          justifyContent: flexJustifyModes[justifyMode],
          alignItems: flexAlignModes[alignMode],
          marginBottom: 20,
          backgroundColor: "#b8b8b8ff",
          padding: 10,
          borderRadius: 5,
          height: 200,
        }}
      >
        <View
          style={{
            backgroundColor: "#ffb9b9ff",
            flex: redFLexSize,
            alignSelf: flexAlignSelfModes[redAlignSelf],
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
        </View>
        <View
          style={{
            backgroundColor: "#b4ffadff",
            flex: greenFlexSize,
            alignSelf: flexAlignSelfModes[greenAlignSelf],
          }}
        >
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
        </View>
        <View
          style={{
            backgroundColor: "#b4d6ffff",
            flex: blueFlexSize,
            alignSelf: flexAlignSelfModes[blueAlignSelf],
          }}
        >
          <View
            style={{
              backgroundColor: "blue",
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          ></View>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.block}>
          <Text>Flex Directions</Text>
          <Text style={styles.description}>
            กำหนดทิศทางที่ flex items จะถูกจัดเรียงใน container
          </Text>
          <CodeBox>
            <Text>
              {`style={{\n\tflexDirection:`}
              <Text style={{ color: "#569CD6" }}>
                "{flexDirectionModes[directionMode]}"
              </Text>
              {`,\n}}`}
            </Text>
          </CodeBox>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {flexDirectionModes.map((mode, index) => (
              <Button
                key={index}
                text={<Text>{mode}</Text>}
                onPress={() => setDirectionModeMode(index)}
                active={directionMode === index}
              />
            ))}
          </View>
        </View>
        <View style={styles.block}>
          <Text>Justify Content</Text>
          <Text style={styles.description}>
            จัดเรียง item ตามแนวแกนหลัก (main-axis) ของ container
          </Text>
          <CodeBox>
            <Text>
              {`style={{\n\tjustifyContent:`}
              <Text style={{ color: "#569CD6" }}>
                "{flexJustifyModes[justifyMode]}"
              </Text>
              {`,\n}}`}
            </Text>
          </CodeBox>
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            {flexJustifyModes.map((mode, index) => (
              <Button
                key={index}
                text={<Text>{mode}</Text>}
                onPress={() => setJustifyMode(index)}
                active={justifyMode === index}
              />
            ))}
          </View>
        </View>
        <View style={styles.block}>
          <Text>Align Items</Text>
          <Text style={styles.description}>
            จัดเรียง item ตามแนวแกนตัด (cross-axis) ของ container
          </Text>
          <CodeBox>
            <Text>
              {`style={{\n\talignItems:`}
              <Text style={{ color: "#569CD6" }}>
                "{flexAlignModes[alignMode]}"
              </Text>
              {`,\n}}`}
            </Text>
          </CodeBox>
          <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
            {flexAlignModes.map((mode, index) => (
              <Button
                key={index}
                text={<Text>{mode}</Text>}
                onPress={() => setAlignMode(index)}
                active={alignMode === index}
              />
            ))}
          </View>
        </View>
        <View style={styles.block}>
          <Text>Flex Item Properties</Text>
          <Text style={styles.description}>
            `alignSelf` จะเขียนทับ `alignItems` ของ container สำหรับ item เดียว
            `flex` กำหนดว่า item จะขยายหรือหดตัวอย่างไร
          </Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <FlexItemControl
              name="Red Box"
              color="#ffb9b9ff"
              alignSelf={flexAlignSelfModes[redAlignSelf]}
              onAlignSelfChange={setRedAlignSelf}
              flexSize={redFLexSize}
              onFlexSizeChange={setRedFlexSize}
            />
            <FlexItemControl
              name="Green Box"
              color="#b4ffadff"
              alignSelf={flexAlignSelfModes[greenAlignSelf]}
              onAlignSelfChange={setGreenAlignSelf}
              flexSize={greenFlexSize}
              onFlexSizeChange={setGreenFlexSize}
            />
            <FlexItemControl
              name="Blue Box"
              color="#b4d6ffff"
              alignSelf={flexAlignSelfModes[blueAlignSelf]}
              onAlignSelfChange={setBlueAlignSelf}
              flexSize={blueFlexSize}
              onFlexSizeChange={setBlueFlexSize}
            />
          </View>
        </View>
      </ScrollView>
    </View>
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
