import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'


type AppProps = { height: number,width:number,navigation:any };

 const SignupHeader:FC<AppProps> = ({height,width,navigation}):JSX.Element => {

  return (
    <>
        <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Image source={require('../../assets/images/zoho.png')}  style={{height:height*0.11,width:height*0.11,marginTop:0}} resizeMode={'contain'}  />
            <View style={{flexDirection:'row',margin:height*0.018,marginBottom:0,marginTop:0}}>
                <Text style={{fontFamily:'ZohoRegular'}}>Have a Zoho Account ? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{color:'red',fontFamily:'ZohoRegular'}}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{height:height*0.0008,backgroundColor:'lightgray',width:width*0.95,alignSelf:'center'}} />

    </>
  )
}



export default SignupHeader;

