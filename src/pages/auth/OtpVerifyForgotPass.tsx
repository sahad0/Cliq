import { View, Text, Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import  LoginHeader  from '../../components/Login/LoginHeader'
import OtpVerifyFormForgotPass from '../../components/OtpVerifyForgotPass/OtpVerifyFormForgotPass';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../router/router';

export default function OtpVerifyForgotPass():JSX.Element {

    const{width,height} = Dimensions.get('screen');

    const text1 = 'Verify via email';
    const text2 = 'Enter  one-time password sent to your email.'



  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={()=>Keyboard.dismiss()}>
        <LoginHeader height={height} width={width} text1={text1} text2={text2} />
        <KeyboardAvoidingView>
        <OtpVerifyFormForgotPass height={height} width={width}  />
        </KeyboardAvoidingView>
        </TouchableOpacity>
    </View> 
  )
}