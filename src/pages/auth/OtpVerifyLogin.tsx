import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { LoginHeader } from '../../components/Login/LoginHeader'
import OtpVerifyFormLogin from '../../components/OtpVerifyLogin/OtpVerifyFormLogin';

export default function OtpVerifyLogin({navigation}:any):JSX.Element {

    const{width,height} = Dimensions.get('screen');

    const text1 = 'Verify via email';
    const text2 = 'Enter  one-time password sent to your email.'

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <LoginHeader height={height} width={width} text1={text1} text2={text2} />
        <OtpVerifyFormLogin height={height} width={width} navigation={navigation} />
    </View> 
  )
}