import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        source={require('./Animations/63568-mobile-banking.json')}
        autoPlay
        loop
        duration={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Splash;
