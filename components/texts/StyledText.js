import { Text } from "react-native";
import { colors } from "../../config/theme";
import React from "react";

const StyledText = ({ children, style, small, big, bold, ...props }) => {
  let activeColor = colors;
  return (
    <Text
      style={[
        {
          color: activeColor.tint,
          fontSize: small ? 14 : big ? 24 : 16,
          fontWeight: bold || big ? "bold" : "normal"
        },
        style
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default StyledText;
