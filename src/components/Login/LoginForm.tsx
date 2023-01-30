import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AuthInput from '../Extra/AuthInput'


type Props = {
    height:number,
    width:number,
    navigation:any,
}


export const LoginForm = ({height,width,navigation}:Props):JSX.Element=> {





  return (
    <View style={{marginTop:height*0.07}}>

        <AuthInput height={height} width={width} inputStr='Email Address or Phone Number' btnStr='Next' nvgStr='' navigation={navigation}/>

        <TouchableOpacity  onPress={()=>navigation.navigate('ForgotPassword')} style={{marginTop:height*0.03}}>
           <Text style={{color:'#159AFF',alignSelf:'center',fontFamily:'ZohoBold',}}>Forgot Password?</Text>

        </TouchableOpacity>

        <Text style={{color:'black',margin:height*0.03,marginTop:height*0.05,fontFamily:'ZohoRegular'}}>
          Sign in using 
        </Text>

        <TouchableOpacity>
            <Image source={require('../../assets/images/google.png')} style={{height:height*0.08,width:height*0.08,alignSelf:'center'}} resizeMode='contain' />
        </TouchableOpacity> 
        <View style={{margin:height*0.03,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{fontFamily:'ZohoRegular'}}>Don't have Zoho account? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{color:'#159AFF',alignSelf:'center',fontFamily:'ZohoBold',}}>Sign up now!</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
} 