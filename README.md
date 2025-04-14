# 🏦 Ryt Bank — Mobile Banking App (Frontend Assessment)

Welcome to Ryt Bank — a beautifully designed mobile banking app built with **React Native**, **Expo**, and **Victory Native**. This submission fulfills the requirements of the take-home assessment, showcasing a clean UI, animation, charting, and biometric logic.

---

### ✨ Features

- 📱 UI styled using `react-native-paper` and `expo-linear-gradient`
- 💳 Card listing with horizontal scroll and card details
- 📊 Beautiful analytics with Victory line chart
- 👁️ Biometric protection for sensitive data (FaceID / TouchID)
- 🔍 Transaction list and detail view
- 🧭 Bottom navigation with tab routing

---

### 📁 Folder Structure

```
├── assets/                # Icons, logos, images, fonts
├── components/            # Reusable components
├── context/               # Biometric context
├── screens/               # All screen views
├── AppNavigator.tsx       # Navigation configuration
├── App.tsx                # App root
```

---

### 🚀 Getting Started

#### Prerequisites

- Node.js ≥ 16
- Expo CLI:  
  ```bash
  npm install -g expo-cli
  ```

---

#### 🔧 Installation

```bash
git clone https://github.com/Iskz17/ryt-bank.git
cd ryt-bank
npm install
```

---

#### ▶️ Running the App

```bash
npm start
```

Then scan the QR code with your **iPhone** (using the Expo Go app) or run it on iOS Simulator / Android Emulator.

---

### 🔒 Biometric Setup

To test biometric masking:
- Tap on any transaction to reveal masked amount.
- The app will prompt for FaceID / biometric unlock.
- On success, the full amount is revealed.

Biometric state is managed with context for global toggling.

---

### 📊 Charting Library

This project uses:

- `victory-native` for analytics charts
- `react-native-svg` (installed via Expo)

To install these manually (if needed):

```bash
npx expo install react-native-svg
npm install victory-native
```
---

### 🔎 Key Technologies

| Tech                      | Purpose                        |
|---------------------------|--------------------------------|
| React Native              | App Framework                  |
| Expo                      | Dev tooling & fast refresh     |
| React Navigation          | Navigation stack & tabs        |
| react-native-paper        | Material design components     |
| Victory Native            | Finance line chart             |
| Expo Local Authentication | Biometric access to data       |

---

### ✅ Assessment Goals Covered

- [x] Smooth, elegant UI
- [x] Use of charts to visualize analytics
- [x] Navigation across multiple screens
- [x] FaceID masking / unmasking
- [x] Reusability, cleanliness, and state handling
- [x] Beautiful design and developer experience

---

### 👨‍💻 Author

**Iskandar Roslen**  
Email: iskzul1796@gmail.com  
GitHub: [@iskz17](https://github.com/Iskz17)