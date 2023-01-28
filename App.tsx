import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Router from './src/router/router';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <Router />
    </SafeAreaView>
  );
}

export default App;
