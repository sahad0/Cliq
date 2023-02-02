import { View, Text } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../Hooks/hooks';
import axios from 'axios';

type AppProps = {
    height: number,
    width:number,
}


const CreateOrgBody:FC<AppProps> = ({height,width}):JSX.Element => {

    const {token} = useAppSelector((state)=>state.cart.value);
    const [name,setName] = useState('');

    useEffect(()=>{
        userProfile();
    },[]);

  const userProfile = async():Promise<void> => {
    try {
      let reqInstance = axios.create({headers: {  Authorization : `Bearer ${token}`}});
       const user = await reqInstance.get('/profile');
       if(user){
            const {first_name} = user.data.profile;
            setName(first_name);
       }
      
    } catch (error) {
        setName('');
    }

  }
  return (
    <View style={{height:height*0.5,backgroundColor:'rgba(255,255,255,0.5)'}}>
        <View style={{marginTop:height*0.3}}>
      <Text style={{color:'black',fontFamily:'ZohoRegular',fontSize:height*0.03,marginLeft:width*0.03,marginBottom:0}}>Hey</Text>

      <Text style={{color:'black',fontFamily:'ZohoRegular',fontSize:height*0.04,marginTop:height*0.015,marginLeft:width*0.03,marginBottom:0}}>{name}</Text>

      <View style={{flexDirection:'row',marginLeft:width*0.03,marginBottom:0}}>
        <Text style={{color:'black',fontFamily:'ZohoRegular',fontSize:height*0.02}}>Let's get you started !</Text>
        <View style={{height:1,marginLeft:width*0.1,backgroundColor:'lightgray',width:width,alignSelf:'center'}} />
      </View>
      </View>
    </View>
  )
}

export default CreateOrgBody;