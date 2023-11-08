import { View, Text, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Alert } from "react-native";
import Card from "../components/ui/Card";
// import InstructionText from "../components/ui/instructionText";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumner(max, min, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumner(max, min, exclude);
  } else {
    return rndNum;
  }
}

let minNumber = 1;
let maxNumber = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumner(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  // for orientation 
const {width,height} = useWindowDimensions();

  // to check if game is over or not
  useEffect(() => {
    if (currentGuess == userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  // this i would not render unless the component had been rendered because the array of dependances is empty
  useEffect(() => {
    (minNumber = 1), (maxNumber = 100);
  }, []);

  function nextGuessNumber(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "you show click on the right button...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumner(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((previousGuess) => [newRandomNumber, ...previousGuess]);
  }

  let content=
  <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower ? </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "higher")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
  </>

  if(width > 500){
    content=
    <>
    <InstructionText style={styles.contentInstructionText}>Higher or Lower ? </InstructionText>
       <View style={styles.contentsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "higher")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
       </View>
    </>
  }

  return (
    <View style={styles.mainContainer}>
      <Title stylees={{marginTop:0}}>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((round)=> <Text key={round}>{round}</Text> )} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem roundNumber={itemData.index} guess={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 30,
    alignItems:'center',
    // padding:55
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  contentsContainer:{
    flexDirection: "row",
    alignItems:'center',
  },
  listContainer: {
    flex: 1,
    // padding: 16,
    paddingHorizontal:26,
    paddingVertical:10
  },
});
