import { View, StyleSheet } from "react-native";
import { colors } from "../../config/theme";
import StyledText from "../texts/StyledText";
import React from "react";

const SettingsItem = ({ children, label }) => {
  let activeColor = colors;
  return (
    <View
      style={[
        {
          backgroundColor: activeColor.secondary
        },
        styles.SettingsItem
      ]}
    >
      <StyledText style={[{ color: activeColor.tertiary }, styles.label]}>
        {label}
      </StyledText>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontStyle: "italic"
  },
  SettingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 25,
    marginBottom: 2
  }
});

export default SettingsItem;
