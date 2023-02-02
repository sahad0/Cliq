

import { View, Text, Image, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

type AppProps = { height: number };

export const SignupFooter = ({height}:AppProps):JSX.Element => {

  return (
    <>
        <Text style={{alignSelf:'center',marginTop:height*0.03
        ,color:'gray'}}>or sign in using </Text>
        
        <TouchableOpacity>
            <Image source={require('../../assets/images/google.png')} style={{height:height*0.05,width:height*0.05,alignSelf:'center',marginTop:height*0.02}} resizeMode='contain' />
        </TouchableOpacity> 



        

    </>
  )
}