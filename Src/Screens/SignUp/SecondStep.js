import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';

const SecondStep = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: 250,
          backgroundColor: 'red',
          marginVertical: 30,
        }}
        source={require('./../../Images/Office_workers_organizing_data_storage.jpg')}
      />
      <DatePicker date={date} onDateChange={setDate} mode="date" locale="IR" />

      <Text>Second</Text>
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
