import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.signupContainer}>
      <Image
        source={require('../../Images/11205.jpg')}
        style={styles.SUImage}
      />
      <View style={styles.text}>
        <Text style={{fontFamily: 'IRANSansWeb_Medium', fontSize: 15}}>
          به سلگین بانک خوش آمدید
        </Text>
        <Text
          style={{
            fontFamily: 'IRANSansWeb_Medium',
            fontSize: 15,
            marginTop: 10,
          }}>
          اولین بانک ایران با هدف برنامه ریزی مالی
        </Text>
      </View>
      <View style={styles.nextBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Old')}>
          <Icon name="return-up-forward-outline" size={45} color="#4f4f4f" />
        </TouchableOpacity>
      </View>
      <View style={styles.versionView}>
        <Text style={styles.versionText}>Version 1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  SUImage: {
    width: '100%',
    height: 300,
    marginTop: 50,
  },
  text: {
    alignItems: 'center',
    marginTop: 100,
  },
  nextBtn: {
    marginTop: 100,
    alignItems: 'center',
  },
  versionView: {
    position: 'absolute',
    bottom: 18,
    width: '100%',
    alignItems: 'center',
  },
  versionText: {
    opacity: 0.4,
    fontSize: 13,
    fontFamily: 'JosefinSans-Regular',
  },
});

export default SignUpScreen;
