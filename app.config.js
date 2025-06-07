import "dotenv/config";

export default ({ config }) => ({
  ...config,
  name: "Products App",
  slug: "products-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    icon: "./assets/icon.png",
    supportsTablet: true,
    bundleIdentifier: "com.fran.products",
  },
  android: {
    icon: "./assets/icon.png",
    package: "com.fran.products",
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    favicon: "./assets/icon.png",
  },
  scheme: "products",
  extra: {
    apiUrl: process.env.API_URL,
  },
});
