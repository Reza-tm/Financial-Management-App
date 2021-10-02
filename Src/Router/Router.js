import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../Screens/Intro/SignUpScreen';
import Old from '../Screens/Intro/Old';
import Financial from '../Screens/Intro/Financial_Management';
import {
  useIntroPagination,
  useIntroPaginationActions,
} from '../Components/DataProvider/DataProvider';
import FirstStep from '../Screens/SignUp/FirstStep';
import SecondStep from '../Screens/SignUp/SecondStep';
import Splash from '../Screens/Splash/Splash';
import UserPass from '../Screens/UserPassGetter/UserPass';

const Stack = createNativeStackNavigator();

const Router = () => {
  const setPage = useIntroPaginationActions();
  const page = useIntroPagination();
  const [splash, setSplash] = useState(false); // make it true
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 3000);
  //   setPage(0);
  // }, []);
  // useEffect(() => {
  //   setSplash(true);
  //   setTimeout(() => {
  //     setSplash(false);
  //   }, 3000);
  // }, [page]);

  if (splash) {
    return <Splash />;
  } else if (!splash) {
    if (page == 0) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="welcome">
            <Stack.Screen
              name="welcome"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Old"
              component={Old}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Fmanage"
              component={Financial}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else if (page == 1) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="First"
              component={FirstStep}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Second"
              component={SecondStep}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else if (page == 2) {
      return <UserPass />;
    }
  }
};

const styles = StyleSheet.create({});

export default Router;
