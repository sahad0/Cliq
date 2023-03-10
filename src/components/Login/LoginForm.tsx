import { View, Text, TextInput, Touchable, TouchableOpacity, Image, Button, ActivityIndicator, Keyboard } from 'react-native'
import React, { FC, useEffect, useReducer, useState } from 'react'
import AuthAnimated from '../../Extra/AuthAnimated';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import axios from 'axios';
import { Formik,  FormikValues , FormikProps} from 'formik'
import { emailSchema } from '../../Extra/YupSchema/Schema'
import requestStatus, { initial_state } from '../../utils/LoaderHandling'
import { useNavigation } from '@react-navigation/native';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParams } from '../../router/navigators/AuthNav';



type UserType = {
  email:string,
  password?:string,
}
type Props = {
  height:number,
  width:number,
  setUser:any,
  user:UserType,
}
type Visible = true|false;

type focusBool = true|false;

type checkMail = boolean;



 const LoginForm:FC<Props> = ({height,width,setUser,user}):JSX.Element=> {

  const initialValues: FormikValues = { email: '' };
  const [visible,setVisible] = useState<Visible>(false);
  const [focus,setFocus] = useState<focusBool>(false);
  const [emailExist,setEmailExist] = useState<focusBool>(true);

  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams,'Login'>>()


  const checkEmailExist = async(values: FormikValues): Promise<void>=>{
    try {
      Keyboard.dismiss();
      setEventReducer({type:'loading'});
      const check = await axios.post('/auth/check-email',values);
      if(check){
        const {exists} = check.data;
        if(exists){
          const {email} = values;
          setEventReducer({type:'success'});
          setUser({...user,email});
          setEmailExist(true);
          setVisible(true);

        }
        else{
          setEmailExist(false);
          setEventReducer({type:'error'});

          
        }
      }
      
    } catch (error) {
      setEventReducer({type:'error'});
    }
  }




  return (
    <View style={{marginTop:height*0.07}}>
      {
        visible ? 
        <>
          <View style={{flexDirection:'row',margin:height*0.03}}>
            <Text style={{fontFamily:'ZohoRegular',color:'gray',fontSize:height*0.018,}}>{user.email}</Text>
            <TouchableOpacity style={{marginLeft:height*0.02}} onPress={()=>setVisible(false)}>
              <Text style={{fontFamily:'ZohoRegular',color:'#159AFF',fontSize:height*0.017}}>Change</Text>
            </TouchableOpacity>
          </View>
          <AuthAnimated setUser={setUser} user={user}  height={height} width={width} inputStr='Password' btnStr='Next' nvgStr='' />
          
        </>
        :
        <>
          <Animated.View >

            <Formik validateOnBlur={false} validateOnChange={false} validationSchema={emailSchema} initialValues={initialValues} onSubmit={checkEmailExist}>
            
            {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<FormikValues>) => (
              
                <>
                  <TextInput placeholderTextColor={'gray'}  onChangeText={handleChange('email')} value={values.email} onFocus={()=>setFocus(true)}  onBlur={()=>{handleBlur('email'),setFocus(false)}} placeholder={"Email *"} style={{color:'gray',fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1,fontSize:height*0.018}} />
                  {(errors.email) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.06,marginLeft:height*0.03}}>
                    {errors.email.toString()}
                  </Text></>}
                    
                    {emailExist?
                    <></>
                    :
                    <>
                      <Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>This account cannot be found.Please SignUp or use a different one!</Text>
                    </>
                    }

                  <TouchableOpacity onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1,borderRadius:height*0.007}}>
                     
                     {
                      eventReducer?.loading ? 
                      <>
                        <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                      </>
                      :
                      <>
                      <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular',fontSize:height*0.018}}>{"NEXT"}</Text>
                      </>
                     }
                  </TouchableOpacity>
                </>

            )}
                

            </Formik>

          </Animated.View>
        </>
      }

        <TouchableOpacity  onPress={()=>navigation.navigate('ForgotPassword')} style={{marginTop:height*0.06,alignSelf:'center'}}>
           <Text style={{color:'#159AFF',alignSelf:'center',fontFamily:'ZohoBold',fontSize:height*0.018,}}>Forgot Password?</Text>

        </TouchableOpacity>

        <Text style={{color:'black',margin:height*0.03,marginTop:height*0.05,alignSelf:'center',fontFamily:'ZohoRegular',fontSize:height*0.018}}>
          Sign in using 
        </Text>

        <TouchableOpacity style={{alignSelf:'center',}}>
            <Image source={require('../../assets/images/google.png')} style={{height:height*0.05,width:height*0.05,alignSelf:'center'}} resizeMode='contain' />
        </TouchableOpacity> 
        <View style={{margin:height*0.03,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{fontFamily:'ZohoRegular',color:'gray',fontSize:height*0.018}}>Don't have Zoho account? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{color:'#159AFF',alignSelf:'center',fontFamily:'ZohoBold',fontSize:height*0.018}}>Sign up now!</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
} 

export default LoginForm;