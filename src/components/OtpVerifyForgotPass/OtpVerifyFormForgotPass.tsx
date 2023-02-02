import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React, { FC, useReducer, useState } from 'react'
import AuthInput from '../../Extra/AuthInput'
import { otpSchema } from '../../Extra/YupSchema/Schema'
import { Formik, FormikProps, FormikValues } from 'formik'
import requestStatus, { initial_state } from '../../utils/LoaderHandling'
import axios from 'axios'

type Props = {
    height:number,
    width:number,
    navigation:any,
    email:string,
}
type Values = {
    otp :string,
}
type focusBool = true|false;

 const OtpVerifyFormForgotPass:FC<Props> = ({width,height,navigation,email}):JSX.Element => {
    const [focus,setFocus] = useState<focusBool>(false);
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const [error,setError] =  useState<focusBool>(false);

    const style = StyleSheet.create({
        inputField :{
            borderColor:'black',
            borderWidth:1,
            width:width*0.9,
            alignSelf:'center',
            paddingLeft:width*0.04
        }
    });

    const handlePasswordChange = async(values:FormikValues):Promise<void>=>{
        try {
            setError(false);
            setEventReducer({type:'loading'});
            const {data} = await axios.post('/check-otp',{email:email,otp:values.otp});
            if(data){
                const {isValid} = data;
                const user = {email:email,otp:values.otp}

                if(isValid){
                    setEventReducer({type:'success'});
                    navigation.navigate('ResetPassword',{user:user});
                }
                else{
                    setError(true);
                    setEventReducer({type:'error'});

                }
                
            }
        } catch (error) {
            
        }
    }


  return (
    <>
        <View style={{marginTop:height*0.084}}>
        <Formik validateOnBlur={false} validateOnChange={false} validationSchema={otpSchema} initialValues={{otp:''}} onSubmit={handlePasswordChange}>
            
            {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<Values>) => (
              
            <>
                 <TextInput placeholderTextColor={'gray'} onChangeText={handleChange('otp')} maxLength={6} keyboardType='number-pad' onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={'OTP *'} style={{color:'gray',fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
                 {(errors.otp) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                            {errors.otp.toString()}
                          </Text></>}
                {error &&(
                    <>
                    <Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                            {'Invalid OTP,Please try again!'}
                          </Text>
                    </>
                )}
                  <TouchableOpacity onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
                      
                  {
                              eventReducer?.loading ? 
                              <>
                                <ActivityIndicator size={'small'} color={'#FFFFFF'} />
                              </>
                              :
                              <>
                                <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{'VERIFY'}</Text>
        
                              </>
                  }
        
                  </TouchableOpacity>
            </>
            )}
            </Formik>
        </View>
    </>
  )
}

export default OtpVerifyFormForgotPass;