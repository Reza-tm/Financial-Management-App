import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import {
  Accounts,
  useMovaghat,
} from '../../Components/DataProvider/DataProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

let random = (Math.random() * 10).toString(36).substring(2);
let test;

const UserPass = () => {
  const [movaghat, setMovaghat] = useMovaghat();
  const [pass, setPass] = useState(random);
  const [prevAccs, setPrevAccs] = Accounts();
  const getCode = () => {
    test = {...movaghat};
    test.pass = random;
    prevAccs.push(test);
    storeUsers(prevAccs);
  };
  useEffect(() => {
    getCode();
  }, []);

  const storeUsers = async value => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('signUpuser', jsonValue);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image
        source={require('../../Images/success.jpg')}
        style={styles.image}
      />
      <View style={styles.sucssessView}>
        <Text style={styles.sucssess}>
          کاربر گرامی {'\n'} ثبت نام شما با موفقیت انجام شد !
        </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.user}>{movaghat.codeMelli} : نام کاربری </Text>
        <Text style={styles.pass}>{pass} : رمز هوشمند</Text>
      </View>
      <TouchableOpacity>
        <Text>capt</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sucssess: {
    textAlign: 'center',
    fontFamily: 'IRANSansWeb_Medium',
  },
  image: {width: '100%', height: 400},
  sucssessView: {
    backgroundColor: '#6EE7B7',
    padding: 20,
    marginTop: -20,
  },
  pass: {
    fontFamily: 'IRANSansWeb_Medium',
    fontSize: 20,
  },
  user: {
    fontFamily: 'IRANSansWeb_Medium',
    fontSize: 20,
  },
  textBox: {},
});

export default UserPass;
