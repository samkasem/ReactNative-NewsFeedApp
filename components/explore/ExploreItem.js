import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../config/theme";
import React from "react";
import StyledText from "../texts/StyledText";

const NewsItem = ({ image, title, ...props }) => {
  return (
    <TouchableOpacity
      onPress={() => alert(title)}
      style={styles.container}
      {...props}
    >
      <Image source={image} style={[styles.image, StyleSheet.absoluteFill]} />
      <StyledText style={styles.title} bold>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginRight: 20
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  title: {
    fontSize: 19,
    color: colors.primary,
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#0005",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.accent
  }
});

export default NewsItem;
