import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Navigation from "./src/presentation/navigation";
import { CategoriesProvider } from "./src/context/CategoriesContext";
import { configurePushNotifications } from "./src/notifications/notifications";

export default function App() {
  useEffect(() => {
    configurePushNotifications();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <CategoriesProvider>
          <Navigation />
        </CategoriesProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
