import React, {createContext, useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';

const data = createContext();
const dataDispatcher = createContext();

const introPagination = createContext();
const introPaginationDispatcher = createContext();

const movaghatContext = createContext();
const setMovaghatContext = createContext();

const DataProvider = ({children}) => {
  const [accounts, setAccounts] = useState([]);
  const [intro, setIntro] = useState(0);
  const [movaghat, setMovaghat] = useState([
    {name: 'rez', shenasname: 23, meli: 1234, date: 1380 / 3 / 15},
  ]);

  return (
    <data.Provider value={accounts}>
      <dataDispatcher.Provider value={setAccounts}>
        <introPagination.Provider value={intro}>
          <introPaginationDispatcher.Provider value={setIntro}>
            <movaghatContext.Provider value={movaghat}>
              <setMovaghatContext.Provider value={setMovaghat}>
                {children}
              </setMovaghatContext.Provider>
            </movaghatContext.Provider>
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
export const accounts = () => useContext(data);
export const accountsActions = () => useContext(dataDispatcher);
export const movaghat = () => useContext(movaghatContext);
export const setMovaghat = () => useContext(setMovaghatContext);
