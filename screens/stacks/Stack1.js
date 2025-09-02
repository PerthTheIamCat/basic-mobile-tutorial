import { View, Text } from "react-native";
import { Button } from "../../components/Button";

export default function Stack1({ navigation }) {
  return (
    <View>
      <Text>Stack 1</Text>
      <Button
        text="navigate to stack2"
        onPress={() => navigation.navigate("Stack2")}
      />
    </View>
  );
}
