import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

type AppProps = { height: number,width:number };


export  const OtpVerifyFormSignUp = ({height,width}:AppProps):JSX.Element =>{



    const style = StyleSheet.create({
        inputField :{
            borderColor:'black',
            borderWidth:1,
            width:width*0.9,
            alignSelf:'center',
            paddingLeft:width*0.04
        }
    })





  return (
    <View>
       <View style={{flexDirection:'row',alignItems:'center',paddingTop:height*0.03}}>
              <Image source={require('../../assets/images/cliq.png') } resizeMode='contain' style={{height:height*0.1,width:height*0.1}} />
              <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.025}}>Cliq</Text>
        </View>
        <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.022,marginLeft:width*0.05,}}>Get your team started.</Text>
        <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.02}}>Verify your sign-up.</Text>

        <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.02}}>Enter one time Password sent to your </Text>
        <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.018,marginLeft:width*0.05,}}>email.</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.03}}>sahadwg@gmail.com</Text>
            <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.018,marginLeft:width*0.02,marginTop:height*0.03,textDecorationLine:'underline'}}>Change</Text>

        </View>

        <TextInput style={[style.inputField,{marginTop:height*0.04,}]} />
        <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.017,marginTop:height*0.03,textDecorationLine:'underline',marginLeft:width*0.05,}}>Resend OTP</Text>


        <TouchableOpacity style={{paddingHorizontal:height*0.1,backgroundColor:'#f0483e',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.06}}>
            <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular',fontSize:height*0.017}}>VERIFY</Text>
        </TouchableOpacity>
    </View>
  )
}