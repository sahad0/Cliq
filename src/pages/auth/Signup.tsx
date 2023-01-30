import { View,Dimensions, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import { SignupHeader } from '../../components/Signup/SignupHeader';
import { SignUpForm } from '../../components/Signup/SignUpForm';
import { SignupFooter } from '../../components/Signup/SignupFooter';




const Signup = ({navigation}:any):JSX.Element => {

    const {width,height} = Dimensions.get('screen');


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
            <SignupHeader height={height} width={width}  navigation={navigation}/>
            <SignUpForm height={height} width={width} navigation={navigation}/>
            <SignupFooter height={height} />
        </TouchableOpacity>
    </View>
  )
}

export default Signup