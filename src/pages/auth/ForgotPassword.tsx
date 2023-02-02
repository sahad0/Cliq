import { View, Text, Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import  LoginHeader from '../../components/Login/LoginHeader'
import  LoginForm  from '../../components/Login/LoginForm';
import ForgetPasswordForm from '../../components/ForgetPassword/ForgetPasswordForm';

export default function ForgotPassword():JSX.Element {

    const {width,height} = Dimensions.get('screen');
    const text1 = 'Forgot Password';
    const text2 = 'Enter your registered email address, mobile number, or username to change your Zoho account password.'

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
            <LoginHeader height={height} width={width} text1={text1} text2={text2} />
            <KeyboardAvoidingView>
            <ForgetPasswordForm height={height} width={width} />
            </KeyboardAvoidingView>
        </TouchableOpacity>
    </View>
  )
}