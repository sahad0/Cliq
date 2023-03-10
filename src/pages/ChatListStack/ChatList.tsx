import { View, Text, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import ChatListHeader from '../../components/ChatList/ChatListHeader';
import ChatListBody from '../../components/ChatList/ChatListBody';

export default function ChatList():JSX.Element {

    const {height,width} = Dimensions.get('screen');



  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>

        <ChatListHeader height={height} width={width} />
        <ChatListBody height={height} width={width} />

    </SafeAreaView>
  )
}