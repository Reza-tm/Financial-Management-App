import React, {useContext, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import CustomeTextInput from '../../Components/CustomeTextInput/CustomeTextInput';
import {Accounts} from '../../Components/DataProvider/DataProvider';

const Signin = () => {
  const [accounts, setAccounts] = Accounts();

  const login = () => {
    console.log(accounts);
    const index = accounts[0].findIndex(e => e.name == userName);
    if (index > -1) {
      const passIndex = accounts[0].findIndex(e => e.pass == userPass);
      if (passIndex > -1 && passIndex == index) {
        alert('tamam');
      }
    }
  };

  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/Login.jpg')}
        style={{width: '100%', height: 400}}
      />
      <View style={{paddingHorizontal: 20, marginTop: 20}}>
        <CustomeTextInput
          setValue={setUserName}
          value={userName}
          name="نام کاربری"
        />
        <CustomeTextInput
          setValue={setUserPass}
          value={userPass}
          name="رمز عبور"
          style={{marginTop: 30}}
        />
      </View>
      <Text
        onPress={() => login()}
        style={{
          fontFamily: 'IRANSansWeb_Medium',
          marginRight: 30,
          marginTop: 50,
          fontSize: 17,
        }}>
        ورود
      </Text>
      <Text
        style={{
          fontFamily: 'IRANSansWeb_Medium',
          marginRight: 30,
          marginTop: 13,
          fontSize: 11,
          opacity: 0.6,
        }}>
        در ورود به حسابتان مشکل دارید ؟
      </Text>
      <Text
        style={{
          fontFamily: 'IRANSansWeb',
          color: '#939496',
          fontSize: 12,
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}>
        کلیه اطلاعات محفوظ نیست
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Signin;
