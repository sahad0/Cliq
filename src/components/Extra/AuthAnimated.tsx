import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { FadeInDown, FadeInUp, FadeOut, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

type Props = {
    height:number,
    width:number,
    inputStr:string,
    btnStr:string,
    nvgStr:string,
    navigation:any,
    setVisible:any
}
type focusBool = true|false;

export default function AuthAnimated({height,width,inputStr,btnStr,nvgStr,navigation,setVisible}:Props):JSX.Element {

    const offset = useSharedValue(50);
    const opacityVal = useSharedValue(0);


    const [focus,setFocus] = useState<focusBool>(false);

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [{ translateY: offset.value  }],
          opacity:opacityVal.value
         
        };
      });


    // useEffect(()=>{
    //     // offset.value = withTiming(fa,{duration:1000});
    // },[]);

    // const enterIn = ()=>{
    //     offset.value = withTiming(0,{duration:500});
    //     opacityVal.value = withTiming(1,{duration:1000})
    // }
    // const enterOut = ()=>{
    //     offset.value = withTiming(-100,{duration:500});
    //     opacityVal.value = withTiming(0,{duration:1000})
    // }

    // useEffect(()=>{
    //     enterIn();
    //     return ()=> enterOut();
    // },[])
    


    return (
      <Animated.View  entering={FadeInDown.duration(300)} exiting={FadeOut.duration(100)} >
        <View style={{width:50,height:50,opacity:0}}>
        

        </View>
           <TextInput  onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={inputStr} style={{fontFamily:'ZohoRegular',width:width*0.9,alignSelf:'center',borderBottomColor:focus ? '#159AFF': 'lightgray',borderBottomWidth:1}} />
          <TouchableOpacity onPress={()=>navigation.navigate(nvgStr)} style={{paddingHorizontal:height*0.1,backgroundColor:'#159AFF',width:width*0.9,alignSelf:'center',paddingVertical:height*0.02,marginTop:height*0.1}}>
              <Text style={{color:'white',alignSelf:'center',fontFamily:'ZohoRegular'}}>{btnStr}</Text>
          </TouchableOpacity>
      </Animated.View>
    )
}