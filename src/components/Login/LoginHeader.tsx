import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
    height:number,
    width:number,
    text1:string,
    text2:string,
}


export const LoginHeader = ({height,width,text1,text2}:Props)=> {
  return (
    <View>
        <Image source={require('../../assets/images/zoho.png')}  style={{height:height*0.15,width:height*0.15,marginLeft:width*0.03}} resizeMode={'contain'}  />
        <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.03,marginLeft:width*0.05,}}>{text1}</Text>
        <Text style={{textAlign:'auto',fontFamily:'ZohoRegular',color:'gray',fontSize:height*0.019,marginLeft:width*0.05,marginTop:height*0.01}}>{text2}</Text>

    </View>
  )
}