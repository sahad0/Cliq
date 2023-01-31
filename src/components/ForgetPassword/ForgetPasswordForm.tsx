import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useReducer, useState } from 'react'
import AuthInput from '../Extra/AuthInput'
import axios from 'axios'
import requestStatus, { initial_state } from '../../assets/utils/LoaderHandling'

type Props = {
    height:number,
    width:number,
    navigation:any,
}
type EmailTYpe = string;
type Error = true |false;


export default function ForgetPasswordForm({height,width,navigation}:Props):JSX.Element {

  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
  const [email,setEmail] = useState<EmailTYpe>('');
  const [handleError,setHandleError] = useState<Error>(false);

  const val = 'email';

  const initialValue = {
    email:''
  }

  const handleEmail = async():Promise<void>=>{

    try {
      setEventReducer({type:'loading'});
      const {data} = await axios.post('',email);
      if(data){
        const {exists} = data;
        if(exists){
          setEventReducer({type:'success'});
          navigation.navigate('OtpVerifyLogin');

        }
        else{
          setEventReducer({type:'success'});

        }
      }
    } catch (error) {
      setEventReducer({type:'error'});
      
    }

  }

  // const [focus,setFocus] = useState<focusBool>(false);


  return (
    <View style={{marginTop:height*0.04,height:'100%'}}>
        <AuthInput height={height} width={width} val={val} initialValues={initialValue} eventReducer={eventReducer} handleEmail={handleEmail} inputStr='Email Address' btnStr='SENT OTP' nvgStr='OtpVerifyLogin' navigation={navigation} />
    </View>
  )
}