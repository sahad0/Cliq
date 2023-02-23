import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import MatIcons from  'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChannelStackParams } from '../../router/navigators/CreateChannelStackNav';

type AppProps  ={
    height:number,
    width:number,
}

const QuickChatIcon:FC<AppProps> = ({height,width}) => {


  const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'ChatList'>>();

  return (
    <View style={{position:'absolute',bottom:0,right:0,margin:height*0.03,marginBottom:height*0.05,height:height*0.075,borderColor:'white',elevation:3,width:height*0.075,borderRadius:height,backgroundColor:'#5f5aad',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('QuickChat')}>
        <MatIcons name='square-edit-outline' size={height*0.035} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

export default QuickChatIcon; 