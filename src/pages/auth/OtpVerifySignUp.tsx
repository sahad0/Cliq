import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { SignupHeader } from '../../components/Signup/SignupHeader'
import { OtpVerifyFormSignUp } from '../../components/OtpVerifySignUp/OtpVerifyFormSignUp';

export default function OtpVerifySignUp({navigation}:any):JSX.Element {

    const {width,height} = Dimensions.get('screen');

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <SignupHeader height={height} width={width} navigation={navigation} />
        <OtpVerifyFormSignUp height={height} width={width} />
    </View>
  )
}