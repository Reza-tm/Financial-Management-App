import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const CustomeTextInput = ({name, value, setValue, placeholder, style}) => {
  return (
    <View style={style}>
      <Text style={{fontFamily: 'IRANSansWeb', fontSize: 12}}>{name}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={{
          width: '80%',
          alignSelf: 'flex-end',
          marginTop: 7,
          backgroundColor: '#f0f0f0',
          borderRadius: 5,
          fontFamily: 'IRANSansWeb(FaNum) Medium',
          paddingHorizontal: 20,
          fontSize: 12,
          direction: 'rtl',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomeTextInput;
