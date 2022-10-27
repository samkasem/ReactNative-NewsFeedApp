import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { colors } from "../../config/theme";
import React from "react";

const MainContainer = ({ children, style, ...props }) => {
  let activeColor = colors;
  return (
    <SafeAreaView styel={styles.container}>
      <ScrollView
        style={[
          {
            backgroundColor: activeColor.primary
          },
          style
        ]}
        showVerticalScrollIndicator={false}
        {...props}
      >
        {children}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MainContainer;
