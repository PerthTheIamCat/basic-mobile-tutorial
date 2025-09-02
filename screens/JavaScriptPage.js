import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Constants from "expo-constants";
import { CodeBox } from "../components/CodeBox";

export default function JavaScriptPage() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  const data = ["Apple", "Banana", "Cherry"];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.componentTitle}>Variable (ตัวแปร)</Text>
        <Text style={styles.description}>
          ใช้สำหรับเก็บข้อมูล มี 3 ประเภทหลัก: `let` (ค่าเปลี่ยนแปลงได้),
          `const` (ค่าคงที่, เปลี่ยนแปลงไม่ได้), และ `var` (แบบเก่า,
          ไม่แนะนำให้ใช้แล้ว)
        </Text>
        <CodeBox>
          <Text>{`let name = "React Native"; // เปลี่ยนค่าได้
const year = 2024; // ค่าคงที่`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Operators (ตัวดำเนินการ)</Text>
        <Text style={styles.description}>
          สัญลักษณ์ที่ใช้ในการดำเนินการกับค่าต่างๆ เช่น บวก, ลบ, เปรียบเทียบ
        </Text>
        <CodeBox>
          <Text>{`// Arithmetic
let sum = 10 + 5; // 15

// Comparison
let isEqual = (sum === 15); // true

// Logical
let isReady = true && isEqual; // true`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Function (ฟังก์ชัน)</Text>
        <Text style={styles.description}>
          กลุ่มของโค้ดที่ทำงานบางอย่าง สามารถเรียกใช้ซ้ำได้
        </Text>
        <CodeBox>
          <Text>{`// Function Declaration
function greet(name) {
  return "Hello, " + name;
}`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Arrow Functions</Text>
        <Text style={styles.description}>
          เป็น syntax ที่สั้นกว่าสำหรับการเขียนฟังก์ชัน
          นิยมใช้กันอย่างแพร่หลายในโค้ด React/React Native โดยเฉพาะสำหรับ event
          handlers
        </Text>
        <CodeBox>
          <Text>{`// Arrow Function
const add = (a, b) => a + b;

// Inline Arrow Function in a component
<Button onPress={() => console.log('Clicked')} />`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Object (อ็อบเจกต์)</Text>
        <Text style={styles.description}>
          โครงสร้างข้อมูลที่เก็บข้อมูลในรูปแบบ key-value pairs
        </Text>
        <CodeBox>
          <Text>{`const person = {
  firstName: "John",
  lastName: "Doe",
};`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Array (อาร์เรย์)</Text>
        <Text style={styles.description}>
          โครงสร้างข้อมูลที่เก็บรายการของข้อมูล สามารถเข้าถึงได้ด้วย index
        </Text>
        <CodeBox>
          <Text>{`const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // "Apple"`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>
          Control Structure (โครงสร้างควบคุม)
        </Text>
        <Text style={styles.description}>
          ใช้ควบคุมการทำงานของโปรแกรม เช่น การสร้างเงื่อนไข (if/else)
          หรือการทำซ้ำ (loops)
        </Text>
        <CodeBox>
          <Text>{`// if-else
if (age > 18) { ... }

// for loop
for (let i = 0; i < 3; i++) { ... }`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>useState Hook</Text>
        <Text style={styles.description}>
          เป็น Hook ที่ให้เราเพิ่ม state (ข้อมูลที่เปลี่ยนแปลงได้) เข้าไปใน
          function component.
        </Text>
        <View style={styles.exampleContainer}>
          <Text style={{ marginBottom: 10 }}>You clicked {count} times</Text>
          <Button title="Click me" onPress={() => setCount(count + 1)} />
        </View>
        <CodeBox>
          <Text>{`const [count, setCount] = useState(0);

<Button 
  title="Click me" 
  onPress={() => setCount(count + 1)} 
/>`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Rendering Lists with .map()</Text>
        <Text style={styles.description}>
          เราสามารถ render list ของ components ได้โดยการใช้ฟังก์ชัน .map() ของ
          Array อย่าลืมใส่ `key` ที่ไม่ซ้ำกันให้กับแต่ละ item ใน list
        </Text>
        <View style={styles.exampleContainer}>
          {data.map((fruit, index) => (
            <Text key={index} style={styles.listItem}>
              - {fruit}
            </Text>
          ))}
        </View>
        <CodeBox>
          <Text>{`const data = ["Apple", "Banana", "Cherry"];

{data.map((fruit, index) => (
  <Text key={index}>{fruit}</Text>
))}`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>.forEach() vs .map()</Text>
        <Text style={styles.description}>
          ทั้งสอง method ใช้สำหรับวนลูปใน Array แต่มีความแตกต่างที่สำคัญ:
          {"\n\n"}• `.forEach()`: จะ execute ฟังก์ชันสำหรับแต่ละ item ใน array
          แต่ **ไม่คืนค่าอะไรเลย** (returns `undefined`).
          เหมาะสำหรับทำงานบางอย่างที่ไม่ต้องการผลลัพธ์กลับมาเป็น array ใหม่
          {"\n\n"}• `.map()`: จะสร้าง **array ใหม่**
          จากผลลัพธ์ของการเรียกฟังก์ชันสำหรับแต่ละ item. นี่คือเหตุผลที่
          `.map()` ถูกใช้ในการ render list ใน React
        </Text>
        <CodeBox>
          <Text>{`// .forEach() ไม่คืนค่า array, จึงไม่สามารถ render UI ได้
data.forEach(fruit => <Text>{fruit}</Text>); // Returns undefined

// .map() คืนค่า array ของ JSX elements, เหมาะสำหรับการ render
data.map(fruit => <Text>{fruit}</Text>); // Returns [<Text...>, <Text...>]`}</Text>
        </CodeBox>
      </View>

      <View style={styles.block}>
        <Text style={styles.componentTitle}>Conditional Rendering</Text>
        <Text style={styles.description}>
          คุณสามารถ render UI ที่แตกต่างกันได้ตามเงื่อนไข วิธีที่นิยมคือการใช้
          ternary operator (`condition ? true : false`)
        </Text>
        <View style={styles.exampleContainer}>
          <Button title="Toggle Text" onPress={() => setShowText(!showText)} />
          {showText ? (
            <Text style={{ marginTop: 10 }}>This text is visible!</Text>
          ) : null}
        </View>
        <CodeBox>
          <Text>{`{showText ? <Text>Visible!</Text> : null}`}</Text>
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
  listItem: {
    fontSize: 16,
    marginVertical: 2,
  },
});
