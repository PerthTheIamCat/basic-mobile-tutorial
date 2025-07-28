import { Text, Pressable } from "react-native";

export function Button({
  text = "Click Me",
  active = true,
  onPress = () => {},
}) {
  return (
    <Pressable
      style={({ pressed }) => ({
        backgroundColor: pressed ? "#7a7a7aff" : "#FFF",
        padding: 10,
        borderRadius: 5,
        borderWidth: active ? 2 : 1,
        borderColor: active ? "#007AFF" : "#ccc",
      })}
      onPress={onPress}
    >
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>{text}</Text>
    </Pressable>
  );
}
