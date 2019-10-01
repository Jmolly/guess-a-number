import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const GameOverScreen = ({ userNumber, roundsNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>Game over!</Text>
      <Text>Your number: {userNumber}</Text>
      <Text>Rounds: {roundsNumber}</Text>
      <Button title='nEw game!' onPress={onRestart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
