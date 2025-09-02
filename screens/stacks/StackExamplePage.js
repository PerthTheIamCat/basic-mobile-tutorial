import { View, Text, ScrollView } from "react-native";
import { Button } from "../../components/Button";

export default function StackExamplePage({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Stack Example Page</Text>
        <Button
          text="navigate to stack1"
          onPress={() => navigation.navigate("Stack1")}
        />
      </View>
    </ScrollView>
  );
}
