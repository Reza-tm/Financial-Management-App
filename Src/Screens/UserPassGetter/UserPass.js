import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

let random;
const UserPass = () => {
  const [pass, setPass] = useState('');
  const getCode = () => {
    random = (Math.random() * 10).toString(36).substring(2);
    console.log(random);
  };
  useEffect(() => {
    getCode();
    setPass(random);
  }, []);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>{pass}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserPass;
