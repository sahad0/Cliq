import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { RenderType } from './CreateChannelDetailsBody'
import { Pressable } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';

const RenderItems1:FC<RenderType> = React.memo(({item,height,width}):JSX.Element=>(
    <>
        <Pressable android_ripple={{color:'#EBCF0',borderless:false,radius:height*0.3,foreground:true}} style={{height:height*0.09,justifyContent:'center',width:width,borderColor:'lightgray',backgroundColor:'white'}}>
            <View style={{flexDirection:'row',margin:height*0.015,}}>
                <Image source={item.imgUrl} style={{borderRadius:height,height:height*0.06,width:height*0.06}} resizeMode='contain' />
                <Text style={{fontSize:height*0.018,color:'black',marginLeft:height*0.012,width:width*0.5,alignSelf:'center'}} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
            </View>
           
      </Pressable>
    </>
))

export default RenderItems1