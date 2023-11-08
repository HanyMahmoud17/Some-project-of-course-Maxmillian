import {
  View,
  StyleSheet,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ startNewGame, userNumber, numberOfRounded }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageContentStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageContentStyle]}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summeryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{numberOfRounded}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;
// const deviceWidth=Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // padding: 24,
    paddingHorizontal:24,
    paddingVertical:34,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 300 : 400,
    // height: deviceWidth < 380 ? 300 : 400,
    // borderRadius: deviceWidth < 380 ? 150 : 200,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: "hidden",
    margin: 16,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
