import { View, Text, TouchableOpacity, Keyboard } from 'react-native'
import React, { FC } from 'react'



type AppProps = {
    height: number,
    width: number,
}



const ChatBody:FC<AppProps> = ():JSX.Element => {
  return (
    <TouchableOpacity onPress={()=>Keyboard.dismiss()} style={{flex:1,}}>
      <Text>ChatBody</Text>
    </TouchableOpacity>
  )
}

export default ChatBody