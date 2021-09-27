import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Old = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../Images/Wavy_Lst-21_Single-04.jpg')}
      />
      <View style={styles.textWrapper}>
        <Text
          style={{
            fontFamily: 'IRANSansWeb_Medium',
            fontSize: 15,
            marginTop: 10,
          }}>
          از دیرین ، یار امن شما
        </Text>
        <Text
          style={{
            fontFamily: 'IRANSansWeb',
            fontSize: 15,
            marginTop: 30,
          }}>
          با یک بار نصب ، امنیت شما تضمین میشود
        </Text>
        <TouchableOpacity
          style={{marginTop: 100}}
          onPress={() => navigation.navigate('Fmanage')}>
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
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    height: 400,
    width: '100%',
    marginTop: 30,
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
});

export default Old;
