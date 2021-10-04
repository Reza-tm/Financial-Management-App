import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

const data = createContext();

const introPagination = createContext();

const movaghatAccount = createContext();

const DataProvider = ({children}) => {
  const [accounts, setAccounts] = useState([
    {
      name: 'محمد',
      codeMelli: '۱۲۳',
      birthCertificate: '۱۲۳',
      date: '1399/01/05',
      pass: 'omouqlz81o',
    },
  ]);
  const [intro, setIntro] = useState(0);
  const [movaghat, setMovaghat] = useState(['hello']);
  useEffect(() => {
    getStoredUsers();
  }, []);

  const getStoredUsers = async () => {
    try {
      const stringValue = await AsyncStorage.getItem('signUpuser');
      const jsonValue = JSON.parse(stringValue);
      if (jsonValue) {
        setAccounts(jsonValue);
        console.log('dataProvider', jsonValue);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <data.Provider value={[accounts, setAccounts]}>
      <introPagination.Provider value={[intro, setIntro]}>
        <movaghatAccount.Provider value={[movaghat, setMovaghat]}>
          {children}
        </movaghatAccount.Provider>
      </introPagination.Provider>
    </data.Provider>
  );
};

const styles = StyleSheet.create({});

export default DataProvider;

export const useIntroPagination = () => useContext(introPagination);
export const Accounts = () => useContext(data);
export const useMovaghat = () => useContext(movaghatAccount);
