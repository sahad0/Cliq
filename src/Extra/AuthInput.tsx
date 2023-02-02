import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik';
import { emailSchema } from './YupSchema/Schema';


type Props = {
    height:number,
    width:number,
    val:string,
    inputStr:string,
    btnStr:string,
    nvgStr:string,
    navigation:any,
    eventReducer:any,
    initialValues:object,
    handleEmail:()=>void,

}
type focusBool = true|false;


export default function AuthInput({val,height,width,inputStr,btnStr,nvgStr,navigation,initialValues,eventReducer,handleEmail}:Props):JSX.Element {

  const [focus,setFocus] = useState<focusBool>(false);


  return (
    <Formik validateOnBlur={false} validateOnChange={false} validationSchema={emailSchema} initialValues={initialValues} onSubmit={handleEmail}>
            
    {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<FormikValues>) => (
      
    <>
         <TextInput placeholderTextColor={'gray'}  onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={inputStr} style={{color:'gray',fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
         {(errors.email) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.email.toString()}
                  </Text></>}
          <TouchableOpacity onPress={()=>navigation.navigate(nvgStr)} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
              
          {
                      eventReducer?.loading ? 
                      <>
                        <ActivityIndicator size={'small'} color={'#FFFFFF'} />
                      </>
                      :
                      <>
                        <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{btnStr}</Text>

                      </>
          }

          </TouchableOpacity>
    </>
    )}
    </Formik>
                

  )
}