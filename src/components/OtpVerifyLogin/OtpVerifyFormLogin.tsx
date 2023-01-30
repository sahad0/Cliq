import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AuthInput from '../Extra/AuthInput'

type Props = {
    height:number,
    width:number,
    navigation:any,
}

export default function OtpVerifyFormLogin({width,height,navigation}:Props):JSX.Element {

    const style = StyleSheet.create({
        inputField :{
            borderColor:'black',
            borderWidth:1,
            width:width*0.9,
            alignSelf:'center',
            paddingLeft:width*0.04
        }
    })


  return (
    <>
        <View style={{marginTop:height*0.084}}>
            <AuthInput height={height} width={width} inputStr='Enter OTP' btnStr='VERIFY' nvgStr='' navigation={navigation={}} />
        </View>
    </>
  )
}