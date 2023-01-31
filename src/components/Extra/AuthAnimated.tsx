import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { FadeInDown, } from 'react-native-reanimated';
import { Formik, FormikValues } from 'formik';
import axios from 'axios';


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

export default function AuthAnimated({height,width,inputStr,btnStr,navigation,user,setUser}:Props):JSX.Element {




    const [focus,setFocus] = useState<FocusBool>(false);
    const [inValidCred,setInValidCred] = useState<FocusBool>(false);

    const initialValues: FormikValues = { password: '' };

    useEffect(()=>{
      const {email,password}:userDetail = user;

      if(email!==''&& password!==''){
        callLogin();
      }
      else{
        console.log("not filled");
      }
    },[user])

    const callLogin = async():Promise<void> =>{
      try {
        const {data} = await axios.post('http://3.91.133.172/api/auth/login',user);
        console.log(data);
      } catch (err:any) {
        if (err.response) {
          // 👇️ log status code here
          err.response.status===400 ? setInValidCred(true):null;
        }
      }
    }

    const LoginFn = (values : FormikValues):void =>{
      try {
        const {password} = values;
        setUser({...user,password});

        
       
      } catch (error) {
          console.log(error);
      }
    }
    
    


    return (
      <Animated.View  entering={FadeInDown.duration(300)} >
        

        <Formik initialValues={initialValues} onSubmit={LoginFn} validateOnBlur={false} validateOnChange={false}>
            
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <TextInput onChangeText={handleChange('password')} value={values.email} onBlur={()=>{handleBlur('password'),setFocus(false)}} secureTextEntry={true} onFocus={()=>setFocus(true)}  placeholder={inputStr} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
                {inValidCred?
                    <>
                      <Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>Incorrect password. Please try again.</Text>
                    </>
                    :
                    <>
                    </>
                }
                <TouchableOpacity onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
                    <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{btnStr}</Text>
                </TouchableOpacity>
              </>
          )}
                

          </Formik>
      </Animated.View>
    )
}