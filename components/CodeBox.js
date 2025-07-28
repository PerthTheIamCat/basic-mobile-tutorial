import { View, Text, StyleSheet } from "react-native";

export function CodeBox({ children }) {
  return (
    <View style={styles.codeBox}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  codeBox: {
    backgroundColor: "#1e1e1e",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: "#dcdcdc",
    fontFamily: "Courier New",
    fontSize: 16,
    fontWeight: "bold",
  },
});
