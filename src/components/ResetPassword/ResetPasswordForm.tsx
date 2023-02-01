import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useReducer, useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik'
import { resetPasswordSchema } from '../../Extra/YupSchema/Schema'
import requestStatus, { initial_state } from '../../utils/LoaderHandling'
import axios from 'axios'


type Values = {
    password:string,
    passwordConfirmation:string
}
type Success = true|false;
type focusBool = {
    focus1:boolean,
    focus2:boolean,
}
type AppProps = {
    width:number,
    height:number,
    navigation:any,
    user:object,
}
export default function ResetPasswordForm({width,height,navigation,user}:AppProps) {


  const [focus,setFocus] = useState<focusBool>({focus1:false,focus2:false});
  const [success,setSuccess] = useState<Success>(false);
  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);

    const initialValue:Values = {password:'',passwordConfirmation:''}


    const handlePasswordChange = async(values:FormikValues):Promise<void>=>{
        try {
            setEventReducer({type:'loading'});
            const changePass = await axios.post('http://3.87.5.179/api/auth/reset-password',{...user,password:values.passwordConfirmation});
            if(changePass.data.message){
                setEventReducer({type:'success'});
                setSuccess(true);
                setTimeout(()=>{
                    navigation.navigate('Login');
                },4000);
                
            }
        } catch (error) {
            setEventReducer({type:'error'});
        }
    }

  return (
    <View style={{marginTop:height*0.08}}>
    <Formik  validateOnBlur={false} validateOnChange={false} validationSchema={resetPasswordSchema} initialValues={initialValue} onSubmit={handlePasswordChange}>
            
    {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<Values>) => (
      
        <>
          <TextInput onChangeText={handleChange('password')} value={values.password} onFocus={()=>setFocus({...focus,focus1:true})}  onBlur={()=>{handleBlur('email'),setFocus({...focus,focus1:false})}} placeholder={"Password *"} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus.focus1 ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
          <TextInput secureTextEntry={true}  onChangeText={handleChange('passwordConfirmation')} value={values.passwordConfirmation} onFocus={()=>setFocus({...focus,focus2:true})}  onBlur={()=>{handleBlur('email'),setFocus({...focus,focus2:false})}} placeholder={"Confirm Password*"} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus.focus2 ? '#159AFF': 'lightgray',borderBottomWidth:1,marginTop:height*0.03}} />
          {(errors.passwordConfirmation) &&  <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.passwordConfirmation.toString()}
                  </Text></>}
            {success && <><Text style={{color:'green',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {'Password Reset Successfull'}
                  </Text></>}

          <TouchableOpacity onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
              
              {
                          eventReducer?.loading ? 
                          <>
                            <ActivityIndicator size={'small'} color={'#FFFFFF'} />
                          </>
                          :
                          <>
                            <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{success?'REDIRECTING..':'CONFIRM'}</Text>
    
                          </>
              }
    
              </TouchableOpacity>

        </>
    )}
    </Formik>
    </View>
  )
}