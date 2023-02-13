import { View, Text, StatusBar } from 'react-native'
import React, { FC } from 'react'
import Antd from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ChannelStackParams } from '../../router/navigators/CreateChannelStackNav'

type AppProps = {
    height: number,
    width: number,
}


const QuickChatHeader:FC<AppProps> = ({height,width}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'QuickChat'>>();

  return (
    <View style={{height:height*0.08,backgroundColor:'#5f5aad',width:width,alignItems:'center',flexDirection:'row'}}>
        <StatusBar  barStyle={'default'} backgroundColor={'#5f5aad'} />
        <TouchableOpacity onPress={()=>navigation.navigate('TabNavigators')}>
            <Antd name='arrowleft' color={'white'} size={25}  style={{marginLeft:width*0.06}}/>
        </TouchableOpacity>
        
        <Text style={{color:'white',fontSize:height*0.023,marginLeft:width*0.07}}>Quick Chat</Text>
        <Antd name='search1' color={'white'} size={25}  style={{marginLeft:width*0.48}}/>
        
    </View>
  )
}

export default QuickChatHeader;

