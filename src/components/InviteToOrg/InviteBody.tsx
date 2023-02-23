import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { FC, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChannelStackParams } from '../../router/navigators/CreateChannelStackNav';
import Toast from 'react-native-simple-toast';
import axios from 'axios';

type AppProps = {
    height: number,
    width: number,
}


const InviteBody:FC<AppProps> = ({height,width}):JSX.Element => {

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'InviteToOrg'>>();
    const [focused,setFocused] = useState<boolean>(false);
    const [email,setEmail] = useState<string>("");


    const validateEmail = (email:string|"") => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    const sendInvite = async():Promise<void>=>{
        try{
            if(validateEmail(email)===null)return;
            const {defaultOrg} = (await axios('/organization/default',{method:'GET',timeout:5000})).data;
            if(defaultOrg){
                const sendInvite = await axios('/organization/invite',{method:"POST",data:{organization_id:defaultOrg,invitations:[{email:email}]}});
            }
            ToastAndroid.showWithGravityAndOffset(
              'Invite Successful!',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50,
            );
            navigation.navigate('TabNavigators');
        }catch(err:any){
            console.log(err.request.responseText);
        }
    }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{alignItems:'center',flexDirection:'row',width:width*0.96,alignSelf:'center',borderColor:focused?'#5f5aad':'lightgray',elevation:1,height:height*0.075,marginTop:height*0.02,borderWidth:0.2,backgroundColor:'white',borderRadius:height*0.05}}>
            <TextInput onChangeText={(e)=>setEmail(e)} value={email} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} cursorColor={'#5f5aad'} placeholder='Enter email address to invite' placeholderTextColor='gray' style={{marginLeft:width*0.085,width:width*0.6,color:'black',margin:height*0.01,fontSize:height*0.018}} />
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white',height:height*0.05,flex:1,margin:height*0.01,borderRadius:height*0.008,marginRight:height*0.02}}>
               <TouchableOpacity onPress={sendInvite} style={{alignSelf:'center'}}>
                    <Text style={{color:'#5f5aad',fontSize:height*0.018}}>INVITE</Text>
                </TouchableOpacity>
            </View>
      </View>
      <View>
        <Text style={{color:'#5f5aad',margin:height*0.03,fontFamily:"ZohoRegular",fontSize:height*0.02}}>Suggestions</Text>
        <Text style={{color:'gray',margin:height*0.01,marginLeft:height*0.03,fontFamily:"ZohoRegular",fontSize:height*0.015}}>Oops!No Suggestions Currently Available!</Text>
      </View>
    </View>
  )
}

export default InviteBody