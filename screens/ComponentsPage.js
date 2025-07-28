import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import { CodeBox } from "../components/CodeBox";

const placeholderImage = {
  uri: "https://picsum.photos/seed/picsum/200/300",
};

export default function ComponentsPage() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Basic Components</Text>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>View</Text>
        <Text style={styles.description}>
          เป็น Container พื้นฐานที่สุดสำหรับสร้าง UI รองรับ layout แบบ flexbox,
          style, และการจัดการ touch
        </Text>
        <View style={styles.exampleContainer}>
          <View style={{ backgroundColor: "skyblue", padding: 10 }}>
            <Text>This is a View</Text>
          </View>
        </View>
        <CodeBox>
          <Text>{`<View style={{...}}>
  <Text>This is a View</Text>
</View>`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Text</Text>
        <Text style={styles.description}>เป็น Component สำหรับแสดงข้อความ</Text>
        <View style={styles.exampleContainer}>
          <Text style={{ fontSize: 16, color: "purple" }}>
            This is a Text component.
          </Text>
        </View>
        <CodeBox>
          <Text>{`<Text style={{...}}>
  This is a Text component.
</Text>`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Button</Text>
        <Text style={styles.description}>
          ปุ่มพื้นฐานที่แสดงผลสวยงามในทุกแพลตฟอร์ม แต่ปรับแต่งได้น้อย
        </Text>
        <View style={styles.exampleContainer}>
          <Button
            title="Press Me"
            onPress={() => Alert.alert("Button pressed!")}
          />
        </View>
        <CodeBox>
          <Text>{`<Button
  title="Press Me"
  onPress={() => Alert.alert("Pressed!")}
/>`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>TouchableOpacity</Text>
        <Text style={styles.description}>
          Wrapper ที่ทำให้ View ตอบสนองต่อการสัมผัส เมื่อกดความโปร่งใสของ View
          จะลดลง
        </Text>
        <View style={styles.exampleContainer}>
          <TouchableOpacity
            onPress={() => Alert.alert("TouchableOpacity pressed!")}
          >
            <View
              style={{
                backgroundColor: "lightgreen",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text>Press Me (TouchableOpacity)</Text>
            </View>
          </TouchableOpacity>
        </View>
        <CodeBox>
          <Text>{`<TouchableOpacity onPress={...}>
  <View>
    <Text>Press Me</Text>
  </View>
</TouchableOpacity>`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Image</Text>
        <Text style={styles.description}>
          Component สำหรับแสดงรูปภาพประเภทต่างๆ
        </Text>
        <View style={[styles.exampleContainer, { alignItems: "center" }]}>
          <Image source={placeholderImage} style={styles.image} />
        </View>
        <CodeBox>
          <Text>{`<Image 
  source={{ uri: '...' }} 
  style={{ width: 100, height: 100 }} 
/>`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>ImageBackground</Text>
        <Text style={styles.description}>
          ใช้สำหรับแสดงรูปภาพเป็นพื้นหลังของ Component อื่นๆ
        </Text>
        <View style={styles.exampleContainer}>
          <ImageBackground
            source={placeholderImage}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <Text style={styles.imageText}>Text on ImageBackground</Text>
          </ImageBackground>
        </View>
        <CodeBox>
          <Text>{`<ImageBackground source={{...}}>
  <Text>Text on Image</Text>
</ImageBackground>`}</Text>
        </CodeBox>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
    marginTop: Constants.statusBarHeight,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  block: {
    marginVertical: 10,
    gap: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
  },
  componentTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
    fontStyle: "italic",
  },
  exampleContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imageBackground: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    borderRadius: 5,
  },
});
