import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


type Props = {
    height:number,
    width:number,
    inputStr:string,
    btnStr:string,
    nvgStr:string,
    navigation:any,
}
type focusBool = true|false;


export default function AuthInput({height,width,inputStr,btnStr,nvgStr,navigation}:Props):JSX.Element {

  const [focus,setFocus] = useState<focusBool>(false);


  return (
    <>
         <TextInput  onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={inputStr} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
        <TouchableOpacity onPress={()=>navigation.navigate(nvgStr)} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
            <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{btnStr}</Text>
        </TouchableOpacity>
    </>
  )
}