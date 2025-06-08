# 🛍️ Products App

A mobile application that allows users to browse, filter, sort, and explore a catalog of products using the [DummyJSON Products API](https://dummyjson.com/docs/products).

<img src="https://i.ibb.co/VW7QZDYJ/Captura-de-pantalla-2025-06-08-a-la-s-10-42-26-a-m.png" alt="App Preview" width="200"/>

## ✨ Features

- 📋 **Product List**: Scrollable list with thumbnail, title, and price.
- 🗂️ **Category Filter**: Filter by categories dynamically fetched from the API.
- 🔃 **Sorting**: Sort by **price** or **rating**.
- 🔍 **Product Details**: View full description, brand, stock, and image.
- 🔄 **Pull to Refresh**: Reload products manually.
- 📶 **Loading & Error States**: Graceful UX handling for API states.

## 🧪 Bonus Features

- 🔗 **Deep Linking**: Supports `products://product/:id` and `products://category/:name`.
- 🔔 **Push Notifications**: Welcome push when you launch the app.

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/francedermaz/products-app.git
cd products-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

```bash
cp .env.example .env  
```

### 4. Prebuild with Expo (if needed)

```bash
npx expo prebuild
```

### 5. Run the app

**iOS**

```bash
npx expo run:ios
```

**Android**

```bash
npx expo run:android
```

> Ensure a proper environment (Xcode for iOS / Android Studio or emulator for Android).

## 🧭 Deep Linking Testing

npx uri-scheme open products://product/3 --ios  
npx uri-scheme open products://category/smartphones --android
