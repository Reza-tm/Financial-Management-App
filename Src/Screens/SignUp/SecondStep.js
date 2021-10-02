import React, {useState} from 'react';
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
  useIntroPaginationActions,
} from '../../Components/DataProvider/DataProvider';
import CDatePicker from '../../Components/DatePicker/DatePicker';

const SecondStep = ({navigation, route}) => {
  const setPagination = useIntroPaginationActions();
  const [date, setDate] = useState('');
  const accounts = Accounts();
  const setAccounts = AccountsActions();
  const dataTransferer = userInfo => {
    const newUserInfo = [...accounts, userInfo];
    setAccounts(newUserInfo);
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
      <CDatePicker dateGiver={setDate} />
      <TouchableOpacity
        // onPress={() => navigation.navigate('Third', {...route.params, date})}
        onPress={() => dataTransferer({...route.params, date})}
        style={{
          marginTop: 170,
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
    height: '100%',
    paddingHorizontal: 20,
  },
});

export default SecondStep;
