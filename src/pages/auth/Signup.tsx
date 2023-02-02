import { View,Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import  SignupHeader  from '../../components/Signup/SignupHeader';
import  SignUpForm  from '../../components/Signup/SignUpForm';
import  SignupFooter  from '../../components/Signup/SignupFooter';




const Signup = ():JSX.Element => {

    const {width,height} = Dimensions.get('screen');


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
            <SignupHeader height={height} width={width}  />
            <KeyboardAvoidingView >
            <SignUpForm height={height} width={width} />
            </KeyboardAvoidingView>
            <SignupFooter height={height} />
        </TouchableOpacity>
    </View>
  )
}

export default Signup