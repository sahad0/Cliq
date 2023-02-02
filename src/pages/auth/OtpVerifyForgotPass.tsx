import { View, Text, Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import  LoginHeader  from '../../components/Login/LoginHeader'
import OtpVerifyFormForgotPass from '../../components/OtpVerifyForgotPass/OtpVerifyFormForgotPass';

export default function OtpVerifyForgotPass({navigation,route}:any):JSX.Element {

    const{width,height} = Dimensions.get('screen');

    const text1 = 'Verify via email';
    const text2 = 'Enter  one-time password sent to your email.'

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={()=>Keyboard.dismiss()}>
        <LoginHeader height={height} width={width} text1={text1} text2={text2} />
        <KeyboardAvoidingView>
        <OtpVerifyFormForgotPass height={height} width={width} navigation={navigation} email={route.params.email} />
        </KeyboardAvoidingView>
        </TouchableOpacity>
    </View> 
  )
}