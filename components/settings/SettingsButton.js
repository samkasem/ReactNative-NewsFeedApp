import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../config/theme";
import StyledText from "../texts/StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const SettingsButton = ({ label, icon, isActive, ...props }) => {
  let activeColor = colors;
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: activeColor.secondary
        },
        styles.SettingsButton
      ]}
      {...props}
    >
      <View style={styles.labelGroup}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={activeColor.tertiary}
          style={styles.icon}
        />
        <StyledText style={[{ color: activeColor.tertiary }, styles.label]}>
          {label}
        </StyledText>
      </View>
      <MaterialCommunityIcons
        name={
          isActive ? "checlbox-marked-circle" : "checkbox-blank-circle-outline"
        }
        size={24}
        color={isActive ? activeColor.accent : activeColor.tertiary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    fontStyle: "italic"
  },
  SettingsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 25,
    marginBottom: 2
  },
  labelGroup: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginRight: 15
  }
});

export default SettingsButton;
