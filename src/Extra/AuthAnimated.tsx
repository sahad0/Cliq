import { View, Text, TextInput, TouchableOpacity, Button, ActivityIndicator } from 'react-native'
import React, { FC, useEffect, useReducer, useState } from 'react'
import Animated, { FadeInDown, } from 'react-native-reanimated';
import { Formik, FormikProps, FormikValues } from 'formik';
import axios from 'axios';
import { useAppDispatch } from '../Hooks/hooks';
import { loginController } from '../store/store';
import requestStatus, { initial_state } from '../utils/LoaderHandling';


type Props = {
    height:number,
    width:number,
    inputStr:string,
    btnStr:string,
    nvgStr:string,
    navigation:any,
    user:object,
    setUser:any,
}
type FocusBool = true|false;

type userDetail  ={
  email?:string,
  password?:string,
}

const AuthAnimated:FC<Props> = ({height,width,inputStr,btnStr,navigation,user,setUser}:Props):JSX.Element =>{


    const [focus,setFocus] = useState<FocusBool>(false);
    const [inValidCred,setInValidCred] = useState<FocusBool>(false);
    const initialValues: FormikValues = { password: '' };
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);


    
    const dispatch = useAppDispatch();

    useEffect(()=>{
      const {email,password}:userDetail = user;

      if(email!==''&& password!==''){
        callLogin();
      }
      
    },[user])

    const callLogin = async():Promise<void> =>{
      try {
        setEventReducer({type:'loading'});
        const {data} = await axios.post('/login',user);
        setInValidCred(false);
        
        if(data){
          delete data.message;
          dispatch(loginController(data));
          setEventReducer({type:'success'});

        }
        else{
        setEventReducer({type:'error'});

        }
      } catch (err:any) {
        if (err.response.status===400) {
          setEventReducer({type:'error'});

          err.response.status===400 ? setInValidCred(true):null;
        }
      }
    }

    const LoginFn = (values : FormikValues):void =>{
      try {
        const {password} = values;
        setUser({...user,password});

        
       
      } catch (error) {
      }
    }
    
    


    return (
      <Animated.View  entering={FadeInDown.duration(300)} >
        

        <Formik initialValues={initialValues} onSubmit={LoginFn} validateOnBlur={false} validateOnChange={false}>
            
            {({ handleChange, handleBlur, handleSubmit, values }:FormikProps<FormikValues>) => (
              <>
                <TextInput placeholderTextColor={'gray'} onChangeText={handleChange('password')} value={values.email} onBlur={()=>{handleBlur('password'),setFocus(false)}} secureTextEntry={true} onFocus={()=>setFocus(true)}  placeholder={inputStr} style={{color:'gray',fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
                {inValidCred?
                    <>
                      <Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>Incorrect password. Please try again.</Text>
                    </>
                    :
                    <>
                    </>
                }
                <TouchableOpacity onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
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
      </Animated.View>
    )
}

export default AuthAnimated;