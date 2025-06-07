import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Navigation from "./src/presentation/navigation";
import { CategoriesProvider } from "./src/context/CategoriesContext";

export default function App() {
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
