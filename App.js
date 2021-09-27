import React from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import DataProvider from './Src/Components/DataProvider/DataProvider';
import Router from './Src/Router/Router';

const App = () => {
  return (
    <DataProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Router />
    </DataProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
