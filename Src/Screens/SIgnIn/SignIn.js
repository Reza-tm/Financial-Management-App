import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import CustomeTextInput from '../../Components/CustomeTextInput/CustomeTextInput';
import {
  Accounts,
  useIntroPagination,
} from '../../Components/DataProvider/DataProvider';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

const Signin = () => {
  const [accounts, setAccounts] = Accounts();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useIntroPagination();

  const login = () => {
    console.log(accounts);
    const index = accounts.findIndex(e => e.name == userName);
    if (index > -1) {
      const passIndex = accounts.findIndex(e => e.pass == userPass);
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
      <TouchableOpacity onPress={() => setModal(!modal)}>
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
      </TouchableOpacity>
      <Modal
        isVisible={modal}
        animationIn="fadeIn"
        useNativeDriver={true}
        // coverScreen={true}
        deviceHeight={8000}
        backdropColor="#010139"
        animationOut="fadeOut">
        <View
          style={{
            width: '85%',
            height: 210,
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 6,
            paddingVertical: 60,
            position: 'relative',
          }}>
          <Text
            style={{
              fontFamily: 'IRANSansWeb_Medium',
              width: 200,
              textAlign: 'center',
            }}>
            برای ورود به حساب خود ابتدا حسابی برای خود افتتاح کنید
          </Text>
          <TouchableOpacity
            onPress={() => setPage(1)}
            style={{
              backgroundColor: '#7B97F6',
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 6,
              marginTop: 30,
            }}>
            <Text
              style={{
                fontFamily: 'IRANSansWeb_Medium',
                fontSize: 13,
              }}>
              افتتاح حساب
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 15,
              right: 20,
              backgroundColor: '#F87171',
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => setModal(!modal)}>
            <Icon name="close-outline" size={18} />
          </TouchableOpacity>
        </View>
      </Modal>
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
