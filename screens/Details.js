import { StyleSheet, View, Image } from "react-native";
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";

import { colors } from "../config/theme";
import React from "react";

//data
import { newsData } from "../config/data";

export default function Details({ route }) {
  let activeColor = colors;
  const { image, title, avatar, author, date, content } = route?.params;

  return (
    <MainContainer
      style={{
        backgroundColor: activeColor.secondary
      }}
    >
      <Image source={image} style={styles.image} />
      <View
        style={[
          { backgroundColor: activeColor.secondary },
          styles.bottomSection
        ]}
      >
        <StyledText style={[{ color: activeColor.accent }, styles.title]} big>
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
        <StyledText style={styles.content}>{content}</StyledText>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  bottomSection: {
    padding: 25,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  title: {
    marginBottom: 20
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
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 25
  },
  date: {
    textAlign: "right",
    flex: 2
  },
  content: {
    marginTop: 15
  }
});
