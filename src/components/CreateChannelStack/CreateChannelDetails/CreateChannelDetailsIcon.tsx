import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import Feather from  'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChannelStackParams } from '../../../router/navigators/CreateChannelStackNav';

type AppProps  ={
    height:number,
    width:number,
}

const CreateChannelDetailIcon:FC<AppProps> = ({height,width}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'ChannelDetails'>>();

  return (
    <View style={{position:'absolute',bottom:0,right:0,margin:height*0.03,marginBottom:height*0.05,height:height*0.075,borderColor:'white',elevation:3,width:height*0.075,borderRadius:height,backgroundColor:'#5f5aad',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity  onPress={()=>navigation.navigate('CreateChannelMenu')}>
        <Feather name='hash' size={24} color={'white'} style={{margin:width*0.025}} />
      </TouchableOpacity>
    </View>
  )
}

export default CreateChannelDetailIcon; 