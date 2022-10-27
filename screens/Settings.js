import { StyleSheet, View, Switch } from "react-native";
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";
import SettingsItem from "../components/settings/SettingsItem";
import SettingsButton from "../components/settings/SettingsButton";

import { colors } from "../config/theme";
import React, { useState } from "react";

export default function Details() {
  let activeColor = colors;
  const [isActive, setIsActive] = useState(false);
  const handleSwitch = () => {
    setIsActive((previousState) => !previousState);
  };
  return (
    <MainContainer style={styles.container}>
      {/* section 1 */}
      <StyledText style={{ color: activeColor.accent }} bold>
        User
      </StyledText>
      <View style={styles.section}>
        <SettingsItem label="Name">
          <StyledText>John Doe</StyledText>
        </SettingsItem>
        <SettingsItem label="Joined On">
          <StyledText>2020-02-02</StyledText>
        </SettingsItem>
      </View>
      {/* section 2 */}
      <StyledText style={{ color: activeColor.accent }} bold>
        Theme Switch
      </StyledText>
      <View style={styles.section}>
        <SettingsItem label="Dark Mode">
          <Switch
            value={isActive}
            onValueChange={handleSwitch}
            thumbColor={isActive ? activeColor.accent : activeColor.tertiary}
            ios_backgroundColor={activeColor.primary}
            trackColor={{
              false: activeColor.primary,
              true: activeColor.tertiary
            }}
          />
        </SettingsItem>
      </View>
      {/* section 3 */}
      <StyledText style={{ color: activeColor.accent }} bold>
        Theme Settings
      </StyledText>
      <View style={styles.section}>
        <SettingsButton label="Light" icon="lightbulb-on" isAtive={false} />
        <SettingsButton label="Dark" icon="weather-night" isAtive={false} />
        <SettingsButton
          label="System"
          icon="theme-light-dark"
          isAtive={false}
        />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  section: {
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 25,
    marginBottom: 25
  }
});
