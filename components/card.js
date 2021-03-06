import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ style, children }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 10,
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
