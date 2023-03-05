import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import Antd from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { ChannelStackParams } from '../../../router/navigators/CreateChannelStackNav'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
type AppProps ={
    height:number,
    width:number,
}


const ChatHeader:FC<AppProps> = ({height,width}):JSX.Element => {

    const navigation = useNavigation<NativeStackNavigationProp<ChannelStackParams,'Chat'>>();
    const {params:{id,name}} = useRoute<RouteProp<ChannelStackParams,'Chat'>>();


  return (
    <View style={{height:height*0.09,backgroundColor:'white',borderBottomColor:'gray',elevation:5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Antd name='arrowleft' color={'black'} size={height*0.03}  style={{marginLeft:width*0.06}}/>
            </TouchableOpacity>
            <View style={{marginLeft:height*0.03}}>
                <Text style={{fontSize:height*0.02,color:'black'}}>{name}</Text>
                <Text style={{fontSize:height*0.018,color:'gray'}}>{"Hello There"}</Text>

            </View>
        </View> 
        <View style={{flexDirection:'row'}}>
            <Antd name='search1' color={'black'} size={height*0.03}  style={{marginLeft:width*0.06}}/>
            <Entypo name='dots-three-vertical' color={'black'} size={height*0.025}  style={{marginLeft:width*0.06,marginRight:width*0.03}}/>

        </View>       
    </View>
  )
}

export default ChatHeader;