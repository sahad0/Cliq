import { View, Text, TouchableOpacity, Keyboard, Dimensions } from 'react-native'
import React from 'react'
import { LoginHeader } from '../components/Login/LoginHeader';
import { LoginForm } from '../components/Login/LoginForm';

export const Login = ({navigation}:any):JSX.Element=> {

    const {height,width} = Dimensions.get('screen');

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
        <LoginHeader height={height} width={width} />
        <LoginForm height={height} width={width} navigation={navigation} />
    </TouchableOpacity>
</View>
  )
}