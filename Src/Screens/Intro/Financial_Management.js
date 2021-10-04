import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useIntroPagination} from '../../Components/DataProvider/DataProvider';

const Financial = () => {
  const [page, setPage] = useIntroPagination();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/Internet_Banking_Singgle-04_generated.jpg')}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text
          style={{
            fontFamily: 'IRANSansWeb_Medium',
            fontSize: 15,
            marginTop: 10,
          }}>
          دیگر نگران مدیریت مالی نباشید !
        </Text>
        <Text
          style={{
            fontFamily: 'IRANSansWeb',
            fontSize: 15,
            marginTop: 30,
          }}>
          ما اینجاییم تا به شما در امور مالی کمک کنیم
        </Text>
        <Text
          style={{
            fontFamily: 'IRANSansWeb',
            fontSize: 15,
          }}>
          خیالتان راحت !
        </Text>
      </View>
      <TouchableOpacity style={styles.signUpBtn} onPress={() => setPage(1)}>
        <Text
          style={{
            fontFamily: 'IRANSansWeb_Bold',
            fontSize: 13,
            color: '#374151',
          }}>
          افتتاح حساب
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInBtn} onPress={() => setPage(10)}>
        <Text
          style={{
            fontFamily: 'IRANSansWeb_Bold',
            fontSize: 13,
            color: '#374151',
          }}>
          ورود به حساب
        </Text>
      </TouchableOpacity>
      <View style={styles.versionView}>
        <Text style={styles.versionText}>Version 1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    height: 400,
    width: '100%',
    marginTop: 10,
  },
  textWrapper: {
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
  signUpBtn: {
    backgroundColor: '#E0E7FF',
    width: 135,
    height: 45,
    alignSelf: 'center',
    marginTop: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBtn: {
    borderColor: '#E0E7FF',
    borderWidth: 2,
    width: 135,
    height: 45,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Financial;
