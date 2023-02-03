import { View, Text, Image, TextInput, StyleSheet, Button, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { FC, useReducer, useState } from 'react'
import { Formik, FormikProps, FormikValues } from 'formik';
import { signupSchema } from '../../Extra/YupSchema/Schema';
import axios from 'axios';
import requestStatus, { initial_state } from '../../utils/LoaderHandling';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../router/router';

type AppProps = { height: number,width:number,};
type PropsForm = {
    email:string,
    password:string,
    phone:string,
}
type Error = false|true;

 const SignUpForm:FC<AppProps> = ({height,width,}):JSX.Element => {

    const initialValue = {
        email:'',
        password:'',
        phone:'',
    }
    const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);
    const [emailExist,setEmailExist] = useState<Error>(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams,'SignUp'>>();



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
            const check = await axios.post('/auth/check-email',values);
            if(check){
              const {exists} = check.data;
              if(exists){
               setEmailExist(true);
               setEventReducer({type:'error'});

              }
              else{
                setEmailExist(false);
                const {email} = values;
                const x = await axios.post('/auth/email-otp',{email});
                if(x){
                  if(x.status===200){
                    setEventReducer({type: 'success'});
  
                    navigation.navigate('OtpVerifySignUp',{user:values});
                  }
                }
              }
            }
            
        } catch (err:any){
          if(err){
            setEventReducer({type:'error'});
          }
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

            <TextInput placeholderTextColor={'gray'} onChangeText={handleChange('email')} value={values.email} placeholder='Email*' style={[style.inputField,{color:'gray',marginTop:height*0.04,}]} />
            {(errors.email) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>
                    {errors.email.toString()}
                  </Text></>}
            {emailExist && (<><Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>{'Email aldready Exist!'}</Text></>)}
            <TextInput secureTextEntry={true} placeholderTextColor={'gray'} onChangeText={handleChange('password')} value={values.password} placeholder='Password*' style={[style.inputField,{color:'gray',marginTop:height*0.02}]} />
            {(errors.password) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>
                    {errors.password.toString()}
                  </Text></>}
            <View style={{marginTop:height*0.02,flexDirection:'row',alignSelf:'center'}}>

                <TextInput placeholderTextColor={'gray'} editable={false} placeholder='+91' style={[{ color:'gray',borderColor:'black',borderWidth:1,width:width*0.2,alignSelf:'center',paddingLeft:width*0.04,borderRightWidth:0}]} />
                <TextInput placeholderTextColor={'gray'} keyboardType='number-pad' onChangeText={handleChange('phone')} value={values.phone} placeholder='Phone Number*' style={[{ color:'gray',borderColor:'black',borderWidth:1,width:width*0.7,alignSelf:'center',paddingLeft:width*0.04}]} />
               
            </View>
            {(errors.phone) &&  <><Text style={{fontSize:height*0.015,color:'red',fontFamily:'ZohoRegular',margin:height*0.01,marginLeft:height*0.025,marginBottom:0}}>
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
                        <Text style={{textAlign:'center',color:'white',alignSelf:'center',fontFamily:'ZohoRegular',fontSize:height*0.0155}}>START YOUR FREE TRIAL</Text>
                      </>
                    }
           
            
        </TouchableOpacity>

        
        

    </>)}
    </Formik>
    </>
  )
}

export default SignUpForm;