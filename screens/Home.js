import { StyleSheet, Text, View } from "react-native";
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";
import NewsSection from "../components/news/NewsSection";
import ExploreSection from "../components/explore/ExploreSection";
//data
import { newsData, exploreData } from "../config/data.js";

export default function Home() {
  return (
    <MainContainer>
      <StyledText style={styles.sectionTitle} big>
        Trending News
      </StyledText>
      <NewsSection data={newsData} />
      <StyledText style={styles.sectionTitle} big>
        Explore
      </StyledText>
      <ExploreSection data={exploreData} />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25
  }
});
