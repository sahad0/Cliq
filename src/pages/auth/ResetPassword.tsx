import { View, Text, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import  LoginHeader  from '../../components/Login/LoginHeader'
import { Dimensions } from 'react-native'
import ResetPasswordForm from '../../components/ResetPassword/ResetPasswordForm'
import { KeyboardAvoidingView } from 'react-native'






export default function ResetPassword():JSX.Element {
    const {width, height} = Dimensions.get('screen');
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={()=>Keyboard.dismiss()}>
        <LoginHeader height={height} width={width} text1='Enter New Password' text2='Enter your new password, please include capital letters and symbols to improve safety!' />
        <KeyboardAvoidingView>
        <ResetPasswordForm height={height} width={width}    />
        </KeyboardAvoidingView>
        </TouchableOpacity>
    </View>
  )
}