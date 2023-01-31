import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Router from './src/router/router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import {persistReducer,persistStore} from 'redux-persist';
import cartReducer from './src/store/store';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
      cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});


const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



function App(): JSX.Element {



  return (

    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <Router />
      </SafeAreaView>
    </PersistGate>
    </Provider>
  );
}

export default App;

