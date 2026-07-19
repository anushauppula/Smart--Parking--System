## 🚗 [Live Demo](https://anushauppula.github.io/Smart--Parking--System)

[![Website](https://img.shields.io/badge/Website-Live-green)](https://anushauppula.github.io/Smart--Parking--System)
# Smart--Parking--System
IoT-based Smart Parking System with real-time slot management. Features responsive web app for slot booking + Arduino UNO automation with IR sensors, servo gate, and 16x2 I2C LCD display. Live status updates: Welcome | Slots Available | Not Available. Built using HTML, CSS, JavaScript, and Arduino C++.

## 🔧 Hardware Implementation

### 📸 Arduino Setup
### 🎥 Working Demo
[▶️ Click to Watch Gate + IR Sensors](smart%20parking%20hardware%20setup.mp4)
### ✨ Key Features
- Real-time slot status: Green = Available, Red = Occupied
- Date & Time based slot booking
- Admin login with authentication
- Responsive design for mobile + desktop
**Components Used:**
- Arduino UNO R3
- IR Sensor x2 - Vehicle entry/exit detection
- SG90 Servo Motor - Automatic gate control
- 16x2 I2C LCD Display - Real-time slot count

### 💡 How It Works
1. **Entry Detection:** IR sensor detects vehicle at gate
2. **Gate Control:** Servo motor opens gate automatically if slots available
3. **LCD Update:** 16x2 display shows real-time slot count
4. **Exit Detection:** Second IR sensor counts vehicle exit & updates slots
