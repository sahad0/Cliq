import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
    height:number,
    width:number,
}


export const LoginHeader = ({height,width}:Props)=> {
  return (
    <View>
        <Image source={require('../../assets/images/zoho.png')}  style={{height:height*0.15,width:height*0.15,marginLeft:width*0.03}} resizeMode={'contain'}  />
        <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.03,marginLeft:width*0.05,}}>Sign in</Text>
        <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.02,marginLeft:width*0.05,}}>to access Cliq</Text>

    </View>
  )
}