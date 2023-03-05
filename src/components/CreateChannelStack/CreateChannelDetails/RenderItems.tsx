import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { RenderType } from './CreateChannelDetailsBody'
import { Pressable } from 'react-native'
import Ion from 'react-native-vector-icons/Ionicons';

const RenderItems:FC<RenderType> = React.memo(({item,height,width}):JSX.Element=>(
    <>
        <Pressable android_ripple={{color:'#EBCF0',borderless:false,radius:height*0.3,foreground:true}} style={{height:height*0.18,width:width*0.8,borderColor:'lightgray',elevation:2,margin:height*0.03,marginRight:height*0.001,borderRadius:height*0.01,backgroundColor:'white'}}>
            <View style={{flexDirection:'row',margin:height*0.015,}}>
                <Image source={item.imgUrl} style={{borderRadius:height,height:height*0.075,width:height*0.075}} resizeMode='contain' />
                <Text style={{fontSize:height*0.018,fontWeight:'500',color:'black',marginLeft:height*0.012,width:width*0.5,}} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <Ion name='person' size={height*0.017} />
                    <Text style={{fontSize:height*0.013,marginRight:height*0.015,marginLeft:height*0.006}}>{item.memberCount}</Text>
                </View>
                <Pressable android_ripple={{color:'#EBCF0',borderless:false,radius:height*0.3,foreground:true,}} style={{borderRadius:height*0.005,borderColor:'lightgray',borderWidth:0.5,elevation:1,backgroundColor:'white',margin:height*0.01}}>
                    <Text style={{color:'#5f5aad',margin:height*0.012,marginLeft:height*0.02,marginRight:height*0.02,}}>Join</Text>
                </Pressable>
            </View>
      </Pressable>
    </>
))

export default RenderItems