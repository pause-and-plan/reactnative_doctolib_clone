import * as React from "react";
import { View } from "react-native";
import { Colors } from "../theme/colors";

interface DividerProps {
  color?: string;
  margin?: number;
}

const Divider = (props?: DividerProps) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: props?.color ?? Colors.white2,
        marginVertical: props?.margin ?? 0,
      }}
    />
  );
};

export default Divider;
