import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SignupHeader } from '../../components/Signup/SignupHeader'
import { OtpVerifyFormSignUp } from '../../components/OtpVerifySignUp/OtpVerifyFormSignUp';


type UserDetails = {
  email?: string,
  password?: string,
  phone?:string,
  otp?:string,
}

export default function OtpVerifySignUp({navigation,route}:any):JSX.Element {

    const {width,height} = Dimensions.get('screen');
    const {user} = route.params;
    const [userState,setUserState] = useState<UserDetails>({});

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <SignupHeader height={height} width={width} navigation={navigation} />
        <OtpVerifyFormSignUp height={height} width={width} userState={userState} />
    </View>
  )
}