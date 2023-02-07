import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import Feather from  'react-native-vector-icons/Feather';

type AppProps  ={
    height:number,
    width:number,
}

const CreateChannelIcon:FC<AppProps> = ({height,width}) => {
  return (
    <View style={{position:'absolute',bottom:0,right:0,margin:height*0.03,marginBottom:height*0.05,height:height*0.08,borderColor:'white',elevation:3,width:height*0.08,borderRadius:height,backgroundColor:'#5f5aad',alignItems:'center',justifyContent:'center'}}>
      <Pressable>
        <Feather name='hash' size={24} color={'white'} />
      </Pressable>
    </View>
  )
}

export default CreateChannelIcon; 