import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  snapPoints?: string[];
  style?: ViewStyle;
};

export const DSBottomSheetModal = forwardRef<BottomSheetModal, Props>(
  ({ children, snapPoints = ["40%"], style }, ref) => {
    const memoizedSnapPoints = useMemo(() => snapPoints, [snapPoints]);

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior="close"
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        enablePanDownToClose
        snapPoints={memoizedSnapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={style}>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);
