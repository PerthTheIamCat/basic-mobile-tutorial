import { View, Text } from "react-native";
import { Button } from "./Button";

const flexAlignSelfModes = [
  "auto",
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "baseline",
];

const flexSizeModes = [0, 1, 2];

export function FlexItemControl({
  name,
  color,
  alignSelf,
  onAlignSelfChange,
  flexSize,
  onFlexSizeChange,
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", textAlign: "center" }}>{name}</Text>
      <Text style={{ marginTop: 10 }}>Flex Size</Text>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
        {flexSizeModes.map((mode, index) => (
          <Button
            key={index}
            text={<Text>{mode}</Text>}
            onPress={() => onFlexSizeChange(mode)}
            active={flexSize === mode}
          />
        ))}
      </View>
      <Text style={{ marginTop: 10 }}>Align Self</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          flexWrap: "wrap",
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {flexAlignSelfModes.map((mode, index) => (
          <Button
            key={index}
            text={<Text>{mode}</Text>}
            onPress={() => onAlignSelfChange(index)}
            active={alignSelf === mode}
          />
        ))}
      </View>
    </View>
  );
}
