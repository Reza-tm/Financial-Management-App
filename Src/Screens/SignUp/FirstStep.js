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
import {useIntroPagination} from '../../Components/DataProvider/DataProvider';
import {Validation} from '../../Components/Validation/Validation';

const firstStep = ({navigation}) => {
  const [codeMelli, setCodeMelli] = useState('');
  const [name, setName] = useState('');
  const [birthCertificate, setBirthCertificate] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 30;
  const [page, setPage] = useIntroPagination();

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
          endEdit={e => {
            Validation(name);
            console.log(Validation(name));
          }}
        />

        <CustomeTextInput
          name="شماره شناسنامه"
          value={birthCertificate}
          setValue={setBirthCertificate}
          style={{marginBottom: 20}}
          placeholder="مثال : 012345678"
          type="numeric"
          endEdit={e => {
            Validation(Number(birthCertificate));
            console.log(Validation(birthCertificate));
          }}
        />

        <CustomeTextInput
          name="شماره ملی"
          value={codeMelli}
          setValue={setCodeMelli}
          type="numeric"
          placeholder="مثال : 012345678"
          endEdit={e => {
            Validation(Number(codeMelli));
            console.log(Validation(codeMelli));
          }}
        />
      </KeyboardAvoidingView>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Second', {name, codeMelli, birthCertificate})
          }
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
        <TouchableOpacity
          onPress={() => setPage(10)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <Icon name="chevron-back-outline" size={22} color="#7B97F6" />
          <Text style={{fontFamily: 'IRANSansWeb_Medium', marginLeft: 5}}>
            ورود به حساب
          </Text>
        </TouchableOpacity>
      </View>
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
