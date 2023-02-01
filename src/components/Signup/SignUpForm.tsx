import { View, Text, Image, TextInput, StyleSheet, Button, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useReducer, useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik';
import { signupSchema } from '../Extra/YupSchema/Schema';
import axios from 'axios';
import requestStatus, { initial_state } from '../../assets/utils/LoaderHandling';

type AppProps = { height: number,width:number,navigation:any };
type PropsForm = {
    email:string,
    password:string,
    phone:string,
}
type Error = false|true;

export const SignUpForm = ({height,width,navigation}:AppProps):JSX.Element => {

    const initialValue = {
        email:'',
        password:'',
        phone:'',
    }
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const [emailExist,setEmailExist] = useState<Error>(false);



    const style = StyleSheet.create({ 
        inputField :{
            borderColor:'black',
            borderWidth:1,
            width:width*0.9,
            alignSelf:'center',
            paddingLeft:width*0.04
        }
    })

    const sentSignUpOtp =async (values:PropsForm):Promise<void> => {
        try {
            setEventReducer({type: 'loading'});
            const check = await axios.post('http://3.87.5.179/api/auth/check-email',values);
            if(check){
              const {exists} = check.data;
              if(exists){
               setEmailExist(true);
               setEventReducer({type:'error'});

              }
              else{
                setEmailExist(false);
                const {email} = values;
                const x = await axios.post('http://3.87.5.179/api/auth/email-otp',{email});
                if(x){
                  if(x.status===200){
                    setEventReducer({type: 'success'});
  
                    navigation.navigate('OtpVerifySignUp',{user:values});
                  }
                }
              }
            }
            
        } catch (error) {
            setEventReducer({type:'error'});
        }
    }



  return (
    <>
     <View style={{flexDirection:'row',alignItems:'center',paddingTop:height*0.03}}>
              <Image source={require('../../assets/images/cliq.png') } resizeMode='contain' style={{height:height*0.1,width:height*0.1}} />
              <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.025}}>Cliq</Text>
        </View>
        <Text style={{fontFamily:'ZohoBold',color:'black',fontSize:height*0.022,marginLeft:width*0.05,}}>Get your team started.</Text>
    
    <Formik validateOnBlur={false} validateOnChange={false} validationSchema={signupSchema} initialValues={initialValue} onSubmit={sentSignUpOtp}>

            
    {({ handleChange, handleSubmit,values ,errors}:FormikProps<any>) => (
    <>
       
        
        <View style={{marginTop:height*0.02}}>   

            <TextInput onChangeText={handleChange('email')} value={values.email} placeholder='Email*' style={[style.inputField,{marginTop:height*0.04,}]} />
            {(errors.email) &&  <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>
                    {errors.email.toString()}
                  </Text></>}
            {emailExist && (<><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>{'Email aldready Exist!'}</Text></>)}
            <TextInput onChangeText={handleChange('password')} value={values.password} placeholder='Password*' style={[style.inputField,{marginTop:height*0.02}]} />
            {(errors.password) &&  <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>
                    {errors.password.toString()}
                  </Text></>}
            <View style={{marginTop:height*0.02,flexDirection:'row',alignSelf:'center'}}>

                <TextInput editable={false} placeholder='+91' style={[{ borderColor:'black',borderWidth:1,width:width*0.2,alignSelf:'center',paddingLeft:width*0.04,borderRightWidth:0}]} />
                <TextInput keyboardType='number-pad' onChangeText={handleChange('phone')} value={values.phone} placeholder='Phone Number*' style={[{ borderColor:'black',borderWidth:1,width:width*0.7,alignSelf:'center',paddingLeft:width*0.04}]} />
               
            </View>
            {(errors.phone) &&  <><Text style={{color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>
                    {errors.phone.toString()}
                  </Text></>}
        </View>
        
        <TouchableOpacity onPress={handleSubmit} style={{paddingHorizontal:height*0.1,backgroundColor:'#f0483e',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.06}}>
        {
                      eventReducer?.loading ? 
                      <>
                        <ActivityIndicator size={'small'} color={'#FFFFFF'} />
                      </>
                      :
                      <>
                        <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular',fontSize:height*0.0155}}>START YOUR FREE TRIAL NOW</Text>
                      </>
                    }
           
            
        </TouchableOpacity>

        
        

    </>)}
    </Formik>
    </>
  )
}