import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ant from 'react-native-vector-icons/AntDesign'

type AppProps = {
    height: number,
    width: number,
}






const ChatInput:FC<AppProps> = ({height,width}):JSX.Element => {
  return (
    <View style={{height:height*0.073,borderColor:'lightgray',borderWidth:1,borderRadius:height,margin:height*0.015,flexDirection:'row',alignItems:'center'}}>
        <Ant name='pluscircle' size={height*0.045}  style={{marginLeft:height*0.01}} color={'#C5C6D0'} />
        <TextInput style={{marginLeft:height*0.01,fontSize:height*0.02,width:width*0.6}}  />
    </View>
  )
}

export default ChatInput