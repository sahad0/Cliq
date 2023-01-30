import { View, Text, TextInput, Touchable, TouchableOpacity, Image, Button } from 'react-native'
import React, { useState } from 'react'
import AuthInput from '../Extra/AuthInput'
import AuthAnimated from '../Extra/AuthAnimated'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'


type Props = {
    height:number,
    width:number,
    navigation:any,
}
type Visible = true|false;

type focusBool = true|false;


export const LoginForm = ({height,width,navigation}:Props):JSX.Element=> {

  const [visible,setVisible] = useState<Visible>(false);
  const [focus,setFocus] = useState<focusBool>(false);




  return (
    <View style={{marginTop:height*0.07}}>
      {
        visible ? 
        <>
          
          <AuthAnimated setVisible={setVisible} height={height} width={width} inputStr='Password' btnStr='Next' nvgStr='' navigation={navigation}/>
        </>
        :
        <>
            <Animated.View >
                <TextInput  onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={"Email or Phone number"} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
                <TouchableOpacity onPress={()=>setVisible(true)} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
                    <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{"NEXT"}</Text>
                </TouchableOpacity>
            </Animated.View>
        </>
      }

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