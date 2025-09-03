import { View, Text } from "react-native";
import { Button } from "../../components/Button";

export default function Stack1({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, gap: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
        Stack 1
      </Text>
      <Button
        text="navigate to stack2"
        onPress={() => navigation.navigate("Stack2")}
      />
    </View>
  );
}
