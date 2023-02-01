import { View, Text, TextInput, Touchable, TouchableOpacity, Image, Button, ActivityIndicator } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import AuthAnimated from '../Extra/AuthAnimated'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { Formik,  FormikValues , FormikErrors, FormikProps} from 'formik'
import { emailSchema } from '../Extra/YupSchema/Schema'
import requestStatus, { initial_state } from '../../assets/utils/LoaderHandling'




type UserType = {
  email:string,
  password?:string,
}
type Props = {
  height:number,
  width:number,
  navigation:any,
  setUser:any,
  user:UserType,
}
type Visible = true|false;

type focusBool = true|false;

type checkMail = boolean;



export const LoginForm = ({height,width,navigation,setUser,user}:Props):JSX.Element=> {

  const initialValues: FormikValues = { email: '' };
  const [visible,setVisible] = useState<Visible>(false);
  const [focus,setFocus] = useState<focusBool>(false);
  const [emailExist,setEmailExist] = useState<focusBool>(true);

  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);


  const checkEmailExist = async(values: FormikValues): Promise<void>=>{
    try {
      setEventReducer({type:'loading'});
      const check = await axios.post('http://3.87.5.179/api/auth/check-email',values);
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
      console.log(error);
    }
  }




  return (
    <View style={{marginTop:height*0.07}}>
      {
        visible ? 
        <>
          <View style={{flexDirection:'row',margin:height*0.0258}}>
            <Text style={{fontFamily:'ZohoRegular',color:'gray'}}>{user.email}</Text>
            <TouchableOpacity style={{marginLeft:height*0.02}} onPress={()=>setVisible(false)}>
              <Text style={{fontFamily:'ZohoRegular',color:'#159AFF',}}>Change</Text>
            </TouchableOpacity>
          </View>
          <AuthAnimated setUser={setUser} user={user}  height={height} width={width} inputStr='Password' btnStr='Next' nvgStr='' navigation={navigation}/>
          
        </>
        :
        <>
          <Animated.View >

            <Formik validateOnBlur={false} validateOnChange={false} validationSchema={emailSchema} initialValues={initialValues} onSubmit={checkEmailExist}>
            
            {({ handleChange, handleBlur, handleSubmit,values ,errors }:FormikProps<FormikValues>) => (
              
                <>
                  <TextInput  onChangeText={handleChange('email')} value={values.email} onFocus={()=>setFocus(true)}  onBlur={()=>{handleBlur('email'),setFocus(false)}} placeholder={"Email *"} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
                  {(errors.email) &&  <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.email.toString()}
                  </Text></>}
                    
                    {emailExist?
                    <></>
                    :
                    <>
                      <Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>This account cannot be found.Please SignUp or use a different one!</Text>
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
                      <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{"NEXT"}</Text>
                      </>
                     }
                  </TouchableOpacity>
                </>

            )}
                

            </Formik>

          </Animated.View>
        </>
      }

        <TouchableOpacity  onPress={()=>navigation.navigate('ForgotPassword')} style={{marginTop:height*0.06}}>
           <Text style={{color:'#159AFF',alignSelf:'center',fontFamily:'ZohoBold',}}>Forgot Password?</Text>

        </TouchableOpacity>

        <Text style={{color:'black',margin:height*0.03,marginTop:height*0.05,marginLeft:height*0.185,fontFamily:'ZohoRegular'}}>
          Sign in using 
        </Text>

        <TouchableOpacity>
            <Image source={require('../../assets/images/google.png')} style={{height:height*0.08,width:height*0.08,alignSelf:'center'}} resizeMode='contain' />
        </TouchableOpacity> 
        <View style={{margin:height*0.03,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{fontFamily:'ZohoRegular'}}>Don't have Zoho account? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{color:'#159AFF',alignSelf:'center',fontFamily:'ZohoBold',}}>Sign up now!</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
} 