import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { FC, useReducer, useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik';
import { otpSchema } from '../../Extra/YupSchema/Schema';
import axios from 'axios';
import requestStatus, { initial_state } from '../../utils/LoaderHandling';
import { KeyboardAvoidingView } from 'react-native';
import { useAppDispatch } from '../../Hooks/hooks';
import { loginController } from '../../store/store';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AuthStackParams } from '../../router/navigators/AuthNav';


type AppProps = { height: number,width:number,};


type Error = {
  set:boolean,
  message:string,
};

interface Values {
  otp:string
}


  const OtpVerifyFormSignUp:FC<AppProps> = ({height,width}):JSX.Element =>{
      const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
      const [error,setError] = useState<Error>({set:false,message:''});
      const dispatch = useAppDispatch();

      const {params:{user}} = useRoute<RouteProp<AuthStackParams,'OtpVerifySignUp'>>();


        const style = StyleSheet.create({
            inputField :{
                borderColor:'black',
                borderWidth:1,
                width:width*0.9,
                alignSelf:'center',
                paddingLeft:width*0.04
            }
        });
        const SignUpfn = async (values:object):Promise<void> => {
            try {
                setEventReducer({type:'loading'});
                const val = {...user,...values};
                const {data}=  await axios.post('/auth/register',val);
                if(data){
                  setError({set:false,message:''})
                  dispatch(loginController({token:data.token,orgNewUser:true,profile:null}));
                }
              
                setEventReducer({type:'success'});

            } catch  (err:any) {
              if (err) {
                if(err.request.response && err.response.status===400){
                    let x = JSON.parse(err.request.response).message;
                    setError({set:true,message:x});
                }
                setEventReducer({type:'error'});

      
                // err.response.status===400 ? setInValidCred(true):null;
              }
            }

            
        }





      return (
        <View>
          <View style={{flexDirection:'row',alignItems:'center',paddingTop:height*0.03}}>
                  <Image source={require('../../assets/images/cliq.png') } resizeMode='contain' style={{height:height*0.1,width:height*0.1}} />
                  <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.025}}>Cliq</Text>
            </View>
            <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.022,marginLeft:width*0.05,}}>Get your team started.</Text>
            <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.02}}>Verify your sign-up.</Text>

            <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.02}}>Enter one time Password sent to your </Text>
            <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.018,marginLeft:width*0.05,}}>email.</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'ZohoRegular',color:'black',fontSize:height*0.018,marginLeft:width*0.05,marginTop:height*0.03}}>{user.email}</Text>
                <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.018,marginLeft:width*0.02,marginTop:height*0.03,textDecorationLine:'underline'}}>Change</Text>

            </View>
        
            <Formik validateOnBlur={false} validateOnChange={false} validationSchema={otpSchema} initialValues={{otp:''}} onSubmit={SignUpfn}>
                
                {({ handleChange, handleBlur, handleSubmit,values ,errors}:FormikProps<Values>):JSX.Element => (<>
                  <TextInput keyboardType='phone-pad' placeholder='OTP *' placeholderTextColor={'gray'} maxLength={6} onChangeText={handleChange('otp')} value={values.otp} style={[style.inputField,{marginTop:height*0.04,color:'gray',fontSize:height*0.018}]} />

                {errors.otp && (
                <Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {errors.otp.toString()}
                </Text>)}
                {error.set?
                <>
                  <Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.02,marginLeft:height*0.025}}>
                    {error.message}
                </Text>
                </>:null}


                      <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.017,marginTop:height*0.03,textDecorationLine:'underline',marginLeft:width*0.05,}}>Resend OTP</Text>


                      <TouchableOpacity onPress={handleSubmit} style={{borderRadius:height*0.008,paddingHorizontal:height*0.1,backgroundColor:'#f0483e',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.06}}>
                      {
                                    eventReducer?.loading ? 
                                    <>
                                      <ActivityIndicator size={height*0.026} color={'#FFFFFF'} />
                                    </>
                                    :
                                    <>
                                    <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular',fontSize:height*0.017}}>VERIFY</Text>
                                    </>
                                    
                                  }
                      </TouchableOpacity>
                </>)}
            </Formik>
        </View>
      )
    }


export default OtpVerifyFormSignUp;