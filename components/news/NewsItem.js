import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../config/theme";
import React from "react";
import StyledText from "../texts/StyledText";
import { useNavigation } from "@react-navigation/native";

const NewsItem = ({
  image,
  title,
  avatar,
  author,
  date,
  content,
  ...props
}) => {
  let activeColor = colors;
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate("Details", {
          image,
          title,
          avatar,
          author,
          date,
          content
        });
      }}
      style={[
        {
          backgroundColor: activeColor.secondary
        },
        styles.container
      ]}
      {...props}
    >
      <Image source={image} style={styles.image} />
      <View numberOfline={3} style={styles.bottomSection}>
        <StyledText style={[{ color: activeColor.accent }, styles.title]} bold>
          {title}
        </StyledText>
        <View style={styles.authorRow}>
          <View style={styles.author}>
            <Image source={avatar} style={styles.avatar} />
            <StyledText numberOfline={1} bold>
              {author}
            </StyledText>
          </View>
          <StyledText
            style={[{ color: activeColor.tertiary }, styles.date]}
            small
          >
            {date}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 370,
    width: 300,
    borderRadius: 25,
    marginRight: 20
  },
  image: {
    width: 300,
    height: 190,
    borderRadius: 25
  },
  bottomSection: {
    padding: 25,
    flex: 1,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 19
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 33
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  date: {
    textAlign: "right",
    flex: 2
  }
});

export default NewsItem;
