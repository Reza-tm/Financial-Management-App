import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const firstStep = () => {
  return (
    <View style={styles.container}>
      <Text>First</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default firstStep;
