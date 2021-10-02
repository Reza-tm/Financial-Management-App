import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomeTextInput from '../../Components/CustomeTextInput/CustomeTextInput';

const firstStep = ({navigation}) => {
  const [codeMelli, setCodeMelli] = useState('');
  const [name, setName] = useState('');
  const [birthCertificate, setBirthCertificate] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 30;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Image
          source={require('./../../Images/linear-human-resources-vector-elements.jpg')}
          style={{width: '100%', height: 300, marginTop: 30}}
        />
        <Text style={{fontFamily: 'IRANSansWeb_Medium', marginVertical: 30}}>
          اطلاعات خود را وارد کنید
        </Text>
        <CustomeTextInput
          name="نام و نام خانودگی"
          value={name}
          setValue={setName}
          style={{marginBottom: 20}}
          placeholder="مثال : محمد جواد سلگی"
        />

        <CustomeTextInput
          name="شماره شناسنامه"
          value={birthCertificate}
          setValue={setBirthCertificate}
          style={{marginBottom: 20}}
          placeholder="مثال : 012345678"
        />

        <CustomeTextInput
          name="شماره ملی"
          value={codeMelli}
          setValue={setCodeMelli}
          placeholder="مثال : 012345678"
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Second', {name, codeMelli, birthCertificate})
        }
        // onPress={() => console.log({name, codeMelli, birthCertificate})}
        style={{
          marginTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-end',
        }}>
        <Text style={{fontFamily: 'IRANSansWeb_Medium', marginRight: 5}}>
          بعدی
        </Text>
        <Icon name="chevron-forward-outline" size={22} color="#7B97F6" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 14,
  },
});

export default firstStep;
