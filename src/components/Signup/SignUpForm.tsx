import { View, Text, Image, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

type AppProps = { height: number,width:number };

export const SignUpForm = ({height,width}:AppProps):JSX.Element => {


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
    <>
        <View style={{flexDirection:'row',alignItems:'center',paddingTop:height*0.03}}>
              <Image source={require('../../assets/images/cliq.png') } resizeMode='contain' style={{height:height*0.1,width:height*0.1}} />
              <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.025}}>Cliq</Text>
        </View>
        <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.022,marginLeft:width*0.05,}}>Get your team started.</Text>
    <View style={{marginTop:height*0.02}}>    
        <TextInput placeholder='Email*' style={[style.inputField,{marginTop:height*0.04,}]} />
        <TextInput placeholder='Password*' style={[style.inputField,{marginTop:height*0.02}]} />
        
        <View style={{marginTop:height*0.02,flexDirection:'row',alignSelf:'center'}}>

            <TextInput editable={false} placeholder='+91' style={[{ borderColor:'black',borderWidth:1,width:width*0.2,alignSelf:'center',paddingLeft:width*0.04,borderRightWidth:0}]} />
            <TextInput placeholder='Password*' style={[{ borderColor:'black',borderWidth:1,width:width*0.7,alignSelf:'center',paddingLeft:width*0.04}]} />
            
        </View>
    </View>
        <TouchableOpacity style={{alignSelf:'center',marginTop:height*0.02,}}>
            <Text style={{fontFamily:'ZohoRegular',fontSize:height*0.017,backgroundColor:'#f0483e',color:'white',alignSelf:'center',paddingHorizontal:height*0.09,paddingVertical:height*0.024,width:width*0.9,}}>START YOUR FREE TRIAL NOW</Text>
        </TouchableOpacity>

        
        

    </>
  )
}