import { View, Text } from 'react-native'
import React, { FC } from 'react'
import QuickChatIcon from './QuickChatIcon'

type AppProps = {
    height: number,
    width: number,
    
}


const ChatListBody:FC<AppProps> = ({height,width}):JSX.Element => {
  return (
    <View style={{flex:1,}}>
      <Text>ChatListBody</Text>
      <QuickChatIcon height={height} width={width} />
    </View>
  )
}

export default ChatListBody