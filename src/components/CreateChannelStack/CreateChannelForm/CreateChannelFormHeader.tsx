import { View, Text, StatusBar } from 'react-native'
import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Antd from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ChannelStackParams } from '../../../router/navigators/CreateChannelStackNav'
type AppProps = {
    height: number,
    width: number
}


const CreateChannelFormHeader:FC<AppProps> = ({height,width}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams>>();

  return (
    <View style={{position:'absolute',width:width,height:height*0.13,backgroundColor:'#5f5aad',flexDirection:'row',alignItems:'center'}}>
       <StatusBar  barStyle={'default'} backgroundColor={'#5f5aad'} />
        <TouchableOpacity onPress={()=>navigation.navigate('CreateChannelMenu')}>
            <Antd name='arrowleft' color={'white'} size={25}  style={{marginLeft:width*0.06}}/>
        </TouchableOpacity>
        
        <Text style={{color:'white',fontSize:height*0.023,marginLeft:width*0.07}}>Create a channel</Text>
    </View>
  )
}

export default CreateChannelFormHeader;