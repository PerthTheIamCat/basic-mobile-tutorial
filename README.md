# midterm — React Native (Expo) demo

โปรเจกต์ตัวอย่างที่สร้างด้วย Expo + React Native รวมตัวอย่างพื้นฐานเพื่อการเรียนรู้ เช่น การจัดวางด้วย Flexbox, การจัดการมิติหน้าจอ, คอมโพเนนต์พื้นฐาน และตัวอย่าง navigation (stack, drawer, tabs)

## เกี่ยวกับโปรเจกต์

โปรเจกต์นี้เป็นคู่มือแบบโต้ตอบสำหรับผู้เริ่มต้น โดยรวมตัวอย่างหน้าจอ (screens), คอมโพเนนต์ย่อย และตัวอย่างการนำทางไว้ให้ศึกษา

## ข้อกำหนด

* Node.js (แนะนำ LTS) และ npm — [https://nodejs.org/](https://nodejs.org/)
* Expo Go (สำหรับทดสอบบนมือถือ)
  * Android: [https://play.google.com/store/apps/details?id=host.exp.    exponent](https://play.google.com/store/apps/details?id=host.exp.exponent)
  * iOS: [https://apps.apple.com/us/app/expo-go/id982107779](https://apps.apple.com/us/app/expo-go/id982107779)

## ติดตั้งและรันอย่างรวดเร็ว

1. คลอนโปรเจกต์ และเข้าโฟลเดอร์

    ```sh
    git clone https://github.com/PerthTheIamCat/basic-mobile-tutorial.git
    cd basic-mobile-tutorial
    ```

2. ติดตั้ง dependencies

    ```sh
    npm install
    ```

3. เริ่ม Expo

    ```sh
    npm start
    # หรือ
    npx expo start
    ```

4. ทดสอบ

* สแกน QR ด้วย Expo Go (มือถือ)
* รันบน iOS simulator (macOS):

   ```sh
   npm run ios
   ```

* รันบน Android emulator:

   ```sh
   npm run android
   ```

## สคริปต์สำคัญ (ใน `package.json`)

* start: expo start
* ios: expo start --ios
* android: expo start --android
* web: expo start --web

## โครงสร้างโปรเจกต์สั้น ๆ

* `App.js`, `index.js`, `app.json` — entry ของแอป
* `screens/` — หน้าจอต่าง ๆ (ComponentsPage, FlexPage, JavaScriptPage, SetupPage, ฯลฯ)
* `layout/` — ตัวอย่าง layout และ navigation (DrawerLayout, StackLayout, Tabs)
* `components/` — คอมโพเนนต์ย่อย (Button.js, CodeBox.js, ฯลฯ)
* `context/` — utilities เช่น `SafeAreaContext.js`

บันทึกไฟล์แล้วรีโหลดแอปผ่าน Expo เพื่อดูผลทันที

## ปัญหาที่พบบ่อย

* หากเจอปัญหา dependency ให้รัน `npm install` อีกครั้ง
* หากพอร์ตถูกใช้งานแล้ว ให้ปิด process ที่ใช้งานพอร์ตหรือรีสตาร์ท Metro bundler
  