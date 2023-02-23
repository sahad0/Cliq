import { View, Text, TextInput, TouchableOpacity, Button, ActivityIndicator, Keyboard } from 'react-native'
import React, { FC, useEffect, useReducer, useState } from 'react'
import Animated, { FadeInDown, } from 'react-native-reanimated';
import { Formik, FormikProps, FormikValues } from 'formik';
import axios from 'axios';
import { useAppDispatch } from '../Hooks/hooks';
import { loginController } from '../store/store';
import requestStatus, { initial_state } from '../utils/LoaderHandling';
import { passwordSchema } from './YupSchema/Schema';


type Props = {
    height:number,
    width:number,
    inputStr:string,
    btnStr:string,
    nvgStr:string,
    user:object,
    setUser:any,
}
type FocusBool = true|false;

type userDetail  ={
  email?:string,
  password?:string,
}

const AuthAnimated:FC<Props> = ({height,width,inputStr,btnStr,user,setUser}:Props):JSX.Element =>{


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
        Keyboard.dismiss();
        setEventReducer({type:'loading'});
        const {data} = await axios('/auth/login',{method:'POST',data:user});
        console.log(data);
        setInValidCred(false);
        
        if(data){
          
            delete data.message;
            const createHeader = axios.create({
              headers: {
                Authorization : `Bearer ${data.token}`
                }
              
            })
            const data1 = await createHeader.get('organization/user-organizations');
          
            if(data1){
              const {organizations} = data1.data;
              const orgNewUser = organizations.length>0 ? false:true
              dispatch(loginController({token:data.token,orgNewUser:orgNewUser,profile:null}));
              setEventReducer({type:'success'});
            }
        }
        else{
        setEventReducer({type:'error'});

        }
      } catch (err:any) {
          setEventReducer({type:'error'});
          setInValidCred(true);
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
        

        <Formik validationSchema={passwordSchema} initialValues={initialValues} onSubmit={LoginFn} validateOnBlur={false} validateOnChange={false}>
            
            {({ handleChange, handleBlur, handleSubmit, values, errors }:FormikProps<FormikValues>) => (
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
                
                    {(errors.password) &&  <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.password.toString()}
                    </Text></>}
                
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