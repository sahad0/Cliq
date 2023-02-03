import { View, Text, Dimensions, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import  SignupHeader  from '../../components/Signup/SignupHeader'
import  OtpVerifyFormSignUp  from '../../components/OtpVerifySignUp/OtpVerifyFormSignUp';



export default function OtpVerifySignUp():JSX.Element {

    const {width,height} = Dimensions.get('screen');




  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'white'}}>
        <SignupHeader height={height} width={width}  />
        <TouchableOpacity activeOpacity={1} onPress={()=>Keyboard.dismiss()}>
        <OtpVerifyFormSignUp height={height} width={width}  />
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}