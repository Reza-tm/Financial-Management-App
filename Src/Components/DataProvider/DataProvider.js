import React, {createContext, useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';

const data = createContext();
const dataDispatcher = createContext();

const introPagination = createContext();
const introPaginationDispatcher = createContext();

const DataProvider = ({children}) => {
  const [accounts, setAccounts] = useState([]);
  const [intro, setIntro] = useState(1);

  return (
    <data.Provider value={accounts}>
      <dataDispatcher.Provider value={setAccounts}>
        <introPagination.Provider value={intro}>
          <introPaginationDispatcher.Provider value={setIntro}>
            {children}
          </introPaginationDispatcher.Provider>
        </introPagination.Provider>
      </dataDispatcher.Provider>
    </data.Provider>
  );
};

const styles = StyleSheet.create({});

export default DataProvider;

export const useIntroPagination = () => useContext(introPagination);
export const useIntroPaginationActions = () =>
  useContext(introPaginationDispatcher);
export const Accounts = () => useContext(data);
export const AccountsActions = () => useContext(dataDispatcher);
