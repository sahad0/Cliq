import { View, Text, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import ChatListHeader from '../../components/ChatList/ChatListHeader'
import ChannelListBody from '../../components/ChannelList/ChannelListBody';

export default function ChannelList():JSX.Element {

    const {width,height}  = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
    <ChatListHeader height={height} width={width} />
    <ChannelListBody height={height} width={width} />
    </SafeAreaView>
  )
}