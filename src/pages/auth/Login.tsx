import { View, Text, TouchableOpacity, Keyboard, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { LoginHeader } from '../../components/Login/LoginHeader';
import { LoginForm } from '../../components/Login/LoginForm';


interface User  {
  email:string,
  password:string,
}

export const Login = ({navigation}:any):JSX.Element=> {

    const {height,width} = Dimensions.get('screen');

    const text1 = 'Sign in';
    const text2 = 'to access Cliq'


    const [user,setUser] = useState<User>({email:'',password:''});


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
        <LoginHeader height={height} width={width} text1={text1} text2={text2}/>
        <LoginForm height={height} width={width} navigation={navigation} setUser={setUser} user={user} />
    </TouchableOpacity>
</View>
  )
}