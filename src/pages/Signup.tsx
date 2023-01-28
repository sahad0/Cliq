import { View, Text, Dimensions } from 'react-native'
import React, { FC } from 'react'
import { Header } from '../components/Signup/Header';
import { SignUpForm } from '../components/Signup/SignUpForm';
import { Footer } from '../components/Signup/Footer';




const Signup = ():JSX.Element => {

    const {width,height} = Dimensions.get('screen');


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <Header height={height} width={width} />
        <SignUpForm height={height} width={width} />
        <Footer height={height} />
    </View>
  )
}

export default Signup