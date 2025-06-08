import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Navigation from "./src/presentation/navigation";
import { CategoriesProvider } from "./src/context/CategoriesContext";
import { configurePushNotifications } from "./src/notifications/notifications";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/presentation/components/CustomToast";
import "./src/locales/i18n";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  useEffect(() => {
    configurePushNotifications();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <CategoriesProvider>
          <Navigation />
          <Toast config={toastConfig} />
        </CategoriesProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
