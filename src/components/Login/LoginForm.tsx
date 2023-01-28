import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


type Props = {
    height:number,
    width:number,
}

type focusBool = true|false;

export const LoginForm = ({height,width}:Props):JSX.Element=> {



  const [focus,setFocus] = useState<focusBool>(false);


  return (
    <View style={{marginTop:height*0.07}}>

      <TextInput  onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder='Email Address or Phone Number' style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
        <TouchableOpacity style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.06}}>
            {/* <Text style={{width:width*0.9,alignSelf:'center',paddingHorizontal:height*0.195,marginTop:height*0.05,paddingVertical:height*0.02,backgroundColor:'#159AFF',color:'white'}}>Next</Text> */}
            <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:height*0.03}}>
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
          <TouchableOpacity>
            <Text style={{color:'#159AFF',alignSelf:'center',fontFamily:'ZohoBold',}}>Sign up now!</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}