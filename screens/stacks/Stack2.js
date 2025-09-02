import { View, Text } from "react-native";
import { Button } from "../../components/Button";

export default function Stack2({navigation}) {
  return (
    <View >
          <Text style={{fontSize:20,fontWeight:"bold",padding:5}}
          >Stack 2</Text>
          <Button
            text="stack2 Again"
            onPress={() => navigation.push("Stack2")}
          />

          <Button
            text="go back "
            onPress={() => navigation.goBack()}
          />

            <Button
            text="go to first page "
            onPress={() => navigation.popToTop()}
          />
        </View>
  );
}
