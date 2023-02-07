import { View, Text, SafeAreaView, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import ChatListHeader from '../../components/ChatList/ChatListHeader'
import ChatListBody from '../../components/ChatList/ChatListBody';
import DrawerNavigators from '../../router/navigators/DrawerNavigators';

export default function ChatList():JSX.Element {


    const{height,width} = Dimensions.get('screen');


  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <ChatListHeader height={height} width={width} />
        <ChatListBody height={height} width={width} />
    </SafeAreaView>
  )
}