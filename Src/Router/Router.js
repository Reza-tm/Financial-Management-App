import React from 'react';
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
import ThirdStep from '../Screens/SignUp/ThirdStep';

const Stack = createNativeStackNavigator();

const Router = () => {
  const page = useIntroPagination();
  if (page == 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="first">
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
        <Stack.Navigator initialRouteName="First">
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
          <Stack.Screen
            name="Third"
            component={ThirdStep}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({});

export default Router;
