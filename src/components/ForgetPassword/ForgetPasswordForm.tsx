import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AuthInput from '../Extra/AuthInput'

type Props = {
    height:number,
    width:number,
    navigation:any,
}
// type focusBool = true|false;


export default function ForgetPasswordForm({height,width,navigation}:Props):JSX.Element {



  // const [focus,setFocus] = useState<focusBool>(false);


  return (
    <View style={{marginTop:height*0.04,height:'100%'}}>
        <AuthInput height={height} width={width} inputStr='Email Address or Phone Number' btnStr='SENT OTP' nvgStr='OtpVerifyLogin' navigation={navigation} />
    </View>
  )
}