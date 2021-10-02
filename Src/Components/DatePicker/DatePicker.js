import React from 'react';
import {View, StyleSheet} from 'react-native';
import DatePicker from '@mohamadkh75/react-native-jalali-datepicker';

const CDatePicker = props => {
  return (
    <View>
      <DatePicker
        style={{
          width: '95%',
          height: 300,
          alignSelf: 'center',
          backgroundColor: '#E5EBFD',
          borderRadius: 5,
        }}
        selected="1399/1/18"
        dateSeparator="/"
        minDate="1380/1/18"
        maxDate="1400/1/18"
        headerContainerStyle={{height: '20%'}}
        yearMonthBoxStyle={{
          width: '30%',
          height: '75%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        yearMonthTextStyle={{
          fontSize: 20,
          color: '#91B3FA',
          fontFamily: 'IRANSansWeb_Medium',
        }}
        iconContainerStyle={{width: `${100 / 7}%`}}
        backIconStyle={{
          width: 20,
          height: 20,
          resizeMode: 'center',
          tintColor: '#808e9b',
        }}
        nextIconStyle={{
          width: 20,
          height: 20,
          resizeMode: 'center',
          tintColor: '#91B3FA',
        }}
        eachYearStyle={{
          width: 96,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#91B3FA',
          marginTop: '1.5%',
          marginBottom: 5,
          marginHorizontal: '1.5%',
          borderRadius: 10,
          elevation: 3,
        }}
        eachYearTextStyle={{
          fontSize: 12,
          fontFamily: 'IRANSansWeb(FaNum) Medium',
          color: 'white',
        }}
        eachMonthStyle={{
          width: `${70 / 3}%`,
          height: `${70 / 4}%`,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#91B3FA',
          marginBottom: '10%',
          borderRadius: 5,
        }}
        eachMonthTextStyle={{
          fontSize: 12,
          color: 'white',
          fontFamily: 'IRANSansWeb(FaNum) Medium',
        }}
        weekdaysContainerStyle={{height: '10%'}}
        weekdayStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        weekdayTextStyle={{
          fontSize: 12,
          color: '#808e9b',
          marginBottom: 10,
          fontFamily: 'IRANSansWeb_Medium',
        }}
        borderColor="#808e9b"
        dayStyle={{
          width: `${100 / 7}%`,
          justifyContent: 'center',
          alignItems: 'center',
          aspectRatio: 1 / 1,
          fontFamily: 'IRANSansWeb(FaNum) Medium',
        }}
        selectedDayStyle={{
          fontFamily: 'IRANSansWeb(FaNum) Medium',
          width: '70%',
          aspectRatio: 1 / 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}
        selectedDayColor="#91B3FA"
        dayTextStyle={{fontSize: 14, fontFamily: 'IRANSansWeb(FaNum) Medium'}}
        selectedDayTextColor="white"
        dayTextColor="#808e9b"
        disabledTextColor="#abb4bd"
        onDateChange={date => {
          props.dateGiver(date);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CDatePicker;
