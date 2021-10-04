import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Accounts,
  AccountsActions,
  useIntroPagination,
  useIntroPaginationActions,
  useMovaghat,
} from '../../Components/DataProvider/DataProvider';
import CDatePicker from '../../Components/DatePicker/DatePicker';

const SecondStep = ({navigation, route}) => {
  const [pagination, setPagination] = useIntroPagination();
  const [date, setDate] = useState('');
  const [accounts, setAccounts] = Accounts();
  const [movaghat, setMovaghat] = useMovaghat();
  const dataTransferer = userInfo => {
    setMovaghat(userInfo);
    setPagination(2);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: 250,
          marginVertical: 30,
        }}
        source={require('./../../Images/Office_workers_organizing_data_storage.jpg')}
      />
      <Text
        style={{
          fontFamily: 'IRANSansWeb_Medium',
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        تاریخ تولد خود را وارد کنید
      </Text>
      <CDatePicker dateGiver={setDate} />
      <View
        style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => dataTransferer({...route.params, date})}
          style={{
            marginTop: 70,
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
          onPress={() => setPagination(10)}
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
    height: '100%',
    paddingHorizontal: 20,
  },
});

export default SecondStep;
