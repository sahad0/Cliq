import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useReducer, useState } from 'react'
import AuthInput from '../../Extra/AuthInput'
import axios from 'axios'
import requestStatus, { initial_state } from '../../utils/LoaderHandling'
import { Formik, FormikProps, FormikValues } from 'formik'
import { emailSchema } from '../../Extra/YupSchema/Schema'

type Props = {
    height:number,
    width:number,
    navigation:any,
}
type focusBool = true|false;
type Error = true |false;
interface Values {
  email:string
}


export default function ForgetPasswordForm({height,width,navigation}:Props):JSX.Element {

  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
  const [focus,setFocus] = useState<focusBool>(false);

  const [handleError,setHandleError] = useState<Error>(false);



  const handleEmail = async(values:FormikValues):Promise<void>=>{

    try {
      setHandleError(false);

      setEventReducer({type:'loading'});
      const {data} = await axios.post('http://3.87.5.179/api/auth/check-email',{email:values.email});
      if(data){
        const {exists} = data;
        if(exists){
          const sentOtp = await axios.post('http://3.87.5.179/api/auth/email-otp',{email:values.email});
          setEventReducer({type:'success'});
          navigation.navigate('OtpVerifyForgotPass',{email:values.email});

        }
        else{
          setEventReducer({type:'error'});
          setHandleError(true);

        }
      }
    } catch (error) {
      setEventReducer({type:'error'});
      
    }

  }



  return (
    <View style={{marginTop:height*0.04,height:'100%'}}>
      <Formik validateOnBlur={false} validateOnChange={false} validationSchema={emailSchema} initialValues={{email:''}} onSubmit={handleEmail}>
            
            {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<Values>):JSX.Element => (
              
            <>
                 <TextInput onChangeText={handleChange('email')}  onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={'Email'} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
                 {(errors.email) &&  <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                            {errors.email.toString()}
                          </Text></>}

                  {handleError && (
                    <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {'No account Found!'}
                  </Text></>
                  )}
                  <TouchableOpacity onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
                      
                  {
                              eventReducer?.loading ? 
                              <>
                                <ActivityIndicator size={'small'} color={'#FFFFFF'} />

                              </>
                              :
                              <>
                                <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{'SENT OTP'}</Text>
        
                              </>
                  }
        
                  </TouchableOpacity>
            </>
            )}
            </Formik>
    </View>
  )
}